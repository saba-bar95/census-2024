import "./Methodology.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import unece from "/src/assets/images/unece.png";
import fao from "/src/assets/images/fao.svg";

const list = [
  "დემოგრაფიული და სოციალური მახასიათებლები",
  "განათლების დონე;",
  "ეკონომიკური მახასიათებლები;",
  "ჯანმრთელობის მდგომარეობა;",
  "მიგრაცია;",
  "შინამეურნეობები და საბინაო პირობები;",
  "შინამეურნეობების სარგებლობაში არსებული მიწის სტრუქტურა;",
  "პირუტყვისა და ფრინველის სულადობა;",
];

export default function Methodology() {
  return (
    <>
      <Navbar />
      <div className="methodology-container">
        <h1>აღწერის მეთოდოლოგია</h1>
        <div className="container">
          <div className="background">
            <img src={unece} alt="unece" />
          </div>
          <img src={fao} alt="fao" />
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
        </div>
      </div>
      <Footer />
    </>
  );
}
