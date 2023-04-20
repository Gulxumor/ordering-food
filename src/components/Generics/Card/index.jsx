import React from "react";
import {
  Container,
  Content,
  ImageWrapper,
  Wrapper,
  Title,
  Price,
} from "./style";
import Button from "../Button";

export const Card = ({ id, title, img, price, onClick }) => {
  return (
    <Container onClick={onClick} key={id}>
      <ImageWrapper>
        <ImageWrapper.Image src={img} alt={title || "card"} loading="lazy" />
      </ImageWrapper>
      <Wrapper>
        <Title>{title}</Title>
        <Content>
          <Price>${price}</Price>
          <Button type="primary">Buy Now</Button>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Card;
