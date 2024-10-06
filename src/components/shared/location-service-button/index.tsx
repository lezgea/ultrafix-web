"use client";

import React from 'react';
import Link from 'next/link';
import { ServiceIcon } from '../service-icon';
import * as motion from "framer-motion/client"
import { useParams } from 'next/navigation';


interface IServiceProps {
    id: number,
    title: string,
    value: string,
}


export const LocationServiceButton: React.FC<IServiceProps> = (props) => {
    let { title, value: service } = props;

    const { state, city } = useParams();

    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Link
                href={`/locations/${state}/${city}/${service}`}
                className='flex relative text-center items-center justify-center group hover:bg-primary transition-colors duration-300 ease-in-out w-[6rem] h-[6rem] lg:w-[12rem] lg:h-[12rem] rounded-full bg-gray-100'
            >
                <ServiceIcon
                    value={service}
                    className='fill-gray-400 group-hover:fill-white h-10 w-10 lg:h-20 lg:w-20 transform transition-transform duration-300 ease-in-out group-hover:scale-110 active:scale-100'
                />
                <span className='absolute bottom-0 bg-[#fff] text-sm lg:text-xl lg:px-4 py-1 w-full h-[15px] lg:h-[20px] text-gray-400'>{title}</span>
            </Link>
        </motion.div>
    )
}
