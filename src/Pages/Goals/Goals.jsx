import "./Goals.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import image1 from "/src/assets/images/goals-image1.png";
import image2 from "/src/assets/images/goals-image2.png";
import image3 from "/src/assets/images/goals-image3.png";
import image4 from "/src/assets/images/goals-image4.png";
import image4En from "/src/assets/images/image4-en.png";
import image5 from "/src/assets/images/goals-image5.png";
import bannerEn from "/src/assets/images/banner-en.png";
import TopArrow from "../../components/TopArrow/TopArrow";
import Section from "../../components/Main.jsx/Section";
import translations from "../../translation";

export default function Goals() {
  const language = localStorage.getItem("language");
  const text = translations[language].pages.goals;

  return (
    <>
      <Navbar />
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
            <img
              src={language === "ka" ? image4 : image4En}
              alt="goals-image4"
            />
            <p className="header">{text.header4}</p>
            <p>{text.para4}</p>
            <p>{text.para5}</p>
            <img
              src={language === "ka" ? image5 : bannerEn}
              alt="goals-image5"
            />
          </div>
        </div>
        <TopArrow />
      </Section>
      <Footer />
    </>
  );
}
