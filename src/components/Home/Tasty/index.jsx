import React from "react";
import { Container, Desc, Image, Text, Title, Wrapper } from "./style";
import { AiFillCheckCircle } from "react-icons/ai";
import location from "../../../assets/images/phoneLocation.jpg";

const foods = [
  {
    id: 1,
    text: "Fresh and tasty foods",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, voluptatibus.",
  },
  {
    id: 2,
    text: "Quality support",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, earum.",
  },
  {
    id: 3,
    text: "Order from any location",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, earum.",
  },
];

const Tasty = () => {
  return (
    <Container>
      <Wrapper>
        <Image src={location} />
        <Wrapper.Wrapper>
          <Title>
            <span>Why</span> Tasty Treat?
          </Title>
          <Desc d>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            minus. Tempora reprehenderit a corporis velit, laboriosam vitae
            ullam, repellat illo sequi odio esse iste fugiat dolor, optio
            incidunt eligendi deleniti!
          </Desc>
          {foods.map(({ id, desc, text }) => (
            <Wrapper.Wrapper.Wrapper key={id}>
              <Text>
                <AiFillCheckCircle className="icon" /> {text}
              </Text>
              <Desc>{desc}</Desc>
            </Wrapper.Wrapper.Wrapper>
          ))}
        </Wrapper.Wrapper>
      </Wrapper>
    </Container>
  );
};

export default Tasty;