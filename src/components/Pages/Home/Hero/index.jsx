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

const Hero = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <TextWrapper>
          <TextWrapper.TopText>Easy way to make an order</TextWrapper.TopText>
          <TextWrapper.Title>
            <span>HUNGRY?</span> Just wait food at <span>your door</span>
          </TextWrapper.Title>
          <TextWrapper.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magni
            delectus tenetur autem, sint veritatis!
          </TextWrapper.Text>
          <BtnWrapper>
            <BtnWrapper.Button b onClick={() => navigate("/contact")}>
              Order Now <IoIosArrowForward />
            </BtnWrapper.Button>
            <BtnWrapper.Button onClick={() => navigate("/foods")}>
              See All Foods
            </BtnWrapper.Button>
          </BtnWrapper>
          <Div>
            <div className="wrapper">
              <Div.Wrapper>
                <AiFillCar />
              </Div.Wrapper>
              <p className="text">No shipping charge</p>
            </div>
            <div className="wrapper">
              <Div.Wrapper>
                <RiShieldCheckLine />
              </Div.Wrapper>
              <p className="text">100% secure checkout</p>
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
              Fastfood
            </Container.HeroFooter.FooterWrapper.Content.Text>
          </Container.HeroFooter.FooterWrapper.Content>
        </Container.HeroFooter.FooterWrapper>
        {/* // ! 2-contentni orab turuvchisi */}
        <Container.HeroFooter.FooterWrapper>
          <Container.HeroFooter.FooterWrapper.Content>
            <Container.HeroFooter.FooterWrapper.Content.Image src={pizza} />
            <Container.HeroFooter.FooterWrapper.Content.Text>
              Pizza
            </Container.HeroFooter.FooterWrapper.Content.Text>
          </Container.HeroFooter.FooterWrapper.Content>
        </Container.HeroFooter.FooterWrapper>
        {/* // ! 3-contentni orab turuvchisi */}
        <Container.HeroFooter.FooterWrapper>
          <Container.HeroFooter.FooterWrapper.Content>
            <Container.HeroFooter.FooterWrapper.Content.Image src={asianFood} />
            <Container.HeroFooter.FooterWrapper.Content.Text>
              Asian Food
            </Container.HeroFooter.FooterWrapper.Content.Text>
          </Container.HeroFooter.FooterWrapper.Content>
        </Container.HeroFooter.FooterWrapper>
        {/* // ! 4-contentni orab turuvchisi */}
        <Container.HeroFooter.FooterWrapper>
          <Container.HeroFooter.FooterWrapper.Content>
            <Container.HeroFooter.FooterWrapper.Content.Image src={rowMeat} />
            <Container.HeroFooter.FooterWrapper.Content.Text>
              Row Meat
            </Container.HeroFooter.FooterWrapper.Content.Text>
          </Container.HeroFooter.FooterWrapper.Content>
        </Container.HeroFooter.FooterWrapper>
      </Container.HeroFooter>
    </Container>
  );
};

export default Hero;
