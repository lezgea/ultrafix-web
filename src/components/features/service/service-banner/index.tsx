import SectionLayout from '@components/layout/section-layout';
import { SERVICES } from 'constants/services';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


interface IServiceBannerProps {
    service: keyof typeof SERVICES;
}

export const ServiceBanner: React.FC<IServiceBannerProps> = ({ service }) => {
    return (
        <SectionLayout noYPadding>
            <div className='w-full flex flex-col lg:flex-row py-10'>
                <div className='w-full relative flex flex-col justify-between py-20'>
                    <div className='space-y-4 z-10'>
                        <h2 className='text-primaryDark text-5xl font-medium'><strong className='text-primary font-medium'>{SERVICES[service].title}</strong> repair</h2>
                        <p className='text-gray-600 text-xl mb-10'>{SERVICES[service].subTitle}</p>
                    </div>
                    <div className='z-0 h-[13rem] w-[13rem] rounded-full bg-gray-100 absolute top-10 left-[33%]'></div>
                    <div className='z-0 h-[400px] w-[400px] rounded-full bg-gray-100 absolute top-[200px] -left-[140px]'></div>
                    <div className='z-0 h-[100px] w-[100px] rounded-full bg-gray-100 absolute top-[250px] left-[450px]'></div>
                    <div className='space-y-4 z-10'>
                        <Link
                            href="/"
                            className="inline-flex w-auto text-center items-center px-6 py-[12px] text-lg text-white transition-all bg-primary rounded-xl sm:w-auto hover:shadow-lg hover:shadow-neutral-300 hover:-translate-y-px shadow-neutral-300 focus:shadow-none animate-button"
                            aria-label="See our races"
                        >
                            Book a Service
                        </Link>
                        <p className='text-gray-600 text-xl'>Average price for {SERVICES[service].title.toLowerCase()} repair without parts</p>
                        <p className='text-primaryDark text-5xl font-medium'>$ {SERVICES[service].price}</p>
                    </div>
                </div>
                <div className='w-full flex items-end justify-end -mr-[50px] animate-right-svg'>
                    <Image
                        src={`/img/services/${SERVICES[service].value}.webp`}
                        width={300}
                        height={300}
                        className="w-auto h-auto md:h-[600px]"
                        alt={`${SERVICES[service].title} Image`}
                        loading="lazy"
                        sizes="(max-width: 1200px) 600px, (min-width: 1200px) 600px"
                    />
                </div>
            </div>
        </SectionLayout>
    )
}