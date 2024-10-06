"use client";

import SectionLayout from '@components/layout/section-layout';
import { SERVICES } from 'constants/services';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import * as motion from "framer-motion/client"


interface IServiceBannerProps {
    service: keyof typeof SERVICES;
}

export const ServiceBanner: React.FC<IServiceBannerProps> = ({ service }) => {

    const scrollToContact = () => {
        const section = document.getElementById('contact');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <SectionLayout noYPadding>
            <div className='w-full flex flex-col lg:flex-row py-10'>
                <div className='w-full relative flex flex-col text-center md:text-start justify-between md:py-20'>
                    <div className='space-y-2 md:space-y-4 z-10'>
                        <h2 className='text-primaryDark text-4xl md:text-5xl font-medium'><strong className='text-primary font-medium'>{SERVICES[service].title}</strong> repair</h2>
                        <p className='text-gray-600 text-lg md:text-xl mb-10'>{SERVICES[service].subTitle}</p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            delay: 0.2,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        className='hidden lg:flex z-0 h-[13rem] w-[13rem] rounded-full bg-gray-100 absolute top-10 left-[33%]'
                    ></motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            delay: 0.4,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        className='hidden lg:flex z-0 h-[400px] w-[400px] rounded-full bg-gray-100 absolute top-[200px] -left-[140px]'
                    ></motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        className='hidden lg:flex z-0 h-[100px] w-[100px] rounded-full bg-gray-100 absolute top-[250px] left-[450px]'
                    ></motion.div>
                    <div className='space-y-4 z-10 mt-10 md:mt-0'>
                        <button
                            onClick={scrollToContact}
                            className="inline-flex w-auto text-center items-center px-6 py-[10px] md:py-[12px] text-lg text-white transition-all bg-primary rounded-xl sm:w-auto hover:shadow-lg hover:shadow-neutral-300 hover:-translate-y-px shadow-neutral-300 focus:shadow-none animate-button"
                            aria-label="See our races"
                        >
                            Book a Service
                        </button>
                        <p className='text-gray-600 text-lg md:text-xl'>Average price for {SERVICES[service].title.toLowerCase()} repair without parts</p>
                        <p className='text-primaryDark text-5xl font-medium'>$ {SERVICES[service].price}</p>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className='w-full flex items-center justify-center md:items-end md:justify-end -mr-[50px]'
                >
                    <Image
                        src={`/img/services/${SERVICES[service].value}.webp`}
                        width={300}
                        height={300}
                        className="w-auto h-auto md:h-[600px]"
                        alt={`${SERVICES[service].title} Image`}
                        loading="lazy"
                        sizes="(max-width: 1200px) 600px, (min-width: 1200px) 600px"
                    />
                </motion.div>
            </div>
        </SectionLayout>
    )
}