"use client";

import React from 'react';
import PageLayout from '@components/layout/page-layout';
import SectionLayout from '@components/layout/section-layout';
import { AboutUsSection, BrandsSection, ContactSection, ServiceBanner, WhyUsSection } from '@components/features';
import Head from 'next/head';
import { RESIDENTIAL_SERVICES } from 'constants/services';


interface Metadata {
    title: string;
    description: string;
    keywords: string[]; // Ensure this is always an array of strings
    openGraph: {
        type: string;
        title: string;
        description: string;
        url: string;
        images: {
            width: number;
            height: number;
            alt: string;
            url: string;
        }[];
        locale: string;
        siteName: string;
    };
    twitter: {
        title: string;
        card: string;
        description: string;
        images: string[];
    };
    alternates: {
        canonical: string;
    };
}


interface ServiceProps {
    params: {
        service: keyof typeof RESIDENTIAL_SERVICES;
    };
}

const ResidentialServiceDetailPage = ({ params }: ServiceProps) => {
    const { service } = params;

    const metadata: Metadata = {
        title: `Residential ${RESIDENTIAL_SERVICES[service].title} repair | UltraFix™`,
        description: `Get Professional ${RESIDENTIAL_SERVICES[service].title} repair by Ultrafix™. Same-Day Service, Certified Technicians, and High-Quality Parts for All Your Appliance Repair Needs.`,
        keywords: [
            ...RESIDENTIAL_SERVICES[service].keywords,
            'appliance repair near me',
            'appliance repair',
            'appliance repair service',
            'commercial appliance repair',
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
        ],
        openGraph: {
            type: 'website',
            title: 'UltraFix Appliance Repair LLC',
            description: "Client satisfaction is at the forefront of our minds at UltraFix Appliance Repair Service. Our business model is built on respect, promptness, honesty, and taking pride in our work. When you choose us for your appliance repair, you learn how closely we hold to these values.",
            url: `https://ultrafix.com/`,
            images: [
                {
                    width: 800,
                    height: 600,
                    alt: 'UltraFix Appliance Repair',
                    url: `https://ultrafix.com/_next/image?url=%2Fassets%2Fmock_images%2Fabout_us_media.png&w=1920&q=75`,
                },
            ],
            locale: 'en_US',
            siteName: 'UltraFix Appliance Repair',
        },
        twitter: {
            title: 'UltraFix Appliance Repair LLC',
            card: 'summary_large_image',
            description: "Client satisfaction is at the forefront of our minds at UltraFix Appliance Repair Service. Our business model is built on respect, promptness, honesty, and taking pride in our work. When you choose us for your appliance repair, you learn how closely we hold to these values.",
            images: [`https://ultrafix.com/_next/image?url=%2Fassets%2Fmock_images%2Fabout_us_media.png&w=1920&q=75`],
        },
        alternates: {
            canonical: `https://ultrafix.com/`,
        },
    };

    React.useEffect(() => {
        // Set document title
        document.title = metadata.title as string;

        // Create meta tags for description and other properties
        const metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        metaDescription.content = metadata.description as string;
        document.head.appendChild(metaDescription);

        const metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        metaKeywords.content = metadata.keywords.join(', ');
        document.head.appendChild(metaKeywords);

        // Open Graph meta tags
        // const metaOpenGraphTitle = document.createElement('meta');
        // metaOpenGraphTitle.property = 'og:title';
        // metaOpenGraphTitle.content = metadata.openGraph.title;
        // document.head.appendChild(metaOpenGraphTitle);

        // const metaOpenGraphDescription = document.createElement('meta');
        // metaOpenGraphDescription.property = 'og:description';
        // metaOpenGraphDescription.content = metadata.openGraph.description;
        // document.head.appendChild(metaOpenGraphDescription);

        // const metaOpenGraphUrl = document.createElement('meta');
        // metaOpenGraphUrl.property = 'og:url';
        // metaOpenGraphUrl.content = metadata.openGraph.url;
        // document.head.appendChild(metaOpenGraphUrl);

        // const metaOpenGraphImage = document.createElement('meta');
        // metaOpenGraphImage.property = 'og:image';
        // metaOpenGraphImage.content = metadata.openGraph.images[0].url;
        // document.head.appendChild(metaOpenGraphImage);

        // Twitter meta tags
        const metaTwitterTitle = document.createElement('meta');
        metaTwitterTitle.name = 'twitter:title';
        metaTwitterTitle.content = metadata.twitter.title;
        document.head.appendChild(metaTwitterTitle);

        const metaTwitterDescription = document.createElement('meta');
        metaTwitterDescription.name = 'twitter:description';
        metaTwitterDescription.content = metadata.twitter.description;
        document.head.appendChild(metaTwitterDescription);

        const metaTwitterImage = document.createElement('meta');
        metaTwitterImage.name = 'twitter:image';
        metaTwitterImage.content = metadata.twitter.images[0];
        document.head.appendChild(metaTwitterImage);

        // Cleanup function to remove meta tags on component unmount
        return () => {
            document.head.removeChild(metaDescription);
            document.head.removeChild(metaKeywords);
            // document.head.removeChild(metaOpenGraphTitle);
            // document.head.removeChild(metaOpenGraphDescription);
            // document.head.removeChild(metaOpenGraphUrl);
            // document.head.removeChild(metaOpenGraphImage);
            document.head.removeChild(metaTwitterTitle);
            document.head.removeChild(metaTwitterDescription);
            document.head.removeChild(metaTwitterImage);
        };
    }, [metadata]);


    return (
        <PageLayout >
            <ServiceBanner type="residential" service={service} />
            <SectionLayout noYPadding>
                <p className='text-gray-500 text-md font-light'>{RESIDENTIAL_SERVICES[service].description}</p>
                <div className='py-4 md:py-5 px-10 border border-1 border-[#ceb5d9] rounded-xl md:rounded-full text-center bg-[#FDFCFE]'>
                    <p className='text-gray-500 text-sm md:text-md text-[#a175b5]'>{RESIDENTIAL_SERVICES[service].note}</p>
                </div>
            </SectionLayout>
            <ContactSection />
            <BrandsSection />
            <WhyUsSection />
            <AboutUsSection />
        </PageLayout >
    );
};

export default ResidentialServiceDetailPage;
