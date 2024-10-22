import "./Results.scss";
import Navbar from "../../components/Navbar/Navbar";
import Section from "../../components/Main.jsx/Section";
import translations from "../../translation";

export default function Results() {
  const language = localStorage.getItem("language");
  const text = translations[language].pages.results;

  return (
    <>
      <Navbar />
      <Section>
        <div className="results-container">
          <h1>{text.header}</h1>
        </div>
      </Section>
    </>
  );
}
