import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Input, Container, Wrapper, Button, Paragraph } from "./style";

const Bottom = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <Container>
      <Wrapper>
        <Wrapper.Wrapper>
          <Input type="email" placeholder={t("footer.email")} />
          <Input type="password" placeholder={t("footer.password")} />
          <Button>{t("top.login")}</Button>
        </Wrapper.Wrapper>
        <Paragraph onClick={() => navigate("/register")}>
          {t("login.create")}
        </Paragraph>
      </Wrapper>
    </Container>
  );
};

export default Bottom;
