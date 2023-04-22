import CartPage from "../components/Pages/CartPage";
import ContactPage from "../components/Pages/ContactPage";
import FoodsPage from "../components/Pages/Foods";
import Footer from "../components/Footer";
import Home from "../components/Pages/Home";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Login/Register";
import Product from "../components/Product";

export const navbar = [
    {
        id: 1,
        title: 'Home',
        path: '/',
        element: <Home />,
        isPrivate: false,
        hidden: false,
    },
    {
        id: 2,
        title: 'Foods',
        path: '/foods',
        element: <FoodsPage />,
        isPrivate: true,
        hidden: false,
    },
    {
        id: 8,
        title: 'Product',
        path: '/foods/:id',
        element: <Product />,
        isPrivate: true,
        hidden: true,
    },
    {
        id: 3,
        title: 'Cart',
        path: '/cart',
        element: <CartPage />,
        isPrivate: true,
        hidden: false,
    },
    {
        id: 4,
        title: 'Contact',
        path: '/contact',
        element: <ContactPage />,
        isPrivate: true,
        hidden: false,
    },
    {
        id: 5,
        title: 'Login',
        path: '/login',
        element: <Login />,
        isPrivate: false,
        hidden: true,
    },
    {
        id: 6,
        title: 'Register',
        path: '/Register',
        element: <Register />,
        isPrivate: false,
        hidden: true,
    },
    {
        id: 7,
        title: 'Footer',
        path: '*',
        element: <Footer />,
        isPrivate: false,
        hidden: true,
    },
]