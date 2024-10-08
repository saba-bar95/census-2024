import "./Date.scss";
import { Link } from "react-router-dom";
import interviewer from "/src/assets/images/interviewer.png";
import date from "/src/assets/images/date.png";

export default function Date() {
  return (
    <div className="date--section">
      <h1>აღწერის ჩატარების თარიღი</h1>
      <div className="container">
        <div className="left-side">
          <p>
            გაეროს რეკომენდაციებისა და საერთაშორისო პრაქტიკის შესაბამისად,
            აღწერები ქვეყანაში ტარდება 10 წელიწადში ერთხელ. საქართველოში
            უკანასკნელი აღწერა ჩატარდა 2014 წელს. შესაბამისად, მომდევნო
            მოსახლეობის აღწერა საქართველოში 14 ნოემბრიდან 19 დეკემბრის ჩათვლით
            პერიოდში ჩატარდება.
          </p>
          <div className="date-container">
            <img src={date} alt="" />
          </div>
          <Link to="/date">
            <button>სრულად</button>
          </Link>
        </div>
        <div className="right-side">
          <img src={interviewer} alt="" />
        </div>
      </div>
    </div>
  );
}
