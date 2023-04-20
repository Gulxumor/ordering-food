import React, { useState } from "react";
import Slider from "react-slick";
import john from "../../../../assets/images/johnDoe.jpg";
import marsh from "../../../../assets/images/mitchelMarsh.jpg";
import crock from "../../../../assets/images/stevenCrock.jpg";
import computer from "../../../../assets/images/compLocation.jpg";
import { Container, Wrapper, TextWrapper, ImageWrapper } from "./style";

const text =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatum necessitatibus eveniet quis culpa assumenda nulla sit veritatis nesciunt eligendi veniam, ut, modi quo nihil odit autem laboriosam nisi ipsam?";
const slider = [
  { id: 1, text: text, img: john, name: "John Doe" },
  { id: 2, text: text, img: marsh, name: "Mitchell Marsh" },
  { id: 3, text: text, img: crock, name: "Steven Crock" },
];

const Testimonial = () => {
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
            <TextWrapper.TopText>Testimonial</TextWrapper.TopText>
            <TextWrapper.Title>
              What our <span>customers are</span> saying
            </TextWrapper.Title>
            <TextWrapper.Desc>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio quasi qui minus quos sit perspiciatis inventore quis
              provident placeat fugiat!
            </TextWrapper.Desc>
          </TextWrapper>
          <div className="mainSliderWrapper">
            <Slider {...settings}>
              {slider.map(({ id, text, img, name }) => (
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
