import React from 'react';
import Skeleton from '../skeleton';


export const LocationsServiceTitleSkeleton = () => {

    return (
        <>
            <div className='hidden md:flex flex-col gap-8 w-full items-start py-5'>
                <Skeleton width="70%" height="45px" className="rounded-3xl" />
                <Skeleton width="100%" height="45px" className="rounded-3xl" />
                <div className='flex flex-col w-full gap-3'>
                    <Skeleton width="80%" height="15px" className="rounded-3xl" />
                    <Skeleton width="100%" height="15px" className="rounded-3xl" />
                    <Skeleton width="90%" height="15px" className="rounded-3xl" />
                </div>
            </div>
            <div className='flex md:hidden flex-col gap-8 w-full items-center py-5'>
                <Skeleton width="70%" height="45px" className="rounded-3xl" />
                <Skeleton width="60%" height="45px" className="rounded-3xl" />
                <Skeleton width="80%" height="45px" className="rounded-3xl" />
                <div className='flex flex-col items-center w-full gap-3'>
                    <Skeleton width="80%" height="15px" className="rounded-3xl" />
                    <Skeleton width="100%" height="15px" className="rounded-3xl" />
                    <Skeleton width="90%" height="15px" className="rounded-3xl" />
                </div>
            </div>
        </>

    )
}