"use client";

import React from 'react';
import { useRouter } from 'next/router';
import { notFound } from 'next/navigation';
import PageLayout from '@components/layout/page-layout';
import { SERVICES } from 'constants/services';
import SectionLayout from '@components/layout/section-layout';

interface ServiceProps {
    params: {
        service: string;
    };
}


const ServiceDetailPage = ({ params }: ServiceProps) => {
    const { service } = params;

    console.log('@@@@', service)
    // If the slug doesn't match any expected values, you can return 404
    // if (!['washer', 'dryer'].includes(slug)) {
    //     notFound(); // Built-in 404 handler in Next.js 13 App Router
    // }

    React.useEffect(() => {
        // Append the BrightLocal script to the page after component mounts
        const script = document.createElement('script');
        script.src = 'https://www.local-marketing-reports.com/external/showcase-reviews/embed/a0c2903dbc7e57f43311c24c43f08f635b2ebbc2?id=18302'; // Replace with your actual widget script URL
        script.async = true;
        document.body.appendChild(script);


        return () => {
            // Clean up by removing the script when the component unmounts
            document.body.removeChild(script);
        };
    }, []);


    return (
        <PageLayout>
            <SectionLayout>
                <h1>Service: {service}</h1>
                <div id="brightlocal-widget"></div>
            </SectionLayout>
        </PageLayout>
    );
};

export default ServiceDetailPage;
