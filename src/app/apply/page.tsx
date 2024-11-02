import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BGUltraIllustration, LogoWhite, UltrafixLogo } from '@assets/icons';
import { ApplyForm } from '@components/shared';
import PageLayout from '@components/layout/page-layout';
import SectionLayout from '@components/layout/section-layout';
import { AboutUsSection, ApplySection, BrandsSection, CommercialServicesSection, ResidentialServicesSection, WhyUsSection } from '@components/features';


export const metadata: Metadata = {
    title: "Apply | UltraFix Appliance Repair",
};


const Apply: React.FC = () => {
    return (
        <PageLayout title="The number one Appliance Repair service in US">
            <ApplySection />
            <ResidentialServicesSection />
            <CommercialServicesSection />
            <AboutUsSection />
            <BrandsSection />
            <WhyUsSection />
        </PageLayout>

    );
};

export default Apply;
