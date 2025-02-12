import React from 'react';
import Skeleton from '../skeleton';


export const LocationsTitleSkeleton = () => {

    return (
        <>
            <div className='hidden md:flex flex-col gap-10 w-full items-end py-5'>
                <Skeleton width="70%" height="45px" className="rounded-3xl" />
                <Skeleton width="40%" height="45px" className="rounded-3xl" />
            </div>
            <div className='flex md:hidden flex-col gap-8 w-full items-center py-5'>
                <Skeleton width="70%" height="45px" className="rounded-3xl" />
                <Skeleton width="60%" height="45px" className="rounded-3xl" />
                <Skeleton width="80%" height="45px" className="rounded-3xl" />
            </div>
        </>

    )
}