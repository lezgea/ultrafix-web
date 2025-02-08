import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IState } from '@api/types/location-types';


interface ILocationState {
    states: IState[],
    loading: boolean,
    error?: string | boolean,
    success?: string | boolean,
    message?: string,
}

const initialState: ILocationState = {
    states: [],
    loading: false,
    error: false,
    success: false,
    message: '',
};

const locationSlice = createSlice({
    name: 'locations',
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

export const { } = locationSlice.actions;

export default locationSlice.reducer;
