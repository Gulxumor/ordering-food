import React from 'react'
import Footer from "../../Footer";
import Hero from "./Hero";
import HotPizza from "./HotPizza";
import PopularFoods from "./PopularFoods";
import Section from "./ServeSection";
import Tasty from "./Tasty";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <Section />
      <PopularFoods />
      <Tasty />
      <HotPizza />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home