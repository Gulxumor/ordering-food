import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { RiShieldCheckLine } from "react-icons/ri";
import { AiFillCar } from "react-icons/ai";
import girl from "../../../../assets/images/deliver.png";
import fastfood from "../../../../assets/images/fastfood.jpg";
import pizza from "../../../../assets/images/pizza.jpg";
import asianFood from "../../../../assets/images/asianFood.jpg";
import rowMeat from "../../../../assets/images/rowMeat.jpg";
import { BtnWrapper, Container, Div, Wrapper, TextWrapper } from "./style";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <TextWrapper>
          <TextWrapper.TopText>{t("hero.toptext")}</TextWrapper.TopText>
          <TextWrapper.Title>
            <span>{t("hero.hungry")}</span> {t("hero.wait")}
            <span>{t("hero.door")}</span>
          </TextWrapper.Title>
          <TextWrapper.Text>{t("hero.lorem")}</TextWrapper.Text>
          <BtnWrapper>
            <BtnWrapper.Button b onClick={() => navigate("/contact")}>
              {t("hero.order_now")} <IoIosArrowForward />
            </BtnWrapper.Button>
            <BtnWrapper.Button onClick={() => navigate("/foods")}>
              {t("hero.see")}
            </BtnWrapper.Button>
          </BtnWrapper>
          <Div>
            <div className="wrapper">
              <Div.Wrapper>
                <AiFillCar />
              </Div.Wrapper>
              <p className="text">{t("hero.shipping")}</p>
            </div>
            <div className="wrapper">
              <Div.Wrapper>
                <RiShieldCheckLine />
              </Div.Wrapper>
              <p className="text">{t("hero.checkout")}</p>
            </div>
          </Div>
        </TextWrapper>
        <Wrapper.Img src={girl} />
      </Wrapper>
      <Container.HeroFooter>
        {/* // ! 1-contentni orab turuvchisi */}
        <Container.HeroFooter.FooterWrapper>
          <Container.HeroFooter.FooterWrapper.Content>
            <Container.HeroFooter.FooterWrapper.Content.Image src={fastfood} />
            <Container.HeroFooter.FooterWrapper.Content.Text>
              {t("hero.fast_food")}
            </Container.HeroFooter.FooterWrapper.Content.Text>
          </Container.HeroFooter.FooterWrapper.Content>
        </Container.HeroFooter.FooterWrapper>
        {/* // ! 2-contentni orab turuvchisi */}
        <Container.HeroFooter.FooterWrapper>
          <Container.HeroFooter.FooterWrapper.Content>
            <Container.HeroFooter.FooterWrapper.Content.Image src={pizza} />
            <Container.HeroFooter.FooterWrapper.Content.Text>
              {t("hero.pizza")}
            </Container.HeroFooter.FooterWrapper.Content.Text>
          </Container.HeroFooter.FooterWrapper.Content>
        </Container.HeroFooter.FooterWrapper>
        {/* // ! 3-contentni orab turuvchisi */}
        <Container.HeroFooter.FooterWrapper>
          <Container.HeroFooter.FooterWrapper.Content>
            <Container.HeroFooter.FooterWrapper.Content.Image src={asianFood} />
            <Container.HeroFooter.FooterWrapper.Content.Text>
              {t("hero.asian_food")}
            </Container.HeroFooter.FooterWrapper.Content.Text>
          </Container.HeroFooter.FooterWrapper.Content>
        </Container.HeroFooter.FooterWrapper>
        {/* // ! 4-contentni orab turuvchisi */}
        <Container.HeroFooter.FooterWrapper>
          <Container.HeroFooter.FooterWrapper.Content>
            <Container.HeroFooter.FooterWrapper.Content.Image src={rowMeat} />
            <Container.HeroFooter.FooterWrapper.Content.Text>
              {t("hero.meat")}
            </Container.HeroFooter.FooterWrapper.Content.Text>
          </Container.HeroFooter.FooterWrapper.Content>
        </Container.HeroFooter.FooterWrapper>
      </Container.HeroFooter>
    </Container>
  );
};

export default Hero;
