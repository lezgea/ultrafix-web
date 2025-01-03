import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '@utils/axiosBaseQuery';
import { ApplyResponse, ContactResponse, IApplyRequest, IContactRequest, ILoginRequest, ILoginResponse } from './types/user-types';


export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: axiosBaseQuery,
    tagTypes: ['User'],
    endpoints: (builder) => ({
        contactUser: builder.mutation<ContactResponse, IContactRequest>({
            query: (credentials) => ({
                url: '/contacts/store',
                method: 'POST',
                data: credentials,
            }),
        }),
        apply: builder.mutation<ApplyResponse, IApplyRequest>({
            query: (credentials) => ({
                url: '/technician_applies',
                method: 'POST',
                data: credentials,
            }),
        }),
        loginUser: builder.mutation<ILoginResponse, ILoginRequest>({
            query: (credentials) => ({
                url: '/login',
                method: 'POST',
                data: credentials,
            }),
        }),
    }),
});

export const {
    useContactUserMutation,
    useApplyMutation,
    useLoginUserMutation,
} = userApi;
