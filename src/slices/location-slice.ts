import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICitiesInfoResponse, ICityInfo, IState } from '@api/types/location-types';
import { locationApi } from '@api/location-api';


interface ILocationState {
    states: IState[],
    cityInfo: ICityInfo,
    loading: boolean,
    error?: string | boolean,
    success?: string | boolean,
    message?: string,
}

const initialState: ILocationState = {
    states: [],
    cityInfo: {
        id: 0,
        address: '',
        employees: [],
        image: '',
        phone: '',
        review_url: '',
        state_full: '',
        state_short: '',
        title: '',
        value: '',
        yelp_url: '',
    },
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
        // GET CITY INFO QUERY
        builder
            .addMatcher(
                locationApi.endpoints.getCityInfo.matchPending,
                (state) => {
                    state.loading = true;
                    state.error = false;
                }
            )
            .addMatcher(
                locationApi.endpoints.getCityInfo.matchFulfilled,
                (state, action: PayloadAction<ICitiesInfoResponse>) => {
                    state.loading = false;
                    state.cityInfo = action.payload?.data;
                }
            )
            .addMatcher(
                locationApi.endpoints.getCityInfo.matchRejected,
                (state, action) => {
                    state.loading = false;
                    state.error = action.error?.message || 'Failed to fetch datasets';
                }
            );
    },
});

export const { } = locationSlice.actions;

export default locationSlice.reducer;
