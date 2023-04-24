import React from 'react'
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const Product = () => {
  const { t } = useTranslation();
  const param = useParams();
  console.log(param.id);
  return <div></div>;
};

export default Product