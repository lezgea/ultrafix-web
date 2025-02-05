"use client";

import React, { Suspense } from 'react';
import SectionLayout from '@components/layout/section-layout';
import { ExpandableInfoSection } from '@components/shared';
import { useLazyGetAllFaqsQuery } from '@api/faq-api';
import { FAQ_LIST } from 'constants/faq';
import { FaqsSkeleton } from '@components/shared/skeletons';


interface ILocationFaqProps {
    location: string,
}

const LocationsFAQSectionContent: React.FC<ILocationFaqProps> = (props) => {
    let { location } = props;

    const [triggerGetFaqs, { data: faqsData, isLoading }] = useLazyGetAllFaqsQuery()


    async function getAllFaqs() {
        try {
            await triggerGetFaqs({ city: location }).unwrap();
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

const LocationsFAQSection: React.FC<ILocationFaqProps> = (props) => {
    return (
        <Suspense>
            <LocationsFAQSectionContent {...props} />
        </Suspense>
    )
}

export default LocationsFAQSection;
