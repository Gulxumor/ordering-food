import React from "react";
import { Section, Wrapper } from "./style";
import { Title } from "../../Home/Tasty/style";
import { useTranslation } from "react-i18next";

const ContactTop = () => {
  const {t} = useTranslation()
  return (
    <Section>
      <Wrapper>
        <Title f>{t("top.contact")}</Title>
      </Wrapper>
    </Section>
  );
};

export default ContactTop;
