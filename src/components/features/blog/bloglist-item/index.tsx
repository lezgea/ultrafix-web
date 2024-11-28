"use client";

import Link from 'next/link';
import React from 'react';


interface IBlogListItemProps {
    id: string | number,
    title: string,
    description: string,
    image: string,
}

export const BlogListItem: React.FC<IBlogListItemProps> = (props) => {
    let { id, title, description, image } = props;
    const [expanded, setExpand] = React.useState<boolean>(false);

    return (
        <Link
            href={`blogs/update/${id}`}
            className="flex items-center border rounded-2xl px-5 py-4 select-none gap-5 group hover:bg-gray-100 cursor-pointer"
        >
            <div className="h-20 min-w-20 max-w-20 rounded-lg overflow-hidden">
                <img src={image} alt={image} className="w-full h-full object-cover" />
            </div>
            <div className='flex flex-col gap-2'>
                <div className="flex cursor-pointer" onClick={() => setExpand(!expanded)}>
                    <span className="w-full text-xl font-regmed group-hover:text-primaryDark">{title}</span>
                </div>
                <p className="font-light truncate-text">{description}</p>
            </div>
        </Link>
    )
}