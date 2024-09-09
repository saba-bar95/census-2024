import "./Goals.scss";
import people from "/src/assets/images/people.svg";
import flower from "/src/assets/images/flower.svg";
import exact from "/src/assets/images/exact.svg";
import settings from "/src/assets/images/settings.svg";
import { Link } from "react-router-dom";

export default function Goals() {
  return (
    <>
      <div className="goals--section">
        <h1>2024 წლის აღწერის მიზნები და ამოცანები</h1>
        <div className="info-container">
          <div className="goal-container">
            <div
              className="image-container"
              style={{ backgroundColor: "#54B2FF" }}
            >
              <img src={people} alt="people" />
            </div>
            <p>
              აღწერის ფარგლებში შეგროვდება მონაცემები მოსახლეობის რიცხოვნობის,
              მისი სქესობრივ-ასაკობრივი შემადგენლობის, სხვადასხვა დემოგრაფიული
              და სოციალურ-ეკონომიკური მახასიათებლების მიხედვით.
            </p>
          </div>
          <div className="goal-container">
            <div
              className="image-container"
              style={{ backgroundColor: "#9FCF88" }}
            >
              <img src={flower} alt="flower" />
            </div>
            <p>
              აღწერის ფარგლებში შეგროვდება ინფორმაცია, შინამეურნეობების
              სასოფლო-სამეურნეო აქტივობის შესახებ, კერძოდ, შინამეურნეობების
              კუთვნილი მიწის სტრუქტურის, პირუტყვისა და ფრინველის სულადობის და
              სხვა მნიშვნელოვანი საკითხების შესახებ.
            </p>
          </div>
          <div className="goal-container">
            <div
              className="image-container"
              style={{ backgroundColor: "#FCB765" }}
            >
              <img src={exact} alt="exact" />
            </div>
            <p>
              აღწერის შედეგად ხელმისაწვდომი იქნება ზუსტი და განახლებული
              მონაცემები მოსახლეობის რაოდენობის, სქესობრივ-ასაკობრივი
              შემადგენლობის, დემოგრაფიული და სოციალურ-ეკონომიკური
              მახასიათებლების მიხედვით.
            </p>
          </div>
          <div className="goal-container">
            <div
              className="image-container"
              style={{ backgroundColor: "#FE7155" }}
            >
              <img src={settings} alt="settings" />
            </div>
            <p>
              აღწერები ტარდება ქვეყნის განვითარებისთვის, გეგმებისა და
              პროგრამების განხორციელების ხელშესაწყობად. აღწერა ასევე წარმოადგენს
              მნიშვნელოვან წყაროს გაეროს მდგრადი განვითარების 2030 წლის მიზნების
              განხორციელების შესაფასებლად.
            </p>
          </div>
        </div>
        <Link to="/goals">
          <button>სრულად</button>
        </Link>
      </div>
    </>
  );
}
