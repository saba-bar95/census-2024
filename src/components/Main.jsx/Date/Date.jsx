import "./Date.scss";
import { Link } from "react-router-dom";
import interviewer from "/src/assets/images/interviewer.png";
import date from "/src/assets/images/date.png";
import dateEn from "/src/assets/images/date-en.png";
import translations from "../../../translation";

export default function Date() {
  const language = localStorage.getItem("language");
  const text = translations[language].main.date;

  return (
    <div className="date--section">
      <h1>{text.header}</h1>
      <div className="container">
        <div className="left-side">
          <p>{text.para}</p>
          <div className="date-container">
            <img src={language === "ka" ? date : dateEn} alt="" />
          </div>
          <Link to={`/${language}/date`}>
            <button>{text.more}</button>
          </Link>
        </div>
        <div className="right-side">
          <img src={interviewer} alt="" />
        </div>
      </div>
    </div>
  );
}
