import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from '@/redux/Slices/AuthSlice';
import bookSliceReducer from '@/redux/Slices/BookSlice';
const store = configureStore({
    reducer: {
        // Add reducers here
        auth: authSliceReducer,
        book: bookSliceReducer
    }
});

export default store;