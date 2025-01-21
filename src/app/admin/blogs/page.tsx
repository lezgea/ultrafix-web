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


const AdminBlogs: React.FC = () => {
    const router = useRouter();
    const { isAuthenticated } = useSelector((state: RootState) => state.user);

    // if (!isAuthenticated) router.push('/')
    console.log('@@@@@', isAuthenticated)

    return (
        <PageLayout>
            <SectionLayout noYPadding>
                <div>
                    <nav className="text-sm flex justify-start items-center text-gray-600 space-x-3">
                        <Link href="/" className="hover:text-primary">Home Page</Link>
                        <span className="text-lg">&gt;</span>
                        <span>Admin Blogs</span>
                    </nav>
                    <div className='flex items-center justify-between py-5'>
                        <h2 className="text-[1.7rem] leading-[2.5rem] md:text-[2.5rem] text-center font-semibold text-primaryDark">
                            Blogs List
                        </h2>
                        <Link
                            href="/admin/blogs/create"
                            className="px-10 h-[45px] flex items-center justify-center font-regmed bg-primaryDark text-white py-2 rounded-lg ring-2 ring-primaryDark hover:shadow-lg hover:shadow-neutral-300 hover:-tranneutral-y-px focus:outline-none focus:ring-2 focus:ring-primaryDark focus:shadow-none focus:bg-primaryDark transition duration-200 ease-in-out transform disabled:bg-gray-400 disabled:ring-gray-400 disabled:cursor-not-allowed"
                        >
                            Create Blog
                        </Link>
                    </div>
                </div>
            </SectionLayout>
            <AdminBlogsList />
        </PageLayout>
    );
};

export default withProtectedRoute(AdminBlogs);
