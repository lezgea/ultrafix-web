"use client";

import React from 'react';
import SectionLayout from '@components/layout/section-layout';
import { ExpandableInfoSection } from '@components/shared';
import { FAQ_LIST } from 'constants/faq';
import { BLOGS_LIST } from 'constants/blogs';
import BlogItem from '../blog-item';


export const BlogSection: React.FC = () => {
    const [isMounted, setIsMounted] = React.useState(false);

    // This ensures the component only runs on the client
    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <SectionLayout
            scrollId="blog"
            title="UltraFix Info Hub"
            description="Discover helpful tips, expert advice, and the latest updates in the world of appliance repair on our blog. From troubleshooting common appliance issues to understanding when it’s time for professional service, we’re here to help you keep your home running smoothly. Explore practical guides, maintenance hacks, and industry insights tailored to save you time and money."
            noYPadding
        >
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 pb-40">
                {
                    BLOGS_LIST.map(item =>
                        <BlogItem
                            key={item.id}
                            {...item}
                        />
                    )
                }
            </div>
        </SectionLayout>
    );
};
