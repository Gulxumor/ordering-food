import React from "react";
import { Container, ImagesWrapper, Top, Wrapper } from "./style";
import deliver from "../../../../assets/images/quickDelivery.jpg";
import dineIn from "../../../../assets/images/superDineIn.jpg";
import easy from "../../../../assets/images/easyPickUp.jpg";
import { useTranslation } from "react-i18next";

function useFoods() {
  const { t } = useTranslation();
  const foods = () => [
    {
      id: 1,
      img: deliver,
      alt: t("section.deliver"),
      title: t("section.quick"),
      text:  t("section.lorem2"),
    },
    {
      id: 2,
      img: dineIn,
      alt: t("section.dineIn"),
      title: t("section.dineIn"),
      text:  t("section.lorem2"),
    },
    {
      id: 3,
      img: easy,
      alt: t("section.easy"),
      title: t("section.easy"),
      text:  t("section.lorem2"),
    },
  ];
  return { foods };
}

const Section = () => {
  const { t } = useTranslation();
  const { foods } = useFoods();
  return (
    <Container>
      <Wrapper>
        <Top>
          <Top.TopText>{t("section.toptext")}</Top.TopText>
          <Top.Title>
            {t("section.title")} <span>{t("section.care")}</span>
          </Top.Title>
          <Top.Description w>{t("section.lorem1")}</Top.Description>
        </Top>
        <ImagesWrapper>
          {foods().map(({ id, img, alt, title, text }) => (
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
