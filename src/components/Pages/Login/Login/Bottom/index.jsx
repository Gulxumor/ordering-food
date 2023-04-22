import React from "react";
import { useNavigate } from "react-router-dom";
import { Input, Container, Wrapper, Button, Paragraph } from "./style";

const Bottom = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Wrapper.Wrapper>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button>Login</Button>
        </Wrapper.Wrapper>
        <Paragraph onClick={() => navigate("/register")}>
          Don't have an account? Create an account
        </Paragraph>
      </Wrapper>
    </Container>
  );
};

export default Bottom;
