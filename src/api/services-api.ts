import { createApi } from '@reduxjs/toolkit/query/react';
import { IStatesListResponse } from './types/location-types';
import axiosBasePublicQuery from '@utils/axiosBasePublicQuery';


export const serviceApi = createApi({
    reducerPath: 'serviceApi',
    baseQuery: axiosBasePublicQuery,
    tagTypes: ['Services', 'Minlist'],
    endpoints: (builder) => ({
        getAllServices: builder.query<IStatesListResponse, void>({
            query: () => ({
                url: `/services`,
                method: 'GET',
            }),
            providesTags: ['Services'],
        }),
        getServicesMinlist: builder.query<IStatesListResponse, void>({
            query: () => ({
                url: `/services/minlist`,
                method: 'GET',
            }),
            providesTags: ['Minlist'],
        }),
    }),
});

export const {
    useLazyGetAllServicesQuery,
} = serviceApi;
