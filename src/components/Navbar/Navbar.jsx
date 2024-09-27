import "./Navbar.scss";
import { Link } from "react-router-dom";
import LanguageChanger from "./LanguageChanger/LanguageChanger";
import sakstat from "/src/assets/images/sakstat.svg";
import census from "/src/assets/images/census.svg";

export default function Navbar() {
  return (
    <div className="nav-container">
      <nav>
        <div className="right-side">
          <Link to="/">
            <img src={sakstat} alt="sakstat" className="sakstat-logo" />
          </Link>
          <img src={census} alt="აღწერა" className="census-logo" />
        </div>
        <div className="left-side">
          <ul>
            <li>
              <Link to="/main">მთავარი</Link>
            </li>
            <li>
              <Link to="/questionnaries">კითხვარები</Link>
            </li>
            <li>
              <Link to="/methodology">მეთოდოლოგია</Link>
            </li>
            <li>
              <Link to="/results">შედეგები</Link>
            </li>
          </ul>
          <div className="buttons-container">
            <Link to="#">
              <button
                className="vacancies--btn"
                onClick={(e) => e.preventDefault()}>
                ვაკანსიები
              </button>
            </Link>
            <button className="self-registration--btn">თვითრეგისტრაცია</button>
          </div>
          <LanguageChanger />
        </div>
      </nav>
    </div>
  );
}
