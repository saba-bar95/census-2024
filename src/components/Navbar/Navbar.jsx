/* eslint-disable react/prop-types */
import "./Navbar.scss";
import { Link } from "react-router-dom";
import LanguageChanger from "./LanguageChanger/LanguageChanger";
import census from "/src/assets/images/census.svg";
import sakstatKa from "/src/assets/images/logo-transparent-ka.png";
import sakstatEn from "/src/assets/images/logo-transparent-en.png";
import translations from "../../translation";

export default function Navbar({ selectedLanguage, setSelectedLanguage }) {
  const navBarText = translations[selectedLanguage].navbar;

  return (
    <div className="nav-container loading">
      <nav>
        <div className="right-side">
          <Link to="/main">
            <img
              src={selectedLanguage === "ქარ" ? sakstatKa : sakstatEn}
              alt="sakstat"
              className="sakstat-logo"
            />
          </Link>
          <Link to="/main">
            <img src={census} alt="აღწერა" className="census-logo" />
          </Link>
        </div>
        <div className="left-side">
          <ul>
            <li>
              <Link to="/main">{navBarText.main}</Link>
            </li>
            <li>
              <Link to="/questionnaries">{navBarText.questionnaries}</Link>
            </li>
            <li>
              <Link to="/methodology">{navBarText.methodology}</Link>
            </li>
            <li>
              <Link to="/results">{navBarText.results}</Link>
            </li>
          </ul>
          <div className="buttons-container">
            <button
              className="vacancies--btn"
              onClick={(e) => {
                window.open("https://census-cv.geostat.ge/", "_blank");
                e.preventDefault();
              }}>
              {navBarText.vacancies}
            </button>
            <button className="self-registration--btn">
              {navBarText.selfRegistration}
              <span className="tooltip">{navBarText.tooltip}</span>
            </button>
          </div>
          <LanguageChanger
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
          />
        </div>
      </nav>
    </div>
  );
}
