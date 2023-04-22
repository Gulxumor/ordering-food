import { createSlice } from "@reduxjs/toolkit";

const DrawerSlice = createSlice({
    name: "DrawerSlice",
    initialState: { cartDrawerVisibility: false },
    reducers: {
        opened: (state) => {
            state.cartDrawerVisibility = !true
        },

    }
});
export const { opened } = DrawerSlice.actions
export default DrawerSlice.reducer



















//             <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
//                 <p>Some contents...</p>
//                 <p>Some contents...</p>
//                 <p>Some contents...</p>
//             </Drawer>