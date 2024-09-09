import "./LanguageChanger.scss";
import { useState } from "react";

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
      className={`language-changer ${showLanguages ? "show-languages" : ""}`}
      onClick={() => setShowLanguages(!showLanguages)}
    >
      <img src="src\assets\images\change-language.png" alt="" />
      <p>{selectedLanguage}</p>
      <img src="src\assets\images\down-arrow.png" alt="" />
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
