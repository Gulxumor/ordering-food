import { configureStore } from "@reduxjs/toolkit";
import cartDrawer from "./DrawerSlice"
import productsSlice from "./ProductsSlice"

export const store = configureStore({
    reducer: {
        cartDrawer,
        productsSlice
    },
});
