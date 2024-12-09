import React from 'react';
import { Metadata } from 'next';
import PageLayout from '@components/layout/page-layout';
import { AboutUsSection, BlogSection, BrandsSection, CommercialServicesSection, ContactSection, LocationsSection, ResidentialServicesSection, WhyUsSection } from '@components/features';


export const metadata: Metadata = {
    title: "Blog | UltraFix Appliance Repair",
};


const Blog: React.FC = () => {

    return (
        <PageLayout
            largeYPadding
            title="The number one Appliance Repair service in US"
        >
            <BlogSection noYPadding={true} />
            <ResidentialServicesSection />
            <CommercialServicesSection />
            <ContactSection />
            {/* <LocationsSection /> */}
            <AboutUsSection />
            <BrandsSection />
            <WhyUsSection />
        </PageLayout>
    );
};

export default Blog;
