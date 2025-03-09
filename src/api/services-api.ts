import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBasePublicQuery from '@utils/axiosBasePublicQuery';
import { IGetLocationServicesRequest, IGetLocationServicesResponse } from './types/service-types';


export const serviceApi = createApi({
    reducerPath: 'serviceApi',
    baseQuery: axiosBasePublicQuery,
    tagTypes: ['LocationServices', 'AllServices'],
    endpoints: (builder) => ({
        getLocationServices: builder.query<IGetLocationServicesResponse, IGetLocationServicesRequest>({
            query: () => ({
                url: `/locations/services`,
                method: 'GET',
            }),
            providesTags: ['LocationServices'],
        }),
        getAllServices: builder.query<IGetLocationServicesResponse, IGetLocationServicesRequest>({
            query: () => ({
                url: `/services`,
                method: 'GET',
            }),
            providesTags: ['AllServices'],
        }),
    }),
});

export const {
    useLazyGetAllServicesQuery,
    useGetLocationServicesQuery,
} = serviceApi;
