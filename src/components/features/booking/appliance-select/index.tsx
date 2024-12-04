import React from 'react';
import * as Yup from 'yup';
import { FormInput } from '@components/shared';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useContactUserMutation } from '@api/user-api';
import { toast } from 'react-toastify';
import SectionLayout from '@components/layout/section-layout';


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

    const [terms, acceptTerms] = React.useState<boolean>(false);
    const [emailSent, showEmailSent] = React.useState<boolean>(false);

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


    return (
        <SectionLayout title="Select appliance type" noYPadding>
            <div className="flex w-full justify-center space-y-10">
                <form className="space-y-3 md:space-y-5 text-center select-none min-w-[30%] max-w-[40%]" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col md:flex-row gap-3 md:gap-5">
                        {/* <FormInput
                            type='text'
                            name='name'
                            placeholder="Enter your zip code"
                            register={register}
                            errors={errors}
                        /> */}
                        <div>Select Appliance</div>
                    </div>
                    <button
                        // type="submit"
                        onClick={() => setStep(2)}
                        className="w-full h-[45px] font-regmed bg-primary text-white py-2 rounded-lg ring-2 ring-primary hover:shadow-lg hover:shadow-neutral-300 hover:-tranneutral-y-px focus:outline-none focus:ring-2 focus:ring-primaryDark focus:shadow-none focus:bg-primaryDark transition duration-200 ease-in-out transform disabled:bg-gray-400 disabled:ring-gray-400 disabled:cursor-not-allowed"
                    >
                        Continue
                    </button>
                    <p className='text-gray-400'>Questions ? Call (888) 998-6263</p>
                </form>
            </div>
        </SectionLayout>

    )
}