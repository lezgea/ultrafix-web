import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@slices/user-slice';
import uploadReducer from '@slices/upload-slice';
import blogReducer from '@slices/blog-slice';
import bookingReducer from '@slices/booking-slice';
import faqReducer from '@slices/faq-slice';
import { userApi } from '@api/user-api';
import { uploadApi } from '@api/upload-api';
import { blogsApi } from '@api/blogs-api';
import { bookingApi } from '@api/booking-api';
import { faqApi } from '@api/faq-api';


export const store = configureStore({
    reducer: {
        user: userReducer,
        upload: uploadReducer,
        blog: blogReducer,
        booking: bookingReducer,
        faq: faqReducer,
        [userApi.reducerPath]: userApi.reducer,
        [uploadApi.reducerPath]: uploadApi.reducer,
        [blogsApi.reducerPath]: blogsApi.reducer,
        [bookingApi.reducerPath]: bookingApi.reducer,
        [faqApi.reducerPath]: faqApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            userApi.middleware,
            uploadApi.middleware,
            blogsApi.middleware,
            bookingApi.middleware,
            faqApi.middleware,
        ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
