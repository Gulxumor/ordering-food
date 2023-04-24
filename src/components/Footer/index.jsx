import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/logo.jpg";
import { GrGithub, GrLinkedinOption, GrYoutube } from "react-icons/gr";
import { RiFacebookFill, RiSendPlaneLine } from "react-icons/ri";
import {
  A,
  Column,
  Container,
  Div,
  Follow,
  Icons,
  Input,
  InputButton,
  InputWrapper,
  Logo,
  LogoWrapper,
  Reserve,
  Row,
  Text,
  Title,
  Toptext,
  Wrapper,
} from "./style";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Wrapper>
        <Column>
          <Wrapper.Wrapper>
            <LogoWrapper>
              <Logo src={logo} alt="logo" />
              <Title fw>{t("navbar.logo")}</Title>
            </LogoWrapper>
            <Text w>{t("footer.lorem")}</Text>
          </Wrapper.Wrapper>
          <Wrapper.Wrapper>
            <Title>{t("footer.delivery_time")}</Title>
            <Toptext>{t("footer.sunday")}</Toptext>
            <Text>10:00am - 11:00pm</Text>
            <Toptext>{t("footer.friday")}</Toptext>
            <Text>{t("footer.off")}</Text>
          </Wrapper.Wrapper>
          <Wrapper.Wrapper>
            <Title>{t("footer.contact")}</Title>
            <Text>{t("footer.location")}</Text>
            <Toptext mt>{t("footer.phone")}: 01712345678</Toptext>
            <Toptext>{t("footer.email")}: example@gmail.com</Toptext>
          </Wrapper.Wrapper>
          <Wrapper.Wrapper>
            <Title>{t("footer.newsletter")}</Title>
            <Text>{t("footer.subscribe")}</Text>
            <InputWrapper>
              <Input placeholder={t("footer.email")} type="email" />
              <InputButton>
                <RiSendPlaneLine className="plane" />
              </InputButton>
            </InputWrapper>
          </Wrapper.Wrapper>
        </Column>
        <Row>
          <Reserve>{t("footer.rights")}</Reserve>
          <Follow>
            <Reserve w>{t("footer.follow")}:</Reserve>
            <Icons>
              <Div>
                <A
                  href="https://www.facebook.com/muhib160"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  <RiFacebookFill />
                </A>
              </Div>
              <Div>
                <A
                  href="https://github.com/Gulxumor"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  <GrGithub />
                </A>
              </Div>
              <Div>
                <A
                  href="https://www.youtube.com/c/WebBrainAcademy"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  <GrYoutube />
                </A>
              </Div>
              <Div>
                <A
                  href="https://www.linkedin.com/in/muhib160/"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  <GrLinkedinOption />
                </A>
              </Div>
            </Icons>
          </Follow>
        </Row>
      </Wrapper>
    </Container>
  );
};

export default Footer;
