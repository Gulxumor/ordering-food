import React from "react";
import logo from "../../assets/images/logo.jpg";
import { RiShoppingBasketLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import UseNavbar from "../../utils/mock";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCartDrawerVisibility } from "../../store/DrawerSlice";
import CartDrawer from "./CartDrawer";
import { useTranslation } from "react-i18next";
import LangSelect from "./LangSelect";
import {
  Container,
  Icons,
  Logo,
  LogoWrapper,
  NavItem,
  NavItems,
  Title,
  Wrapper,
} from "./style";

const Navbar = () => {
  const { navbar } = UseNavbar();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartDrawerVisibility } = useSelector((state) => state.cartDrawer);
  console.log(cartDrawerVisibility, "drawer");
  return (
    <>
      <Container>
        <Wrapper>
          <LogoWrapper>
            <Logo src={logo} alt="logo" onClick={() => navigate("/")} />
            <Title>{t("navbar.logo")}</Title>
          </LogoWrapper>
          <NavItems>
            {navbar().map(
              ({ id, title, hidden, path }) =>
                !hidden && (
                  <NavItem key={id}>
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "var(--red)" : "var(--black)",
                        fontWeight: isActive ? `600` : "400",
                      })}
                      className="nav_link"
                      to={path}
                    >
                      {title}
                    </NavLink>
                  </NavItem>
                )
            )}
          </NavItems>

          <Icons>
            {/* //!  selection is here */}
            <LangSelect />
            <RiShoppingBasketLine
              className="nav-icon"
              onClick={() => dispatch(setCartDrawerVisibility())}
            />
            <AiOutlineUser
              className="nav-icon"
              onClick={() => navigate("/login")}
            />
          </Icons>
        </Wrapper>
      </Container>

      {/* //!  Drawer is here */}
      <CartDrawer />
      <Outlet />
    </>
  );
};

export default Navbar;
