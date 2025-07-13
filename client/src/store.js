import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";
import loginReducer from "./slices/loginSlice";

const store = configureStore({
    reducer: {
        todo: todoReducer,
        login: loginReducer  
    },
});

export default store;