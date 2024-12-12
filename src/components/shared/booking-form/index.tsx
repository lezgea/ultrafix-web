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
import { ApplianceSelect, ContactInformation, FindTechnician, IssueSelect, ScheduleModal } from '@components/features/booking';
import { Confirmation } from '@components/features/booking/confirmation';


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

    const [step, setStep] = React.useState<number>(0);
    const [scheduleModal, setScheduleModal] = React.useState<boolean>(false);
    const [confirmation, setConfirmation] = React.useState<boolean>(false);

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


    // React.useEffect(() => {
    //     if (step > 0) {
    //         window.location.hash = `#${step}`;
    //     } else {
    //         window.location.hash = ''; // Reset hash if step is 0
    //     }
    // }, [step]);

    // React.useEffect(() => {
    //     const hash = window.location.hash.replace('#', '');
    //     const initialStep = parseInt(hash, 10);
    //     if (!isNaN(initialStep) && initialStep >= 0) {
    //         setStep(initialStep);
    //     }
    // }, []);


    return (
        <>
            {step == 4 && confirmation && <Confirmation />}
            <div className="relative w-full flex items-center flex-col container mx-auto max-w-[1200px] py-20 space-y-10">
                {!!step && !confirmation && <Stepper step={step} />}
                {!step && <FindTechnician setStep={setStep} />}
                {step == 1 && <ApplianceSelect setStep={setStep} />}
                {step == 2 && <IssueSelect setStep={setStep} />}
                {step == 3 && <ContactInformation showModal={() => setScheduleModal(true)} />}
            </div>
            {
                // !!step &&
                // <div className="backdrop-blur-xl bg-white/10 w-full fixed bottom-0 z-30 h-[65px] select-none">
                //     <div aria-label="Booking navigation" className="container w-full max-w-[1200px] mx-auto flex justify-between items-center px-5 md:px-10 xl:px-0 py-0 h-full space-x-5">
                //         <div className="flex items-center cursor-pointer w-[100%] justify-between lg:w-[20%] lg:space-x-0">
                //             {/* <Link href="/" passHref aria-label="UltraFix Logo">
                //             <UltrafixLogo className="h-auto w-[160px]" />
                //         </Link>
                //         <div className="w-[60px] flex lg:hidden">
                //             {
                //                 isSidebarOpen
                //                     ? <CloseIcon onClick={toggleSidebar} className="h-[30px] w-[70px]" data-testid="close-icon" />
                //                     : <HamburgerIcon onClick={toggleSidebar} className="h-[30px] w-[70px]" data-testid="hamburger-icon" />
                //             }
                //         </div> */}
                //         </div>

                //         {/* <ul className="hidden lg:flex md:space-x-3 xl:space-x-10 items-center">
                //         {navLinks}
                //     </ul> */}

                //         <div className="flex hidden items-center justify-end lg:flex lg:w-[20%] h-full">
                //             {/* {phoneButton} */}
                //             test
                //         </div>
                //     </div>
                // </div>
            }
            <ScheduleModal
                visible={scheduleModal}
                onConfirm={() => { setConfirmation(true); setStep(4) }}
                onClose={() => setScheduleModal(false)}
            />
        </>
    )
}