import React from "react";
import { Container } from "./style";

export const Button = ({
  children,
  type,
  width,
  height,
  onClick,
  mt,
  mr,
  mb,
  ml,
  pt,
  pr,
  pb,
  pl,
  h,
  br,
}) => {
  return (
    <Container
      h={h}
      type={type}
      mr={mr}
      ml={ml}
      mb={mb}
      mt={mt}
      pr={pr}
      pl={pl}
      pb={pb}
      pt={pt}
      br={br}
      width={width}
      height={height}
      onClick={onClick}
    >
      {children}
    </Container>
  );
};

export default Button;
