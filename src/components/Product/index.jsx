import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../utils/products";
import Button from "../Generics/Button";

const Product = () => {
  const param = useParams();
  const productInfo = products.filter(({ id }) => +param.id === id)[0];
  // console.log(productInfo);

  return (
    <div>
      <h1>Product</h1>
      <div>{productInfo.img}</div>
      <div>{productInfo.img}</div>
      <div>{productInfo.price}</div>
      <div>{productInfo.title}</div>
      <div>{productInfo.desc}</div>
      <div>{productInfo.category}</div>
      <Button type={"primary"}>Add to Cart</Button>
    </div>
  );
};

export default Product;
