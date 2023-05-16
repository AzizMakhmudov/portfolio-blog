import React, { useContext } from "react";
import "./Footer.scss";
import facebook from "/public/facebook.svg";
import instagram from "/public/instagram.svg";
import twitter from "/public/twitter.svg";
import linkedin from "/public/linkedin.svg";
import { LanguageContext } from "../../Lang";

export default function Footer() {
  const { language, languages, strings, changeLanguage } =
    useContext(LanguageContext);
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__box">
          <nav>
            <ul className="footer__list">
              <li>
                <a href="#">
                  <img src={facebook} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={instagram} alt="instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={twitter} alt="twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={linkedin} alt="linked in" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <h4 className="footer__info">{strings?.footer?.rights}</h4>
      </div>
    </footer>
  );
}