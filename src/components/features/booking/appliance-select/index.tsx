import React from 'react';
import * as Yup from 'yup';
import { FormInput } from '@components/shared';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useContactUserMutation } from '@api/user-api';
import { toast } from 'react-toastify';
import SectionLayout from '@components/layout/section-layout';
import { SelectButton } from '@components/shared/select-button';
import { SectionFooter } from '../section-footer';




const APPLIANCES = [
    { id: 1, label: 'Refrigerator', },
    { id: 2, label: 'Ice Machine' },
    { id: 3, label: 'Freezer' },
    { id: 4, label: 'Wine Cooler' },
    { id: 5, label: 'Oven' },
    { id: 6, label: 'Range' },
    { id: 7, label: 'Stove' },
    { id: 8, label: 'Cooktop' },
    { id: 9, label: 'Microwave' },
    { id: 10, label: 'Vent Hood' },
    { id: 11, label: 'Dishwasher' },
    { id: 12, label: 'Washer' },
    { id: 13, label: 'Dryer' },
    { id: 14, label: 'Garbage Disposal' },
]

const TYPES = [
    { id: 1, label: 'Residential' },
    { id: 2, label: 'Commercial' },
]


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

    const [selectedType, setSelectedType] = React.useState<number>(0);
    const [selectedAppliances, setSelectedAppliances] = React.useState<number[]>([]);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<IBookingForm>({
        resolver: yupResolver(validationSchema),
        mode: 'onBlur',
    });

    // RTK Query mutation hook
    // const [sendRequest, { isLoading, error }] = useContactUserMutation();

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

    const onSelectAppliance = (applianceId: number) => {
        if (selectedAppliances.includes(applianceId)) {
            let apps = selectedAppliances;
            let newApps = apps.filter(item => item !== applianceId);
            setSelectedAppliances(newApps);
        } else {
            if (selectedAppliances?.length > 2) {
                toast.warning('Appliance select limit exceeded!');
                return;
            }
            setSelectedAppliances([...selectedAppliances, applianceId])
        }
    }


    const isSelected = (applianceId: number) => {
        return selectedAppliances.includes(applianceId)
    }


    return (
        <SectionLayout noYPadding>
            <div className="flex w-full justify-center space-y-10">
                <form className="flex flex-col space-y-20 text-center items-center select-none min-w-[30%]" onSubmit={handleSubmit(onSubmit)}>
                    <div className='space-y-6'>
                        <h3 className="text-[1.7rem] leading-[2.5rem] md:text-[2rem] md:leading-[3.5rem] text-center font-semibold text-primaryDark">
                            Select an appliance to repair
                        </h3>

                        <div className="flex items-center justify-center flex-wrap gap-3 md:gap-5">
                            {
                                APPLIANCES?.map(appliance =>
                                    <SelectButton
                                        label={appliance.label}
                                        selected={isSelected(appliance.id)}
                                        onSelect={() => onSelectAppliance(appliance?.id)}
                                    />

                                )
                            }
                        </div>
                    </div>

                    {
                        !!selectedAppliances?.length && selectedAppliances.map(appliance =>
                            appliance < 4 &&
                            <div key={appliance} className='space-y-6'>
                                <h2 className="text-[1.7rem] leading-[2.5rem] md:text-[2rem] md:leading-[3.5rem] text-center font-semibold text-primaryDark">
                                    Select {APPLIANCES[appliance - 1]?.label} type
                                </h2>
                                <div className="flex items-center justify-center flex-wrap gap-3 md:gap-5">
                                    {
                                        TYPES.map(type =>
                                            <SelectButton
                                                label={type.label}
                                                selected={type?.id == selectedType}
                                                onSelect={() => setSelectedType(type.id)}
                                            />

                                        )
                                    }
                                </div>
                            </div>
                        )
                    }

                    <div className='flex flex-col items-center gap-4'>
                        <button
                            // type="submit"
                            onClick={() => setStep(2)}
                            className="w-full max-w-[300px] h-[45px] font-regmed bg-primary text-white py-2 rounded-lg ring-2 ring-primary hover:shadow-lg hover:shadow-neutral-300 hover:-tranneutral-y-px focus:outline-none focus:ring-2 focus:ring-primaryDark focus:shadow-none focus:bg-primaryDark transition duration-200 ease-in-out transform disabled:bg-gray-400 disabled:ring-gray-400 disabled:cursor-not-allowed"
                        >
                            Continue
                        </button>
                        <p className='text-gray-400'>Questions ? Call (888) 998-6263</p>
                    </div>

                    <SectionFooter />
                </form>
            </div >

            
        </SectionLayout >

    )
}