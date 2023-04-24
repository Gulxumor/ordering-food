import React from "react";
import { Segmented } from "antd";
import { CardsWrapper, Segment } from "../style";
import burger from "../../../../../assets/images/burgerSection.jpg";
import bread from "../../../../../assets/images/breadSection.jpg";
import pizza from "../../../../../assets/images/pizzaSection.jpg";
import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../../../Generics/Card";

const SegmentedSection = () => {
  const { products } = useSelector((state) => state.productsSlice);
  console.log(products);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const category = products.filter((product) =>
    selectedCategory === "All"
      ? product
      : product.category.toLowerCase() === selectedCategory.toLowerCase()
      ? product
      : null
  );
  console.log(category);
  return (
    <>
      <Segment>
        <Segmented
          size="large"
          options={["All", "Burger", "Pizza", "Bread"]}
          onChange={(value) => setSelectedCategory(value)}
        />
      </Segment>
      <CardsWrapper>
        {category.map(({ id, img, title, price }) => (
          <Card f key={id} img={img} title={title} price={price} id={id} />
        ))}
      </CardsWrapper>
    </>
  );
};

export default SegmentedSection;
