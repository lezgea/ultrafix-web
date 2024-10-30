"use client";

import SectionLayout from '@components/layout/section-layout';
import { ABOUT_US_IMAGES } from 'constants/about-us';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { CarouselProps } from 'react-responsive-carousel';
import { WHY_US_IMAGES } from 'constants/why-us';
import { ExpandableInfoSection } from '@components/shared';
import { FAQ_LIST } from 'constants/faq';


export const FAQSection: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);

    // This ensures the component only runs on the client
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const carouselProps: Partial<CarouselProps> = {
        showIndicators: false,
        showArrows: true,
        autoPlay: true,
        showThumbs: false,
        transitionTime: 1000,
        interval: 3000,
        infiniteLoop: true,
    };

    return (
        <SectionLayout
            scrollId="faq"
            title="Frequently Asked Questions"
        // description="Client satisfaction is at the forefront of our minds at UltraFix Appliance Repair Service. Our business model is built on respect, promptness, honesty, and taking pride in our work. When you choose us for your appliance repair, you learn how closely we hold to these values."
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
