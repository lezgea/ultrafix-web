"use client";

import React from 'react';
import * as Yup from 'yup';
import { FormInput } from '@components/shared';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useContactUserMutation } from '@api/user-api';
import { toast } from 'react-toastify';


interface IContactForm {
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


export const ContactForm: React.FC = () => {
    const [terms, acceptTerms] = React.useState<boolean>(false);
    const [emailSent, showEmailSent] = React.useState<boolean>(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<IContactForm>({
        resolver: yupResolver(validationSchema),
        mode: 'onBlur',
    });

    // RTK Query mutation hook
    const [sendRequest, { isLoading, error }] = useContactUserMutation();

    const onSubmit: SubmitHandler<IContactForm> = async (data) => {
        try {
            await sendRequest(data).unwrap();
            showEmailSent(true);
            toast.success("Thank you for contacting us! We have received your message and will get back to you shortly.");
            reset();
        } catch (err: any) {
            console.error('Unknown error:', err);
            toast.error(err.data?.message || 'An unexpected error occurred');
        }
    };


    // if (emailSent) return <EmailSent />


    return (
        <div className="w-full space-y-10">
            <form className="space-y-3 md:space-y-5 select-none" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col md:flex-row gap-3 md:gap-5">
                    <FormInput
                        label='Full Name'
                        type='text'
                        name='name'
                        placeholder="John Doe"
                        register={register}
                        errors={errors}
                    />
                    <FormInput
                        label='Phone'
                        type="text"
                        name='phone'
                        placeholder="Enter your phone number"
                        register={register}
                        errors={errors}
                    />
                </div>

                <div className="flex flex-col md:flex-row gap-3 md:gap-5">
                    <FormInput
                        label='E-mail'
                        type="text"
                        name='address'
                        placeholder="johndoe@mail.com"
                        register={register}
                        errors={errors}
                    />
                    <FormInput
                        label='Address'
                        type="text"
                        name='address'
                        placeholder="Address"
                        register={register}
                        errors={errors}
                    />
                </div>

                <div className="flex flex-col md:flex-row gap-3 md:gap-5">
                    <FormInput
                        label='City'
                        type="text"
                        name='city'
                        placeholder="City"
                        register={register}
                        errors={errors}
                    />
                    <FormInput
                        label='State'
                        type="text"
                        name='state'
                        placeholder="State"
                        register={register}
                        errors={errors}
                    />
                    <FormInput
                        label='Zip Code'
                        type="text"
                        name='zipcode'
                        placeholder="Zip Code"
                        register={register}
                        errors={errors}
                    />
                </div>

                <FormInput
                    isTextArea={true}
                    label='Message'
                    type='text'
                    name='message'
                    placeholder="Enter your problem description"
                    register={register}
                    errors={errors}
                />
                <div className="flex justify-between items-center pb-4 pt-1 select-none">
                    <label className="inline-flex items-center cursor-pointer">
                        {/* Hidden native checkbox */}
                        <input
                            type="checkbox"
                            className="hidden peer"
                            onChange={() => acceptTerms(!terms)}
                        />
                        {/* Custom checkbox */}
                        <span className="w-6 h-6 rounded-lg border-2 border-gray-300 flex items-center justify-center bg-white peer-checked:bg-blue-400 peer-checked:border-transparent transition-colors duration-200">
                            {/* Checkmark Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 text-white hidden peer-checked:block"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <span className="ml-2 text-gray-700">I agree to receive text messages from UltraFix</span>
                    </label>
                </div>
                <button
                    disabled={!terms}
                    type="submit"
                    className="w-full h-[45px] md:h-[50px] font-regmed bg-primary text-white py-2 rounded-lg ring-2 ring-primary hover:shadow-lg hover:shadow-neutral-300 hover:-tranneutral-y-px focus:outline-none focus:ring-2 focus:ring-primaryDark focus:shadow-none focus:bg-primaryDark transition duration-200 ease-in-out transform disabled:bg-gray-400 disabled:ring-gray-400 disabled:cursor-not-allowed"
                >
                    Submit Request
                </button>
            </form>
        </div>
    )
}