import { AppliancesIllustration } from '@assets/icons';
import { ContactForm } from '@components/features/sign-up';
import SectionLayout from '@components/layout/section-layout';
import Image from 'next/image';
import React from 'react';


export const ContactSection: React.FC = () => {
    return (
        <SectionLayout
            scrollId="contact"
            title="Contact Us"
            description="We have been providing top service! See just how our UltraFix Appliance Repair Service can better your life today!"
        >
            <div className='flex items-center justify-center bg-white rounded-3xl shadow-top-lg p-10'>
                <ContactForm />
            </div>
        </SectionLayout>
    )
}

ContactSection.displayName = "ContactSection";