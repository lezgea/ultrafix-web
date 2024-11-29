import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '@utils/axiosBaseQuery';
import { IBlogCreateRequest, IBlogCreateResponse, IBlogInfoRequest, IBlogInfoResponse, IBlogListRequest, IBlogListResponse, IBlogUpdateRequest } from './types/blog-types';


export const blogsApi = createApi({
    reducerPath: 'blogsApi',
    baseQuery: axiosBaseQuery,
    tagTypes: ['Blogs', 'BlogInfo'],
    endpoints: (builder) => ({
        createBlog: builder.mutation<IBlogCreateResponse, IBlogCreateRequest>({
            query: (data) => ({
                url: `/blog/posts`,
                method: 'POST',
                data: data,
            }),
            invalidatesTags: ['Blogs'],
        }),
        getAllBlogs: builder.query<IBlogListResponse, IBlogListRequest>({
            query: ({ skip, limit }) => ({
                url: `/blog/posts`,
                method: 'GET',
                params: { skip: skip, limit: limit },
            }),
            providesTags: ['Blogs'],
        }),
        getBlogInfo: builder.query<IBlogInfoResponse, IBlogInfoRequest>({
            query: ({ id }) => ({
                url: `/blog/posts/${id}`,
                method: 'GET',
            }),
            providesTags: ['BlogInfo'],
        }),
        updateBlog: builder.mutation<null, IBlogUpdateRequest>({
            query: (data) => ({
                url: `/blog/posts/${data.id}`,
                method: 'PUT',
                data: data,
            }),
            invalidatesTags: ['BlogInfo'],
        }),
        deleteBlog: builder.mutation<void, { id: number | string }>({
            query: ({ id }) => ({
                url: `/blog/posts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Blogs'],
        }),
    }),
});

export const {
    useCreateBlogMutation,
    useLazyGetAllBlogsQuery,
    useGetBlogInfoQuery,
    useUpdateBlogMutation,
    useDeleteBlogMutation,
} = blogsApi;
