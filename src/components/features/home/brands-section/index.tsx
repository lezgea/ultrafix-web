"use client";

import SectionLayout from '@components/layout/section-layout';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { CarouselProps } from 'react-responsive-carousel';
import { BRANDS } from 'constants/brands';

// Dynamically import the Carousel to avoid SSR issues
const Carousel = dynamic(() => import("react-responsive-carousel").then(mod => mod.Carousel), {
    ssr: false, // Disable server-side rendering for this component
});

export const BrandsSection: React.FC = () => {
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
        interval: 2000,
        infiniteLoop: true,
    };

    return (
        <SectionLayout
            scrollId="brands"
            title="Brands We Repair"
        >
            {isMounted && (
                <div className="rounded-3xl overflow-hidden max-h-[120px] flex items-center">
                    <Carousel {...(carouselProps as CarouselProps)}>
                        {BRANDS.map(({ url, alt }, i) => (
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
