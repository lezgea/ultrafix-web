"use client";

import React from 'react';
import Link from 'next/link';
import PageLayout from '@components/layout/page-layout';
import SectionLayout from '@components/layout/section-layout';
import { AdminBlogsList } from '@components/features/admin';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';
import { useRouter } from 'next/navigation';
import withProtectedRoute from '@utils/withProtectedRoute';
import BlogImageUploader from '@components/features/admin/blog-image-uploader';


const AdminBlogs: React.FC = () => {
    const router = useRouter();
    const { isAuthenticated } = useSelector((state: RootState) => state.user);

    // if (!isAuthenticated) router.push('/')
    console.log('@@@@@', isAuthenticated)

    return (
        <PageLayout>
            <SectionLayout noYPadding>
                <div className='flex items-center justify-between'>
                    <h2 className="text-[1.7rem] leading-[2.5rem] md:text-[2.5rem] md:leading-[4rem] text-center font-semibold text-primaryDark">
                        Create Blog
                    </h2>
                    {/* <Link
                        href="/admin/blogs/create"
                        className="px-10 h-[45px] flex items-center justify-center font-regmed bg-primary text-white py-2 rounded-lg ring-2 ring-primary hover:shadow-lg hover:shadow-neutral-300 hover:-tranneutral-y-px focus:outline-none focus:ring-2 focus:ring-primaryDark focus:shadow-none focus:bg-primaryDark transition duration-200 ease-in-out transform disabled:bg-gray-400 disabled:ring-gray-400 disabled:cursor-not-allowed"
                    >
                        Create Blog
                    </Link> */}
                </div>
            </SectionLayout>
            <SectionLayout noYPadding>
                <BlogImageUploader />
            </SectionLayout>
        </PageLayout>
    );
};

export default withProtectedRoute(AdminBlogs);
