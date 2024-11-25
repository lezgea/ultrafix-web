import React from 'react';
import { Metadata } from 'next';
import PageLayout from '@components/layout/page-layout';
import { AboutUsSection, BrandsSection, CommercialServicesSection, FAQSection, LocationsSection, ResidentialServicesSection, WhyUsSection } from '@components/features';


export const metadata: Metadata = {
    title: "FAQ | UltraFix Appliance Repair",
};


const FAQ: React.FC = () => {
    return (
        <PageLayout title="The number one Appliance Repair service in US">
            <FAQSection />
            <LocationsSection />
            <ResidentialServicesSection />
            <CommercialServicesSection />
            <AboutUsSection />
            <BrandsSection />
            <WhyUsSection />
        </PageLayout>
    );
};

export default FAQ;
