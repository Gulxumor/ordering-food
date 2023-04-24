import React from "react";
import { Section, Wrapper } from "./style";
import { Title } from "../../Home/Tasty/style";
import { useTranslation } from "react-i18next";

const CardsTop = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <Wrapper>
        <Title f>{t("top.cart")}</Title>
      </Wrapper>
    </Section>
  );
};

export default CardsTop;
