import "./Goals.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import image1 from "/src/assets/images/goals-image1.png";
import image2 from "/src/assets/images/goals-image2.png";
import image3 from "/src/assets/images/goals-image3.png";
import image4 from "/src/assets/images/goals-image4.png";
import image5 from "/src/assets/images/goals-image5.png";
import { useState, useEffect } from "react";
import TopArrow from "../../components/TopArrow/TopArrow";
import Section from "../../components/Main.jsx/Section";
import translations from "../../translation";

export default function Goals() {
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "ქარ"
  );

  useEffect(() => {
    localStorage.setItem("selectedLanguage", selectedLanguage);
  }, [selectedLanguage]);

  const text = translations[selectedLanguage].pages.goals;

  return (
    <>
      <Navbar
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
      <Section>
        <div className="goals-container">
          <h1>{text.header}</h1>
          <div className="images-container">
            <img src={image1} alt="baner1" className="image-1" />
            <img src={image2} alt="baner2" className="image-2" />
          </div>
          <div className="info-container">
            <p>{text.para1}</p>
            <p className="header">{text.header2}</p>
            <p>{text.para2}</p>
            <img src={image3} alt="goals-image3" />
            <p className="header">{text.header3}</p>
            <p>{text.para3}</p>
            <p>{text.para6}</p>
            <img src={image4} alt="goals-image4" />
            <p className="header">{text.header4}</p>
            <p>{text.para4}</p>
            <p>{text.para5}</p>
            <img src={image5} alt="goals-image5" />
          </div>
        </div>
        <TopArrow />
      </Section>
      <Footer />
    </>
  );
}
