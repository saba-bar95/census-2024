import "./Methods.scss";
import interviewer from "/src/assets/images/interviewer2.png";
import questions from "/src/assets/images/questions.png";
import interviewer2 from "/src/assets/images/interviewer3.png";
import comp from "/src/assets/images/comp.png";
import vector from "/src/assets/images/rightVector.png";
import translations from "../../../translation";

export default function Methods() {
  const language = localStorage.getItem("language");
  const text = translations[language].main.methods;
  const navBarText = translations[language].navbar;

  return (
    <div className="methods--section">
      <h1>{text.header1}</h1>
      <h2>{text.header2}</h2>
      <div className="container">
        <div className="top-side">
          <img src={interviewer} alt="interviewer" className="img" />
          <div className="right-side">
            <div className="top">
              <img src={questions} alt="" />
              <h2>{text.header3}</h2>
            </div>
            <div className="bot">
              <p>{text.para1}</p>
            </div>
          </div>
        </div>
        <div className="bottom-side">
          <div className="left-side">
            <div className="top">
              <img src={comp} alt="comp" />
              <h2>{text.header4}</h2>
            </div>
            <p>{text.para2}</p>
            <button
              className="self-registration--btn"
              style={{ display: "none" }}>
              {text.registration} <img src={vector} alt="" />
              <span className="tooltip">{navBarText.tooltip}</span>
            </button>
          </div>
          <img src={interviewer2} alt="interviewer" className="img" />
        </div>
      </div>
    </div>
  );
}
