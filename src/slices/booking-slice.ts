import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { bookingApi } from '@api/booking-api';
import { IZipCheckingResponse } from '@api/types/booking-types';


interface IBookingState {
    bookingData: {
        zip: string | number,
        appliances: {
            service_id: string | number,
            type: string,
            brand: string,
            problem: string,
        }[],
        customer_name: string,
        customer_phone: string | number,
        customer_email: string,
        address: string,
        latitude: string | number | null,
        longitude: string | number | null,
        city: string,
        state: string,
        unit: string | number,
        order_at: string,
        time_slot: string | number,
    },
    loading: boolean,
    error?: string | boolean,
    success?: string | boolean,
    message?: string,
}

const initialState: IBookingState = {
    bookingData: {
        zip: '',
        appliances: [],
        customer_name: '',
        customer_phone: '',
        customer_email: '',
        address: '',
        latitude: null,
        longitude: null,
        city: '',
        state: '',
        unit: '',
        order_at: '',
        time_slot: '',
    },
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
                    console.log('----', action.payload)
                    state.bookingData.zip = action.payload?.data?.zip;
                    state.bookingData.city = action.payload?.data?.branch?.city;
                }
            )
            .addMatcher(
                bookingApi.endpoints.checkZip.matchRejected,
                (state, action) => {
                    state.loading = false;
                    state.error = action.error?.message || 'Failed to fetch data';
                }
            );
    },
});

export const { } = bookingSlice.actions;

export default bookingSlice.reducer;
