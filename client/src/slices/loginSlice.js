import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { use } from "react";

const baseUrl = 'http://localhost:4000/';

export const loginUser = createAsyncThunk('login/loginUser', async (credentials, { rejectWithValue }) => {
    try {
        const response = await axios.post(baseUrl + 'login', credentials);
        return response.data;
    }
    catch (error) {
        return rejectWithValue(
            error.response.data
        );
    }
});

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        token: null,
        error: "noLoggedIn",
        message: null,
        userId: null
    },
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.token = action.payload.token;
            state.error = null;
            state.message = action.payload.message || "Login successful";
            state.userId = action.payload.userId
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            console.error("Login error:", action);
            state.token = null;
            state.error = action.error;
            state.message = action.payload.message || "Login failed";
            state.userId = null;
        });
    },
});

export default loginSlice.reducer;