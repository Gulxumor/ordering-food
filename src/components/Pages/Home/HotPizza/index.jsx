import React from "react";
import { useTranslation } from "react-i18next";
import { products } from "../../../../utils/products";
import Card from "../../../Generics/Card";
import { Container, Wrapper } from "./style";

const HotPizza = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Wrapper>
        <Wrapper.Title>{t("hot_pizza.hot_pizza")}</Wrapper.Title>
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
