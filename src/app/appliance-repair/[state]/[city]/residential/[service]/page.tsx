"use client"

import React from 'react';
import PageLayout from '@components/layout/page-layout';
import SectionLayout from '@components/layout/section-layout';
import { AboutUsSection, BrandsSection, CommercialLocationServices, ContactSection, LocationsSection, LocationsServiceBanner, ResidentialLocationServices, ReviewsSection, WhyUsSection } from '@components/features';
import { RESIDENTIAL_SERVICES } from 'constants/services';
import { useGetCityInfoQuery } from '@api/location-api';
import Head from 'next/head';


interface IServiceProps {
    params: {
        state: string,
        city: string,
        service: string,
    };
}


const ServiceDetailPage: React.FC<IServiceProps> = ({ params }) => {
    const { state, city, service } = params;

    const serviceKey = service as keyof typeof RESIDENTIAL_SERVICES;

    // Metadata state variables
    const [metaTitle, setMetaTitle] = React.useState("Appliance Repair Services | UltraFix®");
    const [metaDescription, setMetaDescription] = React.useState("UltraFix offers trusted appliance repair services.");
    const [metaKeywords, setMetaKeywords] = React.useState<string[]>([]);
    const [metaURL, setMetaURL] = React.useState(`https://ultrafix.com/appliance-repair/${state}/${city}/residential/${RESIDENTIAL_SERVICES[serviceKey].link}`);
    const [metaImage, setMetaImage] = React.useState(`https://ultrafix.com/img/cities/${state}_${city}.jpeg`);

    const { data: cityInfo, isLoading: cityInfoLoading } = useGetCityInfoQuery({ state: state as string, city: city as string });

    console.log('@@@', cityInfo)

    React.useEffect(() => {
        if (cityInfo?.data) {
            let { title, state_short, state_full, value } = cityInfo?.data

            setMetaTitle(`Residential ${RESIDENTIAL_SERVICES[serviceKey].title} Repair in ${title}, ${state_short} | UltraFix®`);
            setMetaDescription(
                `UltraFix Appliance Repair in ${title}, ${state_short} provides expert ${RESIDENTIAL_SERVICES[serviceKey].title} repair with same-day service, affordable pricing, and professional technicians. Call now for reliable service!`
            );
            setMetaKeywords([
                'Appliance Repair',
                `Appliance Repair in ${title}`,
                `Appliance Repair in ${title} ${state_full}`,
                `Appliance Repair in ${title} ${state_short}`,
                `Best Appliance Repair in ${title}`,
                `Best Appliance Repair in ${title} ${state_full}`,
                `Best Appliance Repair in ${title} ${state_short}`,
                `Residential ${RESIDENTIAL_SERVICES[serviceKey].title} Repair in ${title}`,
                ...RESIDENTIAL_SERVICES[serviceKey].keywords,
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
            setMetaURL(`https://ultrafix.com/appliance-repair/${state_short.toLocaleLowerCase()}/${value}/residential/${RESIDENTIAL_SERVICES[serviceKey].link}`);
            setMetaImage(`https://ultrafix.com/img/cities/${state_short.toLocaleLowerCase()}_${value}.jpeg`);
        }
    }, []);


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

            <PageLayout>
                <LocationsServiceBanner type="residential" service={serviceKey} />
                <SectionLayout noYPadding>
                    <p className='text-gray-500 text-md font-light'>{RESIDENTIAL_SERVICES[serviceKey].description}</p>
                    <div className='py-4 md:py-5 px-10 border border-1 border-[#ceb5d9] rounded-xl md:rounded-full text-center bg-[#FDFCFE]'>
                        <p className='text-gray-500 text-sm md:text-md text-[#a175b5]'>{RESIDENTIAL_SERVICES[serviceKey].note}</p>
                    </div>
                </SectionLayout>
                <ResidentialLocationServices />
                <CommercialLocationServices />
                <ReviewsSection />
                {/* <LocationsSection /> */}
                <BrandsSection />
                <ContactSection />
                <WhyUsSection />
                <AboutUsSection />
            </PageLayout >
        </>
    );
};

export default ServiceDetailPage;
