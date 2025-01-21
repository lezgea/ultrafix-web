"use client";

import SectionLayout from '@components/layout/section-layout';
import { ABOUT_US_IMAGES } from 'constants/about-us';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { CarouselProps } from 'react-responsive-carousel';

// Dynamically import the Carousel to avoid SSR issues
const Carousel = dynamic(() => import("react-responsive-carousel").then(mod => mod.Carousel), {
    ssr: false, // Disable server-side rendering for this component
});

export const AboutUsSection: React.FC = () => {
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
            scrollId="about_us"
            title="About Us"
            description="Our pledge is to establish lasting relationships with our customers by exceeding their expectations and gaining their trust through exceptional performance by each member of our service team. We have been providing top service! See just how our UltraFix Appliance Repair Service can better your life today!"
        >
            {isMounted && (
                <div className="rounded-3xl overflow-hidden">
                    <Carousel {...(carouselProps as CarouselProps)}>
                        {ABOUT_US_IMAGES.map(({ url, alt }, i) => (
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
