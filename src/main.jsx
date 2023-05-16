import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./index.scss";
import LanguageProvider from "./Lang";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <Header />
    <Main />
    <Footer />
  </LanguageProvider>
);