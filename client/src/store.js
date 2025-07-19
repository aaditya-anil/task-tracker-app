import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";
import loginReducer from "./slices/loginSlice";
import registerReducer from "./slices/registerSlice";

const store = configureStore({
    reducer: {
        todo: todoReducer,
        login: loginReducer,
        register: registerReducer  
    },
});

export default store;