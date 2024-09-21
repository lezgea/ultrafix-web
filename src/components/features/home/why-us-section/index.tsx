"use client";

import SectionLayout from '@components/layout/section-layout';
import { ABOUT_US_IMAGES } from 'constants/about-us';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { CarouselProps } from 'react-responsive-carousel';
import { WHY_US_IMAGES } from 'constants/why-us';

// Dynamically import the Carousel to avoid SSR issues
const Carousel = dynamic(() => import("react-responsive-carousel").then(mod => mod.Carousel), {
    ssr: false, // Disable server-side rendering for this component
});

export const WhyUsSection: React.FC = () => {
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
            scrollId="why_us"
            title="Why Us ?"
            description="Client satisfaction is at the forefront of our minds at UltraFix Appliance Repair Service. Our business model is built on respect, promptness, honesty, and taking pride in our work. When you choose us for your appliance repair, you learn how closely we hold to these values."
        >
            {isMounted && (
                <div className="rounded-3xl overflow-hidden">
                    <Carousel {...(carouselProps as CarouselProps)}>
                        {WHY_US_IMAGES.map(({ url, alt }, i) => (
                            <Image
                                key={i} // Add key for each image
                                src={url}
                                width={1200} // Adjust width and height based on your layout
                                height={400}
                                className="w-auto h-auto"
                                alt={alt}
                                loading="lazy"
                                sizes="(max-width: 1200px) 100vw, 1000px"
                            />
                        ))}
                    </Carousel>
                </div>
            )}
        </SectionLayout>
    );
};
