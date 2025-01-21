import React from 'react';
import { Metadata } from 'next';
import PageLayout from '@components/layout/page-layout';
import BookingForm from '@components/shared/booking-form';
import LeadForm from '@components/shared/lead-form';


export const metadata: Metadata = {
    title: "Book Now | UltraFix Appliance Repair LLC",
    description: "Client satisfaction is at the forefront of our minds at UltraFix Appliance Repair Service. Our business model is built on respect, promptness, honesty, and taking pride in our work. When you choose us for your appliance repair, you learn how closely we hold to these values.",
    keywords: [
        'Appliance Repair Houston',
        'Local Appliance Repair Houston',
        'Emergency Appliance Repair Houston',
        'Same Day Appliance Repair Houston',
        'Affordable Appliance Repair Houston',
        'Certified Appliance Technicians Houston',
        'Refrigerator Repair Houston',
        'Dishwasher Repair Houston',
        'Oven and Stove Repair Houston',
        'Microwave Repair Houston',
        'Freezer and Ice Maker Repair Houston',
        'Garbage Disposal Repair Houston',
        'Washer and Dryer Repair Houston',
        'Major Appliance Repair Houston',
        'Residential Appliance Repair Houston',
        'Commercial Appliance Repair Houston',
        'Houston Appliance Service',
        'Best Appliance Repair in Houston',
        'Nearby Appliance Repair Houston',
    ],
    openGraph: {
        type: 'website',
        title: 'UltraFix Appliance Repair LLC',
        description: "Client satisfaction is at the forefront of our minds at UltraFix Appliance Repair Service. Our business model is built on respect, promptness, honesty, and taking pride in our work. When you choose us for your appliance repair, you learn how closely we hold to these values.",
        url: `https://ultrafix.com`,
        images: [
            {
                url: `https://ultrafix.com/img/booking_banner.webp`,
                width: 1200,
                height: 630,
                alt: `UltraFix Appliance Repair Service`,
            },
        ],
        locale: 'en_US',
        siteName: 'UltraFix Appliance Repair',
    },
    twitter: {
        title: 'UltraFix Appliance Repair LLC',
        card: 'summary_large_image',
        description: "Client satisfaction is at the forefront of our minds at UltraFix Appliance Repair Service. Our business model is built on respect, promptness, honesty, and taking pride in our work. When you choose us for your appliance repair, you learn how closely we hold to these values.",
        images: [`https://ultrafix.com/img/booking_banner.webp`],
    },
    alternates: {
        canonical: `https://ultrafix.com/`,
    },
};


const Booking: React.FC = () => {
    return (
        <PageLayout title="The number one Appliance Repair service in US">
            <LeadForm />
        </PageLayout >
    );
};

export default Booking;
