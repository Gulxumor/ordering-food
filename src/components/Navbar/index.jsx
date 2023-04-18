import React from "react";
import { Logo, LogoWrapper, Title } from "../Footer/style";
import { Container, Icons, NavItem, NavItems, Text, Wrapper } from "./style";
import logo from "../../assets/images/logo.jpg";
import { RiShoppingBasketLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { navbar } from "../../utils/mock";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <LogoWrapper>
          <Logo src={logo} alt="logo" />
          {/* <p>{t("footer.logo")}</p> */}
          <Title fw>Tasty Treat</Title>
        </LogoWrapper>
        <NavItems>
          {navbar.map(
            ({ id, title, hidden, path }) =>
              !hidden && (
                <NavItem key={id}>
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? "var(--red)" : "var(--black)",
                      fontWeight: isActive ? `800` : "500",
                    })}
                    className="nav_link"
                    to={path}
                  >
                    <Text>{title}</Text>
                  </NavLink>
                </NavItem>
              )
          )}
        </NavItems>
        <Icons>
          <RiShoppingBasketLine />
          <AiOutlineUser />
        </Icons>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
