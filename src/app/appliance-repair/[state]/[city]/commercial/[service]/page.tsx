import React from 'react';
import PageLayout from '@components/layout/page-layout';
import SectionLayout from '@components/layout/section-layout';
import { AboutUsSection, BrandsSection, CommercialLocationServices, ContactSection, LocationsSection, LocationsServiceBanner, ResidentialLocationServices, WhyUsSection } from '@components/features';
import { CITIES, STATES } from 'constants/locations';
import { COMMERCIAL_SERVICES } from 'constants/services';


interface IServiceProps {
    params: {
        state: string,
        city: string,
        service: string,
    };
}

export async function generateMetadata({ params }: IServiceProps) {
    const { state, city, service } = params;

    const serviceKey = service as keyof typeof COMMERCIAL_SERVICES;
    const cityKey = `${state}_${city}` as keyof typeof CITIES;
    const cityData = CITIES[cityKey];


    const title = cityData
        ? `Commercial ${COMMERCIAL_SERVICES[serviceKey].title} Repair in ${cityData?.title}, ${cityData?.state} | UltraFix®`
        : 'Commercial Appliance Repair Services | UltraFix®';
    const description = cityData
        ? `UltraFix offers trusted appliance repair services in ${cityData.title}, ${cityData.state}. Fast, same-day repairs for refrigerators, washers, dryers, and more!`
        : 'UltraFix offers trusted appliance repair services across the United States.';

    return {
        title,
        description,
        keywords: [
            'Appliance Repair',
            `Appliance Repair in ${city}`,
            `Appliance Repair in ${city} ${state}`,
            `Best Appliance Repair in ${city}`,
            `Best Appliance Repair in ${city} ${state}`,
            `Commercial ${COMMERCIAL_SERVICES[serviceKey].title} Repair in ${city}`,
            ...COMMERCIAL_SERVICES[serviceKey].keywords,
            `${city} Appliance Repair`,
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
            'Commercial Appliance Repair',
            'Houston Appliance Service',
            'Best Appliance Repair in',
            'Nearby Appliance Repair',
        ],
        openGraph: {
            title,
            description,
            url: `https://ultrafix.com/appliance-repair/${state}/${city}/commercial/${COMMERCIAL_SERVICES[serviceKey].link}`,
            images: [
                {
                    url: `https://ultrafix.com/img/cities/${state}_${city}.jpeg`,
                    width: 1200,
                    height: 630,
                    alt: `Commercial ${COMMERCIAL_SERVICES[serviceKey].title} Repair Service in ${city}, ${state}`,
                },
            ],
            locale: 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [`https://ultrafix.com/img/cities/${state}_${city}.jpeg`],
        },
        alternates: {
            canonical: `https://ultrafix.com/appliance-repair/${state}/${city}/commercial/${COMMERCIAL_SERVICES[serviceKey].link}`,
        },
    };
}


const ServiceDetailPage: React.FC<IServiceProps> = ({ params }) => {
    const { state, city, service } = params;

    const serviceKey = service as keyof typeof COMMERCIAL_SERVICES;
    const cityKey = `${state}_${city}` as keyof typeof CITIES;
    const cityData = CITIES[cityKey];

    return (
        <PageLayout>
            <LocationsServiceBanner type="commercial" service={serviceKey} />
            <SectionLayout noYPadding>
                <p className='text-gray-500 text-md font-light'>{COMMERCIAL_SERVICES[serviceKey].description}</p>
                <div className='py-4 md:py-5 px-10 border border-1 border-[#ceb5d9] rounded-xl md:rounded-full text-center bg-[#FDFCFE]'>
                    <p className='text-gray-500 text-sm md:text-md text-[#a175b5]'>{COMMERCIAL_SERVICES[serviceKey].note}</p>
                </div>
            </SectionLayout>
            <ResidentialLocationServices />
            <CommercialLocationServices />
            {/* <LocationsSection /> */}
            <BrandsSection />
            <ContactSection />
            <WhyUsSection />
            <AboutUsSection />
        </PageLayout >
    );
};

export default ServiceDetailPage;
