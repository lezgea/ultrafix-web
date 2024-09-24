import React from 'react';
import PageLayout from '@components/layout/page-layout';
import { SERVICES } from 'constants/services';
import SectionLayout from '@components/layout/section-layout';
import { AboutUsSection, LocationsBanner, LocationsServices, LogosSection, ServiceBanner, ServicesSection, WhyUsSection } from '@components/features';
import { useParams } from 'next/navigation';
import { CITIES } from 'constants/locations';

interface ILocationProps {
    params: {
        state: string;
        city: string;
    };
}


const LocationPage: React.FC<ILocationProps> = ({ params }) => {

    const { state, city, service } = useParams();

    const serviceKey = service as keyof typeof SERVICES;
    const cityKey = `${state}_${city}` as keyof typeof CITIES;
    const cityData = CITIES[cityKey];

    console.log('State:', state);  // Should output 'tx'
    console.log('City:', city);    // Should output 'houston'


    return (
        <PageLayout title="">
            <LocationsBanner />
            <LogosSection />
            <LocationsServices />
            <WhyUsSection />
            <AboutUsSection />
        </PageLayout >
    );
};

export default LocationPage;
