import "./LegalBasis.scss";
import hammer from "/src/assets/images/hammer.svg";
import sakstat from "/src/assets/images/logo-transparent-ka.png";
import sakstatEn from "/src/assets/images/logo-transparent-en.png";
import defence from "/src/assets/images/defence.svg";
import { Link } from "react-router-dom";
import translations from "../../../translation";

export default function LegalBasis() {
  const language = localStorage.getItem("language");
  const text = translations[language].main.legal;

  return (
    <>
      <div className="legal--section">
        <div className="legal-container">
          <div className="right-side">
            <h1>{text.header}</h1>
            <p>{text.para1}</p>
            <div className="container">
              <div
                onClick={() => {
                  window.open(
                    "https://www.geostat.ge/media/54263/%E1%83%A1%E1%83%90%E1%83%A5%E1%83%90%E1%83%A0%E1%83%97%E1%83%95%E1%83%94%E1%83%9A%E1%83%9D%E1%83%A1-%E1%83%99%E1%83%90%E1%83%9C%E1%83%9D%E1%83%9C%E1%83%98-%E1%83%9D%E1%83%A4%E1%83%98%E1%83%AA%E1%83%98%E1%83%90%E1%83%9A%E1%83%A3%E1%83%A0%E1%83%98-%E1%83%A1%E1%83%A2%E1%83%90%E1%83%A2%E1%83%98%E1%83%A1%E1%83%A2%E1%83%98%E1%83%99%E1%83%98%E1%83%A1-%E1%83%A8%E1%83%94%E1%83%A1%E1%83%90%E1%83%AE%E1%83%94%E1%83%91.pdf"
                  );
                }}>
                <img src={hammer} alt="hammer" />
                <p>{text.para2}</p>
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
                <p>{text.para3}</p>
              </div>
              <div
                onClick={() => {
                  window.open(
                    "https://matsne.gov.ge/ka/document/view/1561437?publication=33"
                  );
                }}>
                <img src={defence} alt="defence" />
                <p>{text.para4}</p>
              </div>
            </div>
            <Link to={`/${language}/legalbasis`}>
              <button>{text.more}</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
