import SectionLayout from '@components/layout/section-layout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


export const BannerSection: React.FC = () => {
    return (
        <SectionLayout>
            <div className="flex flex-col w-full absolute space-y-5 text-end justify-end items-end" >
                <h1 className="text-[4rem] leading-[5rem] max-w-[60%] font-semibold text-gray-800">
                    Make Appliances Great Again !
                </h1>
                <p className="text-xl text-gray-600">
                    Call now and book your service technician
                </p>
                <Link
                    href="/"
                    className="inline-flex w-auto text-center items-center px-6 py-3 text-white transition-all bg-primary rounded-xl sm:w-auto hover:shadow-lg hover:shadow-neutral-300 hover:-translate-y-px shadow-neutral-300 focus:shadow-none animate-button"
                    aria-label="See our races"
                >
                    Book Now
                </Link>
            </div >
            <div className="flex -ml-[120px] animate-left-svg">
                <Image
                    src="/img/houston_car.webp"
                    width={500}
                    height={300}
                    className="w-auto"
                    alt="UltraFix Car Image"
                    loading="lazy"
                    sizes="(max-width: 1200px) 100vw, 1000px"
                />
            </div>
        </SectionLayout>
    )
}