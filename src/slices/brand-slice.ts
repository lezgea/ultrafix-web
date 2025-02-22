import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBrand } from '@api/types/booking-types';
import { brandApi } from '@api/brands-api';
import { IBrandInfoResponse } from '@api/types/brand-types';


interface IBrandState {
    brands: IBrand | {},
    loading: boolean,
    error?: string | boolean,
    success?: string | boolean,
    message?: string,
}

const initialState: IBrandState = {
    brands: {},
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
        // BRAND INFO QUERY
        builder
            .addMatcher(
                brandApi.endpoints.getBrandInfo.matchPending,
                (state) => {
                    state.loading = true;
                    state.error = false;
                }
            )
            .addMatcher(
                brandApi.endpoints.getBrandInfo.matchFulfilled,
                (state, action: PayloadAction<IBrandInfoResponse>) => {
                    state.loading = false;
                    state.brands = action.payload?.data;
                }
            )
            .addMatcher(
                brandApi.endpoints.getBrandInfo.matchRejected,
                (state, action) => {
                    state.loading = false;
                    state.error = action.error?.message || 'Failed to fetch datasets';
                }
            );
    },
});

export const { } = brandSlice.actions;

export default brandSlice.reducer;
