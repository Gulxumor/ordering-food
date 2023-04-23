import { createSlice } from "@reduxjs/toolkit";

const DrawerSlice = createSlice({
    name: "DrawerSlice",
    initialState: { cartDrawerVisibility: false },
    reducers: {
        setCartDrawerVisibility: (state) => {
            state.cartDrawerVisibility = !state.cartDrawerVisibility
        },
    }
});
export const { setCartDrawerVisibility } = DrawerSlice.actions
export default DrawerSlice.reducer


