"use client";

import SectionLayout from '@components/layout/section-layout';
import Image from 'next/image';
import React from 'react';
import * as motion from "framer-motion/client"
import { useLazyGetAllBrandsQuery } from '@api/brands-api';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useGetCityInfoQuery } from '@api/location-api';
import dynamic from 'next/dynamic';
import { CarouselProps } from 'react-responsive-carousel';


// Dynamically import the Carousel to avoid SSR issues
const Carousel = dynamic(() => import("react-responsive-carousel").then(mod => mod.Carousel), {
    ssr: false, // Disable server-side rendering for this component
});

export const BrandsSection: React.FC = () => {
    const { city, state } = useParams();

    const [isMounted, setIsMounted] = React.useState(false);
    const [triggerGetBrands, { data: brands, isLoading }] = useLazyGetAllBrandsQuery();

    const { data: cityInfo, isLoading: cityInfoLoading } = useGetCityInfoQuery(
        { state: state as string, city: city as string },
        { skip: !city && !state }
    );


    async function getBrands() {
        try {
            triggerGetBrands({}).unwrap();
        } catch (err: any) {
            console.error('Unable to fetch brands list: ', err)
        }
    }


    React.useEffect(() => {
        getBrands();
    }, [])


    React.useEffect(() => {
        setIsMounted(true);
    }, []);


    const carouselProps: Partial<CarouselProps> = {
        showIndicators: true,
        showArrows: false,
        autoPlay: true,
        showThumbs: false,
        transitionTime: 1000,
        interval: 10000,
        infiniteLoop: true,
        swipeable: true,
        emulateTouch: true,
    };


    return (
        <SectionLayout
            noYPadding
            scrollId="brands"
            title={cityInfo?.data?.title ? `Popular Brands We Repair in ${cityInfo?.data?.title}, ${cityInfo?.data?.state_short}` : `Popular Brands We Repair`}
        >
            <div className='flex flex-wrap items-center justify-center gap-7'>
                <Carousel {...(carouselProps as CarouselProps)}>
                    {[...Array(3)].map((item, i) => (
                        <div key={i} className='flex flex-wrap justify-center px-[5%] md:px-[15%] lg:px-[20%] gap-8 select-none pb-20'>
                            {
                                brands?.data?.filter(item => !!item?.logo?.url).slice(i * 8, (i + 1) * 8).map(brand =>
                                    <Link href={!!city ? `/appliance-repair/${state}/${city}/brand/${brand.text.toLocaleLowerCase()}` : `/brand/${brand.text.toLocaleLowerCase()}`}>
                                        <motion.div
                                            key={brand.id}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            whileHover={{ scale: 1.2 }}
                                            transition={{
                                                duration: 0.4,
                                                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                                            }}
                                        >
                                            <Image
                                                height={50}
                                                width={100}
                                                alt={brand.text}
                                                src={brand?.logo?.url || ''}
                                                className='brand-logo w-full h-auto max-h-[40px] max-w-[150px]'
                                            />
                                        </motion.div>
                                    </Link>
                                )
                            }
                        </div>
                    ))}
                </Carousel>
            </div>
        </SectionLayout >
    );
};
