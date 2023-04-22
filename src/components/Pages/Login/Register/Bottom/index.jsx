import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Input,
  Container,
  Wrapper,
  Button,
  Paragraph,
} from "../../Login/Bottom/style";

const Bottom = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Wrapper.Wrapper>
          <Input type="text" placeholder="Full Name" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button>Login</Button>
        </Wrapper.Wrapper>
        <Paragraph onClick={() => navigate("/login")} r>
          Already have an account? Login
        </Paragraph>
      </Wrapper>
    </Container>
  );
};

export default Bottom;
