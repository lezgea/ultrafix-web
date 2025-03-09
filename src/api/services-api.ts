import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBasePublicQuery from '@utils/axiosBasePublicQuery';
import {
    IGetLocationServicesRequest,
    IGetLocationServicesResponse,
    IGetServiceInfoRequest,
    IGetServiceInfoResponse
} from './types/service-types';


export const serviceApi = createApi({
    reducerPath: 'serviceApi',
    baseQuery: axiosBasePublicQuery,
    tagTypes: ['LocationServices', 'AllServices', 'ServiceInfo'],
    endpoints: (builder) => ({
        getLocationServices: builder.query<IGetLocationServicesResponse, IGetLocationServicesRequest>({
            query: (data) => ({
                url: `/locations/services`,
                method: 'GET',
                params: data,
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
        getServiceInfo: builder.query<IGetServiceInfoResponse, IGetServiceInfoRequest>({
            query: ({ slug }) => ({
                url: `/services/${slug}`,
                method: 'GET',
            }),
            providesTags: ['ServiceInfo'],
        }),
    }),
});

export const {
    useLazyGetAllServicesQuery,
    useLazyGetLocationServicesQuery,
    useLazyGetServiceInfoQuery,
} = serviceApi;
