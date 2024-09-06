import "./Navbar.scss";
import { Link } from "react-router-dom";
import LanguageChanger from "./LanguageChanger/LanguageChanger";

export default function Navbar() {
  return (
    <nav>
      <div className="right-side">
        <Link to="/main">
          <img
            src="src\assets\images\sakstat-logo.png"
            alt="საქსტატი"
            className="sakstat-logo"
          />
        </Link>
        <img
          src="public\census-logo.png"
          alt="აღწერა"
          className="census-logo"
        />
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
          <Link to="/vacancies">
            <button className="vacancies--btn">ვაკანსიები</button>
          </Link>

          <button className="self-registration--btn">თვითრეგისტრაცია</button>
        </div>
        <LanguageChanger />
      </div>
    </nav>
  );
}
