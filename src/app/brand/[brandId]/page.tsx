import React from 'react';
import PageLayout from '@components/layout/page-layout';
import { AboutUsSection, BlogSection, BrandsSection, CommercialServicesSection, ContactSection, ResidentialServicesSection, ReviewsSection, WhyUsSection } from '@components/features';
import { BrandBanner } from '@components/features/brand';


interface IServiceProps {
    params: {
        brandId: string | number,
    };
}


export async function generateMetadata({ params }: IServiceProps) {
    const { brandId } = params;

    const brandInfo = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/brands/${brandId}`)
        .then((res) => res.json());

    const title = brandInfo?.data
        ? `${brandInfo?.data?.text} Appliance Repair Services | UltraFix®`
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
            url: `https://ultrafix.com/brand/${brandId}`,
            images: [
                {
                    url: brandInfo?.data?.logo?.url,
                    width: 1200,
                    height: 630,
                    alt: `${brandInfo?.data?.title} Applience Repair Service`,
                },
            ],
            locale: 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [brandInfo?.data?.logo?.url],
        },
        alternates: {
            canonical: `https://ultrafix.com/brand/${brandId}`,
        },
    };
}


const BrandInfoPage: React.FC<IServiceProps> = ({ params }) => {
    // const serviceKey = service as keyof typeof RESIDENTIAL_SERVICES;


    return (
        <PageLayout >
            <BrandBanner />
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

export default BrandInfoPage;
