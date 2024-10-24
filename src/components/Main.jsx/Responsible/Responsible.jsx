import "./Responsible.scss";
import group from "/src/assets/images/group.png";
import sakstat from "/src/assets/images/logo-transparent-ka.png";
import stat from "/src/assets/images/stat.png";
import stat2 from "/src/assets/images/stat2.png";
import stat3 from "/src/assets/images/stat3.png";
import translations from "../../../translation";

export default function Responsible() {
  const language = localStorage.getItem("language");
  const text = translations[language].main.responsible;

  return (
    <div className="responsible--section">
      <h1>{text.header}</h1>
      <div className="container">
        <div className="icons-container">
          <img src={group} alt="group" className="main" />
          <div className="sakstat-logo" style={{ display: "none" }}>
            <img src={sakstat} alt="sakstat-logo" />
          </div>
          <div className="stat-logo">
            <img src={stat} alt="stat" />
          </div>
          <div className="stat2-logo">
            <img src={stat2} alt="stat" />
          </div>
          <div className="stat3-logo">
            <img src={stat3} alt="stat" />
          </div>
        </div>
        <div className="text-container">
          <p>{text.para}</p>
        </div>
      </div>
    </div>
  );
}
