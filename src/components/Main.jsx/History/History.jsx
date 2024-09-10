import "./History.scss";
import CountdownComponent from "./CountDown/CountDown";
import polygon from "/src/assets/images/polygon.svg";
import map from "/src/assets/images/georgian-map.svg";

export default function History() {
  return (
    <>
      <div className="history--section">
        <div className="history-container">
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
            <img src={polygon} alt="polygon" className="polygon" />
          </div>
          <div className="left-side">
            <img src={map} alt="map" />
          </div>
        </div>
      </div>
    </>
  );
}
