import React, { useState } from "react";
import Slider from "react-slick";
import john from "../../../../assets/images/johnDoe.jpg";
import marsh from "../../../../assets/images/mitchelMarsh.jpg";
import crock from "../../../../assets/images/stevenCrock.jpg";
import computer from "../../../../assets/images/compLocation.jpg";
import { Container, Wrapper, TextWrapper, ImageWrapper } from "./style";
import { useTranslation } from "react-i18next";

function useSlider() {
  const { t } = useTranslation();
  const slider = () => [
    {
      id: 1,
      text: t("testimonial.lorem_bottom"),
      img: john,
      name: t("testimonial.john"),
    },
    {
      id: 2,
      text: t("testimonial.lorem_bottom"),
      img: marsh,
      name: t("testimonial.mitchell"),
    },
    {
      id: 3,
      text: t("testimonial.lorem_bottom"),
      img: crock,
      name: t("testimonial.steven"),
    },
  ];
  return { slider };
}

const Testimonial = () => {
  const { slider } = useSlider();
  const { t } = useTranslation();
  const [settings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  });

  return (
    <Container>
      <Wrapper>
        <Wrapper.Top>
          <TextWrapper>
            <TextWrapper.TopText>
              {t("testimonial.testimonial")}
            </TextWrapper.TopText>
            <TextWrapper.Title>
              {t("testimonial.what")} <span>{t("testimonial.customer")}</span>
              {t("testimonial.saying")}
            </TextWrapper.Title>
            <TextWrapper.Desc>{t("testimonial.lorem_top")}</TextWrapper.Desc>
          </TextWrapper>
          <div className="mainSliderWrapper">
            <Slider {...settings}>
              {slider().map(({ id, text, img, name }) => (
                <div key={id}>
                  <TextWrapper.Desc>{text}</TextWrapper.Desc>
                  <ImageWrapper>
                    <Wrapper.Img src={img} alt="user" />
                    <h4>{name}</h4>
                  </ImageWrapper>
                </div>
              ))}
            </Slider>
          </div>
        </Wrapper.Top>
        <Wrapper.Bottom src={computer} />
      </Wrapper>
    </Container>
  );
};

export default Testimonial;
