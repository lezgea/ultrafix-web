import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@slices/user-slice';
import uploadReducer from '@slices/upload-slice';
import blogReducer from '@slices/blog-slice';
import bookingReducer from '@slices/booking-slice';
import { userApi } from '@api/user-api';
import { uploadApi } from '@api/upload-api';
import { blogsApi } from '@api/blogs-api';
import { bookingApi } from '@api/booking-api';


export const store = configureStore({
    reducer: {
        user: userReducer,
        upload: uploadReducer,
        blog: blogReducer,
        booking: bookingReducer,
        [userApi.reducerPath]: userApi.reducer,
        [uploadApi.reducerPath]: uploadApi.reducer,
        [blogsApi.reducerPath]: blogsApi.reducer,
        [bookingApi.reducerPath]: bookingApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            userApi.middleware,
            uploadApi.middleware,
            blogsApi.middleware,
            bookingApi.middleware,
        ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
