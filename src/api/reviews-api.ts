import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBasePublicQuery from '@utils/axiosBasePublicQuery';
import { IGetLocationReviewsRequest, IGetLocationReviewsResponse } from './types/review-types';


export const reviewsApi = createApi({
    reducerPath: 'reviewsApi',
    baseQuery: axiosBasePublicQuery,
    tagTypes: ['LocationReviews'],
    endpoints: (builder) => ({
        getLocationReviews: builder.query<IGetLocationReviewsResponse, IGetLocationReviewsRequest>({
            query: (data) => ({
                url: `/locations/reviews`,
                method: 'GET',
                params: data,
            }),
            providesTags: ['LocationReviews'],
        }),
    }),
});

export const {
    useLazyGetLocationReviewsQuery,
} = reviewsApi;
