import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '@utils/axiosBaseQuery';
import { IGetServicesResponse, IZipCheckingRequest, IZipCheckingResponse } from './types/booking-types';


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
        // getBlogInfo: builder.query<IBlogInfoResponse, IBlogInfoRequest>({
        //     query: ({ id }) => ({
        //         url: `/blog/posts/${id}`,
        //         method: 'GET',
        //     }),
        //     providesTags: ['BlogInfo'],
        // }),
        // updateBlog: builder.mutation<null, IBlogUpdateRequest>({
        //     query: (data) => ({
        //         url: `/blog/posts/${data.id}`,
        //         method: 'PUT',
        //         data: data,
        //     }),
        //     invalidatesTags: ['BlogInfo'],
        // }),
        // deleteBlog: builder.mutation<void, { id: number | string }>({
        //     query: ({ id }) => ({
        //         url: `/blog/posts/${id}`,
        //         method: 'DELETE',
        //     }),
        //     invalidatesTags: ['Blogs'],
        // }),
    }),
});

export const {
    useCheckZipMutation,
    useGetServicesQuery,
    // useCreateBlogMutation,
    // useLazyGetAllBlogsQuery,
    // useGetBlogInfoQuery,
    // useUpdateBlogMutation,
    // useDeleteBlogMutation,
} = bookingApi;
