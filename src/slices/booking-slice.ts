import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { bookingApi } from '@api/booking-api';
import { IAppliance, IBrand, IGetBrandsResponse, IGetSelectedServicesResponse, IGetServicesResponse, ISelectedService, IService, ISlot, IZipCheckingResponse } from '@api/types/booking-types';
import { format } from 'date-fns';


interface IBookingState {
    bookingData: {
        zip: string | number,
        appliances: IAppliance[],
        firstname: string,
        lastname: string,
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
    selectedSlot: ISlot,
    services: {
        residential: IService[] | [],
        commercial: IService[] | [],
    },
    serviceData: {
        services: ISelectedService[],
        total_fee: number,
    },
    brands: IBrand[] | [],
    slots: ISlot[] | [],
    loading: boolean,
    error?: string | boolean,
    success?: string | boolean,
    message?: string,
}

const initialState: IBookingState = {
    bookingData: {
        zip: '',
        appliances: [],
        firstname: '',
        lastname: '',
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
    selectedSlot: {
        label: '',
        value: 0,
    },
    services: {
        residential: [],
        commercial: [],
    },
    serviceData: {
        services: [],
        total_fee: 0,
    },
    brands: [],
    slots: [],
    loading: false,
    error: false,
    success: false,
    message: '',
};

const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        setSelectedAppliances: (state, action: PayloadAction<any>) => {
            state.bookingData.appliances = action.payload
        },
        setBookingData: (state, action: PayloadAction<any>) => {
            state.bookingData = { ...state.bookingData, ...action.payload }
        },
        setSelectedSlot: (state, action: PayloadAction<any>) => {
            state.selectedSlot = { ...state.selectedSlot, ...action.payload }
        },
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
                    state.bookingData.zip = action.payload?.data?.zip;
                    state.bookingData.city = action.payload?.data?.branch?.city;
                    state.bookingData.address = action.payload?.data?.branch?.address;
                }
            )
            .addMatcher(
                bookingApi.endpoints.checkZip.matchRejected,
                (state, action) => {
                    state.loading = false;
                    state.error = action.error?.message || 'Failed to fetch data';
                }
            );

        // GET SERVICES QUERY
        builder
            .addMatcher(
                bookingApi.endpoints.getServices.matchPending,
                (state) => {
                    state.loading = true;
                    state.error = false;
                }
            )
            .addMatcher(
                bookingApi.endpoints.getServices.matchFulfilled,
                (state, action: PayloadAction<IGetServicesResponse>) => {
                    state.loading = false;
                    state.services = action.payload?.data;
                }
            )
            .addMatcher(
                bookingApi.endpoints.getServices.matchRejected,
                (state, action) => {
                    state.loading = false;
                    state.error = action.error?.message || 'Failed to fetch data';
                }
            );

        // GET BRANDS QUERY
        builder
            .addMatcher(
                bookingApi.endpoints.getBrands.matchPending,
                (state) => {
                    state.loading = true;
                    state.error = false;
                }
            )
            .addMatcher(
                bookingApi.endpoints.getBrands.matchFulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.brands = action.payload?.data;
                }
            )
            .addMatcher(
                bookingApi.endpoints.getBrands.matchRejected,
                (state, action) => {
                    state.loading = false;
                    state.error = action.error?.message || 'Failed to fetch data';
                }
            );

        // GET SELECTED SERVICES QUERY
        builder
            .addMatcher(
                bookingApi.endpoints.getSelectedServices.matchPending,
                (state) => {
                    state.loading = true;
                    state.error = false;
                }
            )
            .addMatcher(
                bookingApi.endpoints.getSelectedServices.matchFulfilled,
                (state, action: PayloadAction<IGetSelectedServicesResponse>) => {
                    state.loading = false;
                    state.serviceData = action.payload?.data;
                }
            )
            .addMatcher(
                bookingApi.endpoints.getSelectedServices.matchRejected,
                (state, action) => {
                    state.loading = false;
                    state.error = action.error?.message || 'Failed to fetch data';
                }
            );

        // GET TIME SLOTS QUERY
        builder
            .addMatcher(
                bookingApi.endpoints.getTimeSlots.matchPending,
                (state) => {
                    state.loading = true;
                    state.error = false;
                }
            )
            .addMatcher(
                bookingApi.endpoints.getTimeSlots.matchFulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.slots = action.payload?.data?.slots;
                }
            )
            .addMatcher(
                bookingApi.endpoints.getTimeSlots.matchRejected,
                (state, action) => {
                    state.loading = false;
                    state.error = action.error?.message || 'Failed to fetch data';
                }
            );
    },
});

export const {
    setSelectedAppliances,
    setBookingData,
    setSelectedSlot,
} = bookingSlice.actions;

export default bookingSlice.reducer;
