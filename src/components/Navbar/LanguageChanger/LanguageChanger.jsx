import "./LanguageChanger.scss";
import { useState } from "react";
import downArrow from "/src/assets/images/down-arrow.png";
import upArrow from "/src/assets/images/up-arrow.png";
import georgian from "/src/assets/images/georgian-flag.svg";
import english from "/src/assets/images/uk-flag.svg";
import { useNavigate, useLocation } from "react-router-dom";

const languages = ["ქარ", "EN"];

function LanguageChanger() {
  const language = localStorage.getItem("language");
  const [showLanguages, setShowLanguages] = useState(false);

  const languageText = language === "ka" ? "ქარ" : language.toUpperCase();

  const navigate = useNavigate();
  const location = useLocation();

  const handleLanguageChange = (newLang) => {
    if (newLang !== language) {
      const normalizedLang = newLang === "EN" ? "en" : "ka";
      localStorage.setItem("language", normalizedLang);

      setShowLanguages(false);

      const currentPath = location.pathname.split("/").slice(2).join("/");
      navigate(`/${normalizedLang}/${currentPath}`);
      window.location.reload();
    } else {
      setShowLanguages(false);
    }
  };

  return (
    <div
      className={`language-changer ${showLanguages ? "show-languages" : ""}`}
      onClick={() => setShowLanguages(!showLanguages)}>
      <img src={language === "ka" ? georgian : english} alt="language-flag" />
      <p>{languageText}</p>
      <img
        className="arrow-img"
        src={showLanguages ? upArrow : downArrow}
        alt="arrow"
      />
      {showLanguages && (
        <ul className="language-options">
          {languages.map((language, index) => {
            return (
              <li key={index} onClick={() => handleLanguageChange(language)}>
                {language}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default LanguageChanger;
