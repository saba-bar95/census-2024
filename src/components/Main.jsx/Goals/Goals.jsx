import "./Goals.scss";
import people from "/src/assets/images/people.svg";
import flower from "/src/assets/images/flower.svg";
import exact from "/src/assets/images/exact.svg";
import settings from "/src/assets/images/settings.svg";
import { Link } from "react-router-dom";
import translations from "../../../translation";

export default function Goals() {
  const language = localStorage.getItem("language");
  const text = translations[language].main.goals;

  return (
    <>
      <div className="goals--section">
        <h1>{text.header}</h1>
        <div className="info-container">
          <div className="goal-container">
            <div
              className="image-container"
              style={{ backgroundColor: "#54B2FF" }}>
              <img src={people} alt="people" />
            </div>
            <p>{text.para1}</p>
          </div>
          <div className="goal-container">
            <div
              className="image-container"
              style={{ backgroundColor: "#9FCF88" }}>
              <img src={flower} alt="flower" />
            </div>
            <p>{text.para2}</p>
          </div>
          <div className="goal-container">
            <div
              className="image-container"
              style={{ backgroundColor: "#FCB765" }}>
              <img src={exact} alt="exact" />
            </div>
            <p>{text.para3}</p>
          </div>
          <div className="goal-container">
            <div
              className="image-container"
              style={{ backgroundColor: "#FE7155" }}>
              <img src={settings} alt="settings" />
            </div>
            <p>{text.para4}</p>
          </div>
        </div>
        <Link to={`/${language}/goals`}>
          <button>{text.more}</button>
        </Link>
      </div>
    </>
  );
}
