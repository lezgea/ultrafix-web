import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { bookingApi } from '@api/booking-api';
import { IAppliance, IBrand, IGetSelectedServicesResponse, IGetServicesResponse, ISelectedService, IService, ISlot, IssueType, IZipCheckingResponse } from '@api/types/booking-types';
import { toast } from 'react-toastify';


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
    leadData: {
        lead_id: string | number,
        zip: string | number,
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
        time_slot: string | number,
        order_at: string,
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
    selectedBookingDate: {
        date: string,
        weekDay: string,
    },
    issues: IssueType[] | [],
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
    leadData: {
        lead_id: '',
        zip: '',
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
        time_slot: '',
        order_at: '',
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
    selectedBookingDate: {
        date: '',
        weekDay: '',
    },
    brands: [],
    issues: [],
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
        setLeadData: (state, action: PayloadAction<any>) => {
            state.leadData = { ...state.leadData, ...action.payload }
        },
        setSelectedSlot: (state, action: PayloadAction<any>) => {
            state.selectedSlot = { ...state.selectedSlot, ...action.payload }
        },
        setSelectedBookingDate: (state, action: PayloadAction<any>) => {
            state.selectedBookingDate = { ...state.selectedBookingDate, ...action.payload };
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

        // GET ISSUES QUERY
        builder
            .addMatcher(
                bookingApi.endpoints.getIssues.matchPending,
                (state) => {
                    state.loading = true;
                    state.error = false;
                }
            )
            .addMatcher(
                bookingApi.endpoints.getIssues.matchFulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.issues = action.payload?.data;
                }
            )
            .addMatcher(
                bookingApi.endpoints.getIssues.matchRejected,
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
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    toast.error(action?.payload?.data?.message);
                }
            );

        // BOOK APPOINTMENT
        builder
            .addMatcher(
                bookingApi.endpoints.bookAppointment.matchPending,
                (state) => {
                    state.loading = true;
                    state.error = false;
                }
            )
            .addMatcher(
                bookingApi.endpoints.bookAppointment.matchFulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    toast.success('Your booking is confirmed! We have sent your appointment details to your email!');
                }
            )
            .addMatcher(
                bookingApi.endpoints.bookAppointment.matchRejected,
                (state, action: any) => {
                    state.loading = false;
                    state.error = action.error?.message || 'Failed to fetch data';
                    toast.error(action?.payload.data?.message)
                }
            );

        // COMPLETE LEAD
        builder
            .addMatcher(
                bookingApi.endpoints.completeLead.matchPending,
                (state) => {
                    state.loading = true;
                    state.error = false;
                }
            )
            .addMatcher(
                bookingApi.endpoints.completeLead.matchFulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    toast.success('Your booking is confirmed! We have sent your appointment details to your email!');
                }
            )
            .addMatcher(
                bookingApi.endpoints.completeLead.matchRejected,
                (state, action: any) => {
                    state.loading = false;
                    state.error = action.error?.message || 'Failed to fetch data';
                    toast.error(action?.payload.data?.message)
                }
            );
    },
});

export const {
    setSelectedAppliances,
    setBookingData,
    setLeadData,
    setSelectedSlot,
    setSelectedBookingDate,
} = bookingSlice.actions;

export default bookingSlice.reducer;
