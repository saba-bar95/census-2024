import "./Settlements.scss";
import { useState } from "react";
import GoogleMap from "./GoogleMap";
import getCoordinates from "./GetCoordinates";
import { settlementsInfo, images } from "./SettlementsInfo";

export default function Settlements() {
  const apiKey = "AIzaSyB7D2WPALIsuME2Y8wbWGZuob19cbpuiR0";
  const settlements = ["მესტია", "ყაზბეგი", "ლენტეხი", "ახმეტა", "დუშეთი"];
  const [selected, setSelected] = useState(0);

  const initialCoordinates = { lat: 43.0334614, lng: 42.6894803 };
  const [selectedLocation, setSelectedLocation] = useState(initialCoordinates);

  const handleClick = async (index) => {
    setSelected(index);
    const address = settlements[index];
    try {
      const result = await getCoordinates(address);
      const location = result[0].geometry.location;

      const coordinates = {
        lat: location.lat(),
        lng: location.lng(),
      };
      setSelectedLocation(coordinates);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="settlements--section">
      <h1>აღწერა ძნელად მისადგომ დასახლებებში</h1>
      <p>
        იმის გათვალისწინებით, რომ ნოემბერ-დეკემბრის პერიოდში ზოგიერთ მთიან,
        ძნელად მისადგომ მუნიციპალიტეტსა და დასახლებაში ამინდის შესაძლო
        გაუარესების გამო გართულდება საველე სამუშაოების ჩატარება, შემდეგ
        ადმინისტრაციულ ერთეულებში აღწერა ჩატარდება 2024 წლის სექტემბერში:
      </p>
      <div className="container">
        <ul>
          {settlements.map((item, index) => (
            <li
              key={index}
              className={selected === index ? "selected" : ""}
              onClick={() => handleClick(index)}>
              {item}
            </li>
          ))}
        </ul>
        <div className="border-container"></div>
        <div className="wrapper">
          <div className="left-side">
            <img src={images[selected]} alt="" />
            <h2>{settlementsInfo[selected]["first-header"]}</h2>
            <h3>{settlementsInfo[selected]["second-header"]}</h3>

            {settlementsInfo[selected].settlements && (
              <p>{settlementsInfo[selected].settlements}</p>
            )}
          </div>
          <div className="right-side">
            <GoogleMap location={selectedLocation} key={apiKey} />
          </div>
        </div>
      </div>
    </div>
  );
}
