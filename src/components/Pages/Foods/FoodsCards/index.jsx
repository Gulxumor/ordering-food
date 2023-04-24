import React from "react";
import { Section, Wrapper } from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import { Card } from "../../../Generics/Card";
import { products } from "../../../../utils/products";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const FoodsCards = () => {
  const {t} = useTranslation()
  const [search, setSearch] = useState("");
  return (
    <Section>
      <Wrapper>
        <Wrapper.Top>
          <Wrapper.Top.InputWrapper>
            <Wrapper.Top.InputWrapper.Input
              placeholder={t("cart.looking")}
              onChange={(e) => setSearch(e.target.value)}
            />
            <AiOutlineSearch className="foods-search-icon" />
          </Wrapper.Top.InputWrapper>
          <Wrapper.Top.Select>
            <Wrapper.Top.Select.Option>
              {t("cart.default")}
            </Wrapper.Top.Select.Option>
            <Wrapper.Top.Select.Option>
              {t("cart.alpha")}
            </Wrapper.Top.Select.Option>
            <Wrapper.Top.Select.Option>
              {t("cart.high")}
            </Wrapper.Top.Select.Option>
            <Wrapper.Top.Select.Option>
              {t("cart.low")}
            </Wrapper.Top.Select.Option>
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
