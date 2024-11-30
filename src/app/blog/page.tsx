import React from 'react';
import { Metadata } from 'next';
import PageLayout from '@components/layout/page-layout';
import { BlogSection } from '@components/features';
import Image from 'next/image';


export const metadata: Metadata = {
    title: "Blog | UltraFix Appliance Repair",
};


const Blog: React.FC = () => {

    return (
        <PageLayout
            largeYPadding
            title="The number one Appliance Repair service in US"
        >
            {/* <Image
                src="/img/blog/blog_banner.webp"
                width={1200} // Adjust width and height based on your layout
                height={400}
                className="w-full h-auto my-6"
                alt={"Blog banner"}
                loading="lazy"
                sizes="(max-width: 1200px) 100vw, 100vw"
            /> */}

            <BlogSection />
        </PageLayout>
    );
};

export default Blog;
