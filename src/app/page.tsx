import React from 'react';
import PageLayout from '@components/layout/page-layout';
import { AboutUsSection, BannerSection, BrandsSection, CommercialServicesSection, ContactSection, LocationsSection, LogosSection, ResidentialServicesSection, ReviewsSection, WhyUsSection } from '@components/features/home';
import * as motion from "framer-motion/client"
import { BlogSection } from '@components/features';


export async function generateMetadata() {
    return {
        title: "Appliance Repair – Same Day Service - Local Pros | UltraFix®",
        description: "Ultrafix® Provides Fast, Reliable Appliance Repair Services. Get Same-Day Repairs for All Major Brands. Satisfaction Guaranteed—call Now!",
        keywords: [
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
            title: "Appliance Repair – Same Day Service - Local Pros | UltraFix®",
            description: "Ultrafix® Provides Fast, Reliable Appliance Repair Services. Get Same-Day Repairs for All Major Brands. Satisfaction Guaranteed—call Now!",
            url: `https://ultrafix.com`,
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
            title: "Appliance Repair – Same Day Service - Local Pros | UltraFix®",
            description: "Ultrafix® Provides Fast, Reliable Appliance Repair Services. Get Same-Day Repairs for All Major Brands. Satisfaction Guaranteed—call Now!",
            images: [`https://ultrafix.com/img/main_banner.webp`],
        },
        alternates: {
            canonical: `https://ultrafix.com`,
        },
    };
}


const Home: React.FC = () => {
    return (
        <PageLayout>
            <WhyUsSection />
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
            <ReviewsSection />
            <ContactSection />
            {/* <LocationsSection /> */}
            <AboutUsSection />
            {/* <WhyUsSection /> */}
            <BrandsSection />
            <BlogSection hideCarousel />
        </PageLayout >
    );
};

export default Home
