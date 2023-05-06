import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import UseNavbar from "../utils/mock";
import { Navigate, Route, Routes } from "react-router-dom";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { ru } from "../locale/ru/translation";
import { ar } from "../locale/ar/translation";
import { en } from "../locale/en/translation";
import { uz } from "../locale/uz/translation";
import NotFound from "../components/NotFound";

const Root = () => {
  let token = JSON.stringify(localStorage.getItem("token"));

  //! language ni localstorage ga set qilish
  useEffect(() => {
    if (!localStorage.getItem("locale")) {
      localStorage.setItem("locale", "en");
      // window.location.reload();
    }
  }, []);

  //! translation
  i18next.use(initReactI18next).init({
    resources: {
      ar: { translation: ar },
      en: { translation: en },
      uz: { translation: uz },
      ru: { translation: ru },
    },
    lng: localStorage.getItem("locale") || "en",
    fallback: localStorage.getItem("locale") || "en",
  });
  const { navbar } = UseNavbar();

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          {navbar().map(
            ({ id, path, isPrivate, element }) =>
              !isPrivate && <Route key={id} path={path} element={element} />
          )}
          {navbar().map(
            ({ id, path, isPrivate, element }) =>
              isPrivate && (
                <Route
                  key={id}
                  path={path}
                  element={token ? element : <Navigate to="/login" />}
                />
              )
          )}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Root;
