"use client"

import React from 'react';
import SectionLayout from '@components/layout/section-layout';
import Image from 'next/image';
import * as motion from "framer-motion/client";


export const BannerSection: React.FC = () => {

    const scrollToContact = () => {
        const section = document.getElementById('contact');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <SectionLayout>
            <div className="z-10 flex flex-col w-full space-y-3 md:absolute md:space-y-5 text-center md:text-end justify-end items-center md:items-end">
                <h2 className="text-[2.5rem] leading-[3rem] lg:text-[4rem] lg:leading-[5rem] lg:max-w-[60%] font-semibold text-primaryDark">
                    <span className='text-primary'>Make</span> Appliances <span className='text-primary'>Great</span> Again !
                </h2>
                <p className="text-lg max-w-[80%] md:max-w-full md:text-2xl font-light text-gray-500">Call now and book your service technician</p>
                <button
                    onClick={scrollToContact}
                    className="inline-flex w-auto text-center items-center px-5 py-2 lg:px-6 lg:py-[12px] text-md lg:text-lg text-white transition-all bg-primary rounded-lg sm:w-auto hover:shadow-lg hover:shadow-neutral-300 hover:-translate-y-px shadow-neutral-300 focus:shadow-none animate-button"
                    aria-label="See our races"
                >
                    Book a Service
                </button>
            </div>
            <motion.div
                initial={{ opacity: 0, x: -300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="flex lg:-ml-[120px]"
            >
                <Image
                    src="/img/cars/main_car.webp"
                    width={700}
                    height={500}
                    className="w-auto -mt-[50px] md:-mt-0 lg:h-[700px]"
                    alt="UltraFix Car Image"
                    loading="lazy"
                    // placeholder="blur"
                    sizes="(max-width: 1200px) 100vw, (min-width: 1200px) 1000px"
                />
            </motion.div>

        </SectionLayout>
    )
};
