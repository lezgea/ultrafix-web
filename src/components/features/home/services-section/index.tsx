import SectionLayout from '@components/layout/section-layout';
import { ServiceButton } from '@components/shared/service-button';
import { SERVICES } from 'constants/services';
import React from 'react';


export const ServicesSection: React.FC = () => {
    return (
        <SectionLayout
            scrollId="services"
            title="Our Services"
            description="We have been providing top service! See just how our UltraFix Appliance Repair Service can better your life today!"
        >
            <div className='flex flex-wrap gap-10 items-center justify-center'>
                {
                    SERVICES.map((item, i) =>
                        <ServiceButton key={i} {...item} />
                    )
                }
            </div>
        </SectionLayout>
    )
}