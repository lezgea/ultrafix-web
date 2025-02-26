"use client";

import SectionLayout from '@components/layout/section-layout';
import Image from 'next/image';
import React from 'react';
import { BRANDS, BRANDS_LIST, BRANDS_MOB } from 'constants/brands';
import * as motion from "framer-motion/client"
import { useLazyGetAllBrandsQuery } from '@api/brands-api';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useGetCityInfoQuery } from '@api/location-api';



export const BrandsSection: React.FC = () => {
    const { city, state } = useParams();

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


    return (
        <SectionLayout
            scrollId="brands"
            title={cityInfo?.data?.title ? `Popular Brands We Repair in ${cityInfo?.data?.title}, ${cityInfo?.data?.state_short}` : `Popular Brands We Repair`}
        >
            <div className='flex flex-wrap items-center justify-center gap-7 pb-20 md:pb-10'>
                {
                    brands?.data?.filter(item => !!item?.logo?.url).map(brand =>
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
        </SectionLayout >
    );
};
