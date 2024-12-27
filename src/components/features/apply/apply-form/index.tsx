"use client";

import React from 'react';
import * as Yup from 'yup';
import { FormInput } from '@components/shared';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useApplyMutation, useContactUserMutation } from '@api/user-api';
import { toast } from 'react-toastify';


interface IApplyForm {
    fullname: string;
    nickname: string;
    ssn: string;
    phone: string;
    email: string;
    address: string;
}

const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('First name is required'),
    nickname: Yup.string().required('Last name is required'),
    ssn: Yup.string().required('Required format: xxx-xx-xxxx'),
    phone: Yup.string().required('Phone is required'),
    email: Yup.string().email().required('Email is required'),
    address: Yup.string().required('Address is required'),
});


export const ApplyForm: React.FC = () => {
    const [emailSent, showEmailSent] = React.useState<boolean>(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<IApplyForm>({
        resolver: yupResolver(validationSchema),
        mode: 'onBlur',
    });

    // RTK Query mutation hook
    const [sendRequest, { isLoading, error }] = useApplyMutation();

    const onSubmit: SubmitHandler<IApplyForm> = async (data) => {
        try {
            await sendRequest(data).unwrap();
            showEmailSent(true);
            toast.success("We have received your application and will get back to you shortly.");
            reset();
        } catch (err: any) {
            console.error('Unknown error:', err);
            toast.error(err.data?.message || 'An unexpected error occurred');
        }
    };


    // if (emailSent) return <EmailSent />


    return (
        <div className="w-full space-y-10">
            <form className="space-y-5 select-none" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col lg:flex-row gap-3 md:gap-5">
                    <FormInput
                        label='First name'
                        type='text'
                        name='fullname'
                        placeholder="John"
                        register={register}
                        errors={errors}
                    />
                </div>
                <div className="flex flex-col lg:flex-row gap-3 md:gap-5">
                    <FormInput
                        label='Last name'
                        type="text"
                        name='nickname'
                        placeholder="Doe"
                        register={register}
                        errors={errors}
                    />
                    <FormInput
                        label='SSN'
                        type='text'
                        name='ssn'
                        placeholder="xxx-xx-xxxx"
                        register={register}
                        errors={errors}
                    />
                </div>

                <div className="flex flex-col lg:flex-row gap-3 md:gap-5">
                    <FormInput
                        label='Phone'
                        type="text"
                        name='phone'
                        placeholder="(xxx) xxxxxxx"
                        register={register}
                        errors={errors}
                    />
                    <FormInput
                        label='E-mail'
                        type="text"
                        name='email'
                        placeholder="johndoe@mail.com"
                        register={register}
                        errors={errors}
                    />
                </div>

                <div className="flex flex-col lg:flex-row gap-3 md:gap-5">
                    <FormInput
                        label='Address'
                        type="text"
                        name='address'
                        placeholder="Street, City, Zip Code"
                        register={register}
                        errors={errors}
                    />
                </div>

                <div className="flex flex-col justify-end md:flex-row gap-3 md:gap-5 pt-5">
                    <div className='w-full lg:w-1/2'>
                        <button
                            type="submit"
                            className="w-full inline-flex items-center justify-center h-[45px] md:h-[50px] font-regmed bg-primary text-white py-2 rounded-lg ring-2 ring-primary hover:shadow-lg hover:shadow-neutral-300 hover:-tranneutral-y-px focus:outline-none focus:ring-2 focus:ring-primaryDark focus:shadow-none focus:bg-primaryDark transition duration-200 ease-in-out transform disabled:bg-gray-400 disabled:ring-gray-400 disabled:cursor-not-allowed"
                        >
                            Submit Application
                        </button>
                    </div>
                </div>

            </form>
        </div>
    )
}