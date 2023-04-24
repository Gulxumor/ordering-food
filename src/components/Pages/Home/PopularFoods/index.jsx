import React from "react";
import { useTranslation } from "react-i18next";
import Segmented from "./Segmented";
import { Container, Wrapper } from "./style";

const PopularFoods = () => {
  const {t} = useTranslation()
  return (
    <Container>
      <Wrapper>
        <Wrapper.Foods>{t("cart.foods")}</Wrapper.Foods>
        <Segmented />
      </Wrapper>
    </Container>
  );
};

export default PopularFoods;
