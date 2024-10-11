import "./Questionnaires.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import image from "/src/assets/images/questionnaries.png";
import green from "/src/assets/images/green-accept.png";
import personal from "/src/assets/images/personal.png";
import third from "/src/assets/images/third.png";
import house from "/src/assets/images/house.png";
import Section from "../../components/Main.jsx/Section";
import TopArrow from "../../components/TopArrow/TopArrow";
import { useState, useEffect } from "react";
import translations from "../../translation";

export default function Questionnaires() {
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "ქარ"
  );

  useEffect(() => {
    localStorage.setItem("selectedLanguage", selectedLanguage);
  }, [selectedLanguage]);

  const text = translations[selectedLanguage].pages.questionnaries;

  const images = [personal, house, third];

  return (
    <>
      <Navbar
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
      <Section>
        <div className="questionnaires-container">
          <div className="background-container">
            <div className="text-container">
              <h1>{text.header}</h1>
              <p>{text.para}</p>
            </div>
            <div className="image-container">
              <img src={image} alt="questionnaries" />
            </div>
          </div>
          <div className="container">
            {text.types.map((type, index) => {
              return (
                <div className="questionnaires" key={index}>
                  <div className="top-side">
                    <p>{type.name}</p>
                    <h1>{type.para}</h1>
                  </div>
                  <div className="bot-side">
                    <img src={images[index]} alt="" />
                    <div className="info-container">
                      <p>{type.header}</p>
                      <ul>
                        {type.list.map((item, index) => {
                          return (
                            <li key={index}>
                              <img src={green} alt="green" /> {item}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <TopArrow />
      </Section>
      <Footer />
    </>
  );
}
