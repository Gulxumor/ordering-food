import CartPage from "../components/Pages/CartPage";
import ContactPage from "../components/Pages/ContactPage";
import FoodsPage from "../components/Pages/Foods";
import Home from "../components/Pages/Home";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Login/Register";
import Product from "../components/Product";
import { useTranslation } from "react-i18next";

function UseNavbar() {
    const { t } = useTranslation()
    const navbar = () => [
        {
            id: 1,
            title: t("navbar.home"),
            path: '/',
            element: <Home />,
            isPrivate: false,
            hidden: false,
        },
        {
            id: 2,
            title: t("navbar.foods"),
            path: "/foods",
            element: <FoodsPage />,
            isPrivate: true,
            hidden: false,
        },
        {
            id: 8,
            title: 'Product',
            path: '/shop/:id',
            element: <Product />,
            isPrivate: true,
            hidden: true,
        },
        {
            id: 3,
            title: t("navbar.card"),
            path: "/cart",
            element: <CartPage />,
            isPrivate: true,
            hidden: false,
        },
        {
            id: 4,
            title: t("navbar.contact"),
            path: "/contact",
            element: <ContactPage />,
            isPrivate: true,
            hidden: false,
        },
        {
            id: 5,
            title: 'Login',
            path: "/login",
            element: <Login />,
            isPrivate: false,
            hidden: true,
        },
        {
            id: 6,
            title: 'Register',
            path: "/register",
            element: <Register />,
            isPrivate: false,
            hidden: true,
        },
    ]
    return { navbar }
}
export default UseNavbar

