import { createApi } from '@reduxjs/toolkit/query/react';
import { IFaqsListRequest, IFaqsListResponse } from './types/faq-types';
import { IBrandsListRequest, IBrandsListResponse } from './types/brand-types';
import axiosBasePublicQuery from '@utils/axiosBasePublicQuery';


export const brandApi = createApi({
    reducerPath: 'brandApi',
    baseQuery: axiosBasePublicQuery,
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
