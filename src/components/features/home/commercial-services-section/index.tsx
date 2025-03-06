"use client"

import React from 'react';
import SectionLayout from '@components/layout/section-layout';
import { ServiceButton } from '@components/shared/service-button';
import { COMMERCIAL_SERVICES_LIST } from 'constants/services';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';
import { useParams, usePathname } from 'next/navigation';


const MemoizedServiceButton = React.memo(ServiceButton);


export const CommercialServicesSection: React.FC = () => {
    const pathname = usePathname();
    const { state, city, brandId } = useParams();
    const { brandInfo } = useSelector((state: RootState) => state.brand);


    function getTitle() {
        switch (pathname) {
            case `/brand/${brandId}`:
            case `/appliance-repair/${state}/${city}/brand/${brandId}`:
                return `Our Commercial <span style="color:#2b7de2">${brandInfo?.text}</span> Services`
            default:
                return "Our Commercial Services"
        }
    }

    let title = getTitle();

    return (
        <SectionLayout
            scrollId="com_services"
            title={title}
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