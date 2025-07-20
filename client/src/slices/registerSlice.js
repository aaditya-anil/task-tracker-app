import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = 'http://localhost:4000/';

export const registerUser = createAsyncThunk('register/registerUser', async (userData, { rejectWithValue }) => {
    try {
        const response = await axios.post(baseUrl + 'register', userData);
        return response.data;
    } catch (error) {
        return rejectWithValue(
            error.response.data
        );
    }
});

const registerSlice = createSlice({
    name: 'register',
    initialState: {
        token: null,
        error: null,
        message: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.token = action.payload.token;
            state.error = null;
            state.message = action.payload.message || "Registration successful";
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            console.error("Registration error:", action);
            state.token = null;
            state.error = action.error;
            state.message = action.payload.message || "Registration failed";
        });
    },
});

export default registerSlice.reducer;