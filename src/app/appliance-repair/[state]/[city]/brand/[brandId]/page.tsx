import React from 'react';
import PageLayout from '@components/layout/page-layout';
import { AboutUsSection, BrandsSection, CommercialLocationServices, ContactSection, EmployeesSection, LocationsMap, ResidentialLocationServices, ReviewsSection, WhyUsSection } from '@components/features';
import { BrandBanner } from '@components/features/brand';


interface IServiceProps {
    params: {
        state: string,
        city: string,
        brandId: string | number,
    };
}


export async function generateMetadata({ params }: IServiceProps) {
    const { state, city, brandId } = params;

    const brandInfo = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/brands/${brandId}`)
        .then((res) => res.json());
    const cityInfo = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/locations/city?state=${state}&city=${city}`)
        .then((res) => res.json());

    const title = brandInfo?.data && cityInfo?.data
        ? `${brandInfo?.data?.text} Appliance Repair Services in ${cityInfo?.data?.title}, ${cityInfo?.data?.state_short}  | UltraFix®`
        : 'Appliance Repair Services | UltraFix®';
    const description = brandInfo?.data
        ? `UltraFix offers trusted ${brandInfo?.data?.text} appliance repair services. Fast, same-day repairs for refrigerators, washers, dryers, and more!`
        : 'UltraFix offers trusted appliance repair services across the United States.';

    return {
        title,
        description,
        keywords: [
            'Appliance Repair',
            `Appliance Repair Service`,
            `${brandInfo?.data?.text} Apppliance Repair Service`,
            `Best ${brandInfo?.data?.text} Appliance Repair Service`,
            `Residential ${brandInfo?.data?.text} Repair`,
            brandInfo?.data?.text,
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
            url: `https://ultrafix.com/appliance-repair/${state}/${city}/brand/${brandId}`,
            images: [
                {
                    url: cityInfo?.data?.image,
                    width: 1200,
                    height: 630,
                    alt: `${brandInfo?.data?.title} Applience Repair Service in ${cityInfo?.data?.title}, ${cityInfo?.data?.state_short}`,
                },
            ],
            locale: 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [cityInfo?.data?.image],
        },
        alternates: {
            canonical: `https://ultrafix.com/appliance-repair/${state}/${city}/brand/${brandId}`,
        },
    };
}


const BrandInfoPage: React.FC<IServiceProps> = ({ params }) => {
    const { brandId } = params;

    return (
        <PageLayout >
            <BrandBanner />
            <ContactSection />
            <ResidentialLocationServices />
            <CommercialLocationServices />
            <ReviewsSection />
            <LocationsMap />
            <ContactSection />
            <EmployeesSection />
            <BrandsSection />
            <WhyUsSection />
            <AboutUsSection />
        </PageLayout >
    );
};

export default BrandInfoPage;
