"use client";

import React, { Suspense } from 'react';
import SectionLayout from '@components/layout/section-layout';
import { ExpandableInfoSection } from '@components/shared';
import { useLazyGetAllFaqsQuery } from '@api/faq-api';
import { FaqsSkeleton } from '@components/shared/skeletons';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';
import { useParams } from 'next/navigation';
import { useGetCityInfoQuery } from '@api/location-api';


interface ILocationFaqProps { }

const LocationsFAQSectionContent: React.FC<ILocationFaqProps> = (props) => {
    let { } = props;

    const { state, city, service } = useParams();
    const { data: cityInfo, isLoading: cityInfoLoading } = useGetCityInfoQuery({ state: state as string, city: city as string });
    const [triggerGetFaqs, { data: faqsData, isLoading }] = useLazyGetAllFaqsQuery()


    async function getAllFaqs() {
        try {
            await triggerGetFaqs({ city: `${cityInfo?.data?.title}, ${cityInfo?.data?.state_short}` }).unwrap();
        } catch (err: any) {
            console.log('Error: ', err)
        }
    }


    React.useEffect(() => {
        if (!!cityInfo?.data?.title)
            getAllFaqs();
    }, [cityInfo?.data?.title]);


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
