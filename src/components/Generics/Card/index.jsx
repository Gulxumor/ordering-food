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
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Card = ({ id, title, img, price }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
    <Container>
      <ImageWrapper>
        <ImageWrapper.Image src={img} alt={title || "card"} loading="lazy" />
      </ImageWrapper>
      <Wrapper>
        <Title onClick={() => navigate(`/foods/${id}`)}>{title}</Title>
        <Content>
          <Price>${price}</Price>
          <Button
            onClick={() => dispatch(ADD_PRODUCT({ product_id: id }))}
            type="primary"
          >
            {t("cart.buy")}
          </Button>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Card;
