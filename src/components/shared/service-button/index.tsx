import Link from 'next/link';
import React from 'react';
import { ServiceIcon } from '../service-icon';


interface IServiceProps {
    id: number,
    title: string,
    value: string,
    price: string,
    subTitle: string,
    description: string,
    note: string,
}


export const ServiceButton: React.FC<IServiceProps> = (props) => {
    let { title, value } = props;

    return (
        <Link href={`/${value}`} className='flex relative text-center items-center justify-center group hover:bg-primary w-[12rem] h-[12rem] rounded-full bg-gray-100'>
            <ServiceIcon value={value} className='fill-gray-400 group-hover:fill-white h-20 w-20' />
            <span className='absolute bottom-0 bg-[#fdfdfd] px-4 py-1 w-full h-[20px] text-gray-400'>{title}</span>
        </Link>
    )
}
