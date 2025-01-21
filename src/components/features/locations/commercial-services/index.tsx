import React from 'react';
import SectionLayout from '@components/layout/section-layout';
import { ComLocationServiceButton } from '@components/shared';
import { COMMERCIAL_SERVICES_LIST } from 'constants/services';


const MemoizedLocationServiceButton = React.memo(ComLocationServiceButton)

export const CommercialLocationServices: React.FC = () => {
    return (
        <SectionLayout
            scrollId="com_services"
            title="Commercial Appliances We Repair"
            description="At UltraFix Appliance Repair, we specialize in repairing a wide variety of appliances for both residential and commercial customers. Our experienced technicians are equipped with the tools and knowledge needed to diagnose and repair any appliance issue you may be experiencing. Some of the appliances we repair include:"
        >
            <div className='flex flex-wrap gap-5 md:gap-10 items-center justify-center'>
                {
                    COMMERCIAL_SERVICES_LIST.map((item, i) =>
                        <MemoizedLocationServiceButton key={item.id} {...item} />
                    )
                }
            </div>
        </SectionLayout>
    )
}

CommercialLocationServices.displayName = "Commercial Location Services"