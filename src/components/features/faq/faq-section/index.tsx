"use client";

import React from 'react';
import SectionLayout from '@components/layout/section-layout';
import { ExpandableInfoSection } from '@components/shared';
import { useLazyGetAllFaqsQuery } from '@api/faq-api';
import { FaqsSkeleton } from '@components/shared/skeletons';


export const FAQSection: React.FC = () => {

    const [triggerGetFaqs, { data: faqsData, isLoading }] = useLazyGetAllFaqsQuery();


    async function getAllFaqs() {
        try {
            await triggerGetFaqs({ city: 'main' }).unwrap();
        } catch (err: any) {
            console.log('Error: ', err)
        }
    }


    React.useEffect(() => {
        if (location)
            getAllFaqs();
    }, [location]);



    return (
        <SectionLayout
            scrollId="faq"
            title="Frequently Asked Questions"
        >
            <div className="rounded-3xl space-y-2">
                {
                    isLoading &&
                    <FaqsSkeleton />
                }
                {
                    faqsData?.data?.map(item =>
                        <ExpandableInfoSection
                            key={item.id}
                            title={item.title}
                            description={item.description}
                        />
                    )
                }
            </div>
        </SectionLayout>
    );
};
