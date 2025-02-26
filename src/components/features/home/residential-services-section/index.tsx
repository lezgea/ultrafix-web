"use client"

import SectionLayout from '@components/layout/section-layout';
import { ServiceButton } from '@components/shared/service-button';
import { RootState } from '@store/store';
import { RESIDENCIAL_SERVICES_LIST } from 'constants/services';
import React from 'react';
import { useSelector } from 'react-redux';


const MemoizedServiceButton = React.memo(ServiceButton);


export const ResidentialServicesSection: React.FC = () => {
    const { brandInfo } = useSelector((state: RootState) => state.brand);
    const { cityInfo } = useSelector((state: RootState) => state.location);

    return (
        <SectionLayout
            scrollId="res_services"
            title={brandInfo?.text ? `Our Residential <span style="color:#2b7de2">${brandInfo?.text}</span> Services` : "Our Residential Services"}
            description="We have been providing top service! See just how our UltraFix Appliance Repair Service can better your life today!"
        >
            <div className='flex flex-wrap gap-5 md:gap-10 items-center justify-center'>
                {
                    RESIDENCIAL_SERVICES_LIST.map((item, i) =>
                        <MemoizedServiceButton key={item.id} type="residential" {...item} />
                    )
                }
            </div>
        </SectionLayout>
    )
}

ResidentialServicesSection.displayName = "ResidentialServicesSection";