import "./Responsible.scss";
import group from "/src/assets/images/group.png";
import sakstat from "/src/assets/images/sakstat.svg";
import stat from "/src/assets/images/stat.png";
import stat2 from "/src/assets/images/stat2.png";
import stat3 from "/src/assets/images/stat3.png";

export default function Responsible() {
  return (
    <div className="responsible--section">
      <h1>აღწერის ჩატარებაზე პასუხისმგებელი ორგანო</h1>
      <div className="container">
        <div className="icons-container">
          <img src={group} alt="group" />
          <div className="sakstat-logo">
            <img src={sakstat} alt="sakstat-logo" />
          </div>
          <div className="stat-logo">
            <img src={stat} alt="stat" />
          </div>
          <div className="stat2-logo">
            <img src={stat2} alt="stat" />
          </div>
          <div className="stat3-logo">
            <img src={stat3} alt="stat" />
          </div>
        </div>
        <div className="text-container">
          <p>
            მოსახლეობის და სასოფლო-სამეურნეო აღწერის ჩატარებაზე პასუხისმგებელია
            საქართველოს სტატისტიკის ეროვნული სამსახური (საქსტატი), რომელიც თავის
            საქმიანობას ახორციელებს დამოუკიდებლად, საერთაშორისო სტანდარტებისა და
            საერთაშორისოდ აღიარებული საუკეთესო პრაქტიკის შესაბამისად.
          </p>
        </div>
      </div>
    </div>
  );
}
