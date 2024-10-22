"use client";

import React from 'react';
import * as motion from "framer-motion/client";
import SectionLayout from '@components/layout/section-layout';
import { useRouter } from 'next/navigation';
import { STATES, STATES_LIST } from 'constants/locations';


export const LocationsSection: React.FC = () => {
    const router = useRouter();
    const [stateIds, setStateIds] = React.useState<number[]>([])

    const onNavigate = (stateKey: string, city: string): void => {
        router.replace(`/appliance-repair/${stateKey.toLowerCase()}/${city}`);
    }


    return (
        <SectionLayout
            scrollId="locations"
            title="Our Locations"
            description="See just how our UltraFix Appliance Repair Service can better your life all over the United States !"
        >
            <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className='flex items-center bg-white rounded-3xl shadow-top-lg p-7 lg:p-10'
            >
                <div className="w-full columns-2 lg:columns-3">
                    {
                        STATES_LIST.map((state) => {
                            const stateKey = state.value as keyof typeof STATES;

                            return (
                                <div
                                    key={state.id}
                                    className="break-inside-avoid mb-6 w-[250px] text-gray-500 cursor-pointer"
                                >
                                    <div
                                        className="text-sm font-semibold mb-1 text-gray-700 hover:text-primary"
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
                                    <div className="flex flex-col space-y-1 ml-1">
                                        {
                                            STATES[stateKey].map((city) =>
                                                <div
                                                    key={city.id}
                                                    onClick={() => onNavigate(stateKey, city.value)}
                                                    className="text-sm md:text-md font-light text-gray-500 cursor-pointer hover:text-primary hover:underline"
                                                >
                                                    {city.title}
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </motion.div>
        </SectionLayout>
    )
}

LocationsSection.displayName = "LocationsSection";