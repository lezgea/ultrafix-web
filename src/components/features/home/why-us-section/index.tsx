"use client";

import { Check3Icon, CheckIcon } from '@assets/icons';
import SectionLayout from '@components/layout/section-layout';
import { WHY_US } from 'constants/why-us';
import React, { useState, useEffect } from 'react';
import * as motion from "framer-motion/client";
import { TextBlurIn, TextPullUp } from '@components/shared';


export const WhyUsSection: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);

    // This ensures the component only runs on the client
    useEffect(() => {
        setIsMounted(true);
    }, []);


    return (
        <div className='bg-[#EEF2F7]'>
            <SectionLayout
                scrollId="why_us"
                title="Why Us ?"
                description="Client satisfaction is at the forefront of our minds at UltraFix Appliance Repair Service. Our business model is built on respect, promptness, honesty, and taking pride in our work. When you choose us for your appliance repair, you learn how closely we hold to these values."
            >
                <div className="flex flex-wrap gap-4 md:gap-6 items-center justify-center">
                    {
                        WHY_US.map(item =>
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className='relative flex flex-col md:min-h-[320px] shadow-lg rounded-3xl p-7 text-start gap-2 cursor-pointer bg-white md:w-[32%]'
                            >
                                <div className='relative w-20 h-20 bg-[#EEF2F7] rounded-full'>
                                    <Check3Icon className='absolute w-[50px] h-[50px] mt-3 ml-7' />
                                </div>
                                <h3 className='text-2xl text-primaryDark font-medium mt-3'>
                                    {item.title}
                                </h3>
                                <p className='text-sm text-[#606774]'>
                                    {item.description}
                                </p>
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
