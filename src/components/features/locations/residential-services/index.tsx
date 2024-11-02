import React from 'react';
import SectionLayout from '@components/layout/section-layout';
import { RezLocationServiceButton } from '@components/shared';
import { RESIDENCIAL_SERVICES_LIST } from 'constants/services';


const MemoizedLocationServiceButton = React.memo(RezLocationServiceButton)


export const ResidentialLocationServices: React.FC = () => {
    return (
        <SectionLayout
            scrollId="res_services"
            title="Residential Appliances We Repair"
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