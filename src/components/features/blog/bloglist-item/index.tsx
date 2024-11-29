"use client";

import React from 'react';
import Link from 'next/link';
import { IBlogItem } from '@api/types/blog-types';



interface IBlogListItemProps extends IBlogItem {
    title: string,
    description: string,
}

export const BlogListItem: React.FC<IBlogListItemProps> = (props) => {
    let { id, title, description, cover } = props;
    const [expanded, setExpand] = React.useState<boolean>(false);

    return (
        <Link
            href={`blogs/update/${id}`}
            className="flex items-center border rounded-2xl px-5 py-4 select-none gap-5 group hover:bg-gray-100 cursor-pointer"
        >
            <div className="h-20 min-w-20 max-w-20 rounded-lg overflow-hidden">
                <img src={cover?.url} alt={cover.name} className="w-full h-full object-cover" />
            </div>
            <div className='flex flex-col gap-2'>
                <div className="flex cursor-pointer" onClick={() => setExpand(!expanded)}>
                    <span className="w-full text-xl font-regmed group-hover:text-primaryDark">{title}</span>
                </div>
                <p className="font-light truncate-text">
                    <div dangerouslySetInnerHTML={{ __html: description }} />
                </p>
            </div>
        </Link>
    )
}