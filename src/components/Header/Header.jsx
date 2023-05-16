import React, { useContext, useRef } from "react";
import { LanguageContext } from "../../Lang";
import "./Header.scss";

export default function Header() {
  const { language, languages, strings, changeLanguage } =
    useContext(LanguageContext);
  const header = useRef(".header")  

  function handleClickBtn() {
    header.current.classList.toggle("open")    
  }

  return (
    <header className="header" ref={header}>
      <div className="container">
        <nav className="header__navbar">
          <button className="header__burger--btn" onClick={() => handleClickBtn()}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className="header__list">
            <li>
              <a href="#" className="header__link">
                {strings.header.works}
              </a>
            </li>
            <li>
              <a href="#" className="header__link">
                {strings.header.blog}
              </a>
            </li>
            <div className="header__buttons">
              <button
                className="header__btn"
                onClick={() => changeLanguage("en")}
              >
                {strings.languages.en}
              </button>
              <button
                className="header__btn"
                onClick={() => changeLanguage("uz")}
              >
                {strings.languages.uz}
              </button>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}
