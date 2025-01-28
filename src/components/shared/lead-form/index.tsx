"use client";

import React, { Suspense } from 'react';
import { Loader } from '../loader';
import { LeadConfirmation, LeadScheduleModal } from '@components/features/lead';
import LeadContactInformation from '@components/features/lead/lead-contact-information';
import { useSearchParams } from 'next/navigation';


const LeadFormContent: React.FC = () => {
    const params = useSearchParams();

    let lead_id = params.get('lead_id');
    let total_fee = params.get('total_fee');

    const [scheduleModal, setScheduleModal] = React.useState<boolean>(false);
    const [confirmation, setConfirmation] = React.useState<boolean>(false);


    return (
        <div className='pb-40'>
            {
                confirmation
                    ?
                    <LeadConfirmation />
                    :
                    <div className="relative w-full flex items-center flex-col container mx-auto max-w-[1200px] py-20 space-y-10">
                        <LeadContactInformation showModal={() => setScheduleModal(true)} />
                    </div>
            }
            <LeadScheduleModal
                leadId={lead_id || ''}
                totalFee={total_fee || ''}
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