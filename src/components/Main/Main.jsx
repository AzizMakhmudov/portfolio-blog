import React, { useContext } from "react";
import { LanguageContext } from "../../Lang";
import "./Main.scss";
import john from "/public/Ellipse 1.png";
import Rectangle from "/public/Rectangle 30.png";

export default function Main() {
  const { language, languages, strings, changeLanguage } =
    useContext(LanguageContext);
  return (
    <main>
      <div className="container">
        <div className="resume">
          <div className="resume__title--box">
            <h3 className="resume__title">{strings?.main?.about}</h3>
            <p className="resume__info">{strings?.main.info}</p>
            <a href="#" className="resume__btn">
              {strings?.main?.btn}
            </a>
          </div>
          <div className="resume__img--box">
            <img src={john} alt="John" width="243px" height="243px" className="resume__img"/>
          </div>
        </div>
      </div>
      <div className="recent">
        <div className="container">
          <div className="recent__boxes">
            <p className="recent__posts">{strings?.main?.recent}</p>
            <a href="#" className="recent__link">
              {strings?.main?.view}
            </a>
          </div>
          <div className="recent__title--boxes">
            <div className="recent__box">
              <h3 className="recent__title">{strings?.main?.making}</h3>
              <div className="recent__date--box">
                <p className="recent__data">{strings?.main?.data}</p>
                <p className="recent__work">{strings?.main?.pattern}</p>
              </div>
              <p className="recent__info">{strings?.main?.info}</p>
            </div>
            <div className="recent__box">
              <h3 className="recent__title">{strings?.main?.creating}</h3>
              <div className="recent__date--box">
                <p className="recent__data">{strings?.main?.data}</p>
                <p className="recent__work">{strings?.main?.figma}</p>
              </div>
              <p className="recent__info">{strings?.main?.info}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="works">
          <h4 className="works__info">{strings?.main?.featuredWorks}</h4>
          <div className="works__boxes">
            <div className="works__image--box">
              <img
                src={Rectangle}
                alt="Works Image"
                width="246px"
                height="180px"
              />
            </div>
            <div className="works__content--info">
              <h3 className="works__title">
                {strings?.main?.designDashboards}
              </h3>
              <div className="works__mini--boxes">
                <button className="works__btn">
                  {strings?.main?.dataDashboard}
                </button>
                <p className="works__info--btn">{strings?.main?.dashboard}</p>
              </div>
              <p className="works__info--lorem">{strings?.main?.info}</p>
            </div>
          </div>
          <span className="works__line"></span>
          <div className="works__boxes">
            <div className="works__image--box">
              <img
                src={Rectangle}
                alt="Works Image"
                width="246px"
                height="180px"
              />
            </div>
            <div className="works__content--info">
              <h3 className="works__title">{strings?.main?.portraits}</h3>
              <div className="works__mini--boxes">
                <button className="works__btn">
                  {strings?.main?.otherData}
                </button>
                <p className="works__info--btn">
                  {strings?.main?.illustration}
                </p>
              </div>
              <p className="works__info--lorem">{strings?.main?.info}</p>
            </div>
          </div>
          <span className="works__line"></span>
          <div className="works__boxes">
            <div className="works__image--box">
              <img
                src={Rectangle}
                alt="Works Image"
                width="246px"
                height="180px"
              />
            </div>
            <div className="works__content--info">
              <h3 className="works__title">{strings?.main?.["36Days"]}</h3>
              <div className="works__mini--boxes">
                <button className="works__btn">
                  {strings?.main?.otherData}
                </button>
                <p className="works__info--btn">
                  {strings?.main?.typography}
                </p>
              </div>
              <p className="works__info--lorem">{strings?.main?.info}</p>
            </div>
          </div>
          <span className="works__line"></span>
        </div>
      </div>
    </main>
  );
}
