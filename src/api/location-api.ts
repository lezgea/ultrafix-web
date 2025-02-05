import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '@utils/axiosBaseQuery';
import { ICitiesInfoRequest, ICitiesInfoResponse, ICitiesListRequest, ICitiesListResponse, IStatesListRequest, IStatesListResponse } from './types/location-types';
import axiosBasePublicQuery from '@utils/axiosBasePublicQuery';


export const locationApi = createApi({
    reducerPath: 'locationApi',
    baseQuery: axiosBasePublicQuery,
    tagTypes: ['States', 'Cities'],
    endpoints: (builder) => ({
        getAllStates: builder.query<IStatesListResponse, void>({
            query: () => ({
                url: `/state-list`,
                method: 'GET',
            }),
            providesTags: ['States'],
        }),
        getAllCities: builder.query<ICitiesListResponse, ICitiesListRequest>({
            query: ({ state }) => ({
                url: `/locations/info`,
                method: 'GET',
                params: { state: state }
            }),
            providesTags: ['Cities'],
        }),
        getCityInfo: builder.query<ICitiesInfoResponse, ICitiesInfoRequest>({
            query: ({ state, city }) => ({
                url: `/locations/state/city`,
                method: 'GET',
                params: { state: state, city: city }
            }),
        }),
    }),
});

export const {
    useGetAllStatesQuery,
    useGetAllCitiesQuery,
    useGetCityInfoQuery,
    useLazyGetAllStatesQuery,
    useLazyGetAllCitiesQuery,
    useLazyGetCityInfoQuery,
} = locationApi;
