import React from "react";
// import { useTranslation } from "react-i18next";
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
  // const { t } = useTranslation();
  return (
    <Container>
      <Wrapper>
        <Column>
          <Wrapper.Wrapper>
            <LogoWrapper>
              <Logo src={logo} alt="logo" />
              {/* <p>{t("footer.logo")}</p> */}
              <Title fw>Tasty Treat</Title>
            </LogoWrapper>
            <Text w>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
              exercitationem?
            </Text>
          </Wrapper.Wrapper>
          <Wrapper.Wrapper>
            <Title>Delivery Time</Title>
            <Toptext>Sunday - Thursday</Toptext>
            <Text>10:00am - 11:00pm</Text>
            <Toptext>Friday - Saturday</Toptext>
            <Text>Off day</Text>
          </Wrapper.Wrapper>
          <Wrapper.Wrapper>
            <Title>Contact</Title>
            <Text>Location: ZindaBazar, Sylhet-3100, Bangladesh</Text>
            <Toptext mt>Phone: 01712345678</Toptext>
            <Toptext>Email: example@gmail.com</Toptext>
          </Wrapper.Wrapper>
          <Wrapper.Wrapper>
            <Title>Newsletter</Title>
            <Text>Subscribe our newsletter</Text>
            <InputWrapper>
              <Input placeholder="Enter your email" type="email" />
              <InputButton>
                <RiSendPlaneLine className="plane" />
              </InputButton>
            </InputWrapper>
          </Wrapper.Wrapper>
        </Column>
        <Row>
          <Reserve>
            Copyright - 2022, website made by Muhibur Rahman. All Rights
            Reserved.
          </Reserve>
          <Follow>
            <Reserve w>Follow:</Reserve>
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
