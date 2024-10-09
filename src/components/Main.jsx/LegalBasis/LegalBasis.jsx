/* eslint-disable react/prop-types */
import "./LegalBasis.scss";
import hammer from "/src/assets/images/hammer.svg";
import sakstat from "/src/assets/images/logo-transparent-ka.png";
import sakstatEn from "/src/assets/images/logo-transparent-en.png";
import defence from "/src/assets/images/defence.svg";
import { Link } from "react-router-dom";

export default function LegalBasis({ selectedLanguage }) {
  return (
    <>
      <div className="legal--section">
        <div className="legal-container">
          <div className="right-side">
            <h1>სამართლებრივი საფუძვლები</h1>
            <p>
              საქსტატის მიერ აღწერის ფარგლებში შეგროვებული{" "}
              <span>მონაცემები კონფიდენციალურია,</span> არ ექვემდებარება მესამე
              პირზე გადაცემას, გამოიყენება მხოლოდ სტატისტიკური მიზნებისთვის და
              ვრცელდება აგრეგირებული სახით („ოფიციალური სტატისტიკის შესახებ“
              კანონის 34-ე მუხლი).
            </p>
            <div className="container">
              <div>
                <img src={hammer} alt="hammer" />
                <p>კანონი „ოფიციალური სტატისტიკის შესახებ“</p>
              </div>
              <div>
                <img
                  src={selectedLanguage === "ქარ" ? sakstat : sakstatEn}
                  alt="sakstat"
                  style={{ width: "120px" }}
                />
                <p>საქსტატის დებულება</p>
              </div>
              <div>
                <img src={defence} alt="defence" />
                <p>კანონი „პერსონალურ მონაცემთა დაცვის შესახებ“</p>
              </div>
            </div>
            <Link to="/legalbasis">
              <button>სრულად</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
