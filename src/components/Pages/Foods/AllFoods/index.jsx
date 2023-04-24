import React from "react";
import { Section, Wrapper } from "./style";
import { Title } from "../../Home/Tasty/style";
import { useTranslation } from "react-i18next";

const AllFoods = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <Wrapper>
        <Title f>{t("top.foods")}</Title>
      </Wrapper>
    </Section>
  );
};

export default AllFoods;
