"use client";

import SectionLayout from '@components/layout/section-layout';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { CITIES } from 'constants/locations';
import DateLib from '@utils/datelib';
import { RESIDENTIAL_SERVICES } from 'constants/services';


export const EmployeesSection: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);

    // This ensures the component only runs on the client
    useEffect(() => {
        setIsMounted(true);
    }, []);


    const { state, city, service } = useParams();

    const serviceKey = service as keyof typeof RESIDENTIAL_SERVICES;
    const cityKey = `${state}_${city}` as keyof typeof CITIES;
    const cityData = CITIES[cityKey];

    function getRandomItems() {
        return cityData?.employees.sort(
            (a, b) => 0.5 - Math.random()
        );
    }

    function getMonth() {
        let id;
        if (parseInt(DateLib.date('d')) < 25) {
            id = parseInt(DateLib.date('m')) - 2;
            if (id == -1) id = 11;
            if (id == -2) id = 10;
        } else {
            id = parseInt(DateLib.date('m')) - 1;
            if (id == -1) id = 11;
        }

        return DateLib.getMonth(id);
    }


    return (
        <SectionLayout
            scrollId="employees"
            title={`The Best Employees of ${getMonth()}`}
        >
            <div className="flex items-center justify-center gap-7 py-5 md:gap-10 lg:gap-20 md:py-10">
                {cityData?.employees.map(({ id, image, name }) => (
                    <div className="flex flex-col items-center gap-3 md:gap-7">
                        <Image
                            key={id}
                            src={image}
                            width={200}
                            height={200}
                            className="w-[100px] h-[100px] md:w-[250px] md:h-[250px]"
                            alt={image}
                            loading="lazy"
                            sizes="(max-width: 1200px) 100vw, 1000px"
                        />
                        <span className="text-lg md:text-xl text-gray-400 font-regmed">{name}</span>
                    </div>

                ))}
            </div>
        </SectionLayout>
    );
};
