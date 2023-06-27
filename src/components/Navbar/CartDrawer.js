import { Drawer } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { setCartDrawerVisibility } from '../../store/DrawerSlice'
import { DrawerWrapper } from './style'
import { CloseOutlined } from "@ant-design/icons"

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
                        <DrawerWrapper>
                            <div className='main'>
                                <div>
                                    <DrawerWrapper.Img src={product.img} alt="product img" />
                                </div>
                                <div>{product.title}
                                    <div className='divcha'>
                                        <div> {product.quantity}x</div>
                                        <div> ${product.price}</div>
                                    </div>
                                </div>
                            </div>
                            <div className='x'>
                                <div style={{ display: "flex", alignItems: "center", marginLeft: "40px" }}>
                                    <button>+</button>
                                    <p>{product.price}</p>
                                    <button>-</button>
                                </div>
                                <CloseOutlined />
                            </div>
                        </DrawerWrapper>
                        <div className='subtotal'>
                            subtotal: {product.price}
                        </div>
                    </div>
                ))
            }
        </Drawer>

    )
}

export default CartDrawer
