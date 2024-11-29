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

    const itemsPerPage = 6;

    React.useEffect(() => {
        triggerGetBlogs({
            skip: currentPage, limit: itemsPerPage
        }).then((response: any) => {
            // if (response?.data?.totalElements) {
            //     setTotalPages(Math.ceil(response.data.totalElements / itemsPerPage));
            // } else {
            //     setTotalPages(1)
            // }
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

    console.log('@@@@@', blogsData)

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
        </SectionLayout>
    );
};
