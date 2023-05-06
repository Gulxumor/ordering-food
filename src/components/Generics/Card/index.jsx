import React from "react";
import Button from "../Button";
import { ADD_PRODUCT } from "../../../store/ProductsSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Content, Wrapper, Title, Price } from "./style";

export const Card = ({ id, title, img, price }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
    <Container>
      <Container.ImageWrapper>
        <Container.ImageWrapper.Image src={img} alt={title || "card"} />
      </Container.ImageWrapper>
      <Wrapper>
        <Title onClick={() => navigate(`/shop/${id}`)}>{title}</Title>
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
