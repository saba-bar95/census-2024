import "./Navbar.scss";
import { Link } from "react-router-dom";
import LanguageChanger from "./LanguageChanger/LanguageChanger";
import census from "/src/assets/images/census-logo.png";
import censusEn from "/src/assets/images/census-logo-en.svg";
import sakstatKa from "/src/assets/images/logo-transparent-ka.png";
import sakstatEn from "/src/assets/images/logo-transparent-en.png";
import translations from "../../translation";

export default function Navbar() {
  const language = localStorage.getItem("language");
  const navBarText = translations[language].navbar;

  return (
    <div className="nav-container loading">
      <div className="top-side">
        <nav>
          <div className="right-side">
            <Link to={`/${language}`}>
              <img
                src={language === "ka" ? sakstatKa : sakstatEn}
                alt="sakstat"
                className="sakstat-logo"
              />
            </Link>
            <Link to={`/${language}`} className="census">
              <img
                src={language === "ka" ? census : censusEn}
                alt="census"
                className="census-logo"
              />
            </Link>
          </div>
          <div className="left-side">
            <ul>
              <li>
                <Link to={`/${language}`}>{navBarText.main}</Link>
              </li>
              <li>
                <Link to={`/${language}/questionnaires`}>
                  {navBarText.questionnaries}
                </Link>
              </li>
              <li>
                <Link to={`/${language}/methodology`}>
                  {navBarText.methodology}
                </Link>
              </li>
              <li>
                <Link to={`/${language}/results`}>{navBarText.results}</Link>
              </li>
            </ul>
            <div className="buttons-container">
              <button
                className="self-registration--btn"
                style={{ display: "none" }}>
                {navBarText.selfRegistration}
                <span className="tooltip">{navBarText.tooltip}</span>
              </button>
            </div>
            <LanguageChanger />
          </div>
        </nav>
      </div>
      <div className="bottom-side" style={{ display: "none" }}>
        <a href="tel:+995322501353">
          <p>{navBarText.hotline1}</p>
        </a>
        <p>{navBarText.hotline2}</p>
      </div>
    </div>
  );
}
