import React from 'react';
import Skeleton from '../skeleton';

interface IBlogInfoSkeletonProps {
    hideCarousel?: boolean,
}

export const BlogInfoSkeleton: React.FC<IBlogInfoSkeletonProps> = (props) => {
    let { hideCarousel } = props;

    return (
        <div className='flex flex-col gap-8'>
            {
                !hideCarousel &&
                <div className='hidden md:flex'>
                    <Skeleton height="600px" className="rounded-3xl" />
                </div>
            }
            <div className='hidden lg:flex flex-wrap items-center justify-center gap-4'>
                <Skeleton width="49%" height="340px" className="rounded-3xl" />
                <Skeleton width="49%" height="340px" className="rounded-3xl" />
                <Skeleton width="49%" height="340px" className="rounded-3xl" />
                <Skeleton width="49%" height="340px" className="rounded-3xl" />
            </div>
            <div className='hidden md:flex lg:hidden flex-wrap items-center justify-center gap-5'>
                <Skeleton width="48%" height="340px" className="rounded-3xl" />
                <Skeleton width="48%" height="340px" className="rounded-3xl" />
                <Skeleton width="48%" height="340px" className="rounded-3xl" />
                <Skeleton width="48%" height="340px" className="rounded-3xl" />
            </div>
            <div className='flex md:hidden flex-wrap items-center justify-center gap-5'>
                <Skeleton height="340px" className="rounded-3xl" />
                <Skeleton height="340px" className="rounded-3xl" />
                <Skeleton height="340px" className="rounded-3xl" />
                <Skeleton height="340px" className="rounded-3xl" />
                <Skeleton height="340px" className="rounded-3xl" />
            </div>
        </div>
    )
}