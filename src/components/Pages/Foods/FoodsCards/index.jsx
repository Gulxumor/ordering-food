import React from "react";
import { Section, Wrapper } from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import { Card } from "../../../Generics/Card";
import { products } from "../../../../utils/products";
import { useState } from "react";

const FoodsCards = () => {
  const [search, setSearch] = useState("");
  return (
    <Section>
      <Wrapper>
        <Wrapper.Top>
          <Wrapper.Top.InputWrapper>
            <Wrapper.Top.InputWrapper.Input
              placeholder="I'm looking for a ..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <AiOutlineSearch className="foods-search-icon" />
          </Wrapper.Top.InputWrapper>
          <Wrapper.Top.Select>
            <Wrapper.Top.Select.Option>Default</Wrapper.Top.Select.Option>
            <Wrapper.Top.Select.Option>
              Alphabetically
            </Wrapper.Top.Select.Option>
            <Wrapper.Top.Select.Option>High Price</Wrapper.Top.Select.Option>
            <Wrapper.Top.Select.Option>Low Price</Wrapper.Top.Select.Option>
          </Wrapper.Top.Select>
        </Wrapper.Top>
        <Wrapper.Bottom>
          {products
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.title.toLowerCase().includes(search);
            })
            .map(({ id, title, img, price }) => (
              <Card f key={id} img={img} title={title} price={price} id={id} />
            ))}
        </Wrapper.Bottom>
      </Wrapper>
    </Section>
  );
};

export default FoodsCards;
