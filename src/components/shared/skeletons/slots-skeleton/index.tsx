import React from 'react';
import Skeleton from '../skeleton';


export const SlotsSkeleton = () => {
    return (
        <div className='flex flex-wrap items-center justify-center gap-3 md:max-w-[80%]'>
            <Skeleton width="150px" height="40px" className="rounded-full" />
            <Skeleton width="150px" height="40px" className="rounded-full" />
            <Skeleton width="150px" height="40px" className="rounded-full" />
            <Skeleton width="150px" height="40px" className="rounded-full" />
            <Skeleton width="150px" height="40px" className="rounded-full" />
            <Skeleton width="150px" height="40px" className="rounded-full" />
            <Skeleton width="150px" height="40px" className="rounded-full" />
            <Skeleton width="150px" height="40px" className="rounded-full" />
            <Skeleton width="150px" height="40px" className="rounded-full" />
            <Skeleton width="150px" height="40px" className="rounded-full" />
        </div>
    )
}