"use client";

import React, { Suspense, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FormInput, Loader } from '@components/shared';
import { toast } from 'react-toastify';
import { EmailIcon, EyeClosedIcon, EyeIcon, UltrafixLogo } from '@assets/icons';
import { useRouter, useSearchParams } from 'next/navigation';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@store/store';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { useLoginUserMutation } from '@api/user-api';
import Link from 'next/link';


interface IFormInput {
    email: string;
    password: string;
    rememberMe?: boolean;
}


const SignInContent: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    const selectAuthData = createSelector(
        (state: RootState) => state.user.isAuthenticated,
        (isAuthenticated) => ({ isAuthenticated })
    );

    const { isAuthenticated } = useSelector(selectAuthData);


    const validationSchema = Yup.object().shape({
        // email: Yup.string().required(t('emailIsRequired')),
        // password: Yup.string()
        //     .required(t('passwordIsRequired'))
        //     .min(6, t('atLeast6Characters')),
    });

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        // resolver: yupResolver(validationSchema),
        mode: 'onBlur',
    });
    const [showPassword, setShowPassword] = useState<boolean>(false);

    // RTK Query mutation hook
    const [loginUser, { isLoading, error }] = useLoginUserMutation();

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        try {
            // Passing rememberMe along with the login data
            const payload = {
                ...data,
                // rememberMe: data.rememberMe || false,
            };

            await loginUser(payload).unwrap();
            router.push('/');
        } catch (err: any) {
            if (err?.data?.code === "UNEXPECTED_EXCEPTION = USER_NOT_FOUND") {
                toast.error("User is not found");
            } else {
                toast.error(err.data?.message || 'An unexpected error occurred');
            }
        }
    };

    React.useEffect(() => {
        if (token) {
            router.push('/');
            Cookies.set('neyroken', token as string, {
                secure: process.env.NODE_ENV === 'production',
                expires: 47 / 24,
            });
        }
    }, [token]);


    const togglePasswordVisibility = (): void => {
        setShowPassword(!showPassword);
    };

    if (isAuthenticated) router.push('/')


    return (
        <div className='w-full flex justify-between'>
            <div className="relative min-h-screen max-h-screen flex items-center justify-center w-full content-center px-8 py-[30px] lg:p-20 overflow-y-scroll">
                {/* <CominIllustration className='-ml-[500px] animate-right-svg' /> */}
                <div className="w-full backdrop-blur-2xl absolute mx-auto lg:max-w-[500px] space-y-10 animate-left-svg bg-white/40 p-10 rounded-3xl">
                    <Link href={`/`} passHref title='Logo' className='w-full flex flex-col items-center justify-center'>
                        <UltrafixLogo className="h-auto w-[150px] lg:w-[200px]" />
                    </Link>
                    <form className="flex flex-col space-y-5 select-none" onSubmit={handleSubmit(onSubmit)}>
                        <FormInput
                            label={`Email *`}
                            type='text'
                            name='email'
                            placeholder={'Email'}
                            register={register}
                            errors={errors}
                            icon={<EmailIcon />}
                        />
                        <FormInput
                            label={`Password *`}
                            type={showPassword ? "text" : "password"}
                            name='password'
                            placeholder={'Enter Password'}
                            register={register}
                            errors={errors}
                            onClickIcon={togglePasswordVisibility}
                            icon={showPassword ? <EyeIcon /> : <EyeClosedIcon />}
                        />

                        <button
                            type="submit"
                            className="w-full h-[45px] md:h-[50px] font-regmed bg-primary text-white py-2 rounded-lg ring-2 ring-primary hover:shadow-lg hover:shadow-neutral-300 hover:-tranneutral-y-px focus:outline-none focus:ring-2 focus:ring-primaryDark focus:shadow-none focus:bg-primaryDark transition duration-200 ease-in-out transform disabled:bg-gray-400 disabled:ring-gray-400 disabled:cursor-not-allowed"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

const SignIn: React.FC = () => {
    return (
        <Suspense fallback={<Loader />}>
            <SignInContent />
        </Suspense>
    )
}

export default SignIn;
