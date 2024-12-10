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
        .required('Zip code is required'),
    phone: Yup.string()
        .required('Phone number is required'),
    address: Yup.string()
        .required('Address is required'),
});


interface IFindTechnicianProps {
    setStep: (step: number) => void,
}


export const FindTechnician: React.FC<IFindTechnicianProps> = (props) => {
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
        <SectionLayout noYPadding>
            {/* <Stepper /> */}
            <div className="flex w-full justify-center space-y-10">
                <form className="flex flex-col items-center space-y-6 select-none min-w-[30%] text-center" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-[1.7rem] leading-[2.5rem] md:text-[2rem] md:leading-[3.5rem] text-center font-semibold text-primaryDark">
                        Find an UltraFix techinician in your area
                    </h2>
                    <div className="flex flex-col w-full max-w-[300px]">
                        <FormInput
                            type='text'
                            name='name'
                            placeholder="Enter your zip code"
                            register={register}
                            errors={errors}
                        />
                    </div>
                    <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="w-full h-[45px] max-w-[300px] font-regmed bg-primary text-white py-2 rounded-lg ring-2 ring-primary hover:shadow-lg hover:shadow-neutral-300 hover:-tranneutral-y-px focus:outline-none focus:ring-2 focus:ring-primaryDark focus:shadow-none focus:bg-primaryDark transition duration-200 ease-in-out transform disabled:bg-gray-400 disabled:ring-gray-400 disabled:cursor-not-allowed"
                    >
                        Continue
                    </button>
                    <p className='text-gray-400'>Questions ? Call (888) 998-6263</p>
                </form>
            </div>
        </SectionLayout>

    )
}