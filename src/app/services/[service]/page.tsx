import React from 'react';
import PageLayout from '@components/layout/page-layout';
import { SERVICES } from 'constants/services';
import SectionLayout from '@components/layout/section-layout';
import { AboutUsSection, BrandsSection, ContactSection, ServiceBanner, WhyUsSection } from '@components/features';

interface ServiceProps {
    params: {
        service: keyof typeof SERVICES;
    };
}


const ServiceDetailPage = ({ params }: ServiceProps) => {
    const { service } = params;

    // If the slug doesn't match any expected values, you can return 404
    // if (!['washer', 'dryer'].includes(slug)) {
    //     notFound(); // Built-in 404 handler in Next.js 13 App Router
    // }

    // React.useEffect(() => {
    //     // Append the BrightLocal script to the page after component mounts
    //     const script = document.createElement('script');
    //     script.src = 'https://www.local-marketing-reports.com/external/showcase-reviews/embed/a0c2903dbc7e57f43311c24c43f08f635b2ebbc2?id=18302'; // Replace with your actual widget script URL
    //     script.async = true;
    //     document.body.appendChild(script);


    //     return () => {
    //         // Clean up by removing the script when the component unmounts
    //         document.body.removeChild(script);
    //     };
    // }, []);


    return (
        <PageLayout title={`${SERVICES[service].title} repair`}>
            <ServiceBanner service={service} />
            <SectionLayout noYPadding>
                <p className='text-gray-500 text-md font-light'>{SERVICES[service].description}</p>
                <div className='py-4 md:py-5 px-10 border border-1 border-[#ceb5d9] rounded-xl md:rounded-full text-center bg-[#FDFCFE]'>
                    <p className='text-gray-500 text-sm md:text-md text-[#a175b5]'>{SERVICES[service].note}</p>
                </div>
            </SectionLayout>
            <ContactSection />
            <BrandsSection />
            <WhyUsSection />
            <AboutUsSection />
        </PageLayout >
    );
};

export default ServiceDetailPage;
