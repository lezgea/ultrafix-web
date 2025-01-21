import React from 'react';  
import SectionLayout from '@components/layout/section-layout';
import { ServiceButton } from '@components/shared/service-button';
import { COMMERCIAL_SERVICES_LIST } from 'constants/services';


const MemoizedServiceButton = React.memo(ServiceButton);


export const CommercialServicesSection: React.FC = () => {
    return (
        <SectionLayout
            scrollId="com_services"
            title="Our Commercial Services"
            description="We have been providing top service! See just how our UltraFix Appliance Repair Service can better your life today!"
        >
            <div className='flex flex-wrap gap-5 md:gap-10 items-center justify-center'>
                {
                    COMMERCIAL_SERVICES_LIST.map((item, i) =>
                        <MemoizedServiceButton key={item.id} type="commercial" {...item} />
                    )
                }
            </div>
        </SectionLayout>
    )
}

CommercialServicesSection.displayName = "CommercialServicesSection";