"use client";

import React from 'react';
import PageLayout from '@components/layout/page-layout';
import {
    AboutUsSection,
    BrandsSection,
    CommercialLocationServices,
    ContactSection,
    EmployeesSection,
    LocationsBanner,
    LocationsMap,
    LocationsSection,
    LogosSection,
    ResidentialLocationServices,
    WhyUsSection
} from '@components/features';
import * as motion from "framer-motion/client";
import { AnimatePresence } from 'framer-motion';
import { useParams } from 'next/navigation';
import { CITIES } from 'constants/locations';
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

interface ILocationProps {
    params: {
        state: string;
        city: string;
    };
}

const LocationPage: React.FC<ILocationProps> = ({ params }) => {

    const { state, city, service } = useParams();

    const serviceKey = service as keyof typeof RESIDENTIAL_SERVICES;
    const cityKey = `${state}_${city}` as keyof typeof CITIES;
    const cityData = CITIES[cityKey];

    const metadata: Metadata = {
        title: `Appliance Repair Service in ${cityData?.title}, ${cityData?.state}`,
        description: `Ultrafix® Offers Trusted Appliance Repair Services in ${cityData?.title}-${cityData?.state}. Fast, Same-Day Repairs for Refrigerators, Washers, Dryers, Ovens, and More!`,
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
            url: `https://ultrafix.com/img/cities/${state}_${city}.jpeg`,
            images: [
                {
                    width: 800,
                    height: 600,
                    alt: 'UltraFix Appliance Repair',
                    url: `https://ultrafix.com/img/cities/${state}_${city}.jpeg`,
                },
                {
                    width: 1200,
                    height: 630,
                    alt: 'Feature Image for Appliance Repair Service',
                    url: `https://ultrafix.com/img/cities/${state}_${city}.jpeg`,
                },
            ],
            locale: 'en_US',
            siteName: 'UltraFix Appliance Repair',
        },
        twitter: {
            title: 'UltraFix Appliance Repair LLC',
            card: 'summary_large_image',
            description: "Client satisfaction is at the forefront of our minds at UltraFix Appliance Repair Service. Our business model is built on respect, promptness, honesty, and taking pride in our work. When you choose us for your appliance repair, you learn how closely we hold to these values.",
            images: [`https://ultrafix.com/img/cities/${state}_${city}.jpeg`],
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
        const metaOgTitle = document.createElement('meta');
        metaOgTitle.setAttribute('property', 'og:title');
        metaOgTitle.content = metadata.openGraph.title;
        document.head.appendChild(metaOgTitle);

        const metaOgDescription = document.createElement('meta');
        metaOgDescription.setAttribute('property', 'og:description');
        metaOgDescription.content = metadata.openGraph.description;
        document.head.appendChild(metaOgDescription);

        const metaOgImage = document.createElement('meta');
        metaOgImage.setAttribute('property', 'og:image');
        metaOgImage.content = metadata.openGraph.images[0].url;
        document.head.appendChild(metaOgImage);

        const metaOgUrl = document.createElement('meta');
        metaOgUrl.setAttribute('property', 'og:url');
        metaOgUrl.content = metadata.openGraph.url;
        document.head.appendChild(metaOgUrl);

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
            document.head.removeChild(metaOgTitle);
            document.head.removeChild(metaOgDescription);
            document.head.removeChild(metaOgImage);
            document.head.removeChild(metaOgUrl);
            document.head.removeChild(metaTwitterTitle);
            document.head.removeChild(metaTwitterDescription);
            document.head.removeChild(metaTwitterImage);
        };
    }, [metadata]);

    return (
        <PageLayout title={`Appliance Repair Service in ${cityData?.title}, ${cityData?.state} - Same-Day Service`}>
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
                <ResidentialLocationServices />
                <CommercialLocationServices />
                <LocationsMap />
                <LocationsSection />
                <ContactSection />
                <EmployeesSection />
                <BrandsSection />
                <WhyUsSection />
                <AboutUsSection />
            </AnimatePresence>
        </PageLayout >
    );
};

export default LocationPage;
