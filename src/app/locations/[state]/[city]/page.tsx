import React from 'react';
import PageLayout from '@components/layout/page-layout';
import {
    AboutUsSection,
    BrandsSection,
    ContactSection,
    LocationsBanner,
    LocationsMap,
    LocationsServices,
    LogosSection,
    WhyUsSection
} from '@components/features';
import { Metadata } from 'next';
import * as motion from "framer-motion/client";
import { AnimatePresence } from 'framer-motion';


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

interface ILocationProps {
    params: {
        state: string;
        city: string;
    };
}

const LocationPage: React.FC<ILocationProps> = ({ params }) => {
    return (
        <PageLayout title="The number one Appliance Repair service in US">
            <AnimatePresence mode="wait">
                <LocationsBanner />
                <motion.div
                    initial={{ opacity: 0, x: 400 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <LogosSection />
                </motion.div>
                <LocationsServices />
                <LocationsMap />
                <ContactSection />
                <BrandsSection />
                <WhyUsSection />
                <AboutUsSection />
            </AnimatePresence>
        </PageLayout >
    );
};

export default LocationPage;