import React from 'react';
import PageLayout from '@components/layout/page-layout';
import BlogTracker from '@components/features/blog/blog-tracker';


interface IBlogProps {
    params: {
        blogId: string | string[];
    };
}

export async function generateMetadata({ params }: IBlogProps) {
    let { blogId } = params;

    return {
        title: "Blog | Appliance Repair Services | UltraFix®",
        description: "Ultrafix® Provides Fast, Reliable Appliance Repair Services. Get Same-Day Repairs for All Major Brands. Satisfaction Guaranteed—call Now!",
        keywords: [
            'Blog',
            'Apppliance Blog',
            'Appliance Repair Blog',
            'The best blog about appliance repair',
            'The best appliance repair blog',
            'Appliance Repair',
            `Appliance Repair Service`,
            'appliance repair near me',
            'appliance repair',
            'appliance repair service',
            'repair appliances',
            'service appliance repair',
            'Appliance Repair',
            'Local Appliance Repair',
            'Emergency Appliance Repair',
            'Same Day Appliance Repair',
            'Affordable Appliance Repair',
            'Certified Appliance Technicians',
            'Refrigerator Repair Houston',
            'Dishwasher Repair Houston',
            'Oven and Stove Repair',
            'Microwave Repair',
            'Freezer and Ice Maker Repair',
            'Garbage Disposal Repair',
            'Washer and Dryer Repair',
            'Major Appliance Repair',
            'Residential Appliance Repair',
            'Commercial Appliance Repair',
            'Houston Appliance Service',
            'Best Appliance Repair in',
            'Nearby Appliance Repair',
            'The number one Appliance Repair service in US',
        ],
        robots: {
            index: true,
            follow: true,
            nocache: false,
            googleBot: {
                index: true,
                follow: true,
                noarchive: false,
            },
        },
        openGraph: {
            title: "Blog | Appliance Repair Services | UltraFix®",
            description: "Ultrafix® Provides Fast, Reliable Appliance Repair Services. Get Same-Day Repairs for All Major Brands. Satisfaction Guaranteed—call Now!",
            url: `https://ultrafix.com/blog/${blogId}`,
            images: [
                {
                    url: `https://ultrafix.com/img/main_banner.webp`,
                    width: 1200,
                    height: 630,
                    alt: `UltraFix Appliance Repair Service`,
                },
            ],
            locale: 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: "Blog | Appliance Repair Services | UltraFix®",
            description: "Ultrafix® Provides Fast, Reliable Appliance Repair Services. Get Same-Day Repairs for All Major Brands. Satisfaction Guaranteed—call Now!",
            images: [`https://ultrafix.com/img/main_banner.webp`],
        },
        alternates: {
            canonical: `https://ultrafix.com/blog/${blogId}`,
        },
    };
}

const BlogInfo: React.FC<IBlogProps> = ({ params }) => {
    let { blogId } = params;

    return (
        <PageLayout>
            <BlogTracker blogId={blogId} />
        </PageLayout>
    );
};

export default BlogInfo;
