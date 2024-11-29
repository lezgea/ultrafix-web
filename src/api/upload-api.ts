
import axiosBaseQuery from '@utils/axiosBaseQuery';
import { createApi } from '@reduxjs/toolkit/query/react';
import { IFileUploadRequest, IFileUploadResponse } from './types/upload-types';


export const uploadApi = createApi({
    reducerPath: 'uploadApi',
    baseQuery: axiosBaseQuery,
    endpoints: (builder) => ({
        uploadFile: builder.mutation<IFileUploadResponse, IFileUploadRequest>({
            query: ({ file }) => ({
                url: '/media/store',
                method: 'POST',
                data: file,
            }),
        }),

    }),
});

export const {
    useUploadFileMutation,
} = uploadApi;
