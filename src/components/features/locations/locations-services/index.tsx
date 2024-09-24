import React from 'react';
import SectionLayout from '@components/layout/section-layout';
import { LocationServiceButton } from '@components/shared';
import { SERVICES_LIST } from 'constants/services';


export const LocationsServices: React.FC = () => {
    return (
        <SectionLayout
            scrollId="services"
            title="Appliances We Repair"
            description="At UltraFix Appliance Repair, we specialize in repairing a wide variety of appliances for both residential and commercial customers. Our experienced technicians are equipped with the tools and knowledge needed to diagnose and repair any appliance issue you may be experiencing. Some of the appliances we repair include:"
        >
            <div className='flex flex-wrap gap-10 items-center justify-center'>
                {
                    SERVICES_LIST.map((item, i) =>
                        <LocationServiceButton key={i} {...item} />
                    )
                }
            </div>
        </SectionLayout>
    )
}