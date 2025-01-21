import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { uploadApi } from '@api/upload-api';
import { toast } from 'react-toastify';



interface IUploadState {
    // isAuthenticated: boolean;
    loading: boolean;
    error: boolean | string;
    success: boolean | string;
    description: string;
    message: string;
}

const initialState: IUploadState = {
    // isAuthenticated: false,
    loading: true,
    error: false,
    success: false,
    message: '',
    description: '',
};

const uploadSlice = createSlice({
    name: 'upload',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // UPLOAD FILE MUTATION
        builder
            .addMatcher(
                uploadApi.endpoints.uploadFile.matchPending,
                (state) => {
                    state.loading = true;
                    // state.error = false;
                    // state.success = false;
                }
            )
            .addMatcher(
                uploadApi.endpoints.uploadFile.matchFulfilled,
                (state, action) => {
                    state.loading = false;
                    state.success = true;
                    state.message = "Media file has been uploaded!";
                    toast.success("Media file has been uploaded!");
                }
            )
            .addMatcher(
                uploadApi.endpoints.uploadFile.matchRejected,
                (state, action) => {
                    state.loading = false;
                    state.error = action.error?.message || 'Failed to upload the media file';
                    toast.error(state.error);
                }
            );

    },
});

export const { } = uploadSlice.actions;

export default uploadSlice.reducer;
