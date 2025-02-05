import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '@utils/axiosBaseQuery';
import { IFaqsListRequest, IFaqsListResponse } from './types/faq-types';
import { IBrandsListRequest, IBrandsListResponse } from './types/brand-types';


export const brandApi = createApi({
    reducerPath: 'brandApi',
    baseQuery: axiosBaseQuery,
    tagTypes: ['Brands'],
    endpoints: (builder) => ({
        getAllBrands: builder.query<IBrandsListResponse, IBrandsListRequest>({
            query: () => ({
                url: `/brands`,
                method: 'GET',
            }),
            providesTags: ['Brands'],
        }),
    }),
});

export const {
    useLazyGetAllBrandsQuery,
} = brandApi;
