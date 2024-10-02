"use client";

import { FormInput } from '@components/shared';
import React from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { EmailIcon, EyeClosedIcon, EyeIcon } from '@assets/icons';
import { useRegisterUserMutation } from '@api/user-api';
import { toast } from 'react-toastify';
import Link from 'next/link';
import Image from 'next/image';


interface IFormInput {
    email: string;
    password: string;
    confirmation: string;
}

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: Yup.string()
        .required('Password is required')
        .min(3, 'Password must be at least 3 characters'),
    confirmation: Yup.string()
        .required('Password confirmation is required')
        .oneOf([Yup.ref('password')], 'Passwords must match'),
});


export const ContactForm: React.FC = () => {
    const [terms, acceptTerms] = React.useState<boolean>(false);
    const [showPassword, setShowPassword] = React.useState<boolean>(false);
    const [emailSent, showEmailSent] = React.useState<boolean>(false);

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        resolver: yupResolver(validationSchema),
        mode: 'onBlur',
    });

    // RTK Query mutation hook
    const [registerUser, { isLoading, error }] = useRegisterUserMutation();

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        try {
            await registerUser(data).unwrap();
            showEmailSent(true);
        } catch (err: any) {
            console.error('Unknown error:', err);
            toast.error(err.data?.message || 'An unexpected error occurred');
        }
    };

    const togglePasswordVisibility = (): void => {
        setShowPassword(!showPassword);
    };


    // if (emailSent) return <EmailSent />


    return (
        <div className="w-full mx-auto lg:max-w-md space-y-10">
            <form className="space-y-5 select-none" onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                    label='Fullname'
                    type='email'
                    name='email'
                    placeholder="example@company.com"
                    register={register}
                    errors={errors}
                    icon={<EmailIcon />}
                />
                <FormInput
                    label='Phone'
                    type={showPassword ? "text" : "password"}
                    name='password'
                    placeholder="Enter password"
                    register={register}
                    errors={errors}
                    onClickIcon={togglePasswordVisibility}
                    icon={showPassword ? <EyeIcon /> : <EyeClosedIcon />}
                />
                <FormInput
                    label='Address'
                    type={showPassword ? "text" : "password"}
                    name='confirmation'
                    placeholder="Enter password"
                    register={register}
                    errors={errors}
                    onClickIcon={togglePasswordVisibility}
                    icon={showPassword ? <EyeIcon /> : <EyeClosedIcon />}
                />
                <FormInput
                    isTextArea={true}
                    label='Message'
                    type={showPassword ? "text" : "password"}
                    name='confirmation'
                    placeholder="Enter password"
                    register={register}
                    errors={errors}
                    onClickIcon={togglePasswordVisibility}
                    icon={showPassword ? <EyeIcon /> : <EyeClosedIcon />}
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
                    className="w-full h-[50px] font-regmed bg-primary text-white py-2 rounded-lg ring-2 ring-primary hover:shadow-lg hover:shadow-neutral-300 hover:-tranneutral-y-px focus:outline-none focus:ring-2 focus:ring-primaryDark focus:shadow-none focus:bg-primaryDark transition duration-200 ease-in-out transform disabled:bg-gray-400 disabled:ring-gray-400 disabled:cursor-not-allowed"
                >
                    Submit Request
                </button>
            </form>
        </div>
    )
}