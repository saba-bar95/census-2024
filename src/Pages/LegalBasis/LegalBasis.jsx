import "./LegalBasis.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import hammer from "/src/assets/images/hammer.svg";
import sakstat from "/src/assets/images/logo-transparent-ka.png";
import defence from "/src/assets/images/defence.svg";
import image1 from "/src/assets/images/legal-image1.png";
import image2 from "/src/assets/images/legal-image2.png";
import Section from "../../components/Main.jsx/Section";

export default function LegalBasis() {
  return (
    <>
      <Navbar />
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
              <div>
                <img src={hammer} alt="hammer" />
                <p>კანონი „ოფიციალური სტატისტიკის შესახებ“</p>
              </div>
              <div>
                <img src={sakstat} alt="sakstat" style={{ width: "120px" }} />
                <p>საქსტატის დებულება</p>
              </div>
              <div>
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
              აღმწერ პერსონალს ეკრძალება აცნობოს ვინმეს, რესპონდენტის შესახებ
              შევსებული აღწერის კითხვარის შინაარსი. მონაცემების გამოყენების
              წესის დარღვევისთვის აღმწერ პერსონალს დაეკისრება პასუხისმგებლობა
              საქართველოს მოქმედი კანონმდებლობით დადგენილი წესით.
            </p>
            <img src={image2} alt="legal-image2" className="big-image" />
            <p>
              აღწერის დროს შეგროვებული მონაცემების უსაფრთხოება უზრუნველყოფილია
              ასევე „პერსონალურ მონაცემთა დაცვის შესახებ“ საქართველოს კანონის
              27-ე მუხლით.
            </p>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
}
