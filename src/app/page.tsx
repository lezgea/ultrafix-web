import React from 'react';
import { Metadata } from 'next';
import PageLayout from '@components/layout/page-layout';
import { AboutUsSection, BannerSection, BrandsSection, CommercialServicesSection, ContactSection, LocationsSection, LogosSection, ResidentialServicesSection, WhyUsSection } from '@components/features/home';
import * as motion from "framer-motion/client"
import { BlogSection } from '@components/features';


export const metadata: Metadata = {
    title: "Appliance Repair – Same Day Service - Local Pros | UltraFix®",
    description: "Ultrafix® Provides Fast, Reliable Appliance Repair Services. Get Same-Day Repairs for All Major Brands. Satisfaction Guaranteed—call Now!",
    keywords: [
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

const list = { hidden: { opacity: 0 } }
const item = { hidden: { x: -10, opacity: 0 } }

const Home: React.FC = () => {
    return (
        <PageLayout>
            <BannerSection />
            <motion.div
                initial={{ opacity: 0, x: 400 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
            >
                <LogosSection />
            </motion.div>
            <ResidentialServicesSection />
            <CommercialServicesSection />
            <ContactSection />
            <LocationsSection />
            <AboutUsSection />
            <BrandsSection />
            <BlogSection hideCarousel />
            <WhyUsSection />
        </PageLayout >
    );
};

export default Home
