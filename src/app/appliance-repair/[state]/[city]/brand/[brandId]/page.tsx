import React from 'react';
import PageLayout from '@components/layout/page-layout';
import SectionLayout from '@components/layout/section-layout';
import { AboutUsSection, BrandsSection, CommercialLocationServices, CommercialServicesSection, ContactSection, EmployeesSection, LocationsMap, LocationsSection, ResidentialLocationServices, ResidentialServicesSection, ReviewsSection, ServiceBanner, WhyUsSection } from '@components/features';
import { RESIDENTIAL_SERVICES } from 'constants/services';
import { BrandBanner } from '@components/features/brand';


interface IServiceProps {
    params: {
        brandId: string | number,
    };
}


// export async function generateMetadata({ params }: IServiceProps) {
//     const { brandId } = params;

//     const serviceKey = service as keyof typeof RESIDENTIAL_SERVICES;

//     const title = serviceKey
//         ? `Residential ${RESIDENTIAL_SERVICES[serviceKey].title} repair | UltraFix®`
//         : 'Residential Appliance Repair Services | UltraFix®';
//     const description = serviceKey
//         ? `Get Professional ${RESIDENTIAL_SERVICES[serviceKey].title} repair by Ultrafix®. Same-Day Service, Certified Technicians, and High-Quality Parts for All Your Appliance Repair Needs.`
//         : 'UltraFix offers trusted appliance repair services across the United States.';

//     return {
//         title,
//         description,
//         keywords: [
//             'Appliance Repair',
//             `Appliance Repair Service`,
//             `${RESIDENTIAL_SERVICES[serviceKey].title} Repair Service`,
//             `Best ${RESIDENTIAL_SERVICES[serviceKey].title} Repair Service`,
//             `Residential ${RESIDENTIAL_SERVICES[serviceKey].title} Repair`,
//             ...RESIDENTIAL_SERVICES[serviceKey].keywords,
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
//             url: `https://ultrafix.com/appliance-services/residential/${RESIDENTIAL_SERVICES[serviceKey].link}`,
//             images: [
//                 {
//                     url: `https://ultrafix.com/img/services/residential/${RESIDENTIAL_SERVICES[serviceKey].value}.webp`,
//                     width: 1200,
//                     height: 630,
//                     alt: `Residential ${RESIDENTIAL_SERVICES[serviceKey].title} Repair Service`,
//                 },
//             ],
//             locale: 'en_US',
//             type: 'website',
//         },
//         twitter: {
//             card: 'summary_large_image',
//             title,
//             description,
//             images: [`https://ultrafix.com/img/services/residential/${RESIDENTIAL_SERVICES[serviceKey].value}.webp`],
//         },
//         alternates: {
//             canonical: `https://ultrafix.com/appliance-services/residential/${RESIDENTIAL_SERVICES[serviceKey].link}`,
//         },
//     };
// }


const BrandInfoPage: React.FC<IServiceProps> = ({ params }) => {
    const { brandId } = params;
    // const serviceKey = service as keyof typeof RESIDENTIAL_SERVICES;


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
