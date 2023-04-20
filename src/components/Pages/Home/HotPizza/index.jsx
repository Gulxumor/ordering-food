import React from "react";
import { products } from "../../../../utils/products";
import Card from "../../../Generics/Card";
import { Container, Wrapper } from "./style";

const HotPizza = () => {
  return (
    <Container>
      <Wrapper>
        <Wrapper.Title>Hot Pizza</Wrapper.Title>
        <Wrapper.Wrapper>
          {products.map(
            ({ id, title, img, featured, price }) =>
              featured === "HotPizza" && (
                <Card key={id} img={img} title={title} price={price} />
              )
          )}
        </Wrapper.Wrapper>
      </Wrapper>
    </Container>
  );
};

export default HotPizza;
