import React from 'react';
import Skeleton from '../skeleton';

interface IBlogInfoSkeletonProps {
    hideCarousel?: boolean,
}

export const BlogInfoSkeleton: React.FC<IBlogInfoSkeletonProps> = (props) => {
    let { hideCarousel } = props;

    return (
        <div className='flex flex-col gap-8'>
            <Skeleton width="90%" height="40px" className="rounded-3xl" />
            <Skeleton height="600px" className="rounded-3xl" />
            <div className='flex flex-col gap-3'>
                <Skeleton width="80%" height="15px" className="rounded-3xl" />
                <Skeleton height="15px" className="rounded-3xl" />
                <Skeleton width="90%" height="15px" className="rounded-3xl" />
                <Skeleton height="15px" className="rounded-3xl" />
                <Skeleton height="15px" className="rounded-3xl" />
                <Skeleton width="80%" height="15px" className="rounded-3xl" />
                <Skeleton height="15px" className="rounded-3xl" />
                <Skeleton width="90%" height="15px" className="rounded-3xl" />
            </div>

        </div>
    )
}