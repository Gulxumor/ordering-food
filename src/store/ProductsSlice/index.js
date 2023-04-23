import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../utils/products";

const productsSlice = createSlice({
    name: "products",
    initialState: { products: products || [], cart: [] },
    reducers: {
        ADD_PRODUCT: (state, action) => {
            const res = state.products.filter(product => product.id === action.payload.product_id)
            const productExist = state.cart.map(product => product.id === action.payload.product_id ? { ...product, quantity: product.quantity + 1 } : product)
            if (res.length > 1) {
                state.cart = productExist
            }
            else {
                state.cart = [...state.cart, res[0]]
            }
        }
    }

})

export const { ADD_PRODUCT } = productsSlice.actions
export default productsSlice.reducer
