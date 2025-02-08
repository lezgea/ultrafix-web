"use client";

import SectionLayout from '@components/layout/section-layout';
import Image from 'next/image';
import React from 'react';
import { useParams } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { useGetCityInfoQuery } from '@api/location-api';


export const LocationsMap: React.FC = () => {
    const [isMounted, setIsMounted] = React.useState(false);

    const { state, city, service } = useParams();
    const { data: cityInfo, isLoading: cityInfoLoading } = useGetCityInfoQuery({ state: state as string, city: city as string })

    // This ensures the component only runs on the client
    React.useEffect(() => {
        setIsMounted(true);
    }, []);


    return (
        <SectionLayout
            // scrollId="why_us"   
            title={`Service area in ${cityInfo?.data?.title}, ${cityInfo?.data?.state_short}`}
            description={`We are happy to help the people of ${cityInfo?.data?.title}, ${cityInfo?.data?.state_short}, and nearby areas by fixing their appliances. We know that it can be a bother when an appliance stops working, so we make sure to fix them quickly and well. Our goal is to give fast and effective service to all our customers in ${cityInfo?.data?.title}.`}
        >
            {isMounted && (
                <AnimatePresence mode="wait">
                    <div className="w-full relative flex flex-col md:flex-row items-center rounded-2xl shadow-xl overflow-hidden">
                        <Image
                            src={cityInfo?.data?.image || '/svg/no_img.svg'}
                            width={800} // Adjust width and height based on your layout
                            height={400}
                            className="w-full md:h-[400px] md:max-w-[60%] object-cover"
                            alt={`${cityInfo?.data?.title} location's image`}
                            loading="lazy"
                            sizes="(max-width: 1200px) 80vw, 700px"
                        />
                        <motion.div
                            initial={{ opacity: 0, x: 200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white p-10 relative w-full min-w-[400px] space-y-7"
                        >
                            <div>
                                <div className="text-xl font-light text-primaryDark">UltraFix Appliance Repair</div>
                                <div className="font-medium text-[1.5rem] leading-[2rem] md:text-[2.2rem] md:leading-[2.5rem] text-primaryDark">in <span className="text-primary">{cityInfo?.data?.title}, {cityInfo?.data?.state_short}</span></div>
                                <div className="text-sm text-gray-500 mt-2">{cityInfo?.data?.address}</div>
                            </div>
                            <div>
                                <div className="text-2xl text-primaryDark font-medium mb-2">{cityInfo?.data?.phone}</div>
                                <div className='text-gray-500'>Monday - Sunday</div>
                                <div className='text-gray-500'>07:00 am - 08:00 pm</div>
                            </div>
                        </motion.div>
                    </div>
                </AnimatePresence>
            )}
        </SectionLayout>
    );
};
