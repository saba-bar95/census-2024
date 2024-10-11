import "./Subject.scss";
import green from "/src/assets/images/green.png";
import red from "/src/assets/images/red.png";
import greenArrow from "/src/assets/images/green-arrow.png";
import redArrow from "/src/assets/images/red-arrow.png";
import translations from "../../../translation";

export default function Subject() {
  const selectedLanguage = localStorage.getItem("selectedLanguage");
  const text = translations[selectedLanguage].main.subjects;

  return (
    <div className="subject--section">
      <h1>{text.header}</h1>
      <div className="container">
        <div className="wrapper">
          <div className="icon-container">
            <img src={greenArrow} alt="" />
          </div>
          <h2 className="green">{text.header2}</h2>
          <ul>
            <li>
              <img src={green} alt="" />
              {text.para1}
            </li>
            <li>
              <img src={green} alt="" />
              {text.para2}
            </li>
            <li>
              <img src={green} alt="" />
              {text.para3}
            </li>
          </ul>
        </div>
        <div className="wrapper red">
          <div className="icon-container red">
            <img src={redArrow} alt="" />
          </div>
          <h2 className="red">{text.headerRight}</h2>
          <ul>
            <li>
              <img src={red} alt="" />
              {text.para1Right}
            </li>
            <li>
              <img src={red} alt="" />
              {text.para2Right}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
