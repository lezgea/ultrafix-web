"use client"

import React from 'react';
import PageLayout from '@components/layout/page-layout';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useGetBlogInfoQuery } from '@api/blogs-api';
import Link from 'next/link';
import SectionLayout from '@components/layout/section-layout';



const BlogInfo: React.FC = () => {

    const { blogId } = useParams();
    const bId = Array.isArray(blogId) ? blogId[0] : blogId;

    const { data: blogInfo, error, isLoading, refetch } = useGetBlogInfoQuery({ id: bId }, { skip: !bId });


    return (
        <PageLayout title="The number one Appliance Repair service in US">
            <SectionLayout noYPadding>
                <div className='mt-[3rem] mb-5 space-y-5'>
                    <nav className="text-sm flex justify-start items-center text-gray-600 space-x-3">
                        <Link href="/" className="text-primary hover:text-primaryDark">Home Page</Link>
                        <span className="text-lg">&gt;</span>
                        <Link href={`/blog`} className="text-primary hover:text-primaryDark">Blog</Link>
                        <span className="text-lg">&gt;</span>
                        <span>{blogInfo?.data?.title}</span>
                    </nav>
                    <h1 className="text-[1.7rem] leading-[2.5rem] md:text-[2.5rem] md:leading-[4rem] font-semibold text-primaryDark">
                        {blogInfo?.data?.title}
                    </h1>
                </div>
            </SectionLayout>
            <SectionLayout noYPadding>
                <div className='relative overflow-hidden rounded-2xl'>
                    <Image
                        src={blogInfo?.data?.cover?.url || ''}
                        width={1200} // Adjust width and height based on your layout
                        height={400}
                        className="w-full h-[400px] object-cover"
                        alt={"Blog banner"}
                        loading="lazy"
                        sizes="(max-width: 1200px) 100vw, 100vw"
                    />
                </div>
            </SectionLayout>
            <SectionLayout noYPadding>
                <div className="mt-10" dangerouslySetInnerHTML={{ __html: blogInfo?.data?.content || '' }} />
            </SectionLayout>
        </PageLayout>
    );
};

export default BlogInfo;
