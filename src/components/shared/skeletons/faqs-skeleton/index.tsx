import React from 'react';
import Skeleton from '../skeleton';


export const FaqsSkeleton = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-2'>
            <Skeleton height="60px" className="rounded-2xl" />
            <Skeleton height="60px" className="rounded-2xl" />
            <Skeleton height="60px" className="rounded-2xl" />
            <Skeleton height="60px" className="rounded-2xl" />
            <Skeleton height="60px" className="rounded-2xl" />
            <Skeleton height="60px" className="rounded-2xl" />
            <Skeleton height="60px" className="rounded-2xl" />
            <Skeleton height="60px" className="rounded-2xl" />
        </div>
    )
}