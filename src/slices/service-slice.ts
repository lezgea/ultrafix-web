import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGetLocationServicesResponse, IGetServiceInfoResponse, IService, IServiceInfo } from '@api/types/service-types';
import { serviceApi } from '@api/services-api';


interface IServiceState {
    services: {
        residential: IService[],
        commercial: IService[],
    },
    locationServices: {
        residential: IService[],
        commercial: IService[],
    },
    serviceInfo: IServiceInfo,
    loading: boolean,
    error?: string | boolean,
    success?: string | boolean,
    message?: string,
}

const initialState: IServiceState = {
    services: {
        residential: [],
        commercial: [],
    },
    locationServices: {
        residential: [],
        commercial: [],
    },
    serviceInfo: {
        id: 0,
        title: '',
        slug: '',
        icon: 0,
        icon_url: '',
        content: '',
        rank: 0,
        created_at: '',
    },
    loading: false,
    error: false,
    success: false,
    message: '',
};


const servicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        // GET ALL SERVICES LIST QUERY
        builder
            .addMatcher(
                serviceApi.endpoints.getAllServices.matchPending,
                (state) => {
                    state.loading = true;
                    state.error = false;
                }
            )
            .addMatcher(
                serviceApi.endpoints.getAllServices.matchFulfilled,
                (state, action: PayloadAction<IGetLocationServicesResponse>) => {
                    state.loading = false;
                    state.services = action.payload;
                }
            )
            .addMatcher(
                serviceApi.endpoints.getAllServices.matchRejected,
                (state, action) => {
                    state.loading = false;
                    state.error = action.error?.message || 'Failed to fetch services';
                }
            );

        // GET LOCATION SERVICES LIST QUERY
        builder
            .addMatcher(
                serviceApi.endpoints.getLocationServices.matchPending,
                (state) => {
                    state.loading = true;
                    state.error = false;
                }
            )
            .addMatcher(
                serviceApi.endpoints.getLocationServices.matchFulfilled,
                (state, action: PayloadAction<IGetLocationServicesResponse>) => {
                    state.loading = false;
                    state.locationServices = action.payload;
                }
            )
            .addMatcher(
                serviceApi.endpoints.getLocationServices.matchRejected,
                (state, action) => {
                    state.loading = false;
                    state.error = action.error?.message || 'Failed to fetch services';
                }
            );

        // GET SERVICE INFO QUERY
        builder
            .addMatcher(
                serviceApi.endpoints.getServiceInfo.matchPending,
                (state) => {
                    state.loading = true;
                    state.error = false;
                }
            )
            .addMatcher(
                serviceApi.endpoints.getServiceInfo.matchFulfilled,
                (state, action: PayloadAction<IGetServiceInfoResponse>) => {
                    state.loading = false;
                    state.serviceInfo = action.payload?.data;
                }
            )
            .addMatcher(
                serviceApi.endpoints.getServiceInfo.matchRejected,
                (state, action) => {
                    state.loading = false;
                    state.error = action.error?.message || 'Failed to fetch service info';
                }
            );
    },
});

export const { } = servicesSlice.actions;

export default servicesSlice.reducer;
