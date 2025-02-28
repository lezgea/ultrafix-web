"use client";

import SectionLayout from '@components/layout/section-layout';
import { COMMERCIAL_SERVICES, RESIDENTIAL_SERVICES } from 'constants/services';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import * as motion from "framer-motion/client"
import { useParams } from 'next/navigation';
import { useGetBrandInfoQuery } from '@api/brands-api';
import { useGetCityInfoQuery } from '@api/location-api';
import { BrandsTitleSkeleton } from '@components/shared/skeletons';


interface IBrandBannerProps {
    // type: string,
    // service: keyof typeof RESIDENTIAL_SERVICES | keyof typeof COMMERCIAL_SERVICES;
}


export const BrandBanner: React.FC<IBrandBannerProps> = (props) => {
    let { brandId, state, city } = useParams();

    const { data: brandInfo, isLoading: brandInfoLoading } = useGetBrandInfoQuery({ id: brandId as string });
    const { data: cityInfo, isLoading: cityInfoLoading } = useGetCityInfoQuery({ state: state as string, city: city as string });

    const title = !!cityInfo?.data?.title
        ?
        <h1 className="text-[3rem] leading-[3.5rem] text-[3.4rem] leading-[4rem] font-semibold text-primary">
            {brandInfo?.data?.text} <span className='text-primaryDark'>Appliance Repair Services in</span> {cityInfo?.data?.title}, {cityInfo?.data?.state_short}
        </h1>
        :
        <h1 className="text-[3rem] leading-[3.5rem] text-[3.4rem] leading-[4rem] font-semibold text-primary">
            {brandInfo?.data?.text} <span className='text-primaryDark'>Appliance Repair Services</span>
        </h1>


    return (
        <>
            <SectionLayout noYPadding>
                <div className='w-full flex flex-col-reverse lg:flex-row py-10'>
                    <div className='w-full relative flex flex-col text-center md:text-start justify-between md:py-20'>
                        <div className='space-y-2 md:space-y-4 z-10'>
                            {
                                brandInfoLoading
                                    ? <BrandsTitleSkeleton />
                                    : title
                            }
                            <p className='text-gray-600 text-lg md:text-xl mb-10'>We Will Make your Appliances Great Again!</p>
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
                        <div className='space-y-4 z-10 mt-10'>
                            <Link
                                href='/book'
                                className="inline-flex w-auto text-center items-center px-6 py-[10px] md:py-[12px] text-lg text-white transition-all bg-primary rounded-xl sm:w-auto hover:shadow-lg hover:shadow-neutral-300 hover:-translate-y-px shadow-neutral-300 focus:shadow-none animate-button"
                                aria-label="See our races"
                            >
                                Book a Service
                            </Link>
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        className='w-full flex items-center justify-center p-10 md:p-0 -mr-[30px]'
                    >
                        <Image
                            src={brandInfo?.data?.logo?.url || ''}
                            width={600}
                            height={600}
                            className="w-auto h-auto md:max-w-[600px] md:max-h-[200px] object-fit"
                            alt={`${brandInfo?.data?.logo?.url}`}
                            loading="lazy"
                            sizes="(max-width: 1200px) 600px, (min-width: 1200px) 600px"
                        />
                    </motion.div>
                </div >
            </SectionLayout>

            <SectionLayout noYPadding>
                <p className='text-gray-500 text-md'>
                    <b>UltraFix</b> specializes in delivering top-notch repair services for <b>{brandInfo?.data?.text}</b> appliances
                    across USA. Whether it's a dishwasher, refrigerator, washing machine, or any other home appliance, our expert
                    technicians are here to provide fast, reliable, and affordable solutions.
                </p>
            </SectionLayout>
        </>
    )
}