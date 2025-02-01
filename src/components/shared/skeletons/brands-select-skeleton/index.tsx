import React from 'react';
import Skeleton from '../skeleton';


export const BrandsSelectSkeleton = () => {
    return (
        <div className="flex items-center justify-center flex-wrap gap-3">
            <Skeleton width="150px" height="47px" className="rounded-full" />
            <Skeleton width="150px" height="47px" className="rounded-full" />
            <Skeleton width="150px" height="47px" className="rounded-full" />
            <Skeleton width="150px" height="47px" className="rounded-full" />
            <Skeleton width="150px" height="47px" className="rounded-full" />
        </div>
    )
}