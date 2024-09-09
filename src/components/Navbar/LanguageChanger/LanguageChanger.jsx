import "./LanguageChanger.scss";
import { useState } from "react";
import changeLanguage from "/src/assets/images/change-language.png";
import downArrow from "/src/assets/images/down-arrow.png";

const languages = ["Geo", "Eng"];

function LanguageChanger() {
  const [showLanguages, setShowLanguages] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setShowLanguages(false);
  };

  return (
    <div
      className="language-changer"
      onClick={() => setShowLanguages(!showLanguages)}
    >
      <img src={changeLanguage} alt="change-language" />
      <p>{selectedLanguage}</p>
      <img src={downArrow} alt="" />
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
