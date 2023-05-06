import { Button, Input, message } from "antd";
import React from "react";
import Footer from "../../Footer";
import { Toptext } from "../../Footer/style";
import { Img, Section, Wrapper, InputWrapper } from "./style";
import location from "../../../assets/images/compLocation.jpg";
import ContactTop from "./ContactTop";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation();

  const info = () => {
    message.success("Sent");
  };

  return (
    <>
      <ContactTop />
      <Section>
        <Wrapper>
          <Wrapper.Wrapper>
            <p>{t("contact.lorem")}</p>
            <p>
              <Toptext>{t("footer.email")}:</Toptext> example@gmail.com
            </p>
            <p>
              <Toptext>{t("footer.phone")}:</Toptext>+3584573968551
            </p>
            <Toptext>{t("contact.office")}:</Toptext>
            <p> {t("footer.location")}</p>
            <ul>
              {t("contact.ul")}
              <li>{t("contact.less")} </li>
              <li>{t("contact.expertise")}</li>
              <li>{t("contact.plan")}</li>
            </ul>
            <InputWrapper>
              <Input type="email" placeholder={t("footer.email")} />
              <Input type="password" placeholder={t("footer.password")} />
              <Button onClick={info}>{t("contact.send")}</Button>
            </InputWrapper>
          </Wrapper.Wrapper>
          <Img src={location} alt="location" />
        </Wrapper>
      </Section>
      <Footer />
    </>
  );
};

export default ContactPage;
