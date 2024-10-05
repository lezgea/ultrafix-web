import SectionLayout from '@components/layout/section-layout';
import { ServiceButton } from '@components/shared/service-button';
import { SERVICES, SERVICES_LIST } from 'constants/services';
import React from 'react';


const MemoizedServiceButton = React.memo(ServiceButton);


export const ServicesSection: React.FC = () => {
    return (
        <SectionLayout
            scrollId="services"
            title="Our Services"
            description="We have been providing top service! See just how our UltraFix Appliance Repair Service can better your life today!"
        >
            <div className='flex flex-wrap gap-7 md:gap-10 items-center justify-center'>
                {
                    SERVICES_LIST.map((item, i) =>
                        <MemoizedServiceButton key={item.id} {...item} />
                    )
                }
            </div>
        </SectionLayout>
    )
}

ServicesSection.displayName = "ServicesSection";