import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userApi } from '../api/user-api';
import { IUser, RegisterResponse } from '@api/types/user-types';
import Cookies from 'js-cookie';


interface IAuthState {
    isAuthenticated: boolean;
    user: IUser | null;
    loading: boolean;
    error: string | null;
    description: string | null;
}

const initialState: IAuthState = {
    isAuthenticated: false,
    user: null,
    loading: true,
    error: null,
    description: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthState: (state, action: PayloadAction<{ isAuthenticated?: boolean, user?: IUser | null, loading: boolean }>) => {
            state.loading = action.payload.loading;  // Loading is done once this action is dispatched
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.loading = false;
            state.user = null;
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
                (state, action: PayloadAction<RegisterResponse>) => {
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
