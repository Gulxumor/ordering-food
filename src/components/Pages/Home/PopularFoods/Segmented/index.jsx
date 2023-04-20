import React from "react";
import { Segmented } from "antd";
import { Segment } from "../style";
import burger from "../../../../../assets/images/burgerSection.jpg";
import bread from "../../../../../assets/images/breadSection.jpg";
import pizza from "../../../../../assets/images/pizzaSection.jpg";

const foods = [
  { id: 1, title: "All" },
  { id: 2, title: "Burger", img: burger },
  { id: 3, title: "Pizza", img: pizza },
  { id: 4, title: "Bread", img: bread },
];

const SegmentedSection = () => {
  return (
    <Segment>
      <Segmented size="large" options={["All", "Burger", "Pizza", "Bread"]} />
    </Segment>
  );
};

export default SegmentedSection;
