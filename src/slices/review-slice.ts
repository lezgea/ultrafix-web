import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGetLocationReviewsResponse, IReview } from '@api/types/review-types';
import { reviewsApi } from '@api/reviews-api';


interface IReviewState {
    reviews: IReview[],
    loading: boolean,
    error?: string | boolean,
    success?: string | boolean,
    message?: string,
}

const initialState: IReviewState = {
    reviews: [],
    loading: false,
    error: false,
    success: false,
    message: '',
};


const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        // GET LOCATION REVIEWS LIST QUERY
        builder
            .addMatcher(
                reviewsApi.endpoints.getLocationReviews.matchPending,
                (state) => {
                    state.loading = true;
                    state.error = false;
                }
            )
            .addMatcher(
                reviewsApi.endpoints.getLocationReviews.matchFulfilled,
                (state, action: PayloadAction<IGetLocationReviewsResponse>) => {
                    state.loading = false;
                    state.reviews = action.payload?.data;
                }
            )
            .addMatcher(
                reviewsApi.endpoints.getLocationReviews.matchRejected,
                (state, action) => {
                    state.loading = false;
                    state.error = action.error?.message || 'Failed to fetch services';
                }
            );
    },
});

export const { } = reviewsSlice.actions;

export default reviewsSlice.reducer;
