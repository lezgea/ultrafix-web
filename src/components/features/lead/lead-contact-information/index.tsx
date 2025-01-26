import React, { Suspense } from 'react';
import SectionLayout from '@components/layout/section-layout';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';
import AddressAutocomplete from '@components/shared/address-autocomplete';
import { setLeadData } from '@slices/booking-slice';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { FormInput } from '@components/shared';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { ICompleteLeadRequest } from '@api/types/booking-types';
import { LeadSectionFooter } from '../lead-section-footer';
import { useSearchParams } from 'next/navigation';


interface IContactForm extends ICompleteLeadRequest {
    firstname: string;
    lastname: string;
    customer_email: string;
    customer_phone: string;
    address: string;
}

const validationSchema = Yup.object().shape({
    firstname: Yup.string()
        .required('First name is required'),
    lastname: Yup.string()
        .required('Last name is required'),
    customer_email: Yup.string()
        .required('E-mail address is required'),
    customer_phone: Yup.string()
        .required('Phone number is required'),
    address: Yup.string()
        .required('Address is required'),
});


interface IContactInformationProps {
    showModal: () => any,
}


const LeadContactInformationContent: React.FC<IContactInformationProps> = (props) => {
    let { showModal } = props;

    const params = useSearchParams();
    const dispatch = useDispatch();

    const { leadData } = useSelector((state: RootState) => state.booking);

    let zip = params.get('zip');
    let total_fee = params.get('total_fee');
    let lead_id = params.get('lead_id');


    const { register, handleSubmit, formState: { errors, isSubmitted }, reset, setValue } = useForm<IContactForm>({
        resolver: yupResolver(validationSchema),
        mode: 'onBlur',
    });

    const onChangeAddress = (address: string | undefined, all_data: any) => {
        setValue('address', address || '');
        setValue('latitude', all_data.coordinates.lat);
        setValue('longitude', all_data.coordinates.lng);
        setValue('city', all_data.city);
        setValue('state', all_data.state);
        setValue('zip', all_data.zip);
    }

    const onSubmit: SubmitHandler<IContactForm> = async (data) => {
        try {
            dispatch(setLeadData({ lead_id: lead_id, ...data }));
            showModal();
        } catch (err: any) {
            console.error('Unknown error:', err);
            toast.error(err.data?.message || 'An unexpected error occurred');
        }
    };


    React.useEffect(() => {
        if (!!zip)
            setValue('zip', zip);
    }, [zip])


    return (
        <SectionLayout noYPadding>
            <div className="flex w-full justify-center space-y-20">
                <form className="flex flex-col space-y-10 text-center items-center select-none md:min-w-[30%]" onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col items-center space-y-6'>
                        <h2 className="text-[1.7rem] leading-[2.5rem] md:text-[2rem] md:leading-[3.5rem] text-center font-semibold text-primaryDark">
                            Service address
                        </h2>
                        <div className="flex items-center justify-center flex-wrap gap-3 w-full md:gap-4 md:max-w-[60%]">
                            <div className='w-full'>
                                <AddressAutocomplete
                                    name='address'
                                    defaultValue={''}
                                    onChange={onChangeAddress}
                                    register={register}
                                    errors={errors}
                                />
                            </div>
                            <div className='flex gap-3 md:gap-4 w-full'>
                                <FormInput
                                    type='text'
                                    name='unit'
                                    placeholder="Unit or Apt"
                                    register={register}
                                    errors={errors}
                                />
                                <FormInput
                                    type='text'
                                    name='city'
                                    placeholder="City"
                                    register={register}
                                    errors={errors}
                                />
                            </div>
                            <div className='flex gap-3 md:gap-4 w-full'>
                                <FormInput
                                    type='text'
                                    name='state'
                                    placeholder="State"
                                    register={register}
                                    errors={errors}
                                />
                                <FormInput
                                    type='text'
                                    name='zip'
                                    placeholder="Zip code"
                                    register={register}
                                    errors={errors}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='flex w-full flex-col items-center space-y-6'>
                        <h3 className="text-[1.7rem] leading-[2.5rem] md:text-[2rem] md:leading-[3.5rem] text-center font-semibold text-primaryDark">
                            Contact Information
                        </h3>
                        <div className="flex items-center justify-center flex-wrap gap-3 w-full md:gap-4 md:max-w-[60%]">
                            <div className='flex w-full gap-3 md:gap-4'>
                                <FormInput
                                    type='text'
                                    name='firstname'
                                    placeholder="First name"
                                    register={register}
                                    errors={errors}
                                />
                                <FormInput
                                    type='text'
                                    name='lastname'
                                    placeholder="Last name"
                                    register={register}
                                    errors={errors}
                                />
                            </div>
                            <div className='flex w-full gap-3 md:gap-4'>
                                <FormInput
                                    type='text'
                                    name='customer_email'
                                    placeholder="E-mail"
                                    register={register}
                                    errors={errors}
                                />
                                <FormInput
                                    type='text'
                                    name='customer_phone'
                                    placeholder="Phone"
                                    register={register}
                                    errors={errors}
                                />
                            </div>
                        </div>
                    </div>

                    <LeadSectionFooter
                        showFee
                        totalFee={total_fee || ''}
                        onGoBack={() => { }}
                        onClick={handleSubmit(onSubmit)}
                    />
                </form>
            </div>
        </SectionLayout >
    )
}


const LeadContactInformation: React.FC<IContactInformationProps> = (props) => {
    return (
        <Suspense>
            <LeadContactInformationContent {...props} />
        </Suspense>
    )
}

export default LeadContactInformation;