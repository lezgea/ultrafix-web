import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '@utils/axiosBaseQuery';
import { IBookAppointmentRequest, IBookAppointmentResponse, ICompleteLeadRequest, ICompleteLeadResponse, IGetBrandsRequest, IGetBrandsResponse, IGetSelectedServicesRequest, IGetSelectedServicesResponse, IGetServicesResponse, IGetTimeSlotsRequest, IGetTimeSlotsResponse, IZipCheckingRequest, IZipCheckingResponse } from './types/booking-types';


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
        getBrands: builder.query<IGetBrandsResponse, IGetBrandsRequest>({
            query: (params) => ({
                url: `/booking/brands`,
                method: 'GET',
                params: params,
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
        getTimeSlots: builder.query<IGetTimeSlotsResponse, IGetTimeSlotsRequest>({
            query: ({ zip, date, timezone, appliances }) => ({
                url: `/booking/schedule-days`,
                method: 'GET',
                params: { zip, date, timezone, appliances },
            }),
            // providesTags: ['Services'],
        }),
        bookAppointment: builder.mutation<IBookAppointmentResponse, IBookAppointmentRequest>({
            query: (data) => ({
                url: `/booking/complete`,
                method: 'POST',
                data: data,
            }),
        }),
        completeLead: builder.mutation<ICompleteLeadResponse, ICompleteLeadRequest>({
            query: (data) => ({
                url: `/booking/complete-lead`,
                method: 'POST',
                data: data,
            }),
        }),
    }),
});

export const {
    useCheckZipMutation,
    useGetServicesQuery,
    useLazyGetBrandsQuery,
    useLazyGetSelectedServicesQuery,
    useLazyGetTimeSlotsQuery,
    useBookAppointmentMutation,
    useCompleteLeadMutation,
} = bookingApi;
