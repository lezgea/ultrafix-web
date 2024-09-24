import React from 'react';
import Link from 'next/link';
import { ServiceIcon } from '../service-icon';


interface IServiceProps {
    id: number,
    title: string,
    value: string,
}


export const LocationServiceButton: React.FC<IServiceProps> = (props) => {
    let { title, value: service } = props;

    return (
        <Link
            href={`/services/${service}`}
            className='flex relative text-center items-center justify-center group hover:bg-primary transition-colors duration-300 ease-in-out w-[12rem] h-[12rem] rounded-full bg-gray-100'
        >
            <ServiceIcon
                value={service}
                className='fill-gray-400 group-hover:fill-white h-20 w-20 transform transition-transform duration-300 ease-in-out group-hover:scale-110 active:scale-100'
            />
            <span className='absolute bottom-0 bg-[#fff] px-4 py-1 w-full h-[20px] text-gray-400'>{title}</span>
        </Link>
    )
}
