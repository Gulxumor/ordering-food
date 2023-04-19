import React from 'react'
import Navbar from "../components/Navbar";
import Home from "../components/Home";
// import i18next from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import { ar } from "../locale/ar";
// import { en } from "../locale/en";
// import { uz } from "../locale/uz";
// import { ru } from "../localerur";

const Root = () => {
  // i18next()
  //   .use(initReactI18next)
  //   .init({
  //     resources: {
  //       ar: { translation: ar },
  //       en: { translation: en },
  //       uz: { translation: uz },
  //       ru: { translation: ru },
  //     },
  //     lng: localStorage.getItem("locale") || "en",
  //     fallback: localStorage.getItem("locale") || "en",
  //   });
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
};

export default Root