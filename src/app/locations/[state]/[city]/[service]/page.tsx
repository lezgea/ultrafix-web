"use client"

import React from 'react';
import PageLayout from '@components/layout/page-layout';
import { SERVICES } from 'constants/services';
import SectionLayout from '@components/layout/section-layout';
import { ServiceBanner, WhyUsSection } from '@components/features';
import { useParams } from 'next/navigation';
import { CITIES, STATES } from 'constants/locations';

interface ServiceProps {
    params: {
        state: keyof typeof STATES,
        city: keyof typeof CITIES,
        service: keyof typeof SERVICES;
    };
}


const ServiceDetailPage = ({ params }: ServiceProps) => {
    const { state, city, service } = useParams(); 

    const serviceKey = service as keyof typeof SERVICES;
    const cityKey = `${state}_${city}` as keyof typeof CITIES;
    const cityData = CITIES[cityKey];


    return (
        <PageLayout title={`${SERVICES[serviceKey].title} repair in ${cityData?.title}`}>
            <ServiceBanner service={serviceKey} />
            <SectionLayout noYPadding>
                <p className='text-gray-500 text-md font-light'>{SERVICES[serviceKey].description}</p>
                <div className='py-5 px-10 border border-1 border-[#ceb5d9] rounded-full text-center bg-[#FDFCFE]'>
                    <p className='text-gray-500 text-md text-[#a175b5]'>{SERVICES[serviceKey].note}</p>
                </div>
            </SectionLayout>
            <WhyUsSection />
        </PageLayout >
    );
};

export default ServiceDetailPage;
