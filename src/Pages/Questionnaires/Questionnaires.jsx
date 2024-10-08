import "./Questionnaires.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import image from "/src/assets/images/questionnaries.png";
import house from "/src/assets/images/house.png";
import green from "/src/assets/images/green-accept.png";
import personal from "/src/assets/images/personal.png";
import third from "/src/assets/images/third.png";
import Section from "../../components/Main.jsx/Section";
import TopArrow from "../../components/TopArrow/TopArrow";
import { useState, useEffect } from "react";

export default function Questionnaires() {
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
        <div className="questionnaires-container">
          <div className="background-container">
            <div className="text-container">
              <h1>აღწერის კითხვარები</h1>
              <p>
                2024 წლის მოსახლეობის და სასოფლო-სამეურნეო აღწერისას
                გამოყენებული იქნება 3 ტიპის კითხვარი.
              </p>
            </div>
            <div className="image-container">
              <img src={image} alt="questionnaries" />
            </div>
          </div>
          <div className="container">
            <div className="questionnaires">
              <div className="top-side">
                <p>კითხვარი №1</p>
                <h1>საცხოვრისის შესახებ</h1>
              </div>
              <div className="bot-side">
                <img src={house} alt="house" />
                <div className="info-container">
                  <p>
                    ივსება ცალკეულ შინამეურნეობაზე და მოიცავს შემდეგ საკითხებს:
                  </p>
                  <ul>
                    <li>
                      <img src={green} alt="" /> შინამეურნეობის შემადგენლობა
                    </li>
                    <li>
                      <img src={green} alt="" />
                      საცხოვრისის ტიპი (ინდივიდუალური სახლი, ბინა და ა.შ.)
                    </li>
                    <li>
                      <img src={green} alt="" />
                      შენობის აშენების წელი
                    </li>
                    <li>
                      <img src={green} alt="" />
                      ფართობი და ოთახების რაოდენობა
                    </li>
                    <li>
                      <img src={green} alt="" />
                      კეთილმოწყობის სახეები (ელექტროენერგია, გაზი, წყალი და ა.
                      შ.)
                    </li>
                    <li>
                      <img src={green} alt="" />
                      საცხოვრისის სარგებლობის ფორმა
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="questionnaires">
              <div className="top-side">
                <p>კითხვარი №2</p>
                <h1>პერსონალური კითხვარი</h1>
              </div>
              <div className="bot-side">
                <img src={personal} alt="house" />
                <div className="info-container">
                  <p>ივსება თითოეულ პიროვნებაზე და მოიცავს შემდეგ საკითხებს:</p>
                  <ul>
                    <li>
                      <img src={green} alt="" /> საიდენტიფიკაციო მონაცემები
                    </li>
                    <li>
                      <img src={green} alt="" />
                      მოქალაქეობა და ეროვნება
                    </li>
                    <li>
                      <img src={green} alt="" />
                      აღმსარებლობა
                    </li>
                    <li>
                      <img src={green} alt="" />
                      განათლების დონე
                    </li>
                    <li>
                      <img src={green} alt="" />
                      ენის ფლობა
                    </li>
                    <li>
                      <img src={green} alt="" />
                      ქორწინების მდგომარეობა და შვილიანობა
                    </li>
                    <li>
                      <img src={green} alt="" />
                      შიდა მიგრაცია
                    </li>
                    <li>
                      <img src={green} alt="" />
                      იმიგრაცია
                    </li>
                    <li>
                      <img src={green} alt="" />
                      დასაქმება და ეკონომიკური აქტივობა
                    </li>
                    <li>
                      <img src={green} alt="" />
                      ჯანმრთელობის მდგომარეობა
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="questionnaires">
              <div className="top-side">
                <p>კითხვარი №3</p>
                <h1>სოფლის მეურნეობის შესახებ</h1>
              </div>
              <div className="bot-side">
                <div
                  className="image-container"
                  style={{ backgroundColor: "#B0DAB9", borderRadius: "50px" }}>
                  <img src={third} alt="house" />
                </div>
                <div className="info-container">
                  <p>
                    ივსება ცალკეულ შინამეურნეობაზე და მოიცავს შემდეგ საკითხებს:
                  </p>
                  <ul>
                    <li>
                      <img src={green} alt="" /> მიწის ფართობები საკუთრების
                      ფორმების მიხედვით
                    </li>
                    <li>
                      <img src={green} alt="" /> მიწის ფართობები სარგებლობის
                      სახეების მიხედვით
                    </li>
                    <li>
                      <img src={green} alt="" />
                      სახნავი მიწის ფართობის სტრუქტურა (ერთწლიანი კულტურები)
                    </li>
                    <li>
                      <img src={green} alt="" />
                      მრავალწლოვანი ნარგავების რაოდენობა
                    </li>
                    <li>
                      <img src={green} alt="" />
                      ვაზის ჯიშები და ძირთა რაოდენობა
                    </li>
                    <li>
                      <img src={green} alt="" />
                      პირუტყვის და ფრინველის სულადობა
                    </li>
                    <li>
                      <img src={green} alt="" />
                      ფუტკრის ოჯახების რაოდენობა
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TopArrow />
      </Section>
      <Footer />
    </>
  );
}
