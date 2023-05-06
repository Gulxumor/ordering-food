import { Drawer } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCartDrawerVisibility } from '../../store/DrawerSlice'

const CartDrawer = () => {
    const dispatch = useDispatch()
    const { cartDrawerVisibility } = useSelector((state) => state.cartDrawer)
    const { cart } = useSelector((state) => state.productsSlice)
    // console.log(cart);
    return (

        <Drawer title="Basic Drawer" placement="right" onClose={() => dispatch(setCartDrawerVisibility())} open={cartDrawerVisibility} closable="false">
            {
                cart.map(product => (
                    <div key={product.id}>
                        {product.img}-----
                        {product.title} ---
                        {product.quantity}---
                        {product.price}--
                    </div>
                ))
            }
        </Drawer>

    )
}

export default CartDrawer
