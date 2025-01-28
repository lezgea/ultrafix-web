import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '@utils/axiosBaseQuery';
import { IFaqsListRequest, IFaqsListResponse } from './types/faq-types';


export const faqApi = createApi({
    reducerPath: 'faqApi',
    baseQuery: axiosBaseQuery,
    tagTypes: ['Faqs'],
    endpoints: (builder) => ({
        getAllFaqs: builder.query<IFaqsListResponse, IFaqsListRequest>({
            query: ({ city }) => ({
                url: `/faq`,
                method: 'GET',
                params: { city: city },
            }),
            providesTags: ['Faqs'],
        }),
    }),
});

export const {
    useLazyGetAllFaqsQuery,
} = faqApi;
