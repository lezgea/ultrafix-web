"use client";

import SectionLayout from '@components/layout/section-layout';
import Image from 'next/image';
import React from 'react';
import { BRANDS, BRANDS_LIST, BRANDS_MOB } from 'constants/brands';
import * as motion from "framer-motion/client"
import { useLazyGetAllBrandsQuery } from '@api/brands-api';
import Link from 'next/link';



export const BrandsSection: React.FC = () => {

    const [triggerGetBrands, { data: brands, isLoading }] = useLazyGetAllBrandsQuery();


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
            title="Brands We Repair"
        >
            <div className='flex flex-wrap items-center justify-center gap-7 pb-20 md:pb-10'>
                {
                    brands?.data?.filter(item => !!item?.logo?.url).map(brand =>
                        <Link href={`/brand/${brand.id}`}>
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
