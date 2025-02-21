import React from 'react';
import PageLayout from '@components/layout/page-layout';
import SectionLayout from '@components/layout/section-layout';
import { AboutUsSection, BrandsSection, CommercialLocationServices, ContactSection, LocationsMap, LocationsSection, LocationsServiceBanner, ResidentialLocationServices, ReviewsSection, WhyUsSection } from '@components/features';
import { CITIES } from 'constants/locations';
import { COMMERCIAL_SERVICES } from 'constants/services';


interface IServiceProps {
    params: {
        state: string,
        city: string,
        service: string,
    };
}


// `generateMetadata` for dynamic metadata
export async function generateMetadata({ params }: IServiceProps) {
    const { state, city, service } = params;

    const serviceKey = service as keyof typeof COMMERCIAL_SERVICES;

    const cityInfo = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/locations/city?state=${state}&city=${city}`)
        .then((res) => res.json());

    const title = cityInfo?.data
        ? `Commercial ${COMMERCIAL_SERVICES[serviceKey].title} Repair in ${cityInfo?.data?.title}, ${cityInfo?.data?.state_short} | Same-Day Service`
        : 'Commercial Appliance Repair Services | Same-Day Service';
    const description = cityInfo?.data
        ? `UltraFix Appliance Repair in ${cityInfo?.data?.title}, ${cityInfo?.data?.state_short} provides expert ${COMMERCIAL_SERVICES[serviceKey].title} repair with same-day service, affordable pricing, and professional technicians. Call now for reliable service!`
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
            `Commercial ${COMMERCIAL_SERVICES[serviceKey].title} Repair in ${cityInfo?.data?.title}`,
            ...COMMERCIAL_SERVICES[serviceKey].keywords,
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
            url: `https://ultrafix.com/appliance-repair/${state}/${city}/commercial/${COMMERCIAL_SERVICES[serviceKey].link}`,
            images: [
                {
                    url: `https://ultrafix.com/img/cities/${state}_${city}.jpeg`,
                    width: 1200,
                    height: 630,
                    alt: `Commercial ${COMMERCIAL_SERVICES[serviceKey].title} Repair Service in ${cityInfo?.data?.title}, ${cityInfo?.data?.state_short}`,
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
    const { service } = params;

    const serviceKey = service as keyof typeof COMMERCIAL_SERVICES;

    return (
        <PageLayout>
            <LocationsServiceBanner type="commercial" service={serviceKey} />
            <SectionLayout noYPadding>
                <p className='text-gray-500 text-md font-light'>{COMMERCIAL_SERVICES[serviceKey].description}</p>
                <div className='py-4 md:py-5 px-10 border border-1 border-[#ceb5d9] rounded-xl md:rounded-full text-center bg-[#FDFCFE]'>
                    <p className='text-gray-500 text-sm md:text-md text-[#a175b5]'>{COMMERCIAL_SERVICES[serviceKey].note}</p>
                </div>
            </SectionLayout>
            <CommercialLocationServices />
            <ResidentialLocationServices />
            <ReviewsSection />
            <LocationsMap />
            {/* <LocationsSection /> */}
            <BrandsSection />
            <ContactSection />
            <WhyUsSection />
            <AboutUsSection />
        </PageLayout >
    );
};

export default ServiceDetailPage;
