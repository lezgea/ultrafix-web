"use client"

import React from 'react';
import SectionLayout from '@components/layout/section-layout';
import { RezLocationServiceButton } from '@components/shared';
import { RESIDENCIAL_SERVICES_LIST } from 'constants/services';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';


const MemoizedLocationServiceButton = React.memo(RezLocationServiceButton)


export const ResidentialLocationServices: React.FC = () => {
    const { cityInfo } = useSelector((state: RootState) => state.location);
    const { brandInfo } = useSelector((state: RootState) => state.brand);

    let title = brandInfo?.text
        ? `Residential <span style="color:#2b7de2">${brandInfo?.text}</span> Appliances We Repair in ${cityInfo?.title}, ${cityInfo?.state_short}`
        : `Residential Appliances We Repair in ${cityInfo?.title}, ${cityInfo?.state_short}`

    return (
        <SectionLayout
            scrollId="res_services"
            title={title}
            description="At UltraFix Appliance Repair, we specialize in repairing a wide variety of appliances for both residential and commercial customers. Our experienced technicians are equipped with the tools and knowledge needed to diagnose and repair any appliance issue you may be experiencing. Some of the appliances we repair include:"
        >
            <div className='flex flex-wrap gap-5 md:gap-10 items-center justify-center'>
                {
                    RESIDENCIAL_SERVICES_LIST.map((item, i) =>
                        <MemoizedLocationServiceButton key={item.id} {...item} />
                    )
                }
            </div>
        </SectionLayout>
    )
}

ResidentialLocationServices.displayName = "Residential Location Services"