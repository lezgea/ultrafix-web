"use client";

import React from 'react';
import SectionLayout from '@components/layout/section-layout';
import BlogItem from '../blog-item';
import { IBlogItem } from '@api/types/blog-types';
import { useLazyGetAllBlogsQuery } from '@api/blogs-api';
import { ABOUT_US_IMAGES } from 'constants/about-us';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { CarouselProps } from 'react-responsive-carousel';
import Link from 'next/link';


// Dynamically import the Carousel to avoid SSR issues
const Carousel = dynamic(() => import("react-responsive-carousel").then(mod => mod.Carousel), {
    ssr: false, // Disable server-side rendering for this component
});

interface IBlogSectionProps {
    noYPadding?: boolean,
    hideCarousel?: boolean,
    data?: IBlogItem[],
}

export const BlogSection: React.FC<IBlogSectionProps> = (props) => {
    let { noYPadding, hideCarousel, data } = props

    const [currentPage, setCurrentPage] = React.useState<number>(0);
    const [totalPages, setTotalPages] = React.useState<number>(1);
    const [triggerGetBlogs, { data: blogsData, error, isLoading }] = useLazyGetAllBlogsQuery();

    const itemsPerPage = 4;

    React.useEffect(() => {
        triggerGetBlogs({
            skip: currentPage, limit: itemsPerPage
        }).then((response: any) => {
            if (response?.data?.count) {
                setTotalPages(Math.ceil(response.data.count / itemsPerPage));
            } else {
                setTotalPages(1)
            }
        });
    }, [currentPage, triggerGetBlogs]);


    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const [isMounted, setIsMounted] = React.useState(false);

    // This ensures the component only runs on the client
    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    const carouselProps: Partial<CarouselProps> = {
        showIndicators: false,
        showArrows: true,
        autoPlay: true,
        showThumbs: false,
        transitionTime: 1000,
        interval: 3000,
        infiniteLoop: true,
    };

    return (
        <SectionLayout
            noYPadding={noYPadding}
            title="UltraFix Info Hub"
            description="Discover helpful tips, expert advice, and the latest updates in the world of appliance repair on our blog. From troubleshooting common appliance issues to understanding when it’s time for professional service, we’re here to help you keep your home running smoothly. Explore practical guides, maintenance hacks, and industry insights tailored to save you time and money."
        >
            {!hideCarousel && isMounted && (
                <div className="rounded-3xl overflow-hidden">
                    <Carousel {...(carouselProps as CarouselProps)}>
                        {blogsData?.data?.map(({ id, title, cover }) => (
                            <Link key={id} href={`/blog/${id}`} className='relative'>
                                <Image
                                    src={cover.url}
                                    width={1200}
                                    height={400}
                                    className="w-auto h-[400px] object-cover"
                                    alt={cover.name}
                                    loading="lazy"
                                    sizes="(max-width: 1200px) 100vw, 1000px"
                                />
                                <div className="bg-gradient-to-r from-primaryDark via-primary to-primaryDark text-white text-2xl font-medium py-3 hover:underline">
                                    {title}
                                </div>
                            </Link>

                        ))}
                    </Carousel>
                </div>
            )}

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                {
                    blogsData?.data?.map((item: any) =>
                        <BlogItem key={item.id} {...item} />
                    )
                }
            </div>
            {/* Pagination Controls */
                !hideCarousel && !!blogsData?.count && (blogsData?.count > itemsPerPage) &&
                <div className="flex justify-between items-center mt-6">
                    <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 0}
                        className={`px-4 py-2 rounded-md ${currentPage === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-primary text-white hover:bg-primaryDark'}`}
                    >
                        Previous
                    </button>
                    <span>Page {currentPage + 1} of {totalPages}</span>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage >= totalPages - 1}
                        className={`px-4 py-2 rounded-md ${currentPage >= totalPages - 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-primary text-white hover:bg-primaryDark'}`}
                    >
                        Next
                    </button>
                </div>
            }
        </SectionLayout>
    );
};
