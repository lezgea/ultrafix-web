"use client";

import React from 'react';
import SectionLayout from '@components/layout/section-layout';
import { BLOGS_LIST } from 'constants/blogs';
import { BlogListItem } from '@components/features/blog';


export const AdminBlogsList: React.FC = () => {
    const [isMounted, setIsMounted] = React.useState(false);

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
                    BLOGS_LIST.map(item =>
                        <BlogListItem
                            key={item.id}
                            {...item}
                        />
                    )
                }
            </div>
        </SectionLayout>
    );
};
