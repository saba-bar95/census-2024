import "./Results.scss";
import Navbar from "../../components/Navbar/Navbar";
import Section from "../../components/Main.jsx/Section";
import translations from "../../translation";

export default function Results() {
  const language = localStorage.getItem("language");
  const text = translations[language].pages.results;

  const links = {
    ka: {
      first:
        "საქართველოს 2024 წლის მოსახლეობის და სასოფლო-სამეურნეო აღწერის წინასწარი შედეგები",
      second:
        "მოსახლეობის რიცხოვნობა რეგიონების, თვითმმართველი ერთეულების და საქალაქო-სასოფლო დასახლებების მიხედვით",
      third:
        "მოსახლეობის რიცხოვნობა რეგიონების, თვითმმართველი ერთეულების და სქესის მიხედვით",
    },
    en: {
      first:
        "2024 Population and Agricultural Census of Georgia Preliminary results",
      second:
        "Population by regions, self-governed units and urban-rural settlements",
      third: "Population by regions, self-governed units and sex",
    },
  };

  console.log(language);

  const handleDownload = () => {
    const fileName =
      language === "ka"
        ? "საქართველოს 2024 წლის მოსახლეობის და სასოფლო-სამეურნეო აღწერის წინასწარი შედეგები.pdf"
        : "2024 Population and Agricultural Census of Georgia Preliminary results.pdf";

    const link = document.createElement("a");
    link.href = `/${encodeURIComponent(fileName)}`;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Navbar />
      <Section>
        <div className="results-container">
          <h1>{text.header}</h1>
          <div className="links">
            <ul>
              <li onClick={handleDownload}>{links[language].first}</li>
              <li>{links[language].second}</li>
              <li>{links[language].third}</li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
