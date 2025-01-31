"use client";

import React, { Suspense } from 'react';
import { Stepper } from '../stepper';
import {
    ApplianceSelect,
    BookingInfoSidebar,
    Confirmation,
    ContactInformation,
    FindTechnician,
    IssueSelect,
    ScheduleModal,
} from '@components/features/booking';
import { useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setSelectedAppliances } from '@slices/booking-slice';
import { Loader } from '../loader';


const BookingFormContent: React.FC = () => {
    const [step, setStep] = React.useState<number>(0);
    const [scheduleModal, setScheduleModal] = React.useState<boolean>(false);
    const [confirmation, setConfirmation] = React.useState<boolean>(false);


    return (
        <div className='pb-40'>
            <BookingInfoSidebar />

            {step == 4 && confirmation && <Confirmation />}
            <div className="relative w-full flex items-center flex-col container mx-auto max-w-[1200px] py-20 space-y-10">
                {!!step && !confirmation && <Stepper step={step} />}
                {!step && <FindTechnician setStep={setStep} />}
                {step == 1 && <ApplianceSelect setStep={setStep} />}
                {step == 2 && <IssueSelect setStep={setStep} />}
                {step == 3 && <ContactInformation setStep={setStep} showModal={() => setScheduleModal(true)} />}
            </div>
            <ScheduleModal
                visible={scheduleModal}
                onConfirm={() => { setConfirmation(true); setStep(4) }}
                onClose={() => setScheduleModal(false)}
            />
        </div>
    )
}


const BookingForm: React.FC = () => {
    return (
        <Suspense fallback={<Loader />}>
            <BookingFormContent />
        </Suspense>
    )
}

export default BookingForm;