import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/configs/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    bookList:[]
}
 
export const getAllBooks = createAsyncThunk('course/getAllBooks', async () => {
    try {
        const promise = axiosInstance.get('books');
        toast.promise(promise, {
            loading:'loading books data',
            success:'Successfully loaded all the books',
            error:'Something went wrong'
        })
        const response = await promise
        console.log(response);
        return response?.data?.data;
    } catch (error) {
        console.log(error);
        toast.error("Something went wrong, cannot get all the books");
    }
});

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllBooks.fulfilled, (state, action) => {
            state.bookList = action.payload;
        });
    }
});


export default bookSlice.reducer;