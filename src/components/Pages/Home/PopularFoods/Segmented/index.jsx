import React from "react";
import { Segmented } from "antd";
import { CardsWrapper, Image, Segment } from "../style";
import burger from "../../../../../assets/images/burgerSection.png";
import bread from "../../../../../assets/images/breadSection.png";
import pizza from "../../../../../assets/images/pizzaSection.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../../../Generics/Card";
import { useTranslation } from "react-i18next";

const SegmentedSection = () => {
  const { products } = useSelector((state) => state.productsSlice);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const category = products.filter((product) =>
    selectedCategory === "All"
      ? product
      : product.category.toLowerCase() === selectedCategory.toLowerCase()
      ? product
      : null
  );
  const {t} = useTranslation()
  return (
    <>
      <Segment>
        <Segmented
          size="large"
          options={[
           t("popular_foods.all"),
            {
              label: (
                <div className="wrapper">
                  <Image src={burger} alt="burger" />
                  <div>{t("popular_foods.burger")}</div>
                </div>
              ),
              value: "Burger",
            },
            {
              label: (
                <div className="wrapper">
                  <Image src={pizza} alt="pizza" />
                  <div>{t("popular_foods.pizza")}</div>
                </div>
              ),
              value: "Pizza",
            },
            {
              label: (
                <div className="wrapper">
                  <Image src={bread} alt="bread" />
                  <div>{t("popular_foods.bread")}</div>
                </div>
              ),
              value: "Bread",
            },
          ]}
          onChange={(value) => setSelectedCategory(value)}
        />
      </Segment>
      <CardsWrapper>
        {category.map(({ id, img, title, price }) => (
          <Card key={id} img={img} title={title} price={price} id={id} />
        ))}
      </CardsWrapper>
    </>
  );
};

export default SegmentedSection;

// ["All", "Burger", "Pizza", "Bread"]
