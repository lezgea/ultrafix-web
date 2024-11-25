"use client";

import React from 'react';
import SectionLayout from '@components/layout/section-layout';
import { ExpandableInfoSection } from '@components/shared';
import { FAQ_LIST } from 'constants/faq';


export const BlogSection: React.FC = () => {
    const [isMounted, setIsMounted] = React.useState(false);

    // This ensures the component only runs on the client
    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <SectionLayout
            scrollId="blog"
            title="UltraFix Info Hub"
            description="Discover helpful tips, expert advice, and the latest updates in the world of appliance repair on our blog. From troubleshooting common appliance issues to understanding when it’s time for professional service, we’re here to help you keep your home running smoothly. Explore practical guides, maintenance hacks, and industry insights tailored to save you time and money."
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
