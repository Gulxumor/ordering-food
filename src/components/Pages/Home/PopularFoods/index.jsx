import React from "react";
import Segmented from "./Segmented";
import { Container, Wrapper } from "./style";

const PopularFoods = () => {
  return (
    <Container>
      <Wrapper>
        <Wrapper.Foods>Popular Foods</Wrapper.Foods>
        <Segmented />
      </Wrapper>
    </Container>
  );
};

export default PopularFoods;
