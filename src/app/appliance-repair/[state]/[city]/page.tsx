"use client"

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
import { useGetCityInfoQuery, useLazyGetCityInfoQuery } from '@api/location-api';
import Head from 'next/head';

interface ILocationProps {
    params: {
        state: string;
        city: string;
    };
}

// `generateMetadata` for dynamic metadata
// export async function generateMetadata({ params }: ILocationProps) {
//     const { state, city } = params;

//     // const [triggerCityInfo, { data: cityInfo, isLoading: cityInfoLoading }] = useLazyGetCityInfoQuery();

//     const cityKey = `${state}_${city}` as keyof typeof CITIES;
//     const cityData = CITIES[cityKey];

//     const title = cityData
//         ? `Appliance Repair Service in ${cityData.title}, ${cityData.stateShort} | UltraFix®`
//         : 'Appliance Repair Services | UltraFix®';
//     const description = cityData
//         ? `UltraFix offers trusted appliance repair services in ${cityData.title}, ${cityData.stateShort}. Fast, same-day repairs for refrigerators, washers, dryers, and more!`
//         : 'UltraFix offers trusted appliance repair services across the United States.';


//     // async function getCityInfo() {
//     //     try {
//     //         await triggerCityInfo({ state: state, city: city }).unwrap()
//     //     } catch (err: any) {
//     //         console.log('Error: ', err)
//     //     }
//     // }

//     // React.useEffect(() => {
//     //     if (city && state)
//     //         getCityInfo()
//     // }, [state, city])


//     return {
//         title,
//         description,
//         keywords: [
//             'Appliance Repair',
//             `Appliance Repair in ${city}`,
//             `Appliance Repair in ${city} ${state}`,
//             `Best Appliance Repair in ${city}`,
//             `Best Appliance Repair in ${city} ${state}`,
//             `${city} Appliance Repair`,
//             'appliance repair near me',
//             'appliance repair',
//             'appliance repair service',
//             'commercial appliance repair',
//             'repair appliances',
//             'service appliance repair',
//             'Appliance Repair',
//             'Local Appliance Repair',
//             'Emergency Appliance Repair',
//             'Same Day Appliance Repair',
//             'Affordable Appliance Repair',
//             'Certified Appliance Technicians',
//             'Refrigerator Repair Houston',
//             'Dishwasher Repair Houston',
//             'Oven and Stove Repair',
//             'Microwave Repair',
//             'Freezer and Ice Maker Repair',
//             'Garbage Disposal Repair',
//             'Washer and Dryer Repair',
//             'Major Appliance Repair',
//             'Residential Appliance Repair',
//             'Commercial Appliance Repair',
//             'Houston Appliance Service',
//             'Best Appliance Repair in',
//             'Nearby Appliance Repair',
//         ],
//         robots: {
//             index: true,
//             follow: true,
//             nocache: false,
//             googleBot: {
//                 index: true,
//                 follow: true,
//                 noarchive: false,
//             },
//         },
//         openGraph: {
//             title,
//             description,
//             url: `https://ultrafix.com/appliance-repair/${state}/${city}`,
//             images: [
//                 {
//                     url: `https://ultrafix.com/img/cities/${state}_${city}.jpeg`,
//                     width: 1200,
//                     height: 630,
//                     alt: `Appliance Repair Service in ${city}, ${state}`,
//                 },
//             ],
//             locale: 'en_US',
//             type: 'website',
//         },
//         twitter: {
//             card: 'summary_large_image',
//             title,
//             description,
//             images: [`https://ultrafix.com/img/cities/${state}_${city}.jpeg`],
//         },
//         alternates: {
//             canonical: `https://ultrafix.com/appliance-repair/${state}/${city}`,
//         },
//     };
// }

const LocationPage: React.FC<ILocationProps> = ({ params }) => {
    const { state, city } = params;
    const cityKey = `${state}_${city}` as keyof typeof CITIES;
    const cityData = CITIES[cityKey];

    // ✅ Metadata state variables
    const [metaTitle, setMetaTitle] = React.useState("Appliance Repair Services | UltraFix®");
    const [metaDescription, setMetaDescription] = React.useState("UltraFix offers trusted appliance repair services.");
    const [metaKeywords, setMetaKeywords] = React.useState<string[]>([]);
    const [metaURL, setMetaURL] = React.useState(`https://ultrafix.com/appliance-repair/${state}/${city}`);
    const [metaImage, setMetaImage] = React.useState(`https://ultrafix.com/img/cities/${state}_${city}.jpeg`);

    const { data: cityInfo, isLoading: cityInfoLoading } = useGetCityInfoQuery({ state, city });

    React.useEffect(() => {
        if (cityInfo?.data) {
            let { title, state_short, state_full, value } = cityInfo?.data

            setMetaTitle(`Appliance Repair Service in ${title}, ${state_short} | UltraFix®`);
            setMetaDescription(
                `UltraFix offers trusted appliance repair services in ${title}, ${state_short}.`
            );
            setMetaKeywords([
                'Appliance Repair',
                `Appliance Repair in ${title}`,
                `Appliance Repair in ${title} ${state_full}`,
                `Appliance Repair in ${title} ${state_short}`,
                `Best Appliance Repair in ${title}`,
                `Best Appliance Repair in ${title} ${state_full}`,
                `Best Appliance Repair in ${title} ${state_short}`,
                `${title} Appliance Repair`,
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
            ]);
            setMetaURL(`https://ultrafix.com/appliance-repair/${state_short.toLocaleLowerCase()}/${value}`);
            setMetaImage(`https://ultrafix.com/img/cities/${state_short.toLocaleLowerCase()}_${value}.jpeg`);
        }
    }, [cityInfo]);


    return (
        <>
            <Head>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} />
                <meta name="keywords" content={metaKeywords.join(", ")} />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:url" content={metaURL} />
                <meta property="og:image" content={metaImage} />
                <meta property="og:type" content="website" />
                <meta name="twitter:title" content={metaTitle} />
                <meta name="twitter:description" content={metaDescription} />
                <meta name="twitter:image" content={metaImage} />
                <meta name="robots" content="index, follow" />
            </Head>

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
                    <ReviewsSection />
                    <LocationsMap />
                    {/* <LocationsSection /> */}
                    <ContactSection />
                    <EmployeesSection employees={cityInfo?.data?.employees} />
                    <BrandsSection />
                    <WhyUsSection />
                    <AboutUsSection />
                </AnimatePresence>
            </PageLayout>
        </>

    );
};

export default LocationPage;
