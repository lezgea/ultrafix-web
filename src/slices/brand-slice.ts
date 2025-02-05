import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBrand } from '@api/types/booking-types';


interface IBrandState {
    brands: IBrand[],
    loading: boolean,
    error?: string | boolean,
    success?: string | boolean,
    message?: string,
}

const initialState: IBrandState = {
    brands: [],
    loading: false,
    error: false,
    success: false,
    message: '',
};

const brandSlice = createSlice({
    name: 'brands',
    initialState,
    reducers: {
        // setSelectedCategory: (state, action: PayloadAction<number>) => {
        //     state.selectedCategory = action.payload;
        // },
    },
    extraReducers: (builder) => {
        // CREATE FAQ MUTATION
        // builder
        //     .addMatcher(
        //         blogsApi.endpoints.createBlog.matchPending,
        //         (state) => {
        //             state.loading = true;
        //             state.error = false;
        //         }
        //     )
        //     .addMatcher(
        //         blogsApi.endpoints.createBlog.matchFulfilled,
        //         (state, action: PayloadAction<IBlogCreateResponse>) => {
        //             state.loading = false;
        //             state.blogs = action.payload?.data;
        //         }
        //     )
        //     .addMatcher(
        //         blogsApi.endpoints.createBlog.matchRejected,
        //         (state, action) => {
        //             state.loading = false;
        //             state.error = action.error?.message || 'Failed to fetch datasets';
        //         }
        //     );
    },
});

export const { } = brandSlice.actions;

export default brandSlice.reducer;
