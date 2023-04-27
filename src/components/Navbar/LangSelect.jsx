import i18next from "i18next";
import React from "react";
import { Select } from "./style";

const LangSelect = () => {
  return (
    <div>
      <Select
        defaultValue={localStorage.getItem("locale")}
        onChange={(e) => {
          i18next.changeLanguage(e.target.value);
          localStorage.setItem("locale", e.target.value);
          window.location.reload();
        }}
      >
        <option value="en">EN</option>
        <option value="ar">AR</option>
        <option value="uz">UZ</option>
        <option value="ru">RU</option>
      </Select>
    </div>
  );
};

export default LangSelect;
