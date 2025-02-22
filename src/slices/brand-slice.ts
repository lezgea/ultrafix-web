import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { brandApi } from '@api/brands-api';
import { IBrand, IBrandInfoResponse } from '@api/types/brand-types';


interface IBrandState {
    brandInfo: IBrand,
    loading: boolean,
    error?: string | boolean,
    success?: string | boolean,
    message?: string,
}

const initialState: IBrandState = {
    brandInfo: {
        id: 0,
        text: '',
        color: '',
        sort: 0,
        logo: {
            id: 0,
            name: '',
            url: '',
            mime_type: '',
            size: 0,
            created_at: '',
            type: ''
        }
    },
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
                    state.brandInfo = action.payload?.data;
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
