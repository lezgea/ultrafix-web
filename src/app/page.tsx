import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';
import PageLayout from '@components/layout/page-layout';
import SectionLayout from '@components/layout/section-layout';
import { BannerSection } from '@components/features/home';


export const metadata: Metadata = {
    title: "UltraFix Appliance Repair LLC",
    description: "Client satisfaction is at the forefront of our minds at UltraFix Appliance Repair Service. Our business model is built on respect, promptness, honesty, and taking pride in our work. When you choose us for your appliance repair, you learn how closely we hold to these values.",
};


const Home: React.FC = () => {
    return (
        <PageLayout title="Make Appliances Great Again !">
            <BannerSection />
        </PageLayout>
    );
};

export default Home
