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

  const createDownloadHandler = (fileName) => {
    const link = document.createElement("a");
    link.href = `/${encodeURIComponent(fileName)}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadFirst = () => {
    const fileName =
      language === "ka"
        ? "საქართველოს 2024 წლის მოსახლეობის და სასოფლო-სამეურნეო აღწერის წინასწარი შედეგები.pdf"
        : "2024 Population and Agricultural Census of Georgia Preliminary results.pdf";
    createDownloadHandler(fileName);
  };

  const handleDownloadSecond = () => {
    const fileName =
      language === "ka"
        ? "01-mosaxleoba-RegionebiT-TviTmarTveli-erTeulebiT-da-saqalaqo-sasoflo-dasaxlebebiT.xlsx"
        : "01-Population-by-regions-self-governed-units-and-urban-rural-settlements.xlsx";
    createDownloadHandler(fileName);
  };

  const handleDownloadThird = () => {
    const fileName =
      language === "ka"
        ? "02-mosaxleoba-RegionebiT-TviTmarTveli-erTeulebiT-da-sqesiT.xlsx"
        : "02-Population-by-regions-self-governed-units-and-sex.xlsx";
    createDownloadHandler(fileName);
  };

  const handleDownloadFourth = () => {
    const fileName = "Census 2024_25.06.2024.pdf";
    createDownloadHandler(fileName);
  };

  return (
    <>
      <Navbar />
      <Section>
        <div className="results-container">
          <h1>{text.header}</h1>
          <div className="links">
            <ul>
              <li onClick={handleDownloadFirst}>{links[language].first}</li>
              <li onClick={handleDownloadSecond}>{links[language].second}</li>
              <li onClick={handleDownloadThird}>{links[language].third}</li>
              {language === "ka" && (
                <li onClick={handleDownloadFourth}>
                  2024 წლის მოსახლეობის აღწერის წინასწარი შედეგები (პრეზენტაცია)
                </li>
              )}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
