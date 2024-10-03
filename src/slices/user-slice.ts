import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userApi } from '../api/user-api';
import { ContactResponse } from '@api/types/user-types';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';


interface IAuthState {
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
    description: string | null;
}

const initialState: IAuthState = {
    isAuthenticated: false,
    loading: true,
    error: null,
    description: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthState: (state, action: PayloadAction<{ isAuthenticated?: boolean, loading: boolean }>) => {
            state.loading = action.payload.loading;  // Loading is done once this action is dispatched
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.loading = false;
            state.error = null;
            Cookies.remove('dtr-token');
        },
    },
    extraReducers: (builder) => {
        // CLIENT REQUEST
        builder
            .addMatcher(
                userApi.endpoints.contactUser.matchPending,
                (state) => {
                    state.loading = true;
                    state.error = null;
                }
            )
            .addMatcher(
                userApi.endpoints.contactUser.matchFulfilled,
                (state, action: PayloadAction<ContactResponse>) => {
                    state.loading = false;
                }
            )
            .addMatcher(
                userApi.endpoints.contactUser.matchRejected,
                (state, action) => {
                    state.loading = false;
                    state.error = action.error?.message || 'Login failed';
                }
            );
    },
});

export const { setAuthState, logout } = userSlice.actions;

export default userSlice.reducer;
