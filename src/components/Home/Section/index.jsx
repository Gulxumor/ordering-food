import React from "react";
import { Container, ImagesWrapper, Top, Wrapper } from "./style";
import deliver from "../../../assets/images/quickDelivery.jpg";
import dineIn from "../../../assets/images/superDineIn.jpg";
import easy from "../../../assets/images/easyPickUp.jpg";

const foods = [
  {
    id: 1,
    img: deliver,
    alt: "deliver",
    title: "Quick Delivery",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
  {
    id: 2,
    img: dineIn,
    alt: "dineIn",
    title: "Super Dine In",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
  {
    id: 3,
    img: easy,
    alt: "easy",
    title: "Easy Pick Up",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
];

const Section = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Top.TopText>What we serve</Top.TopText>
          <Top.Title>
            Just sit back at home we will <span>take care</span>
          </Top.Title>
          <Top.Description w>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam, eius.
          </Top.Description>
        </Top>
        <ImagesWrapper>
          {foods.map(({ id, img, alt, title, text }) => (
            <ImagesWrapper.Wrapper key={id}>
              <ImagesWrapper.Wrapper.Img src={img} alt={alt} />
              <ImagesWrapper.Wrapper.Title>{title}</ImagesWrapper.Wrapper.Title>
              <Top.Description>{text}</Top.Description>
            </ImagesWrapper.Wrapper>
          ))}
        </ImagesWrapper>
      </Wrapper>
    </Container>
  );
};

export default Section;
