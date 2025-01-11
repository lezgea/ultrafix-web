"use client";

import SectionLayout from '@components/layout/section-layout';
import { ABOUT_US_IMAGES } from 'constants/about-us';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { CarouselProps } from 'react-responsive-carousel';
import { REVIEWS } from 'constants/reviews';
import { StarsIcon } from '@assets/icons';
import Link from 'next/link';

// Dynamically import the Carousel to avoid SSR issues
const Carousel = dynamic(() => import("react-responsive-carousel").then(mod => mod.Carousel), {
    ssr: false, // Disable server-side rendering for this component
});

export const ReviewsSection: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);

    // This ensures the component only runs on the client
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const carouselProps: Partial<CarouselProps> = {
        showIndicators: false,
        showArrows: true,
        autoPlay: true,
        showThumbs: false,
        transitionTime: 1000,
        interval: 10000,
        infiniteLoop: true,
    };

    return (
        <SectionLayout
            scrollId="about_us"
            title="Reviews"
            description="Our pledge is to establish lasting relationships with our customers by exceeding their expectations and gaining their trust through exceptional performance by each member of our service team. We have been providing top service!"
        >
            {isMounted && (
                <div className="rounded-3xl overflow-hidden">
                    <Carousel {...(carouselProps as CarouselProps)}>
                        {REVIEWS.map((review, i) => (
                            <div key={i} className='flex justify-center p-5 gap-8'>
                                {
                                    review.items.map((item, j) =>
                                        <div key={j} className='flex flex-col shadow-lg max-w-[32%] rounded-xl p-4 text-start gap-2'>
                                            <div className='flex flex-col gap-2'>
                                                <Image
                                                    src={item.userAvatar || '/'}
                                                    alt={item.userName}
                                                    width={40}
                                                    height={40}
                                                    className='bg-primary text-white min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px] rounded-full flex items-center justify-center text-lg'
                                                />
                                                <div className='flex flex-col items-start justify-start text-start gap-2'>
                                                    <div className='font-medium text-md'>{item.userName}</div>
                                                    <StarsIcon className="w-[90px] h-[15px]" />
                                                </div>
                                            </div>
                                            <div className='truncate-text-4 text-[13px]'>{item.description}</div>
                                        </div>
                                    )
                                }
                            </div>
                        ))}
                    </Carousel>
                </div>
            )}
        </SectionLayout>
    );
};
