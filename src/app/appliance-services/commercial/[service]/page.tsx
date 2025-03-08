import React from 'react';
import PageLayout from '@components/layout/page-layout';
import SectionLayout from '@components/layout/section-layout';
import { AboutUsSection, BlogSection, BrandsSection, CommercialServicesSection, ContactSection, LocationsSection, ResidentialServicesSection, ReviewsSection, ServiceBanner, WhyUsSection } from '@components/features';
import { COMMERCIAL_SERVICES } from 'constants/services';


interface IServiceProps {
    params: {
        service: string,
    };
}


export async function generateMetadata({ params }: IServiceProps) {
    const { service } = params;

    const serviceKey = service as keyof typeof COMMERCIAL_SERVICES;

    const title = serviceKey
        ? `Commercial ${COMMERCIAL_SERVICES[serviceKey].title} repair | UltraFix®`
        : 'Commercial Appliance Repair Services | UltraFix®';
    const description = serviceKey
        ? `Get Professional ${COMMERCIAL_SERVICES[serviceKey].title} repair by Ultrafix®. Same-Day Service, Certified Technicians, and High-Quality Parts for All Your Appliance Repair Needs.`
        : 'UltraFix offers trusted appliance repair services across the United States.';

    return {
        title,
        description,
        keywords: [
            'Appliance Repair',
            `Appliance Repair Service`,
            `${COMMERCIAL_SERVICES[serviceKey].title} Repair Service`,
            `Best ${COMMERCIAL_SERVICES[serviceKey].title} Repair Service`,
            `Commercial ${COMMERCIAL_SERVICES[serviceKey].title} Repair`,
            ...COMMERCIAL_SERVICES[serviceKey].keywords,
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
            url: `https://ultrafix.com/appliance-services/commercial/${COMMERCIAL_SERVICES[serviceKey].link}`,
            images: [
                {
                    url: `https://ultrafix.com/img/services/commercial/${COMMERCIAL_SERVICES[serviceKey].value}.webp`,
                    width: 1200,
                    height: 630,
                    alt: `Commercial ${COMMERCIAL_SERVICES[serviceKey].title} Repair Service`,
                },
            ],
            locale: 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [`https://ultrafix.com/img/services/commercial/${COMMERCIAL_SERVICES[serviceKey].value}.webp`],
        },
        alternates: {
            canonical: `https://ultrafix.com/appliance-services/commercial/${COMMERCIAL_SERVICES[serviceKey].link}`,
        },
    };
}


const CommercialServiceDetailPage: React.FC<IServiceProps> = ({ params }) => {
    const { service } = params;
    const serviceKey = service as keyof typeof COMMERCIAL_SERVICES;

    return (
        <PageLayout >
            <ServiceBanner type="commercial" service={serviceKey} />
            <SectionLayout noYPadding>
                <p className='text-gray-500 text-md font-light'>{COMMERCIAL_SERVICES[serviceKey].description}</p>
                <div className='py-4 md:py-5 px-10 border border-1 border-[#ceb5d9] rounded-xl md:rounded-full text-center bg-[#FDFCFE]'>
                    <p className='text-gray-500 text-sm md:text-md text-[#a175b5]'>{COMMERCIAL_SERVICES[serviceKey].note}</p>
                </div>
            </SectionLayout>
            <ContactSection />
            {/* <LocationsSection /> */}
            <ResidentialServicesSection />
            <CommercialServicesSection />
            <ReviewsSection />
            <BrandsSection />
            <BlogSection hideCarousel />
            <WhyUsSection />
            <AboutUsSection />
        </PageLayout >
    );
};

export default CommercialServiceDetailPage;
