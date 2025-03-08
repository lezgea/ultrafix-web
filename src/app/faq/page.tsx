import React from 'react';
import { Metadata } from 'next';
import PageLayout from '@components/layout/page-layout';
import { AboutUsSection, BlogSection, BrandsSection, CommercialServicesSection, FAQSection, LocationsSection, ResidentialServicesSection, ReviewsSection, WhyUsSection } from '@components/features';


export const metadata: Metadata = {
    title: "FAQ | UltraFix Appliance Repair",
};


const FAQ: React.FC = () => {
    return (
        <PageLayout title="The number one Appliance Repair service in US">
            <FAQSection />
            {/* <LocationsSection /> */}
            <ResidentialServicesSection />
            <CommercialServicesSection />
            <ReviewsSection />
            <BrandsSection />
            <BlogSection hideCarousel />
            <AboutUsSection />
            <WhyUsSection />
        </PageLayout>
    );
};

export default FAQ;
