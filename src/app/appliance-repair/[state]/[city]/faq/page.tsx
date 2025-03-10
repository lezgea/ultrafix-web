import React from 'react';
import PageLayout from '@components/layout/page-layout';
import { AboutUsSection, BlogSection, BrandsSection, CommercialLocationServices, CommercialServicesSection, ResidentialLocationServices, ResidentialServicesSection, ReviewsSection, WhyUsSection } from '@components/features';
import LocationsFAQSection from '@components/features/faq/locations-faq-section';


interface IFaqProps {
    params: {
        state: string,
        city: string,
    };
}


export async function generateMetadata({ params }: IFaqProps) {
    const { state, city } = params;


    const title = 'Appliance Repair Services | UltraFix®';
    const description = 'UltraFix offers trusted appliance repair services across the United States.';

    return {
        title,
        description,
        keywords: [
            'Appliance Repair',
            `Appliance Repair in ${city}`,
            `Appliance Repair in ${city} ${state}`,
            `Best Appliance Repair in ${city}`,
            `Best Appliance Repair in ${city} ${state}`,
            `Residential Appliance Repair in ${city}`,
            `Commercial Appliance Repair in ${city}`,
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
            'Best Appliance Repair in',
            'Residential Appliance Repair',
            'Houston Appliance Service',
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
            url: `https://ultrafix.com/appliance-repair/${state}/${city}/faq`,
            images: [
                {
                    url: `https://ultrafix.com/img/cities/${state}_${city}.jpeg`,
                    width: 1200,
                    height: 630,
                    alt: `Appliance Repair Services in ${city}, ${state}`,
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
            canonical: `https://ultrafix.com/appliance-repair/${state}/${city}/faq`,
        },
    };
}


const FAQ: React.FC<IFaqProps> = ({ params }) => {
    const { state, city } = params;

    return (
        <PageLayout title={`Appliance Repair Services | UltraFix®`}>
            <LocationsFAQSection />
            {/* <LocationsSection /> */}
            <ResidentialLocationServices />
            <CommercialLocationServices />
            <ReviewsSection />
            <AboutUsSection />
            <BrandsSection />
            <BlogSection hideCarousel />
            <WhyUsSection />
        </PageLayout>
    );
};

export default FAQ;
