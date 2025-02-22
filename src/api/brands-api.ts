import { createApi } from '@reduxjs/toolkit/query/react';
import { IFaqsListRequest, IFaqsListResponse } from './types/faq-types';
import { IBrandInfoRequest, IBrandInfoResponse, IBrandsListRequest, IBrandsListResponse } from './types/brand-types';
import axiosBasePublicQuery from '@utils/axiosBasePublicQuery';


export const brandApi = createApi({
    reducerPath: 'brandApi',
    baseQuery: axiosBasePublicQuery,
    tagTypes: ['Brands', 'BrandInfo'],
    endpoints: (builder) => ({
        getAllBrands: builder.query<IBrandsListResponse, IBrandsListRequest>({
            query: () => ({
                url: `/brands`,
                method: 'GET',
            }),
            providesTags: ['Brands'],
        }),
        getBrandInfo: builder.query<IBrandInfoResponse, IBrandInfoRequest>({
            query: ({ id }) => ({
                url: `/brands/${id}`,
                method: 'GET',
            }),
            providesTags: ['BrandInfo'],
        }),
    }),
});

export const {
    useLazyGetAllBrandsQuery,
    useGetBrandInfoQuery,
} = brandApi;
