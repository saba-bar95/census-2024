import "./Subject.scss";
import green from "/src/assets/images/green.png";
import red from "/src/assets/images/red.png";
import greenArrow from "/src/assets/images/green-arrow.png";
import redArrow from "/src/assets/images/red-arrow.png";

export default function Subject() {
  return (
    <div className="subject--section">
      <h1>ვინ ექვემდებარება აღწერას?</h1>
      <div className="container">
        <div className="wrapper">
          <div className="icon-container">
            <img src={greenArrow} alt="" />
          </div>
          <h2 className="green">აღწერას ექვემდებარება:</h2>
          <ul>
            <li>
              <img src={green} alt="" />
              საქართველოს მოქალაქე (მათ შორის ქვეყანაში დროებით არ მყოფი პირი)
            </li>
            <li>
              <img src={green} alt="" />
              საქართველოს ტერიტორიაზე მყოფი უცხო ქვეყნის მოქალაქე (მიუხედავად
              ქვეყანაში ყოფნის ხანგრძლივობისა)
            </li>
            <li>
              <img src={green} alt="" />
              საქართველოში მყოფი მოქალაქეობის არმქონე პირი
            </li>
          </ul>
        </div>
        <div className="wrapper red">
          <div className="icon-container red">
            <img src={redArrow} alt="" />
          </div>
          <h2 className="red">აღწერას არ ექვემდებარება:</h2>
          <ul>
            <li>
              <img src={red} alt="" />
              დიპლომატიური იმუნიტეტის მქონე უცხო ქვეყნის მოქალაქე და მისი ოჯახის
              წევრები
            </li>
            <li>
              <img src={red} alt="" />
              უცხო ქვეყნის სამხედრო მოსამსახურე და მისი ოჯახის წევრები
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
