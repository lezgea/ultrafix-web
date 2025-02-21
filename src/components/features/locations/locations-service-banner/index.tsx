"use client";

import SectionLayout from '@components/layout/section-layout';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';
import { motion } from 'framer-motion';
import { COMMERCIAL_SERVICES, RESIDENTIAL_SERVICES } from 'constants/services';
import Link from 'next/link';
import { useGetCityInfoQuery } from '@api/location-api';
import { string } from 'yup';
import { LocationsServiceTitleSkeleton } from '@components/shared/skeletons';


interface IServiceBannerProps {
    type: string,
    service: keyof typeof RESIDENTIAL_SERVICES,
}

export const LocationsServiceBanner: React.FC<IServiceBannerProps> = (props) => {
    let { type } = props

    return (
        <SectionLayout noYPadding>
            {type === "residential" ? <ResidentialContent {...props} /> : <CommercialContent {...props} />}
        </SectionLayout >
    )
}


const ResidentialContent: React.FC<IServiceBannerProps> = ({ service }) => {
    const { state, city } = useParams();

    const { data: cityInfo, isLoading: cityInfoLoading } = useGetCityInfoQuery({ state: state as string, city: city as string });

    const serviceKey = service as keyof typeof RESIDENTIAL_SERVICES;


    return (
        <div className='w-full flex flex-col lg:flex-row py-10'>
            <div className='w-full relative flex flex-col text-center md:text-start justify-between md:py-20'>
                {
                    cityInfoLoading
                        ?
                        <LocationsServiceTitleSkeleton />
                        :
                        <div className='space-y-2 md:space-y-4 z-10'>
                            <h1 className="text-[3rem] leading-[3.5rem] text-[3.4rem] leading-[4rem] font-semibold text-primaryDark">
                                Same-Day <span className='text-primary'>{RESIDENTIAL_SERVICES[serviceKey].title} Repair</span> in {cityInfo?.data?.title}, {cityInfo?.data?.state_short}
                            </h1>
                            {/* <p className='text-gray-600 text-lg md:text-xl mb-10'>{RESIDENTIAL_SERVICES[service].subTitle}</p> */}
                            <p className='text-gray-600 text-md md:text-lg mb-10'>
                                {`UltraFix Appliance Repair in ${cityInfo?.data?.title}, ${cityInfo?.data?.state_short} provides expert ${RESIDENTIAL_SERVICES[serviceKey].title} repair with same-day service, affordable pricing, and professional technicians. Call now for reliable service!`}
                            </p>
                        </div>
                }
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
                <div className='space-y-4 z-10 mt-10 lg:mt-0'>
                    <Link
                        href='/book'
                        className="hidden md:inline-flex w-auto text-center items-center px-6 py-[10px] md:py-[12px] text-lg text-white transition-all bg-primary rounded-xl sm:w-auto hover:shadow-lg hover:shadow-neutral-300 hover:-translate-y-px shadow-neutral-300 focus:shadow-none animate-button"
                        aria-label="See our races"
                    >
                        Book a Service
                    </Link>
                    {/* <p className='text-gray-600 text-lg md:text-xl'>Average price for Residential {RESIDENTIAL_SERVICES[service].title.toLowerCase()} repair without parts</p>
                    <p className='text-primaryDark text-5xl font-medium'>$ {RESIDENTIAL_SERVICES[service].price}</p> */}
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
                    src={`/img/services/residential/${RESIDENTIAL_SERVICES[service].value}.webp`}
                    width={400}
                    height={400}
                    className="w-auto h-auto md:h-[500px] object-cover"
                    alt={`${RESIDENTIAL_SERVICES[service].title} Image`}
                    loading="lazy"
                    sizes="(max-width: 1200px) 600px, (min-width: 1200px) 600px"
                />
            </motion.div>
        </div >
    )
}



const CommercialContent: React.FC<IServiceBannerProps> = ({ service }) => {
    const { state, city } = useParams();

    const { data: cityInfo, isLoading: cityInfoLoading } = useGetCityInfoQuery({ state: state as string, city: city as string });

    const serviceKey = service as keyof typeof COMMERCIAL_SERVICES;

    return (
        <div className='w-full flex flex-col lg:flex-row py-10'>
            <div className='w-full relative flex flex-col text-center md:text-start justify-between md:py-20'>
                {
                    cityInfoLoading
                        ?
                        <LocationsServiceTitleSkeleton />
                        :
                        <div className='space-y-2 md:space-y-4 z-10'>
                            <h1 className="text-[3rem] leading-[3.5rem] text-[3.4rem] leading-[4rem] font-semibold text-primaryDark">
                                Same-Day <span className='text-primary'>{COMMERCIAL_SERVICES[serviceKey].title} Repair</span> in {cityInfo?.data?.title}, {cityInfo?.data?.state_short}
                            </h1>
                            {/* <p className='text-gray-600 text-lg md:text-xl mb-10'>{COMMERCIAL_SERVICES[service].subTitle}</p> */}
                            <p className='text-gray-600 text-md md:text-lg mb-10'>
                                {`UltraFix Appliance Repair in ${cityInfo?.data?.title}, ${cityInfo?.data?.state_short} provides expert ${COMMERCIAL_SERVICES[serviceKey].title} repair with same-day service, affordable pricing, and professional technicians. Call now for reliable service!`}
                            </p>
                        </div>
                }
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
                <div className='space-y-4 z-10 mt-10 lg:mt-0'>
                    <Link
                        href='/book'
                        className="hidden md:inline-flex w-auto text-center items-center px-6 py-[10px] md:py-[12px] text-lg text-white transition-all bg-primary rounded-xl sm:w-auto hover:shadow-lg hover:shadow-neutral-300 hover:-translate-y-px shadow-neutral-300 focus:shadow-none animate-button"
                        aria-label="See our races"
                    >
                        Book a Service
                    </Link>
                    {/* <p className='text-gray-600 text-lg md:text-xl'>Average price for {COMMERCIAL_SERVICES[service].title.toLowerCase()} repair without parts</p>
                    <p className='text-primaryDark text-5xl font-medium'>$ {COMMERCIAL_SERVICES[service].price}</p> */}
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
                    src={`/img/services/commercial/${COMMERCIAL_SERVICES[service].value}.webp`}
                    width={400}
                    height={400}
                    className="w-auto h-auto md:h-[500px] object-cover"
                    alt={`${COMMERCIAL_SERVICES[service].title} Image`}
                    loading="lazy"
                    sizes="(max-width: 1200px) 600px, (min-width: 1200px) 600px"
                />
            </motion.div>
        </div>
    )
}