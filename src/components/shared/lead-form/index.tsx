"use client";

import React, { Suspense } from 'react';
import { Loader } from '../loader';
import { LeadConfirmation, LeadScheduleModal } from '@components/features/lead';
import LeadContactInformation from '@components/features/lead/lead-contact-information';


const LeadFormContent: React.FC = () => {
    const [scheduleModal, setScheduleModal] = React.useState<boolean>(false);
    const [confirmation, setConfirmation] = React.useState<boolean>(false);


    return (
        <div className='pb-40'>
            {confirmation && <LeadConfirmation />}
            <div className="relative w-full flex items-center flex-col container mx-auto max-w-[1200px] py-20 space-y-10">
                <LeadContactInformation showModal={() => setScheduleModal(true)} />
            </div>
            <LeadScheduleModal
                visible={scheduleModal}
                onConfirm={() => setConfirmation(true)}
                onClose={() => setScheduleModal(false)}
            />
        </div>
    )
}


const LeadForm: React.FC = () => {
    return (
        <Suspense fallback={<Loader />}>
            <LeadFormContent />
        </Suspense>
    )
}

export default LeadForm;