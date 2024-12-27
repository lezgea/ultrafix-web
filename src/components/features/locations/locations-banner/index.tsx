"use client";

import { CallIcon } from '@assets/icons';
import SectionLayout from '@components/layout/section-layout';
import { Loader } from '@components/shared';
import { setAuthState } from '@slices/user-slice';
import { RootState } from '@store/store';
import { CITIES } from 'constants/locations';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { RESIDENTIAL_SERVICES } from 'constants/services';


interface ILocationBannerProps {
    loading?: boolean,
    setLoading?: (val: boolean) => void,
}

export const LocationsBanner: React.FC<ILocationBannerProps> = () => {
    const { state, city, service } = useParams();
    const dispatch = useDispatch();

    const scrollToContact = () => {
        const section = document.getElementById('contact');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const serviceKey = service as keyof typeof RESIDENTIAL_SERVICES;
    const cityKey = `${state}_${city}` as keyof typeof CITIES;
    const cityData = CITIES[cityKey];


    return (
        <SectionLayout>
            <div className="z-10 flex flex-col w-full lg:absolute space-y-5 text-center items-center justify-center md:text-end md:justify-end md:items-end">
                <h2 className="text-[3rem] leading-[3.5rem] md:text-[4rem] md:leading-[5rem] font-semibold text-primaryDark">
                    <span className='text-primary'>Appliance</span> repair services
                </h2>
                <h3 className="text-[3rem] leading-[3.5rem] md:text-[4rem] md:leading-[4rem] lg:max-w-[60%] font-semibold text-primaryDark">
                    in <span className='text-primary'>{cityData.title}, {cityData.stateShort}</span>
                </h3>
                <p className="text-xl md:text-2xl font-light md:max-w-[45%] text-gray-500">
                    UltraFix Appliance Repair services are a call away. We can be with you on the same day
                </p>
                <Link
                    href='/book'
                    className="hidden md:inline-flex w-auto text-center items-center px-6 py-[10px] md:py-[12px] text-lg text-white transition-all bg-primary rounded-lg md:rounded-xl sm:w-auto hover:shadow-lg hover:shadow-neutral-300 hover:-translate-y-px shadow-neutral-300 focus:shadow-none animate-button"
                    aria-label="See our races"
                >
                    Book a Service
                </Link>
            </div>

            <motion.div
                initial={{ opacity: 0, x: -300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                className="flex lg:-ml-[120px]"
            >
                <Image
                    src={cityData.carUrl}
                    width={700}
                    height={700}
                    className="w-auto -mt-[50px] lg:-mt-0 lg:h-[700px]"
                    alt="UltraFix Car Image"
                    loading="lazy"
                    // placeholder="blur"
                    sizes="(max-width: 1200px) 100vw, (min-width: 1200px) 1000px"
                />
            </motion.div>
        </SectionLayout>
    );
}
