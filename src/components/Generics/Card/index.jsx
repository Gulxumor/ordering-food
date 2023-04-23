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
import { ADD_PRODUCT } from "../../../store/ProductsSlice";
import { useDispatch } from "react-redux";

export const Card = ({ id, title, img, price }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <ImageWrapper>
        <ImageWrapper.Image src={img} alt={title || "card"} loading="lazy" />
      </ImageWrapper>
      <Wrapper>
        <Title>{title}</Title>
        <Content>
          <Price>${price}</Price>
          <Button
            onClick={() => dispatch(ADD_PRODUCT({ product_id: id }))}
            type="primary"
          >
            Buy Now
          </Button>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Card;
