"use client";

import SectionLayout from '@components/layout/section-layout';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { CarouselProps } from 'react-responsive-carousel';
import { REVIEWS, REVIEWS_MOB } from 'constants/reviews';
import { StarsIcon } from '@assets/icons';
import { ReviewModal } from '@components/shared/review-modal';
import * as motion from "framer-motion/client"

// Dynamically import the Carousel to avoid SSR issues
const Carousel = dynamic(() => import("react-responsive-carousel").then(mod => mod.Carousel), {
    ssr: false, // Disable server-side rendering for this component
});

export const ReviewsSection: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [reviewModal, setReviewModal] = React.useState<{ visible: boolean, userName?: string, userAvatar?: string, description?: string }>({ visible: false });

    // This ensures the component only runs on the client
    useEffect(() => {
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
            scrollId="reviews"
            title="Reviews"
            description="Our pledge is to establish lasting relationships with our customers by exceeding their expectations and gaining their trust through exceptional performance by each member of our service team. We have been providing top service!"
        >
            {isMounted && (
                <div className="hidden md:flex md:flex-col rounded-3xl overflow-hidden">
                    <Carousel {...(carouselProps as CarouselProps)}>
                        {REVIEWS.map((review, i) => (
                            <div key={i} className='flex justify-center p-5 gap-8 select-none'>
                                {
                                    review.items.map((item, j) =>
                                        <motion.div
                                            key={j}
                                            className='flex flex-col shadow-lg max-w-[32%] rounded-xl p-4 text-start gap-2 mb-10 cursor-pointer hover:shadow-xl'
                                            onClick={() => setReviewModal({
                                                visible: true,
                                                userAvatar: item.userAvatar,
                                                userName: item.userName,
                                                description: item.description,
                                            })}
                                            initial={{ opacity: 0, x: -100 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className='flex flex-col gap-2'>
                                                <Image
                                                    src={item.userAvatar || '/'}
                                                    alt={item.userName}
                                                    width={40}
                                                    height={40}
                                                    className='text-white min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px] rounded-full flex items-center justify-center text-lg'
                                                />
                                                <div className='flex flex-col items-start justify-start text-start gap-2'>
                                                    <div className='font-medium text-md'>{item.userName}</div>
                                                    <StarsIcon className="w-[90px] h-[15px]" />
                                                </div>
                                            </div>
                                            <div className='truncate-text-4 text-[13px]'>{item.description}</div>
                                        </motion.div>
                                    )
                                }
                            </div>
                        ))}
                    </Carousel>
                </div>
            )}

            {isMounted && (
                <div className="flex flex-col md:hidden rounded-3xl overflow-hidden">
                    <Carousel {...(carouselProps as CarouselProps)}>
                        {REVIEWS_MOB.map((review, i) => (
                            <div key={i} className='flex justify-center p-2 gap-4'>
                                {
                                    review.items.map((item, j) =>
                                        <div
                                            key={j}
                                            className='flex flex-col shadow-lg rounded-xl p-4 text-start gap-2 mb-10'
                                            onClick={() => setReviewModal({
                                                visible: true,
                                                userAvatar: item.userAvatar,
                                                userName: item.userName,
                                                description: item.description,
                                            })}
                                        >
                                            <div className='flex flex-col gap-2'>
                                                <Image
                                                    src={item.userAvatar || '/'}
                                                    alt={item.userName}
                                                    width={40}
                                                    height={40}
                                                    className='text-white min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px] rounded-full flex items-center justify-center text-lg'
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

            <ReviewModal
                visible={reviewModal.visible}
                content={{
                    userName: reviewModal.userName || '',
                    userAvatar: reviewModal.userAvatar || '',
                    description: reviewModal.description || ''
                }}
                onClose={() => setReviewModal({ ...reviewModal, visible: false })}
            />
        </SectionLayout>
    );
};
