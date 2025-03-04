"use client";

import SectionLayout from '@components/layout/section-layout';
import { WHY_US } from 'constants/why-us';
import React, { useState, useEffect } from 'react';
import * as motion from "framer-motion/client";
import { TextBlurIn, TextPullUp } from '@components/shared';
import Image from 'next/image';


export const WhyUsSection: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);

    // This ensures the component only runs on the client
    useEffect(() => {
        setIsMounted(true);
    }, []);


    return (
        <div className='bg-[#EEF2F7] mb-20'>
            <SectionLayout
                scrollId="why_us"
                title="Why Us ?"
                description="Client satisfaction is at the forefront of our minds at UltraFix Appliance Repair Service. Our business model is built on respect, promptness, honesty, and taking pride in our work. When you choose us for your appliance repair, you learn how closely we hold to these values."
            >
                <div className="flex flex-wrap gap-3 items-center justify-center mb-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {
                        WHY_US.map(item =>
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className='relative flex flex-col shadow-lg rounded-3xl text-center items-center gap-2 cursor-pointer bg-white overflow-hidden'
                            >
                                <div className='flex gap-3 items-center justify-center pt-5 pb-4'>
                                    {item.icon}
                                    <div className='text-start'>
                                        <div className='text-xl font-medium text-primary'>
                                            {item.title1}
                                        </div>
                                        <div className='text-lg leading-[1rem] font-light'>
                                            {item.title2}
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full relative flex justify-center'>
                                    <Image
                                        src="/svg/card_banner.svg"
                                        alt="Card Banner"
                                        width={300}
                                        height={200}
                                        className='w-full h-[140px] object-cover'
                                    />
                                    <div className='absolute flex flex-col gap-1 px-3 py-3'>
                                        <p className='text-xs font-light text-white'>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    }
                </div>
            </SectionLayout>
            <div className="bg-gradient-to-r from-[#1F70DA] to-[#103C74] text-white py-[60px]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    <div className='flex flex-col gap-1'>
                        <h3 className="text-3xl font-bold">
                            <TextPullUp text={'1,100,000+'} />
                        </h3>
                        <div className="text-md font-medium text-[rgba(255,255,255,0.8)]">
                            <TextBlurIn>Appliances Repaired</TextBlurIn>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h3 className="flex justify-center text-3xl font-bold gap-2">
                            <TextPullUp text={'5.0'} /><TextPullUp text={'star'} />
                        </h3>
                        <div className="text-md font-medium text-[rgba(255,255,255,0.8)]">
                            <TextBlurIn>Google Rating</TextBlurIn>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h3 className="text-3xl font-bold">
                            <TextPullUp text={'65,780'} />
                        </h3>
                        <div className="text-md font-medium text-[rgba(255,255,255,0.8)]">
                            <TextBlurIn>Google Reviews</TextBlurIn>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h3 className="flex justify-center text-3xl font-bold gap-2">
                            <TextPullUp text={'83'} /><TextPullUp text={'cities'} />
                        </h3>
                        <div className="text-md font-medium text-[rgba(255,255,255,0.8)]">
                            <TextBlurIn>Across the USA</TextBlurIn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
