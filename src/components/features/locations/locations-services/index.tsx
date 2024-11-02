import React from 'react';
import SectionLayout from '@components/layout/section-layout';
import { LocationServiceButton } from '@components/shared';
import { COMMERCIAL_SERVICES_LIST, RESIDENCIAL_SERVICES_LIST } from 'constants/services';


const MemoizedLocationServiceButton = React.memo(LocationServiceButton)

interface ILocationServicesProps {
    type: string,
}

export const LocationsServices: React.FC<ILocationServicesProps> = (props) => {
    let { type } = props;

    return (
        <SectionLayout
            scrollId="services"
            title="Appliances We Repair"
            description="At UltraFix Appliance Repair, we specialize in repairing a wide variety of appliances for both residential and commercial customers. Our experienced technicians are equipped with the tools and knowledge needed to diagnose and repair any appliance issue you may be experiencing. Some of the appliances we repair include:"
        >
            {type === "residential" ? <ResidentialContent /> : <CommercialContent />}
        </SectionLayout>
    )
}

LocationsServices.displayName = "Location Services"


const ResidentialContent = () => {
    return (
        <div className='flex flex-wrap gap-5 md:gap-10 items-center justify-center'>
            {
                RESIDENCIAL_SERVICES_LIST.map((item, i) =>
                    <MemoizedLocationServiceButton key={item.id} {...item} />
                )
            }
        </div>
    )
}


const CommercialContent = () => {
    return (
        <div className='flex flex-wrap gap-5 md:gap-10 items-center justify-center'>
            {
                COMMERCIAL_SERVICES_LIST.map((item, i) =>
                    <MemoizedLocationServiceButton key={item.id} {...item} />
                )
            }
        </div>
    )
}