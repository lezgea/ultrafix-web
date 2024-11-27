import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '@utils/axiosBaseQuery';
import { IDataset, IDatasetCreateCommentRequest, IDatasetCreateRequest, IDatasetInfoRequest, IDatasetsRequest, IDatasetsResponse, IDatasetUpdateCommentRequest, IDatasetUpdateRequest, IDeleteDatasetCommentRequest, IGetDatasetCommentsRequest, IGetDatasetCommentsResponse } from './types/blog-types';
import { IMessageResponse } from './types/competition-types';


export const blogsApi = createApi({
    reducerPath: 'blogsApi',
    baseQuery: axiosBaseQuery,
    tagTypes: ['Blogs'],
    endpoints: (builder) => ({
        getAllBlogs: builder.query<IDatasetsResponse, IDatasetsRequest>({
            query: ({ data }) => ({
                url: `/datasets/public/page?isMyDataset=false`,
                method: 'GET',
                params: { page: data.page, count: data.count },
            }),
            providesTags: ['Blogs'],
        }),
        createBlog: builder.mutation<IMessageResponse, IDatasetCreateRequest>({
            query: (data) => ({
                url: `/datasets`,
                method: 'POST',
                data: data,
            }),
            invalidatesTags: ['Blogs'],
        }),


        // getMyDatasets: builder.query<IDatasetsResponse, IDatasetsRequest>({
        //     query: ({ data }) => ({
        //         url: `/datasets/public/page?isMyDataset=true`,
        //         method: 'GET',
        //         params: { page: data.page, count: data.count },
        //     }),
        //     providesTags: ['MyDatasets'],
        // }),
        // getDatasetInfo: builder.query<IDataset, IDatasetInfoRequest>({
        //     query: ({ id }) => ({
        //         url: `/datasets/${id}`,
        //         method: 'GET',
        //     }),
        //     providesTags: ['DatasetInfo'],
        // }),
        // updateDataset: builder.mutation<IMessageResponse, IDatasetUpdateRequest>({
        //     query: (data) => ({
        //         url: `/datasets/${data.dataId}`,
        //         method: 'PUT',
        //         data: data,
        //     }),
        //     invalidatesTags: ['DatasetInfo'],
        // }),
        // deleteDataset: builder.mutation<void, { id: number | string }>({
        //     query: ({ id }) => ({
        //         url: `/files/dataset/${id}`,
        //         method: 'DELETE',
        //     }),
        //     invalidatesTags: ['DatasetInfo'],
        // }),
        // createDatasetComment: builder.mutation<IMessageResponse, IDatasetCreateCommentRequest>({
        //     query: ({ id, data }) => ({
        //         url: `/datasets/${id}/comment`,
        //         method: 'POST',
        //         data: data,
        //     }),
        //     invalidatesTags: ['DatasetComments'],
        // }),
        // getDatasetComments: builder.query<IGetDatasetCommentsResponse, IGetDatasetCommentsRequest>({
        //     query: ({ id }) => ({
        //         url: `/datasets/${id}/comment`,
        //         method: 'GET',
        //         params: {},
        //     }),
        //     providesTags: ['DatasetComments'],
        // }),
        // deleteDatasetComment: builder.mutation<void, IDeleteDatasetCommentRequest>({
        //     query: ({ commentId }) => ({
        //         url: `/datasets/comment/${commentId}`,
        //         method: 'DELETE',
        //     }),
        //     invalidatesTags: ['DatasetComments'],
        // }),
        // updateDatasetComment: builder.mutation<IMessageResponse, IDatasetUpdateCommentRequest>({
        //     query: ({ commentId, data }) => ({
        //         url: `/datasets/comment/${commentId}`,
        //         method: 'PUT',
        //         data: data,
        //     }),
        //     invalidatesTags: ['DatasetComments'],
        // }),
    }),
});

export const {
    // useLazyGetAllDatasetsQuery,
    // useLazyGetMyDatasetsQuery,
    // useCreateDatasetMutation,
    // useGetDatasetInfoQuery,
    // useUpdateDatasetMutation,
    // useDeleteDatasetMutation,
    // useCreateDatasetCommentMutation,
    // useLazyGetDatasetCommentsQuery,
    // useDeleteDatasetCommentMutation,
    // useUpdateDatasetCommentMutation,
} = blogsApi;
