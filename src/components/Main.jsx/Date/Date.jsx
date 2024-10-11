import "./Date.scss";
import { Link } from "react-router-dom";
import interviewer from "/src/assets/images/interviewer.png";
import date from "/src/assets/images/date.png";
import translations from "../../../translation";

export default function Date() {
  const selectedLanguage = localStorage.getItem("selectedLanguage");
  const text = translations[selectedLanguage].main.date;

  return (
    <div className="date--section">
      <h1>{text.header}</h1>
      <div className="container">
        <div className="left-side">
          <p>{text.para}</p>
          <div className="date-container">
            <img src={date} alt="" />
          </div>
          <Link to="/date">
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
