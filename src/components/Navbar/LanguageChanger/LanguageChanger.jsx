/* eslint-disable react/prop-types */
import "./LanguageChanger.scss";
import { useState, useEffect } from "react";
import downArrow from "/src/assets/images/down-arrow.png";
import upArrow from "/src/assets/images/up-arrow.png";
import georgian from "/src/assets/images/georgian-flag.svg";
import english from "/src/assets/images/uk-flag.svg";

const languages = ["ქარ", "EN"];

function LanguageChanger({ selectedLanguage, setSelectedLanguage }) {
  const [showLanguages, setShowLanguages] = useState(false);

  useEffect(() => {
    localStorage.setItem("selectedLanguage", selectedLanguage);
  }, [selectedLanguage]);

  const handleLanguageChange = (language) => {
    if (language !== selectedLanguage) {
      window.location.reload(); // Only reload if language has changed

      setShowLanguages(false);
      setSelectedLanguage(language);
    } else {
      setShowLanguages(false); // Just close the language dropdown
    }
  };

  return (
    <div
      className={`language-changer ${showLanguages ? "show-languages" : ""}`}
      onClick={() => setShowLanguages(!showLanguages)}>
      <img
        src={selectedLanguage === "ქარ" ? georgian : english}
        alt="language-flag"
      />
      <p>{selectedLanguage}</p>
      <img
        className="arrow-img"
        src={showLanguages ? upArrow : downArrow}
        alt="arrow"
      />
      {showLanguages && (
        <ul className="language-options">
          {languages.map((language, index) => (
            <li key={index} onClick={() => handleLanguageChange(language)}>
              {language}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguageChanger;
