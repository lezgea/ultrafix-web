"use client"

import React from 'react';
import SectionLayout from '@components/layout/section-layout';
import Image from 'next/image';
import * as motion from "framer-motion/client";
import Link from 'next/link';


export const BannerSection: React.FC = () => {

    const scrollToContact = () => {
        const section = document.getElementById('contact');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <SectionLayout noYPadding>
            <div className="z-10 flex flex-col w-full space-y-5 md:absolute text-center md:text-end justify-end items-center md:items-end mt-10 md:mt-20">
                <h1 className="text-[3rem] leading-[3.5rem] lg:text-[4rem] lg:leading-[5rem] lg:max-w-[60%] font-semibold text-primaryDark">
                    <span className='text-primary'>Same-Day</span> Appliance Repair Services
                    {/* <span className='text-primary text-[3.5rem] leading-[3rem] lg:text-[4.5rem] lg:leading-[5.5rem]'>UltraFix®</span> */}
                </h1>
                <p className="text-xl max-w-[80%] md:max-w-full md:text-2xl font-light text-gray-500">Call now and book your service technician</p>
                <Link href='/book'>
                    <button
                        // onClick={scrollToContact}
                        className="hidden md:inline-flex w-auto text-center items-center px-10 py-3 lg:px-6 lg:py-[12px] text-xl text-white transition-all bg-primary rounded-lg sm:w-auto hover:shadow-lg hover:shadow-neutral-300 hover:-translate-y-px shadow-neutral-300 focus:shadow-none animate-button"
                        aria-label="See our races"
                    >
                        Book a Service
                    </button>
                </Link>
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
                    className="w-auto -mt-[50px] md:mt-[50px] lg:h-[700px]"
                    alt="UltraFix Car Image"
                    loading="lazy"
                    // placeholder="blur"
                    sizes="(max-width: 1200px) 100vw, (min-width: 1200px) 1000px"
                />
            </motion.div>
        </SectionLayout>
    )
};
