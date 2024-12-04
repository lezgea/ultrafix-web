"use client";

import React from 'react';
import * as Yup from 'yup';
import { FormInput } from '@components/shared';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useContactUserMutation } from '@api/user-api';
import { toast } from 'react-toastify';
import SectionLayout from '@components/layout/section-layout';
import { Stepper } from '../stepper';
import { ApplianceSelect, ContactInformation, FindTechnician, IssueSelect } from '@components/features/booking';


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


export const BookingForm: React.FC = () => {

    const [step, setStep] = React.useState(0);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<IBookingForm>({
        resolver: yupResolver(validationSchema),
        mode: 'onBlur',
    });

    // RTK Query mutation hook
    // const [sendRequest, { isLoading, error }] = useContactUserMutation();

    const onSubmit: SubmitHandler<IBookingForm> = async (data) => {
        try {
            // await sendRequest(data).unwrap();
            // showEmailSent(true);
            toast.success("Thank you for contacting us! We have received your message and will get back to you shortly.");
            reset();
        } catch (err: any) {
            console.error('Unknown error:', err);
            toast.error(err.data?.message || 'An unexpected error occurred');
        }
    };


    return (
        <div className="relative w-full flex items-center flex-col container mx-auto max-w-[1200px] py-20 space-y-10">
            {!!step && <Stepper step={step} />}
            {!step && <FindTechnician setStep={setStep} />}
            {step == 1 && <ApplianceSelect setStep={setStep} />}
            {step == 2 && <IssueSelect setStep={setStep} />}
            {step == 3 && <ContactInformation setStep={setStep} />}
        </div>
    )
}