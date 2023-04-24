import React from "react";
import { Container, Desc, Image, Text, Title, Wrapper } from "./style";
import { AiFillCheckCircle } from "react-icons/ai";
import location from "../../../../assets/images/phoneLocation.jpg";
import { useTranslation } from "react-i18next";

function useFoods() {
  const { t } = useTranslation();
  const foods = () => [
    {
      id: 1,
      text: t("tasty.fresh"),
      desc: t("tasty.fresh_lorem"),
    },
    {
      id: 2,
      text: t("tasty.quality"),
      desc: t("tasty.quality_lorem"),
    },
    {
      id: 3,
      text: t("tasty.order"),
      desc: t("tasty.quality_lorem"),
    },
  ];
  return { foods };
}

const Tasty = () => {
  const { foods } = useFoods();
  const { t } = useTranslation();
  return (
    <Container>
      <Wrapper>
        <Image src={location} />
        <Wrapper.Wrapper>
          <Title>
            <span>{t("tasty.why")}</span>
            {t("tasty.treat")}
          </Title>
          <Desc desc>{t("tasty.lorem")}</Desc>
          {foods().map(({ id, desc, text }) => (
            <Wrapper.Wrapper.Wrapper key={id}>
              <Text>
                <AiFillCheckCircle className="icon" /> {text}
              </Text>
              <Desc>{desc}</Desc>
            </Wrapper.Wrapper.Wrapper>
          ))}
        </Wrapper.Wrapper>
      </Wrapper>
    </Container>
  );
};

export default Tasty;