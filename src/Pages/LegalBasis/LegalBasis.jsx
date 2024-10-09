import "./LegalBasis.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import hammer from "/src/assets/images/hammer.svg";
import sakstat from "/src/assets/images/logo-transparent-ka.png";
import defence from "/src/assets/images/defence.svg";
import image1 from "/src/assets/images/legal-image1.png";
import image2 from "/src/assets/images/legal-image2.png";
import Section from "../../components/Main.jsx/Section";
import TopArrow from "../../components/TopArrow/TopArrow";
import { useState, useEffect } from "react";

export default function LegalBasis() {
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "ქარ"
  );

  useEffect(() => {
    localStorage.setItem("selectedLanguage", selectedLanguage);
  }, [selectedLanguage]);

  return (
    <>
      <Navbar
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
      <Section>
        <div className="legal--container">
          <h1>სამართლებრივი საფუძვლები</h1>
          <div className="info-container">
            <p>
              აღწერის სამართლებრივ საფუძველს წარმოადგენს საქართველოს კანონი
              „ოფიციალური სტატისტიკის შესახებ“, საქართველოს სტატისტიკის ეროვნული
              სამსახურის დებულება და საქართველოს კანონი „პერსონალურ მონაცემთა
              დაცვის შესახებ“.{" "}
            </p>
            <p>
              {" "}
              კანონი „ოფიციალური სტატისტიკის შესახებ“ განსაზღვრავს აღწერის
              თარიღის დადგენის, მისი მომზადების, ჩატარების, მოპოვებული მასალების
              დამუშავების, შედეგების გამოქვეყნებისა და გავრცელების წესს.
            </p>
            <div className="container">
              <div
                onClick={() => {
                  window.open(
                    "https://www.geostat.ge/media/54263/%E1%83%A1%E1%83%90%E1%83%A5%E1%83%90%E1%83%A0%E1%83%97%E1%83%95%E1%83%94%E1%83%9A%E1%83%9D%E1%83%A1-%E1%83%99%E1%83%90%E1%83%9C%E1%83%9D%E1%83%9C%E1%83%98-%E1%83%9D%E1%83%A4%E1%83%98%E1%83%AA%E1%83%98%E1%83%90%E1%83%9A%E1%83%A3%E1%83%A0%E1%83%98-%E1%83%A1%E1%83%A2%E1%83%90%E1%83%A2%E1%83%98%E1%83%A1%E1%83%A2%E1%83%98%E1%83%99%E1%83%98%E1%83%A1-%E1%83%A8%E1%83%94%E1%83%A1%E1%83%90%E1%83%AE%E1%83%94%E1%83%91.pdf"
                  );
                }}>
                <img src={hammer} alt="hammer" />
                <p>კანონი „ოფიციალური სტატისტიკის შესახებ“</p>
              </div>
              <div
                onClick={() => {
                  window.open(
                    "https://www.geostat.ge/media/20600/10%2Csaqstatis-konsolidirebuli-debuleba.pdf"
                  );
                }}>
                <img src={sakstat} alt="sakstat" style={{ width: "120px" }} />
                <p>საქსტატის დებულება</p>
              </div>
              <div
                onClick={() => {
                  window.open(
                    "https://matsne.gov.ge/ka/document/view/1561437?publication=33"
                  );
                }}>
                <img src={defence} alt="defence" />
                <p>კანონი „პერსონალურ მონაცემთა დაცვის შესახებ“</p>
              </div>
            </div>
            <p className="header" style={{ marginTop: "20px" }}>
              გავიგოთ, რამდენი ვართ!
            </p>
            <p>
              აღწერაში მონაწილეობა სავალდებულოა ყველა იურიდიული და ფიზიკური
              პირისთვის, მათ შორის, საქართველოს მოქალაქისთვის, საქართველოს
              ტერიტორიაზე მყოფი უცხოელისა და საქართველოში სტატუსის მქონე
              მოქალაქეობის არმქონე პირისთვის.
            </p>
            <p style={{ marginTop: "-15px" }}>
              რესპონდენტი ვალდებულია აღწერის ჩატარებისას გამოკითხვის პროცესში
              საქსტატს მიაწოდოს მის ხელთ არსებული უტყუარი მონაცემები.
            </p>
            <img src={image1} alt="legal-image1" className="big-image" />
            <p className="header">კონფიდენციალობა</p>
            <p>
              საქსტატის მიერ აღწერის ფარგლებში შეგროვებული მონაცემები
              კონფიდენციალურია, არ ექვემდებარება მესამე პირზე გადაცემას,
              გამოიყენება მხოლოდ სტატისტიკური მიზნებისთვის და ვრცელდება
              აგრეგირებული სახით („ოფიციალური სტატისტიკის შესახებ“ კანონის 34-ე
              მუხლი).
            </p>
            <p style={{ marginTop: "-15px" }}>
              აღმწერ პერსონალს ეკრძალება აცნობოს მესამე პირს, რესპონდენტის
              შესახებ შევსებული აღწერის კითხვარის შინაარსი. მონაცემების
              გამოყენების წესის დარღვევისთვის აღმწერ პერსონალს დაეკისრება
              პასუხისმგებლობა საქართველოს მოქმედი კანონმდებლობით დადგენილი
              წესით.
            </p>
            <img src={image2} alt="legal-image2" className="big-image" />
            <p>
              აღწერის დროს შეგროვებული მონაცემების უსაფრთხოება უზრუნველყოფილია
              ასევე „პერსონალურ მონაცემთა დაცვის შესახებ“ საქართველოს კანონის
              27-ე მუხლით.
            </p>
          </div>
        </div>
        <TopArrow />
      </Section>
      <Footer />
    </>
  );
}
