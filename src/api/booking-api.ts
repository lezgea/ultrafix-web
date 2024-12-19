import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '@utils/axiosBaseQuery';
import { IGetSelectedServicesRequest, IGetSelectedServicesResponse, IGetServicesResponse, IZipCheckingRequest, IZipCheckingResponse } from './types/booking-types';


export const bookingApi = createApi({
    reducerPath: 'bookingApi',
    baseQuery: axiosBaseQuery,
    tagTypes: ['Services'],
    endpoints: (builder) => ({
        checkZip: builder.mutation<IZipCheckingResponse, IZipCheckingRequest>({
            query: (data) => ({
                url: `/booking/check-zip`,
                method: 'POST',
                data: data,
            }),
            invalidatesTags: ['Services'],
        }),
        getServices: builder.query<IGetServicesResponse, IZipCheckingRequest>({
            query: ({ zip }) => ({
                url: `/booking/services`,
                method: 'GET',
                params: { zip: zip },
            }),
            providesTags: ['Services'],
        }),
        getBrands: builder.query<IGetServicesResponse, void>({
            query: () => ({
                url: `/booking/brands`,
                method: 'GET',
                // params: { zip: zip },
            }),
        }),
        getSelectedServices: builder.query<IGetSelectedServicesResponse, IGetSelectedServicesRequest>({
            query: ({ zip, appliances }) => ({
                url: `/booking/selected-services`,
                method: 'GET',
                params: { zip: zip, appliances: appliances },
            }),
            // providesTags: ['Services'],
        }),
    }),
});

export const {
    useCheckZipMutation,
    useGetServicesQuery,
    useGetBrandsQuery,
    useLazyGetSelectedServicesQuery,
} = bookingApi;
