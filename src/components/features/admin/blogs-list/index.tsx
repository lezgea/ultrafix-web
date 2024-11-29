"use client";

import React from 'react';
import SectionLayout from '@components/layout/section-layout';
import { BLOGS_LIST } from 'constants/blogs';
import { BlogListItem } from '@components/features/blog';
import Link from 'next/link';
import { useLazyGetAllBlogsQuery } from '@api/blogs-api';


export const AdminBlogsList: React.FC = () => {
    const [isMounted, setIsMounted] = React.useState<boolean>(false);

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


    // if (datasetsLoading || isLoading) {
    //     return <CompetitionsSkeleton />;
    // }

    // This ensures the component only runs on the client
    React.useEffect(() => {
        setIsMounted(true);
    }, []);


    return (
        <SectionLayout
            scrollId="blog"
            noYPadding
        >
            <div className="rounded-3xl space-y-2">
                {
                    blogsData?.data?.map(item =>
                        <BlogListItem key={item.id} {...item} />
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
