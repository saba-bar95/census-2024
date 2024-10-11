import "./Date.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import image1 from "/src/assets/images/date-image1.png";
import image2 from "/src/assets/images/date-image2.png";
import CountdownComponent from "../../components/Main.jsx/History/CountDown/CountDown";
import Section from "../../components/Main.jsx/Section";
import TopArrow from "../../components/TopArrow/TopArrow";
import { useState, useEffect } from "react";
import translations from "../../translation";

export default function Date() {
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "ქარ"
  );

  useEffect(() => {
    localStorage.setItem("selectedLanguage", selectedLanguage);
  }, [selectedLanguage]);

  const text = translations[selectedLanguage].pages.date;

  return (
    <>
      <Navbar
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
      <Section>
        <div className="date-container">
          <h1>{text.header1}</h1>
          <div className="info-container">
            <p>{text.para1}</p>
            <div className="background">
              <img src={image1} alt="" />
            </div>
            <p>{text.para2}</p>
            <p className="header">{text.header2}</p>
            <div className="container">
              <img src={image2} alt="" />
              <CountdownComponent page={true} />
            </div>
            <p>{text.para3}</p>
            <p>{text.para4}</p>
          </div>
        </div>
        <TopArrow />
      </Section>
      <Footer />
    </>
  );
}
