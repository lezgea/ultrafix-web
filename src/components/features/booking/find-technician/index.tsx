import React from 'react';
import * as Yup from 'yup';
import SectionLayout from '@components/layout/section-layout';
import { FormInput } from '@components/shared';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useCheckZipMutation } from '@api/booking-api';
import AddressAutocomplete from '@components/shared/address-autocomplete';
import Link from 'next/link';


interface IBookingForm {
    zip: string;
}

const validationSchema = Yup.object().shape({
    // name: Yup.string()
    //     .required('Zip code is required'),
    // phone: Yup.string()
    //     .required('Phone number is required'),
    // address: Yup.string()
    //     .required('Address is required'),
});


interface IFindTechnicianProps {
    setStep: (step: number) => void,
}


export const FindTechnician: React.FC<IFindTechnicianProps> = (props) => {
    let { setStep } = props;

    const [message, setMessage] = React.useState<string>();

    const { register, handleSubmit, formState: { errors }, reset } = useForm<IBookingForm>({
        // resolver: yupResolver(validationSchema),
        mode: 'onBlur',
    });

    // RTK Query mutation hook
    const [checkZip, { isLoading, error }] = useCheckZipMutation();


    const onSubmit: SubmitHandler<IBookingForm> = async (data) => {
        try {
            let response = await checkZip(data).unwrap();
            setStep(1);
        } catch (err: any) {
            console.error('Unknown error:', err);
            toast.error(err.data?.message || 'Unable to find a technician in your area');
            setMessage(err.data?.message || 'Sorry, we are not serving in your area')
        }
    };


    return (
        <SectionLayout noYPadding>
            {/* <Stepper /> */}
            <div className="flex flex-col w-full items-center justify-center space-y-10">
                <form className="flex flex-col items-center space-y-6 select-none min-w-[30%] text-center" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-[1.7rem] leading-[2.5rem] md:text-[2rem] md:leading-[3.5rem] text-center font-semibold text-primaryDark">
                        Find an UltraFix technician in your area
                    </h2>
                    <div className="flex flex-col w-full max-w-[300px]">
                        <FormInput
                            type='text'
                            name='zip'
                            placeholder="Enter your zip code"
                            register={register}
                            errors={errors}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full h-[50px] max-w-[300px] font-regmed bg-[#0551A8] hover:bg-primaryDark text-white py-2 rounded-lg hover:shadow-lg hover:shadow-neutral-300 hover:-tranneutral-y-px focus:outline-none focus:ring-2 focus:ring-primaryDark focus:shadow-none focus:bg-primaryDark transition duration-200 ease-in-out transform disabled:bg-gray-400 disabled:ring-gray-400 disabled:cursor-not-allowed"
                    >
                        Continue
                    </button>
                    <p className='text-gray-400'>Questions ? Call
                        <Link
                            href={`tel:(888) 998-6263`}
                            className='text-primaryDark font-medium hover:underline cursor-pointer ml-2'
                        >
                            (888) 998-6263
                        </Link>
                    </p>
                </form>
                {
                    !!message &&
                    <div className='text-xl text-primaryDark font-medium pt-10'>{message}</div>
                }
            </div>
        </SectionLayout>

    )
}