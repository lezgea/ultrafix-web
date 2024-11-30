import React from 'react';
import { Metadata } from 'next';
import PageLayout from '@components/layout/page-layout';
import { AboutUsSection, ApplySection, BlogSection, BrandsSection, CommercialServicesSection, FAQSection, LocationsSection, ResidentialServicesSection, WhyUsSection } from '@components/features';
import Image from 'next/image';
import { AdminBlogsList } from '@components/features/admin';


export const metadata: Metadata = {
    title: "Blog | UltraFix Appliance Repair",
};


const Blog: React.FC = () => {

    return (
        <PageLayout title="The number one Appliance Repair service in US">
            <Image
                src="/img/blog/blog_banner.webp"
                width={1200} // Adjust width and height based on your layout
                height={400}
                className="w-full h-auto my-6"
                alt={"Blog banner"}
                loading="lazy"
                sizes="(max-width: 1200px) 100vw, 100vw"
            />
            <BlogSection />
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

export default Blog;
