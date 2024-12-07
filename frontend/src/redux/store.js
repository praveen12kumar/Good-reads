import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from '@/redux/Slices/AuthSlice';
const store = configureStore({
    reducer: {
        // Add reducers here
        auth: authSliceReducer
    }
});

export default store;