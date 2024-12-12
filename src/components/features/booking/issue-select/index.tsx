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
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';
import { useGetBrandsQuery, useGetServicesQuery } from '@api/booking-api';
import { setSelectedAppliances } from '@slices/booking-slice';
import { IAppliance } from '@api/types/booking-types';




const BUILTIN_TYPES = [
    { id: 1, label: 'Yes' },
    { id: 2, label: 'No' },
]

const BRANDS = [
    { id: 1, label: 'Samsung' },
    { id: 2, label: 'LG' },
    { id: 3, label: 'Kenmore' },
    { id: 4, label: 'Viking' },
    { id: 5, label: 'Dacor' },
    { id: 6, label: 'Amana' },
    { id: 7, label: 'U-line' },
    { id: 8, label: 'Asko' },
    { id: 9, label: 'Subzero' },
    { id: 10, label: 'Maytag' },
    { id: 11, label: 'Other' },
]

const ISSUES = [
    { id: 1, label: 'Not cooling' },
    { id: 2, label: 'Leaking' },
    { id: 3, label: 'Noising' },
    { id: 4, label: 'Other' },
]


interface IBookingForm {
    name: string;
    phone: string;
    address: string;
    message?: string;
}

const validationSchema = Yup.object().shape({
    // name: Yup.string()
    //     .required('Fullname is required'),
    // phone: Yup.string()
    //     .required('Phone number is required'),
    // address: Yup.string()
    //     .required('Address is required'),
});


interface IIssueSelectProps {
    setStep: (step: number) => void,
}


export const IssueSelect: React.FC<IIssueSelectProps> = (props) => {
    let { setStep } = props;

    const dispatch = useDispatch();
    const { bookingData, brands } = useSelector((state: RootState) => state.booking);

    // RTK Query mutation hook
    const { data: brandsList, isLoading } = useGetBrandsQuery();

    const { register, handleSubmit, formState: { errors }, reset } = useForm<IBookingForm>({
        // resolver: yupResolver(validationSchema),
        mode: 'onBlur',
    });


    const onSelectBrand = (brandId: number | string, applianceIndex: number) => {
        const updatedAppliances = bookingData.appliances.map((appliance, index) => {
            if (index === applianceIndex) {
                return {
                    ...appliance,
                    brand: brandId,
                };
            }
            return appliance;
        });
        dispatch(setSelectedAppliances(updatedAppliances));
    }


    const onSelectIssue = (issueId: number | string, applianceIndex: number) => {
        const updatedAppliances = bookingData.appliances.map((appliance, index) => {
            if (index === applianceIndex) {
                return {
                    ...appliance,
                    problem: issueId,
                };
            }
            return appliance;
        });
        dispatch(setSelectedAppliances(updatedAppliances));
    }


    const isBrandSelected = (brandId: number | string, applianceIndex: number) => {
        let selectedAppliances = bookingData.appliances;
        let applianceToUpdate = selectedAppliances[applianceIndex];
        let isBrandSelected = applianceToUpdate?.brand == brandId;
        return isBrandSelected;
    }


    const isIssueSelected = (issueId: number | string, applianceIndex: number) => {
        let selectedAppliances = bookingData.appliances;
        let applianceToUpdate = selectedAppliances[applianceIndex];
        let isProblemSelected = applianceToUpdate?.problem == issueId;
        return isProblemSelected;
    }

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


    return (
        <SectionLayout noYPadding>
            <div className="flex w-full justify-center space-y-10">
                <form className="flex flex-col space-y-20 text-center items-center select-none min-w-[30%]" onSubmit={handleSubmit(onSubmit)}>
                    {
                        bookingData?.appliances?.map((appliance, i) =>
                            <div key={appliance.service_id} className='flex flex-col gap-10'>
                                <div className='space-y-6 flex flex-col items-center'>
                                    <h3 className="text-[1.7rem] leading-[2.5rem] md:text-[2rem] md:leading-[3.5rem] text-center font-semibold text-primaryDark">
                                        What’s is the brand of your <strong className='font-medium text-primary'>{appliance.type} {appliance.title}</strong> ?
                                    </h3>
                                    <div className="flex flex-col w-full max-w-[300px]">
                                        <FormInput
                                            type='text'
                                            name='name'
                                            placeholder="Search your brand"
                                            register={register}
                                            errors={errors}
                                        />
                                    </div>
                                    <div className="flex items-center justify-center flex-wrap gap-3 md:gap-5">
                                        {
                                            brands?.map((brand) =>
                                                <SelectButton
                                                    key={brand.value}
                                                    label={brand.title}
                                                    selected={isBrandSelected(brand.value, i)}
                                                    onSelect={() => onSelectBrand(brand.value, i)}
                                                />
                                            )
                                        }
                                    </div>
                                </div>

                                <div className='space-y-6'>
                                    <h4 className="text-[1.7rem] leading-[2.5rem] md:text-[2rem] md:leading-[3.5rem] text-center font-semibold text-primaryDark">
                                        Select the issue
                                    </h4>
                                    <div className="flex items-center justify-center flex-wrap gap-3 md:gap-5">
                                        {
                                            ISSUES?.map(issue =>
                                                <SelectButton
                                                    key={issue.id}
                                                    label={issue.label}
                                                    selected={isIssueSelected(issue.id, i)}
                                                    onSelect={() => onSelectIssue(issue.id, i)}
                                                />
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    <div className='space-y-6'>
                        <h5 className="text-[1.7rem] leading-[2.5rem] md:text-[2rem] md:leading-[3.5rem] text-center font-semibold text-primaryDark">
                            Please, describe the issue in detail
                        </h5>
                        <div className="flex items-center justify-center flex-wrap gap-3 md:gap-5">
                            <FormInput
                                isTextarea
                                type='text'
                                name='fullname'
                                placeholder="Describe the issue (optional)"
                                register={register}
                                errors={errors}
                            />
                        </div>
                    </div>

                    <SectionFooter onGoBack={() => setStep(1)} onClick={() => setStep(3)} />
                </form>
            </div>
        </SectionLayout>

    )
}