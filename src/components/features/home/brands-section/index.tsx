"use client";

import SectionLayout from '@components/layout/section-layout';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { CarouselProps } from 'react-responsive-carousel';
import { BRANDS, BRANDS_LIST, BRANDS_MOB } from 'constants/brands';
import * as motion from "framer-motion/client"

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
            <div className='flex flex-wrap items-center justify-center gap-7 pb-20'>
                {
                    BRANDS_LIST.map(brand =>
                        <motion.div
                            key={brand.id}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.4,
                                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                            }}
                        >
                            <Image
                                height={50}
                                width={100}
                                alt={brand.label}
                                src={`/img/brands/${brand.value}.jpg`}
                                className='brand-logo w-full h-12'
                            />
                        </motion.div>
                    )
                }
            </div>
        </SectionLayout >
    );
};
