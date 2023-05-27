import React from 'react'
import { useSelector } from "react-redux";
import CardsTop from "./CardsTop";
import { Container } from "./style";
import { DeleteOutlined } from "@ant-design/icons";

const CartPage = () => {
  const cart = useSelector((state) => state.productsSlice.cart);
  console.log(cart);
  return (
    <div>
      <CardsTop />
      {cart?.map((v, i) => (
        <Container key={i}>
          <h1>{v.title}</h1>
          <table>
            <tr>
              <th className="img">Image</th>
              <th>Product Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Delete</th>
            </tr>
            <tr>
              <td className="img">
                <img src={v.img} alt={v.title} />
              </td>
              <td>{v.title}</td>
              <td>{v.price}</td>
              <td>{v.quantity}</td>
              <td>
                <DeleteOutlined />
              </td>
            </tr>
          </table>
        </Container>
      ))}
    </div>
  );
};

export default CartPage
