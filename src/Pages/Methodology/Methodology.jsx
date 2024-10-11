import "./Methodology.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import unece from "/src/assets/images/unece.png";
import fao from "/src/assets/images/fao.svg";
import redirect from "/src/assets/images/redirect.png";
import Section from "../../components/Main.jsx/Section";
import TopArrow from "../../components/TopArrow/TopArrow";
import { useState, useEffect } from "react";
import translations from "../../translation";

export default function Methodology() {
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "ქარ"
  );

  useEffect(() => {
    localStorage.setItem("selectedLanguage", selectedLanguage);
  }, [selectedLanguage]);

  const text = translations[selectedLanguage].pages.methodology;

  return (
    <>
      <Navbar
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
      <Section>
        <div className="methodology-container">
          <h1>{text.header}</h1>
          <div className="container">
            <div className="background">
              <img src={unece} alt="unece" />
            </div>
            <img src={fao} alt="fao" className="fao" />
          </div>
          <div className="text-container">
            <p>
              {text.para1}
              <span>{text.para2}</span>
            </p>
            <ul>
              {text.list.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
            <div className="wrapper">
              <h2>{text.header2}</h2>

              <p>
                {text.para3}
                <a
                  target="_blank"
                  href="https://unece.org/DAM/stats/publications/2015/ECECES41_EN.pdf?fbclid=IwAR3m8pGgjKq3WjR0ZYq3OQ-K95hQYmjmK7T8SYADsQYggBdKD3pwidwXmbU">
                  <img src={redirect}></img>
                </a>
              </p>
              <p>
                {text.para4}
                <a
                  target="_blank"
                  href="https://www.geostat.ge/media/19735/World-Programme-for-the-Census-of-Agriculture-2020.pdf">
                  <img src={redirect}></img>
                </a>
              </p>
            </div>
          </div>
        </div>
        <TopArrow />
      </Section>
      <Footer />
    </>
  );
}
