import React from 'react';
import PageLayout from '@components/layout/page-layout';
import { AboutUsSection, BlogSection, BrandsSection, CommercialServicesSection, LocationsSection, ResidentialServicesSection, WhyUsSection } from '@components/features';
import Image from 'next/image';
import { BlogsList } from '@components/features/admin';
import Link from 'next/link';
import SectionLayout from '@components/layout/section-layout';


const AdminBlogs: React.FC = () => {
    return (
        <PageLayout title="The number one Appliance Repair service in US">
            <SectionLayout
                noYPadding
            >
                <div className='flex items-center justify-between mb-10'>
                    <h2 className="text-[1.7rem] leading-[2.5rem] md:text-[2.5rem] md:leading-[4rem] text-center font-semibold text-primaryDark">
                        Blogs list
                    </h2>
                    <Link
                        href="/admin/blogs/create"
                        className="px-10 h-[45px] flex items-center justify-center font-regmed bg-primary text-white py-2 rounded-lg ring-2 ring-primary hover:shadow-lg hover:shadow-neutral-300 hover:-tranneutral-y-px focus:outline-none focus:ring-2 focus:ring-primaryDark focus:shadow-none focus:bg-primaryDark transition duration-200 ease-in-out transform disabled:bg-gray-400 disabled:ring-gray-400 disabled:cursor-not-allowed"
                    >
                        Create Blog
                    </Link>
                </div>
            </SectionLayout>
            <BlogsList />
        </PageLayout>
    );
};

export default AdminBlogs;
