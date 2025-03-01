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
    ReviewsSection,
    WhyUsSection
} from '@components/features';
import * as motion from "framer-motion/client";
import { AnimatePresence } from 'framer-motion';
import { CITIES } from 'constants/locations';
import { capitalize } from 'lodash';


interface ILocationProps {
    params: {
        state: string;
        city: string;
    };
}

// `generateMetadata` for dynamic metadata
export async function generateMetadata({ params }: ILocationProps) {
    const { state, city } = params;

    const cityInfo = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/locations/city?state=${state}&city=${city}`)
        .then((res) => res.json());

    const title = cityInfo?.data
        ? `Appliance Repair Service in ${cityInfo?.data?.title}, ${cityInfo?.data?.state_short} | UltraFix®`
        : 'Appliance Repair Services | UltraFix®';
    const description = cityInfo?.data
        ? `UltraFix offers trusted appliance repair services in ${cityInfo?.data?.title}, ${cityInfo?.data?.state_short}. Fast, same-day repairs for refrigerators, washers, dryers, and more!`
        : 'UltraFix offers trusted appliance repair services across the United States.';


    return {
        title,
        description,
        keywords: [
            'Appliance Repair',
            `Appliance Repair in ${cityInfo?.data?.title}`,
            `Appliance Repair in ${cityInfo?.data?.title} ${cityInfo?.data?.state_short}`,
            `Best Appliance Repair in ${cityInfo?.data?.title}`,
            `Best Appliance Repair in ${cityInfo?.data?.title} ${cityInfo?.data?.state_short}`,
            `${cityInfo?.data?.title} Appliance Repair`,
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
            title,
            description,
            url: `https://ultrafix.com/appliance-repair/${state}/${city}`,
            images: [
                {
                    url: cityInfo?.data?.image,
                    width: 1200,
                    height: 630,
                    alt: `Appliance Repair Service in ${cityInfo?.data?.title}, ${state}`,
                },
            ],
            locale: 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [`${cityInfo?.data?.image}`],
        },
        alternates: {
            canonical: `https://ultrafix.com/appliance-repair/${state}/${city}`,
        },
    };
}

const LocationPage: React.FC<ILocationProps> = ({ params }) => {
    const { state, city } = params;

    return (
        <>
            <PageLayout title={`Appliance Repair Service in ${capitalize(city)}, ${state.toUpperCase()} - Same-Day Service`}>
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
                    <ReviewsSection />
                    <LocationsMap />
                    {/* <LocationsSection /> */}
                    <ContactSection />
                    <EmployeesSection />
                    <BrandsSection />
                    <WhyUsSection />
                    <AboutUsSection />
                </AnimatePresence>
            </PageLayout>
        </>

    );
};

export default LocationPage;
