import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "@/configs/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    isLoggedIn:localStorage.getItem('isLoggedIn') || false,
    username:localStorage.getItem('username') || "",
    token:localStorage.getItem('token') || "",
};

export const signup = createAsyncThunk("auth/signup", async (data, { rejectWithValue }) => {
    try {
        const promise = axiosInstance.post("signup", data);
        toast.promise(promise, {
            loading: "Signing up...",
            success: "Successfully signed up",
            error: "Cannot sign up, something went wrong",
        });

        const response = await promise; // Wait for the Axios promise to resolve
        return response.data;
    } catch (error) {
        toast.error("Cannot sign up, something went wrong");
        return rejectWithValue(error.response?.data || "Something went wrong");
    }
});

export const signin = createAsyncThunk("auth/signin", async (data, { rejectWithValue }) => {
    try {
        const promise = axiosInstance.post("signin", data);
        toast.promise(promise, {
            loading: "Signing up...",
            success: "Successfully signed in",
            error: "Cannot sign in, something went wrong",
        });

        const response = await promise; // Wait for the Axios promise to resolve
        return response.data;
    } catch (error) {
        if(error?.response?.data?.err) {
            toast.error(error?.response?.data?.err);
        }
        else{
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
});


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        logout:(state)=>{
            state.isLoggedIn = false;
            state.username = "";
            state.token = "";
            localStorage.clear();
        }
    },

    extraReducers:(builder)=>{
        builder.addCase(signin.fulfilled,(state,action)=>{
            if(action?.payload?.data){
                const receivedData = action?.payload?.data;
                state.isLoggedIn = (action?.payload?.data !== undefined);
                state.username = receivedData.username;
                state.token = receivedData.token;
                localStorage.setItem('isLoggedIn', state.isLoggedIn);
                localStorage.setItem('username', state.username);
                localStorage.setItem('token', state.token);
            }
        })
    }
    
});

export const {logout} = authSlice.actions;

export default authSlice.reducer