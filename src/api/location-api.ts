import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '@utils/axiosBaseQuery';
import { ICitiesInfoRequest, ICitiesInfoResponse, ICitiesListRequest, ICitiesListResponse, ICitiesMinlistRequest, ICitiesMinlistResponse, IStatesListRequest, IStatesListResponse } from './types/location-types';
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
                url: `/locations/city`,
                method: 'GET',
                params: { state: state, city: city }
            }),
        }),
        getCitiesMinlist: builder.query<ICitiesMinlistResponse, ICitiesMinlistRequest>({
            query: ({ title, state }) => ({
                url: `/cities/minlist`,
                method: 'GET',
                params: { titel: title, state: state }
            }),
        }),
    }),
});

export const {
    useGetAllStatesQuery,
    useGetAllCitiesQuery,
    useGetCityInfoQuery,
    useGetCitiesMinlistQuery,
    useLazyGetAllStatesQuery,
    useLazyGetAllCitiesQuery,
    useLazyGetCityInfoQuery,
} = locationApi;
