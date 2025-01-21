"use client";

import SectionLayout from '@components/layout/section-layout';
import { ABOUT_US_IMAGES } from 'constants/about-us';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { CarouselProps } from 'react-responsive-carousel';
import { useParams } from 'next/navigation';
import { CITIES } from 'constants/locations';
import { AnimatePresence, motion } from 'framer-motion';

// Dynamically import the Carousel to avoid SSR issues
const Carousel = dynamic(() => import("react-responsive-carousel").then(mod => mod.Carousel), {
    ssr: false, // Disable server-side rendering for this component
});

export const LocationsMap: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);

    const { state, city, service } = useParams();

    const cityKey = `${state}_${city}` as keyof typeof CITIES;
    const cityData = CITIES[cityKey];

    // This ensures the component only runs on the client
    useEffect(() => {
        setIsMounted(true);
    }, []);


    return (
        <SectionLayout
            // scrollId="why_us"
            title={`Service area in ${cityData?.title}, ${cityData?.stateShort}`}
            description={`We are happy to help the people of ${cityData?.title}, ${cityData?.stateShort}, and nearby areas by fixing their appliances. We know that it can be a bother when an appliance stops working, so we make sure to fix them quickly and well. Our goal is to give fast and effective service to all our customers in ${cityData?.title}.`}
        >
            {isMounted && (
                <AnimatePresence mode="wait">
                    <div className="relative flex flex-col md:flex-row items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className="rounded-3xl overflow-hidden"
                        >
                            <Image
                                src={cityData?.mapUrl}
                                width={1200} // Adjust width and height based on your layout
                                height={400}
                                className="w-full h-[600px] object-cover"
                                alt={`${cityData?.title} location's map`}
                                loading="lazy"
                                sizes="(max-width: 1200px) 100vw, 1000px"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white p-10 rounded-2xl shadow-2xl relative w-full -top-20 md:top-auto md:absolute md:-right-20 md:min-w-[400px] md:max-w-[400px] space-y-7"
                        >
                            <div>
                                <div className="text-xl font-light text-primaryDark">UltraFix Appliance Repair</div>
                                <div className="font-medium text-[1.5rem] leading-[2rem] md:text-[2.2rem] md:leading-[2.5rem] text-primaryDark">in <span className="text-primary">{cityData?.title}, {cityData?.stateShort}</span></div>
                                <div className="text-sm text-gray-500 mt-2">{cityData?.address}</div>
                            </div>
                            <div>
                                <div className="text-2xl text-primaryDark font-medium mb-2">{cityData?.phone}</div>
                                <div className='text-gray-500'>{cityData?.days}</div>
                                <div className='text-gray-500'>{cityData?.hours}</div>
                            </div>
                        </motion.div>
                    </div>
                </AnimatePresence>
            )}
        </SectionLayout>
    );
};
