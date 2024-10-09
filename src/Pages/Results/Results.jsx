import "./Results.scss";
import Navbar from "../../components/Navbar/Navbar";
import Section from "../../components/Main.jsx/Section";
import { useState, useEffect } from "react";

export default function Results() {
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "ქარ"
  );

  useEffect(() => {
    localStorage.setItem("selectedLanguage", selectedLanguage);
  }, [selectedLanguage]);

  return (
    <>
      <Navbar
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
      <Section>
        <div className="results-container">
          <h1>
            აღწერის წინასწარი შედეგები ხელმისაწვდომი იქნება არაუგვიანეს 2025
            წლის ივნისისა, ხოლო საბოლოო შედეგები - არაუგვიანეს 2026 წლის
            ივნისისა.
          </h1>
        </div>
      </Section>
    </>
  );
}
