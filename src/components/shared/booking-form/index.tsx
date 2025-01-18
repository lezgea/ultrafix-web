"use client";

import React from 'react';
import { Stepper } from '../stepper';
import {
    ApplianceSelect,
    Confirmation,
    ContactInformation,
    FindTechnician,
    IssueSelect,
    ScheduleModal,
} from '@components/features/booking';
import { useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setSelectedAppliances } from '@slices/booking-slice';


export const BookingForm: React.FC = () => {
    const [step, setStep] = React.useState<number>(0);
    const [scheduleModal, setScheduleModal] = React.useState<boolean>(false);
    const [confirmation, setConfirmation] = React.useState<boolean>(false);

    const dispatch = useDispatch();

    const searchParams = useSearchParams();

    const zip = searchParams.get("zip");
    const lead_id = searchParams.get("lead_id");
    const customer_name = searchParams.get("customer_name");
    const customer_phone = searchParams.get("customer_phone");
    const appliances = searchParams.get("appliances");

    console.log('@@@@', appliances)

    React.useEffect(() => {
        // Extract the appliances parameter
        const appliancesParam = searchParams.get('appliances');
        if (appliancesParam) {
            // Manually parse the appliances query string
            const decodedAppliances = decodeURIComponent(appliancesParam);
            // You might need to parse it further if it's in a complex format
            const appliancesArray = JSON.parse(decodedAppliances);

            dispatch(setSelectedAppliances([
                ...appliancesArray.map((item: any) => ({
                    brand: '',
                    problem: '',
                    // service_id: applianceId,
                    type: item.type,
                    title: item.service_name,
                }))
            ]));
        }

        setStep(3)
    }, [searchParams]);


    return (
        <div className='pb-40'>
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