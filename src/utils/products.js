import Burger from "../assets/images/burger.jpg"
import cheeseBurger from "../assets/images/cheeseBurger.jpg"
import cheesePizza from "../assets/images/cheesePizza.jpg"
import classic from "../assets/images/classicHamburger.jpg"
import crunchy from "../assets/images/crunchyBread.jpg"
import potato from "../assets/images/potatoli.jpg"
import loaf from "../assets/images/loafBread.jpg"
import margeritta from "../assets/images/margeritta.jpg"
import mexican from "../assets/images/mexican.jpg"
import kokat from "../assets/images/kokat.jpg"
import qoziqorin from "../assets/images/qoziqorin.jpg"
import royal from "../assets/images/royalBurger.jpg"
import seafood from "../assets/images/seafoodPizza.jpg"
import vegetarian from "../assets/images/vegetarianPizza.jpg"
import mushroom from "../assets/images/withMushrum.jpg"
const desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque."

export const products = [
    { id: 1, title: "Cheese Burger", img: cheeseBurger, price: 24, category: "Burger", quantity: 1, images: [{ id: 1, img: cheeseBurger }, { id: 2, img: cheeseBurger }, { id: 3, img: cheeseBurger }], desc: desc },
    { id: 2, title: "Cheese Pizza", img: cheesePizza, price: 24, category: "Pizza", quantity: 1, images: [{ id: 1, img: cheeseBurger }, { id: 2, img: cheeseBurger }, { id: 3, img: cheeseBurger }], desc: desc },
    { id: 3, title: "Classic Hamburger", img: classic, price: 24, category: "Burger", quantity: 1, images: [{ id: 1, img: cheeseBurger }, { id: 2, img: cheeseBurger }, { id: 3, img: cheeseBurger }], desc: desc },
    { id: 4, title: "Delicious Bread", img: crunchy, price: 24, category: "Bread", quantity: 1, images: [{ id: 1, img: cheeseBurger }, { id: 2, img: cheeseBurger }, { id: 3, img: cheeseBurger }], desc: desc },
    { id: 5, title: "Chicken Burger", img: potato, price: 24, category: "Burger", quantity: 1, images: [{ id: 1, img: cheeseBurger }, { id: 2, img: cheeseBurger }, { id: 3, img: cheeseBurger }], desc: desc },
    { id: 6, title: "Loaf Bread", img: loaf, price: 24, category: "Bread", quantity: 1, images: [{ id: 1, img: cheeseBurger }, { id: 2, img: cheeseBurger }, { id: 3, img: cheeseBurger }], desc: desc },
    { id: 7, title: "Double Cheese Margherita", img: margeritta, price: 24, category: "Pizza", featured: "HotPizza", quantity: 1, images: [{ id: 1, img: cheeseBurger }, { id: 2, img: cheeseBurger }, { id: 3, img: cheeseBurger }], desc: desc },
    { id: 8, title: "Maxican Green Wave", img: mexican, price: 24, category: "Pizza", featured: "HotPizza", quantity: 1, images: [{ id: 1, img: cheeseBurger }, { id: 2, img: cheeseBurger }, { id: 3, img: cheeseBurger }], desc: desc },
    { id: 9, title: "Tasty Pizza", img: kokat, price: 24, category: "Pizza", quantity: 1, images: [{ id: 1, img: cheeseBurger }, { id: 2, img: cheeseBurger }, { id: 3, img: cheeseBurger }], desc: desc },
    { id: 10, title: "Burger", img: Burger, price: 24, category: "Burger", quantity: 1, images: [{ id: 1, img: cheeseBurger }, { id: 2, img: cheeseBurger }, { id: 3, img: cheeseBurger }], desc: desc },
    { id: 11, title: "Mushroom", img: qoziqorin, price: 24, category: "Pizza", quantity: 1, images: [{ id: 1, img: cheeseBurger }, { id: 2, img: cheeseBurger }, { id: 3, img: cheeseBurger }], desc: desc },
    { id: 12, title: "Royal Burger", img: royal, price: 24, category: "Burger", quantity: 1, images: [{ id: 1, img: cheeseBurger }, { id: 2, img: cheeseBurger }, { id: 3, img: cheeseBurger }], desc: desc },
    { id: 13, title: "Seafood Pizza", img: seafood, price: 24, category: "Pizza", featured: "HotPizza", quantity: 1, images: [{ id: 1, img: cheeseBurger }, { id: 2, img: cheeseBurger }, { id: 3, img: cheeseBurger }], desc: desc },
    { id: 14, title: "Crunchy Bread", img: crunchy, price: 24, category: "Bread", quantity: 1, images: [{ id: 1, img: cheeseBurger }, { id: 2, img: cheeseBurger }, { id: 3, img: cheeseBurger }], desc: desc },
    { id: 15, title: "Vegetarian Pizza", img: vegetarian, price: 24, category: "Pizza", featured: "HotPizza", quantity: 1, images: [{ id: 1, img: cheeseBurger }, { id: 2, img: cheeseBurger }, { id: 3, img: cheeseBurger }], desc: desc },
    { id: 16, title: "Pizza with Mushroom", img: mushroom, price: 24, category: "Pizza", quantity: 1, images: [{ id: 1, img: cheeseBurger }, { id: 2, img: cheeseBurger }, { id: 3, img: cheeseBurger }], desc: desc },
]
