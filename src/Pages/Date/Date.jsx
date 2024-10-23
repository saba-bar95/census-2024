import "./Date.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import image1 from "/src/assets/images/date.png";
import dateEn from "/src/assets/images/date-en.png";
import image2 from "/src/assets/images/date-image2.png";
import CountdownComponent from "../../components/Main.jsx/History/CountDown/CountDown";
import Section from "../../components/Main.jsx/Section";
import TopArrow from "../../components/TopArrow/TopArrow";
import translations from "../../translation";

export default function Date() {
  const language = localStorage.getItem("language");
  const text = translations[language].pages.date;

  return (
    <>
      <Navbar />
      <Section>
        <div className="date-container">
          <h1>{text.header1}</h1>
          <div className="info-container">
            <p>{text.para1}</p>
            <div className="background">
              <img src={language === "ka" ? image1 : dateEn} alt="" />
            </div>
            <p>{text.para2}</p>
            <p className="header">{text.header2}</p>
            <div className="container">
              <img src={image2} alt="" />
              <CountdownComponent page={true} />
            </div>
            <p className="header">{text.header3}</p>
            <p>
              <span style={{ fontFamily: "FiraGOBold" }}>
                {text.span1 && text.span1}
              </span>
              {text.para3}
            </p>
            <p>
              <span style={{ fontFamily: "FiraGOBold" }}>
                {text.span2 && text.span2}
              </span>
              {text.para4}
            </p>
          </div>
        </div>
        <TopArrow />
      </Section>
      <Footer />
    </>
  );
}
