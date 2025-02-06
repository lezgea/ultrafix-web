"use client";

import React from 'react';
import * as motion from "framer-motion/client";
import SectionLayout from '@components/layout/section-layout';
import { CITIES, STATES_LIST } from 'constants/locations';
import { CitiesModal } from '@components/shared';
import { StateButton } from '@components/shared/state-button';
import { useGetAllStatesQuery } from '@api/location-api';


const MemoizedStateButton = React.memo(StateButton);


export const LocationsSection: React.FC = () => {
    const [selectedState, setSelectedState] = React.useState<string>('');
    const [showCitiesModal, setShowCitiesModal] = React.useState<boolean>(false);

    const { data: statesList, isLoading: statesLoading } = useGetAllStatesQuery()

    return (
        <SectionLayout
            scrollId="locations"
            title="Our Locations"
            description={`We are in ${STATES_LIST?.length} states and ${Object.keys(CITIES)?.length} cities all over the United States to make better your life !`}
        >
            <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="flex justify-center"
            >
                <div className='flex flex-wrap gap-4 md:gap-5 items-center justify-center'>
                    {
                        statesList?.data?.map((item, i) =>
                            <MemoizedStateButton
                                key={item.id}
                                onClick={() => { setSelectedState(item.state_short); setShowCitiesModal(true) }}
                                {...item}
                            />
                        )
                    }
                </div>
                <CitiesModal
                    state={selectedState}
                    visible={showCitiesModal}
                    onClose={() => setShowCitiesModal(false)}
                />
            </motion.div>
        </SectionLayout>
    )
}

LocationsSection.displayName = "LocationsSection";