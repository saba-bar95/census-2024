import "./Date.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import image1 from "/src/assets/images/date-image1.png";
import image2 from "/src/assets/images/date-image2.png";
import CountdownComponent from "../../components/Main.jsx/History/CountDown/CountDown";
import Section from "../../components/Main.jsx/Section";
import TopArrow from "../../components/TopArrow/TopArrow";
import { useState, useEffect } from "react";

export default function Date() {
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
        <div className="date-container">
          <h1>აღწერის ჩატარების თარიღი</h1>
          <div className="info-container">
            <p>
              გაეროს რეკომენდაციებისა და საერთაშორისო პრაქტიკის შესაბამისად,
              აღწერები ქვეყანაში ტარდება 10 წელიწადში ერთხელ. საქართველოში
              უკანასკნელი აღწერა ჩატარდა 2014 წელს. შესაბამისად, მომდევნო
              მოსახლეობის აღწერა საქართველოში 14 ნოემბრიდან 19 დეკემბრის ჩათვლით
              პერიოდში ჩატარდება.
            </p>
            <div className="background">
              <img src={image1} alt="" />
            </div>
            <p>
              აღწერის ფარგლებში მონაცემთა შეგროვების პერიოდად განსაზღვრულია 2024
              წლის 14 ნოემბრიდან 19 დეკემბრის ჩათვლით პერიოდი, ხოლო მოსახლეობის
              გამოთვლის მომენტად (აღწერის კრიტიკული მომენტი) - 13-14 ნოემბრის
              შუაღამის 12 საათი.
            </p>
            <p className="header">აღწერამდე დარჩა:</p>
            <div className="container">
              <img src={image2} alt="" />
              <CountdownComponent page={true} />
            </div>
            <p>
              მონაცემთა შეგროვება განხორციელდება კომბინირებული მეთოდით. 14 - 23
              ნოემბრის პერიოდში (10 დღე) მონაცემები შეგროვდება კომპიუტერის
              დახმარებით ვებ-ინტერვიუს მეთოდით (CAWI), ხოლო 29 ნოემბრიდან - 19
              დეკემბრის ჩათვლით პერიოდში (21 დღე) - კომპიუტერის დახმარებით
              პერსონალური ინტერვიუს მეთოდით (CAPI)
            </p>
          </div>
        </div>
        <TopArrow />
      </Section>
      <Footer />
    </>
  );
}
