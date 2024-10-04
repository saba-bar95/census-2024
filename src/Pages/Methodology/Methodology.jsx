import "./Methodology.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import unece from "/src/assets/images/unece.png";
import fao from "/src/assets/images/fao.svg";
import redirect from "/src/assets/images/redirect.png";
import Section from "../../components/Main.jsx/Section";

const list = [
  "შინამეურნეობები და საბინაო პირობები;",
  "დემოგრაფიული და სოციალური მახასიათებლები",
  "განათლების დონე;",
  "ეკონომიკური მახასიათებლები;",
  "ჯანმრთელობის მდგომარეობა;",
  "მიგრაცია;",
  "შინამეურნეობების სარგებლობაში არსებული მიწის სტრუქტურა;",
  "პირუტყვისა და ფრინველის სულადობა;",
];

export default function Methodology() {
  return (
    <>
      <Navbar />
      <Section>
        <div className="methodology-container">
          <h1>აღწერის მეთოდოლოგია</h1>
          <div className="container">
            <div className="background">
              <img src={unece} alt="unece" />
            </div>
            <img src={fao} alt="fao" className="fao" />
          </div>
          <div className="text-container">
            <p>
              მოსახლეობის აღწერის მეთოდოლოგიურ საფუძველს წარმოადგენს გაეროს
              ევროპის ეკონომიკური კომისიის (UNECE) მეთოდოლოგიური
              სახელმძღვანელოები, ხოლო სასოფლო-სამეურნეო აღწერის მეთოდოლოგიური
              საფუძველია გაეროს სურსათისა და სოფლის მეურნეობის ორგანიზაციის
              (UNFAO) რეკომენდაციები.
              <span>
                აღნიშნული მეთოდოლოგიური სახელმძღვანელოებისა და რეკომენდაციების
                საფუძველზე შემუშავებულია აღწერის კითხვარები, რომლის მეშვეობით
                მიღებულ იქნება ისეთი ინფორმაცია თვითმმართველი ერთეულების და
                დასახლებების დონეზე, როგორიცაა:
              </span>
            </p>
            <ul>
              {list.map((el) => {
                return <li key={el}>{el}</li>;
              })}
            </ul>
            <div className="wrapper">
              <h2>
                აღწერის ფარგლებში გამოყენებული მეთოდოლოგიები შეგიძლიათ იხილოთ
                შემდეგ ბმულებზე:
              </h2>

              <p>
                მოსახლეობის აღწერა
                <a
                  target="_blank"
                  href="https://unece.org/DAM/stats/publications/2015/ECECES41_EN.pdf?fbclid=IwAR3m8pGgjKq3WjR0ZYq3OQ-K95hQYmjmK7T8SYADsQYggBdKD3pwidwXmbU">
                  <img src={redirect}></img>
                </a>
              </p>
              <p>
                სასოფლო-სამეურნეო აღწერა
                <a
                  target="_blank"
                  href="https://www.geostat.ge/media/19735/World-Programme-for-the-Census-of-Agriculture-2020.pdf">
                  <img src={redirect}></img>
                </a>
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
}
