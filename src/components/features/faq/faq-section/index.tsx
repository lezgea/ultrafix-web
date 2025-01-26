"use client";

import React from 'react';
import SectionLayout from '@components/layout/section-layout';
import { ExpandableInfoSection } from '@components/shared';
import { FAQ_LIST } from 'constants/faq';


export const FAQSection: React.FC = () => {
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);


    return (
        <SectionLayout
            scrollId="faq"
            title="Frequently Asked Questions"
        >
            <div className="rounded-3xl space-y-2">
                {
                    FAQ_LIST.map(item =>
                        <ExpandableInfoSection
                            key={item.id}
                            title={item.title}
                            description={item.value}
                        />
                    )
                }
            </div>
        </SectionLayout>
    );
};
