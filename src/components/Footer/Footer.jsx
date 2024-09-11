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
          <p>კონტაქტი</p>
          <div>
            <p>საქართველოს სტატისტიკის სამსახური</p>
            <p> +995 32 2 36 72 10 | +995 32 2 60 11 60 </p>
            <p>info@geostat.ge</p>
            <p> ცოტნე დადიანის ქ. 30, თბილისი, 0180</p>
          </div>
          <div className="socials">
            <p>სოციალური ქსელები</p>
            <div className="icons">
              <img src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
              <img src={linkedIn} alt="linkedIn" />
            </div>
          </div>
        </div>
        <div className="container">
          <p>მენიუ</p>
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
              <Link to="#" onClick={(e) => e.preventDefault()}>
                შედეგები
              </Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <p>მონაცემთა გამოყენების პირობები</p>
        </div>
      </div>
    </footer>
  );
}
