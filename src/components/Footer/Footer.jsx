import "./Footer.scss";
import { Link } from "react-router-dom";
import facebook from "/src/assets/images/facebook.svg";
import twitter from "/src/assets/images/twitter.svg";
import linkedIn from "/src/assets/images/linkedin.svg";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="container">
          <p className="header">კონტაქტი</p>
          <div>
            <p>საქართველოს სტატისტიკის ეროვნული სამსახური</p>
            <p> +995 32 2 36 72 10 | +995 32 2 60 11 60 </p>
            <p>info@geostat.ge</p>
            <p> ცოტნე დადიანის ქ. 30, თბილისი, 0180</p>
          </div>
          <div className="socials">
            <p>სოციალური ქსელები</p>
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
          <p className="header">მენიუ</p>
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
        </div>
        <div className="container">
          <a
            href="https://www.geostat.ge/ka/page/monacemta-gamoyenebis-pirobebi"
            target="_blank">
            მონაცემთა გამოყენების პირობები
          </a>
        </div>
      </div>
    </footer>
  );
}
