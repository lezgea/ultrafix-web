"use client"

import React from 'react';
import { Metadata } from 'next';
import PageLayout from '@components/layout/page-layout';
import { AboutUsSection, ApplySection, BlogSection, BrandsSection, CommercialServicesSection, FAQSection, LocationsSection, ResidentialServicesSection, WhyUsSection } from '@components/features';
import Image from 'next/image';
import { AdminBlogsList } from '@components/features/admin';
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
            <section className={`w-full px-5 md:px-10`}>
                <div className="relative w-full flex flex-col container mx-auto max-w-[1200px] space-y-10">
                    <div className='space-y-2'>
                        {/* <h1 className="text-[1.7rem] leading-[2.5rem] md:text-[2.5rem] md:leading-[4rem] font-semibold text-primaryDark">
                            {blogInfo?.data?.title}
                        </h1> */}
                        {/* <h2 className="text-sm font-light text-center text-gray-500 md:px-20">{blogInfo?.data?.description}</h2> */}
                    </div>
                    <p>
                        <div dangerouslySetInnerHTML={{ __html: blogInfo?.data?.content || '' }} />
                    </p>
                </div>
            </section>
            {/* <BlogSection /> */}
            {/* <AdminBlogsList />
            <LocationsSection />
            <ResidentialServicesSection />
            <CommercialServicesSection />
            <AboutUsSection />
            <BrandsSection />
            <WhyUsSection /> */}
        </PageLayout>
    );
};

export default BlogInfo;
