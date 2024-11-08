"use client";

import React from 'react';
import * as motion from "framer-motion/client"
import { MapIcon } from '../map-icon';


interface IStateProps {
    id: number,
    title: string,
    value: string,
    onClick: () => void,
}


export const StateButton: React.FC<IStateProps> = (props) => {
    let { title, value, onClick } = props;

    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div
                onClick={onClick}
                className='flex cursor-pointer relative text-center items-center justify-center pb-10 group hover:bg-primary transition-colors duration-300 ease-in-out w-[10rem] h-[10rem] lg:w-[17rem] lg:h-[17rem] rounded-lg md:rounded-2xl bg-gray-100 shadow-md md:shadow-top-xl overflow-hidden hover:shadow-lg'
            >
                <MapIcon
                    value={value}
                    className='fill-gray-400 group-hover:fill-white h-[100px] w-[100px] lg:h-[150px] lg:w-[150px] transform transition-transform duration-300 ease-in-out group-hover:scale-110 active:scale-100'
                />
                <span className='absolute bottom-0 bg-[#fff] text-sm lg:text-md lg:px-4 py-2 md:py-2 w-full text-gray-400 group-hover:text-primaryDark group-hover:font-medium'>{title}</span>
            </div>
        </motion.div>
    )
}
