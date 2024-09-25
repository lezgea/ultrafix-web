import React from 'react';
import PageLayout from '@components/layout/page-layout';
import {
    AboutUsSection,
    LocationsBanner,
    LocationsServices,
    LogosSection,
    WhyUsSection
} from '@components/features';


interface ILocationProps {
    params: {
        state: string;
        city: string;
    };
}


const LocationPage: React.FC<ILocationProps> = ({ params }) => {

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
