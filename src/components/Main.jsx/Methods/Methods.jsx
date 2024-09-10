import "./Methods.scss";
import interviewer from "/src/assets/images/interviewer2.png";
import questions from "/src/assets/images/questions.png";
import interviewer2 from "/src/assets/images/interviewer3.png";
import comp from "/src/assets/images/comp.png";
import vector from "/src/assets/images/rightVector.png";

export default function Methods() {
  return (
    <div className="methods--section">
      <h1>მონაცემთა შეგროვების მეთოდები</h1>
      <h2>
        2024 წლის აღწერის ფარგლებში მონაცემთა შეგროვება დაგეგმილია ორი მეთოდით:
      </h2>
      <div className="container">
        <div className="top-side">
          <img src={interviewer} alt="interviewer" className="img" />
          <div className="right-side">
            <div className="top">
              <img src={questions} alt="" />
              <h2>
                კომპიუტერის დახმარებით პერსონალური ინტერვიუს მეთოდით (CAPI)
              </h2>
            </div>
            <div className="bot">
              <p>
                CAPI მეთოდით მონაცემები გროვდება კარდაკარის პრინციპით, პირისპირ
                ინტერვიუს დროს, პლანშეტური კომპიუტერის მეშვეობით. ინტერვიუს
                დამთავრების შემდეგ მონაცემები პირდაპირ გადაეცემა ცენტრალურ
                კომპიუტერულ ქსელს ინტერნეტით ან მონაცემთა გადაცემის სხვა
                არხებით.
              </p>
            </div>
          </div>
        </div>
        <div className="bottom-side">
          <div className="left-side">
            <div className="top">
              <img src={comp} alt="comp" />
              <h2>კომპიუტერის დახმარებით ვებ-ინტერვიუს მეთოდი (CAWI)</h2>
            </div>
            <p>
              CAWI წარმოადგენს მონაცემთა შეგროვების მეთოდს, როდესაც
              რესპონდენტები დამოუკიდებლად, აღმწერების გარეშე, კომპიუტერის
              მეშვეობით, სტანდარტული ინტერნეტ ბრაუზერის გამოყენებით,
              ელექტრონულად ავსებენ კითხვარებს.
            </p>
            <button className="self-registration--btn">
              თვითრეგისტრაცია <img src={vector} alt="" />
            </button>
          </div>
          <img src={interviewer2} alt="interviewer" className="img" />
        </div>
      </div>
    </div>
  );
}
