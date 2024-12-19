import React from 'react';
import * as Yup from 'yup';
import { FormInput } from '@components/shared';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import SectionLayout from '@components/layout/section-layout';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';
import { SectionFooter } from '../section-footer';


interface IBookingForm {
    name: string;
    phone: string;
    address: string;
    city: string,
    state: string,
    zip: string | number,
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


interface IContactInformationProps {
    setStep: (step: number) => void,
    showModal: () => void,
}


export const ContactInformation: React.FC<IContactInformationProps> = (props) => {
    let { setStep, showModal } = props;

    const { bookingData, serviceData } = useSelector((state: RootState) => state.booking);

    const [priceAcknowledge, setPriceAcknowledge] = React.useState<boolean>(false);

    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<IBookingForm>({
        // resolver: yupResolver(validationSchema),
        mode: 'onBlur',
    });

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

    React.useEffect(() => {
        setValue('zip', bookingData?.zip)
    }, [])


    return (
        <SectionLayout noYPadding>
            <div className="flex w-full justify-center space-y-20">
                <form className="flex flex-col space-y-10 text-center items-center select-none min-w-[30%]" onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col items-center space-y-6'>
                        <h2 className="text-[1.7rem] leading-[2.5rem] md:text-[2rem] md:leading-[3.5rem] text-center font-semibold text-primaryDark">
                            Service address
                        </h2>
                        <div className="flex items-center justify-center flex-wrap gap-3 md:gap-4 max-w-[60%]">
                            <div className='flex w-full gap-4'>
                                <div className='w-full'>
                                    <FormInput
                                        type='text'
                                        name='address'
                                        placeholder="Address"
                                        register={register}
                                        errors={errors}
                                    />
                                </div>
                                <div className='max-w-40'>
                                    <FormInput
                                        type='text'
                                        name='unit'
                                        placeholder="Unit or Apt"
                                        register={register}
                                        errors={errors}
                                    />
                                </div>
                            </div>
                            <div className='flex w-full gap-4'>
                                <FormInput
                                    type='text'
                                    name='city'
                                    placeholder="City"
                                    register={register}
                                    errors={errors}
                                />
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
                            <FormInput
                                type='text'
                                name='address'
                                placeholder="Address line 2 (optional)"
                                register={register}
                                errors={errors}
                            />
                        </div>
                    </div>

                    <div className='flex flex-col items-center space-y-6'>
                        <h3 className="text-[1.7rem] leading-[2.5rem] md:text-[2rem] md:leading-[3.5rem] text-center font-semibold text-primaryDark">
                            Contact Information
                        </h3>
                        <div className="flex items-center justify-center flex-wrap gap-3 md:gap-4 max-w-[60%]">
                            <div className='flex w-full gap-4'>
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
                            <div className='flex w-full gap-4'>
                                <FormInput
                                    type='text'
                                    name='email'
                                    placeholder="E-mail"
                                    register={register}
                                    errors={errors}
                                />
                            </div>
                            <div className='flex w-full gap-4'>
                                <div className='w-40'>
                                    <FormInput
                                        type='text'
                                        name='code'
                                        placeholder="+1"
                                        register={register}
                                        errors={errors}
                                    />
                                </div>
                                <FormInput
                                    type='text'
                                    name='phone'
                                    placeholder="Phone"
                                    register={register}
                                    errors={errors}
                                />
                            </div>
                        </div>
                    </div>

                    <SectionFooter showFee onGoBack={() => setStep(2)} onClick={showModal} />
                </form>
            </div>
        </SectionLayout>

    )
}