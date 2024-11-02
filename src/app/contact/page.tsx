import React from 'react';
import { Metadata } from 'next';
import PageLayout from '@components/layout/page-layout';
import { ContactSection } from '@components/features/home/contact-section';
import { AboutUsSection, BrandsSection, CommercialServicesSection, ResidentialServicesSection, WhyUsSection } from '@components/features';


export const metadata: Metadata = {
    title: "UltraFix Appliance Repair LLC",
    description: "Client satisfaction is at the forefront of our minds at UltraFix Appliance Repair Service. Our business model is built on respect, promptness, honesty, and taking pride in our work. When you choose us for your appliance repair, you learn how closely we hold to these values.",
    keywords: [
        'Appliance Repair Houston',
        'Local Appliance Repair Houston',
        'Emergency Appliance Repair Houston',
        'Same Day Appliance Repair Houston',
        'Affordable Appliance Repair Houston',
        'Certified Appliance Technicians Houston',
        'Refrigerator Repair Houston',
        'Dishwasher Repair Houston',
        'Oven and Stove Repair Houston',
        'Microwave Repair Houston',
        'Freezer and Ice Maker Repair Houston',
        'Garbage Disposal Repair Houston',
        'Washer and Dryer Repair Houston',
        'Major Appliance Repair Houston',
        'Residential Appliance Repair Houston',
        'Commercial Appliance Repair Houston',
        'Houston Appliance Service',
        'Best Appliance Repair in Houston',
        'Nearby Appliance Repair Houston',
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


const Contact: React.FC = () => {
    return (
        <PageLayout title="The number one Appliance Repair service in US">
            <ContactSection />
            <ResidentialServicesSection />
            <CommercialServicesSection />
            <AboutUsSection />
            <BrandsSection />
            <WhyUsSection />
        </PageLayout >
    );
};

export default Contact;
