import React from 'react';
import * as Yup from 'yup';
import SectionLayout from '@components/layout/section-layout';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { SelectButton } from '@components/shared/select-button';
import { SectionFooter } from '../section-footer';
import { useGetServicesQuery } from '@api/booking-api';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';
import { useDispatch } from 'react-redux';
import { setSelectedAppliances } from '@slices/booking-slice';


interface IBookingForm {
    name: string;
    phone: string;
    address: string;
    message?: string;
}

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Fullname is required'),
    phone: Yup.string()
        .required('Phone number is required'),
    address: Yup.string()
        .required('Address is required'),
});


interface IApplianceSelectProps {
    setStep: (step: number) => void,
}


export const ApplianceSelect: React.FC<IApplianceSelectProps> = (props) => {
    let { setStep } = props;

    const dispatch = useDispatch();
    const [selectedType, setSelectedType] = React.useState<number>(0);
    // const [selectedAppliances, setSelectedAppliances] = React.useState<number[]>([]);
    const { bookingData, services } = useSelector((state: RootState) => state.booking);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<IBookingForm>({
        resolver: yupResolver(validationSchema),
        mode: 'onBlur',
    });

    // RTK Query mutation hook
    const { data: servicesList } = useGetServicesQuery({ zip: bookingData?.zip });

    const onSubmit: SubmitHandler<IBookingForm> = async (data) => {
        // try {
        //     await sendRequest(data).unwrap();
        //     showEmailSent(true);
        //     toast.success("Thank you for contacting us! We have received your message and will get back to you shortly.");
        //     reset();
        // } catch (err: any) {
        //     console.error('Unknown error:', err);
        //     toast.error(err.data?.message || 'An unexpected error occurred');
        // }
    };


    const onSelectAppliance = (applianceId: number | string, type: string) => {
        let selectedAppliances = bookingData.appliances;
        let isApplianceSelected = isSelected(applianceId, type);

        if (isApplianceSelected) {
            console.log('$$$$', 'selected')
            let newApps = selectedAppliances.filter(item => item.service_id !== applianceId);
            dispatch(setSelectedAppliances(newApps));
        } else {
            console.log('NOT')
            if (selectedAppliances?.length > 2) {
                toast.warning('Appliance select limit exceeded!');
                return;
            }
            dispatch(setSelectedAppliances([...selectedAppliances, { service_id: applianceId, type: type }]));
        }
    }

    const isSelected = (applianceId: number | string, type: string) => {
        let selectedAppliances = bookingData.appliances;
        let isApplianceSelected = selectedAppliances.some(item => (item.service_id == applianceId) && (item.type == type));
        return isApplianceSelected;
    }


    return (
        <SectionLayout noYPadding>
            <div className="flex w-full justify-center space-y-10">
                <form className="flex flex-col space-y-20 text-center items-center select-none min-w-[30%]" onSubmit={handleSubmit(onSubmit)}>
                    {
                        !!services?.residential?.length &&
                        <div className='space-y-6'>
                            <h3 className="text-[1.7rem] leading-[2.5rem] md:text-[2rem] md:leading-[3.5rem] text-center font-semibold text-primaryDark">
                                Select <span className='text-primary'>residential</span> appliance to repair
                            </h3>
                            <div className="flex items-center justify-center flex-wrap gap-3 md:gap-5">
                                {
                                    services?.residential?.map(appliance =>
                                        <SelectButton
                                            label={appliance.text}
                                            selected={isSelected(appliance.id, 'residential')}
                                            onSelect={() => onSelectAppliance(appliance.id, 'residential')}
                                        />
                                    )
                                }
                            </div>
                        </div>
                    }
                    {
                        !!services?.commercial?.length &&
                        <div className='space-y-6'>
                            <h3 className="text-[1.7rem] leading-[2.5rem] md:text-[2rem] md:leading-[3.5rem] text-center font-semibold text-primaryDark">
                                Select <span className='text-primary'>commercial</span> appliance to repair
                            </h3>
                            <div className="flex items-center justify-center flex-wrap gap-3 md:gap-5">
                                {
                                    services?.commercial?.map(appliance =>
                                        <SelectButton
                                            label={appliance.text}
                                            selected={isSelected(appliance.id, 'commercial')}
                                            onSelect={() => onSelectAppliance(appliance.id, 'commercial')}
                                        />
                                    )
                                }
                            </div>
                        </div>
                    }

                    <SectionFooter onClick={() => setStep(2)} />
                </form>
            </div>
        </SectionLayout >
    )
}