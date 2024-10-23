import "./LegalBasis.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import hammer from "/src/assets/images/hammer.svg";
import sakstat from "/src/assets/images/logo-transparent-ka.png";
import sakstatEn from "/src/assets/images/logo-transparent-en.png";
import defence from "/src/assets/images/defence.svg";
import program from "/src/assets/images/program.png";
import image1 from "/src/assets/images/legal-image1.png";
import image2 from "/src/assets/images/legal-image2.png";
import Section from "../../components/Main.jsx/Section";
import TopArrow from "../../components/TopArrow/TopArrow";
import translations from "../../translation";

export default function LegalBasis() {
  const language = localStorage.getItem("language");
  const text = translations[language].pages.legal;

  return (
    <>
      <Navbar />
      <Section>
        <div className="legal--container">
          <h1>{text.header1}</h1>
          <div className="info-container">
            <p>{text.para1}</p>
            <p>{text.para2}</p>
            <div className="container">
              <div
                onClick={() => {
                  window.open(
                    "https://www.geostat.ge/media/54263/%E1%83%A1%E1%83%90%E1%83%A5%E1%83%90%E1%83%A0%E1%83%97%E1%83%95%E1%83%94%E1%83%9A%E1%83%9D%E1%83%A1-%E1%83%99%E1%83%90%E1%83%9C%E1%83%9D%E1%83%9C%E1%83%98-%E1%83%9D%E1%83%A4%E1%83%98%E1%83%AA%E1%83%98%E1%83%90%E1%83%9A%E1%83%A3%E1%83%A0%E1%83%98-%E1%83%A1%E1%83%A2%E1%83%90%E1%83%A2%E1%83%98%E1%83%A1%E1%83%A2%E1%83%98%E1%83%99%E1%83%98%E1%83%A1-%E1%83%A8%E1%83%94%E1%83%A1%E1%83%90%E1%83%AE%E1%83%94%E1%83%91.pdf"
                  );
                }}>
                <img src={hammer} alt="hammer" />
                <p>{text.header2}</p>
              </div>
              <div
                onClick={() => {
                  window.open(
                    "https://www.geostat.ge/media/20600/10%2Csaqstatis-konsolidirebuli-debuleba.pdf"
                  );
                }}>
                <img
                  src={language === "ka" ? sakstat : sakstatEn}
                  alt="sakstat"
                  style={{ width: "120px" }}
                />
                <p>{text.header3}</p>
              </div>
              <div
                onClick={() => {
                  window.open(
                    "https://matsne.gov.ge/ka/document/view/1561437?publication=33"
                  );
                }}>
                <img src={defence} alt="defence" />
                <p>{text.header4}</p>
              </div>
              <div
                onClick={() => {
                  window.open(
                    "https://www.geostat.ge/media/61668/%E1%83%A1%E1%83%90%E1%83%A5%E1%83%90%E1%83%A0%E1%83%97%E1%83%95%E1%83%94%E1%83%9A%E1%83%9D%E1%83%A1-2024-%E1%83%AC%E1%83%9A%E1%83%98%E1%83%A1-%E1%83%9B%E1%83%9D%E1%83%A1%E1%83%90%E1%83%AE%E1%83%9A%E1%83%94%E1%83%9D%E1%83%91%E1%83%98%E1%83%A1-%E1%83%93%E1%83%90-%E1%83%A1%E1%83%90%E1%83%A1%E1%83%9D%E1%83%A4%E1%83%9A%E1%83%9D-%E1%83%A1%E1%83%90%E1%83%9B%E1%83%94%E1%83%A3%E1%83%A0%E1%83%9C%E1%83%94%E1%83%9D-%E1%83%90%E1%83%A6%E1%83%AC%E1%83%94%E1%83%A0%E1%83%98%E1%83%A1-%E1%83%9E%E1%83%A0%E1%83%9D%E1%83%92%E1%83%A0%E1%83%90%E1%83%9B%E1%83%90.pdf"
                  );
                }}>
                <img src={program} alt="program" />
                <p>{text.header7}</p>
              </div>
            </div>
            <p className="header" style={{ marginTop: "20px" }}>
              {text.header5}
            </p>
            <p>{text.para3}</p>
            <p style={{ marginTop: "-15px" }}>{text.para4}</p>
            <img src={image1} alt="legal-image1" className="big-image" />
            <p className="header">{text.header6}</p>
            <p>{text.para5}</p>
            <p style={{ marginTop: "-15px" }}>{text.para6}</p>
            <img src={image2} alt="legal-image2" className="big-image" />
            <p>{text.para7}</p>
          </div>
        </div>
        <TopArrow />
      </Section>
      <Footer />
    </>
  );
}
