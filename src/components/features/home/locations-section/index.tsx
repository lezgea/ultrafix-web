"use client";

import React from 'react';
import * as motion from "framer-motion/client";
import SectionLayout from '@components/layout/section-layout';
import { useRouter } from 'next/navigation';
import { CITIES, STATES, STATES_LIST } from 'constants/locations';
import Image from 'next/image';
import { CitiesModal } from '@components/shared';


export const LocationsSection: React.FC = () => {
    const router = useRouter();
    const [stateIds, setStateIds] = React.useState<number[]>([]);
    const [selectedState, setSelectedState] = React.useState<string>('');
    const [showCitiesModal, setShowCitiesModal] = React.useState<boolean>(false);

    const onNavigate = (stateKey: string, city: string): void => {
        router.replace(`/appliance-repair/${stateKey.toLowerCase()}/${city}`);
    }


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
            >
                <div className="w-full columns-2 lg:columns-3">
                    {
                        STATES_LIST.map((state) => {
                            const stateKey = state.value as keyof typeof STATES;

                            return (
                                <div
                                    key={state.id}
                                    onClick={() => { setSelectedState(state.value); setShowCitiesModal(true) }}
                                    className="break-inside-avoid mb-5 text-gray-500 cursor-pointer bg-white rounded-3xl shadow-top-lg overflow-hidden hover:shadow-lg group"
                                >
                                    <div className='max-h-[100px] md:h-[200px] md:max-h-[200px] overflow-hidden'>
                                        <Image
                                            src={state.img}
                                            width={300}
                                            height={200}
                                            className="w-full max-h-[100px] md:h-[200px] md:max-h-[200px] object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                                            alt={`${state.title} Image`}
                                            loading="lazy"
                                            sizes="(max-width: 1200px) 200px, (min-width: 1200px) 200px"
                                        />
                                    </div>
                                    <div
                                        className="text-md font-semibold text-center text-primaryDark mb-1 text-gray-700 group-hover:text-primary px-5 py-3"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (stateIds.includes(state.id)) {
                                                let arr = stateIds
                                                let newArr = arr.filter(item => item !== state.id)
                                                setStateIds([...newArr])
                                            } else {
                                                setStateIds([...stateIds, state.id])
                                            }
                                        }}
                                    >
                                        {state.title}
                                    </div>
                                </div>
                            )
                        })
                    }

                    <CitiesModal
                        state={selectedState}
                        visible={showCitiesModal}
                        onClose={() => setShowCitiesModal(false)}
                    />
                </div>
            </motion.div>
        </SectionLayout>
    )
}

LocationsSection.displayName = "LocationsSection";