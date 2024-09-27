import "./Results.scss";
import Navbar from "../../components/Navbar/Navbar";

export default function Results() {
  return (
    <>
      <Navbar />
      <div className="results-container">
        <h1>
          აღწერის წინასწარი შედეგები ხელმისაწვდომი იქნება არაუგვიანეს 2025 წლის
          ივნისისა, ხოლო საბოლოო შედეგები - არაუგვიანეს 2026 წლის ივნისისა.
        </h1>
      </div>
    </>
  );
}
