"use client";

import React, { Suspense } from 'react';
import SectionLayout from '@components/layout/section-layout';
import { ExpandableInfoSection } from '@components/shared';
import { useLazyGetAllFaqsQuery } from '@api/faq-api';


interface ILocationFaqProps {
    location: string,
}

const LocationsFAQSectionContent: React.FC<ILocationFaqProps> = (props) => {
    let { location } = props;

    const [isMounted, setIsMounted] = React.useState(false);
    const [triggerGetFaqs, { data: faqsData }] = useLazyGetAllFaqsQuery()


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

    console.log('@@@@', faqsData)

    return (
        <SectionLayout
            scrollId="faq"
            title="Frequently Asked Questions"
        >
            <div className="rounded-3xl space-y-2">
                {
                    // FAQ_LIST.map(item =>
                    //     <ExpandableInfoSection
                    //         key={item.id}
                    //         title={item.title}
                    //         description={item.value}
                    //     />
                    // )
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
