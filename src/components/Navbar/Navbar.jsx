import "./Navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="right-side">
        <img
          src="src\assets\images\sakstat-logo.png"
          alt="საქსტატი"
          className="sakstat-logo"
        />
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
          <li>
            <button>
              <Link to="/vacancies">ვაკანსიები</Link>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
