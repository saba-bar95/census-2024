import "./Footer.scss";
import { Link } from "react-router-dom";
import facebook from "/src/assets/images/facebook.svg";
import twitter from "/src/assets/images/twitter.svg";
import linkedIn from "/src/assets/images/linkedin.svg";
import translations from "../../translation";

export default function Footer() {
  const selectedLanguage = localStorage.getItem("selectedLanguage");
  const text = translations[selectedLanguage].footer;

  return (
    <footer>
      <div className="footer-container">
        <div className="container">
          <p className="header">{text.contact}</p>
          <div>
            <p>{text.sakstat}</p>
            <p>+995 32 2 36 72 10 | +995 32 2 60 11 60 </p>
            <p>info@geostat.ge</p>
            <p>{text.address}</p>
          </div>
          <div className="socials">
            <p>{text.socials}</p>
            <div className="icons">
              <a href="https://www.facebook.com/geostat.ge" target="_blank">
                <img src={facebook} alt="facebook" />
              </a>

              <a href="https://www.x.com/Geostat100" target="_blank">
                <img src={twitter} alt="twitter" />
              </a>
              <a
                href="https://ge.linkedin.com/company/national-statistics-office-of-georgia"
                target="_blank">
                <img src={linkedIn} alt="linkedIn" />
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <p className="header">{text.menu}</p>
          <ul>
            <li>
              <Link to="/main">{text.main}</Link>
            </li>
            <li>
              <Link to="/questionnaries">{text.questionnaries}</Link>
            </li>
            <li>
              <Link to="/methodology">{text.methodology}</Link>
            </li>
            <li>
              <Link to="/results">{text.results}</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <a
            href="https://www.geostat.ge/ka/page/monacemta-gamoyenebis-pirobebi"
            target="_blank">
            {text.terms}
          </a>
        </div>
      </div>
    </footer>
  );
}
