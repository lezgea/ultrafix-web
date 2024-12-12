import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBlog, IBlogCreateResponse } from '@api/types/blog-types';
import { blogsApi } from '@api/blogs-api';
import { bookingApi } from '@api/booking-api';
import { IZipCheckingResponse } from '@api/types/booking-types';


interface IBookingState {
    // blogs: IBlog | {},
    loading: boolean,
    error?: string | boolean,
    success?: string | boolean,
    message?: string,
}

const initialState: IBookingState = {
    // blogs: {},
    loading: false,
    error: false,
    success: false,
    message: '',
};

const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        // setSelectedCategory: (state, action: PayloadAction<number>) => {
        //     state.selectedCategory = action.payload;
        // },
    },
    extraReducers: (builder) => {
        // CHECK ZIP MUTATION
        builder
            .addMatcher(
                bookingApi.endpoints.checkZip.matchPending,
                (state) => {
                    state.loading = true;
                    state.error = false;
                }
            )
            .addMatcher(
                bookingApi.endpoints.checkZip.matchFulfilled,
                (state, action: PayloadAction<IZipCheckingResponse>) => {
                    state.loading = false;
                    // state.blogs = action.payload?.data;
                }
            )
            .addMatcher(
                bookingApi.endpoints.checkZip.matchRejected,
                (state, action) => {
                    state.loading = false;
                    state.error = action.error?.message || 'Failed to fetch data';
                }
            );

        // // DELETE DATASET
        // builder
        //     .addMatcher(
        //         datasetsApi.endpoints.deleteDataset.matchPending,
        //         (state) => {
        //             state.loading = true;
        //         }
        //     )
        //     .addMatcher(
        //         datasetsApi.endpoints.deleteDataset.matchFulfilled,
        //         (state, action) => {
        //             state.loading = false;
        //             toast.success('Dataset has been deleted successfully');
        //         }
        //     )
        //     .addMatcher(
        //         datasetsApi.endpoints.deleteDataset.matchRejected,
        //         (state, action) => {
        //             state.loading = false;
        //             state.error = action.error?.message || 'Failed to delete dataset';
        //             toast.error('Unable to delete this dataset');
        //         }
        //     );

    },
});

export const { } = bookingSlice.actions;

export default bookingSlice.reducer;
