import React from 'react';
import SectionLayout from '@components/layout/section-layout';
import Image from 'next/image';
import Link from 'next/link';
import * as motion from "framer-motion/client";


export const BannerSection: React.FC = () => {
    return (
        <SectionLayout>
            <div className="flex flex-col w-full absolute space-y-5 text-end justify-end items-end">
                <h2 className="text-[4rem] leading-[5rem] max-w-[60%] font-semibold text-primaryDark">
                    <span className='text-primary'>Make</span> Appliances <span className='text-primary'>Great</span> Again !
                </h2>
                <p className="text-2xl font-light text-gray-500">Call now and book your service technician</p>
                <Link
                    href="/"
                    className="inline-flex w-auto text-center items-center px-6 py-[12px] text-lg text-white transition-all bg-primary rounded-xl sm:w-auto hover:shadow-lg hover:shadow-neutral-300 hover:-translate-y-px shadow-neutral-300 focus:shadow-none animate-button"
                    aria-label="See our races"
                >
                    Book a Service
                </Link>
            </div>
            <motion.div
                initial={{ opacity: 0, x: -300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="flex -ml-[120px]"
            >
                <Image
                    src="/img/cars/houston_car.webp"
                    width={700}
                    height={700}
                    className="w-auto h-[700px]"
                    alt="UltraFix Car Image"
                    loading="lazy"
                    // placeholder="blur"
                    sizes="(max-width: 1200px) 100vw, (min-width: 1200px) 1000px"
                />
            </motion.div>

        </SectionLayout>
    )
};
