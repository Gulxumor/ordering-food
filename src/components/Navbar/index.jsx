import React from "react";
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
import logo from "../../assets/images/logo.jpg";
import { RiShoppingBasketLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { navbar } from "../../utils/mock";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
// import i18next from "i18next";
import { useDispatch, useSelector } from "react-redux";
import { setCartDrawerVisibility } from "../../store/DrawerSlice";
import CartDrawer from "./CartDrawer";

const Navbar = () => {
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
            <Title>Tasty Treat</Title>
          </LogoWrapper>
          <NavItems>
            {navbar.map(
              ({ id, title, hidden, path }) =>
                !hidden && (
                  <NavItem key={id}>
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "var(--red)" : "var(--black)",
                        fontWeight: isActive ? `700` : "600",
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
            {/* <Icons.Select
              defaultValue={localStorage.getItem("locale")}
              onChange={(e) => {
                localStorage.setItem("locale", e.target.value);
                i18next.changeLanguage(e.target.value);
              }}
            >
              <option value="en">EN</option>
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
            </Icons.Select> */}
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
      <CartDrawer />
      <Outlet />
    </>
  );
};

export default Navbar;
