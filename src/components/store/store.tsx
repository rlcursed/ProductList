import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from "./product/ProductSlice";


export const store = configureStore({
    reducer: {
        products: counterReducer,
    },
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch