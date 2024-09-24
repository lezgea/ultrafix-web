import { CallIcon } from '@assets/icons';
import SectionLayout from '@components/layout/section-layout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const LocationsBanner: React.FC = () => {
    return (
        <SectionLayout>
            <div className="flex flex-col w-full absolute space-y-5 text-end justify-end items-end" >
                <h2 className="text-[3rem] leading-[3rem] font-semibold text-primaryDark">
                    <span className='text-primary'>Appliance</span> repair services
                </h2>
                <h3 className="text-[4rem] leading-[4rem] max-w-[60%] font-semibold text-primaryDark">
                    in <span className='text-primary'>Houston, TX</span>
                </h3>
                {/* <div className='flex items-center justify-center gap-2'>
                    <CallIcon className='fill-gray-400 h-[40px]' />
                    <span className='text-[2rem] font-regmed text-primaryDark'>(888) 998-6263</span>
                </div> */}
                <p className="text-xl font-light max-w-[45%] text-gray-500">
                    UltraFix Appliance Repair services are a call away. We can be with you on the same day
                </p>
                <Link
                    href="/"
                    className="inline-flex w-auto text-center items-center px-6 py-[12px] text-lg text-white transition-all bg-primary rounded-xl sm:w-auto hover:shadow-lg hover:shadow-neutral-300 hover:-translate-y-px shadow-neutral-300 focus:shadow-none animate-button"
                    aria-label="See our races"
                >
                    Book a Service
                </Link>
            </div >
            <div className="flex -ml-[120px] animate-left-svg">
                <Image
                    src="/img/houston_car.webp"
                    width={500}
                    height={300}
                    className="w-auto h-auto"
                    alt="UltraFix Car Image"
                    loading="lazy"
                    sizes="(max-width: 1200px) 100vw, (min-width: 1200px) 1000px"
                />
            </div>
        </SectionLayout>
    )
}
