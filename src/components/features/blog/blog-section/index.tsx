"use client";

import React from 'react';
import SectionLayout from '@components/layout/section-layout';
import BlogItem from '../blog-item';
import { IBlogItem } from '@api/types/blog-types';
import { useLazyGetAllBlogsQuery } from '@api/blogs-api';


interface IBlogSectionProps {
    data?: IBlogItem[],
}

export const BlogSection: React.FC<IBlogSectionProps> = (props) => {
    let { data } = props

    const [currentPage, setCurrentPage] = React.useState<number>(0);
    const [totalPages, setTotalPages] = React.useState<number>(1);
    const [triggerGetBlogs, { data: blogsData, error, isLoading }] = useLazyGetAllBlogsQuery();

    const itemsPerPage = 10;

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

    return (
        <SectionLayout
            scrollId="blog"
            title="UltraFix Info Hub"
            description="Discover helpful tips, expert advice, and the latest updates in the world of appliance repair on our blog. From troubleshooting common appliance issues to understanding when it’s time for professional service, we’re here to help you keep your home running smoothly. Explore practical guides, maintenance hacks, and industry insights tailored to save you time and money."
            noYPadding
        >
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 pb-40">
                {
                    blogsData?.data?.map((item: any) =>
                        <BlogItem key={item.id} {...item} />
                    )
                }
            </div>
            {/* Pagination Controls */
                !!blogsData?.count &&
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
