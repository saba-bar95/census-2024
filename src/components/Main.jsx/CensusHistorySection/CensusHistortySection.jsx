import "./CensusHistortySection.scss";
import CountdownComponent from "./CountDown/CountDown";

console.log("sss");

export default function CensusHistortySection() {
  return (
    <>
      <div className="census-history--section">
        <div className="right-side">
          <h1>აღწერების ისტორია საქართველოში</h1>
          <div className="para-container">
            <p>
              აღწერები ტარდება ქვეყნის განვითარებისთვის, გეგმებისა და
              პროგრამების ეფექტიანი განხორციელების ხელშესაწყობად
            </p>
            <p>
              აღწერა ასევე წარმოადგენს მნიშვნელოვან წყაროს გაეროს მდგრადი
              განვითარების 2030 წლის მიზნების განხორციელების შესაფასებლად.
            </p>
          </div>
          <CountdownComponent />
          <img
            src="src\assets\images\polygon.svg"
            alt="polygon"
            className="polygon"
          />
        </div>
        <div className="left-side">
          <img src="src\assets\images\georgian-map.svg" alt="" />
        </div>
      </div>
    </>
  );
}
