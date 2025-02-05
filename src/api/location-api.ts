import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '@utils/axiosBaseQuery';
import { IStatesListRequest, IStatesListResponse } from './types/location-types';


export const locationApi = createApi({
    reducerPath: 'locationApi',
    baseQuery: axiosBaseQuery,
    tagTypes: ['States'],
    endpoints: (builder) => ({
        getAllStates: builder.query<IStatesListResponse, IStatesListRequest>({
            query: () => ({
                url: `/state-list`,
                method: 'GET',
            }),
            providesTags: ['States'],
        }),
    }),
});

export const {
    useLazyGetAllStatesQuery,
} = locationApi;
