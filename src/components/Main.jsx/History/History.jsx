import "./History.scss";
import CountdownComponent from "./CountDown/CountDown";
import polygon from "/src/assets/images/polygon.svg";
import map from "/src/assets/images/georgian-map.svg";
import translations from "../../../translation";

export default function History() {
  const language = localStorage.getItem("language");
  const text = translations[language].main.history;

  const censusYears = [
    2024, 2014, 2002, 1989, 1979, 1970, 1959, 1939, 1926, 1897,
  ];

  return (
    <>
      <div className="history--section">
        <div className="history-container">
          <div className="right-side">
            <h1>{text.header}</h1>
            <div className="para-container">
              <p>{text.firsPara}</p>
              {/* <p>{text.para2}</p> */}
            </div>
            {/* <CountdownComponent /> */}
            {/* <img src={polygon} alt="polygon" className="polygon" /> */}
          </div>
          <div className="left-side">
            <img src={map} alt="map" />
          </div>
        </div>
        {/* <div className="years-container">
          <div className="years-child">
            <p className="dot">•</p>
            <div className="border-container"></div>
            <div className="text">
              <p className="dot">•</p>
              <p className="year">2014</p>
            </div>
          </div>
          <div className="years-child">
            <div className="border-container"></div>
            <div className="text">
              <p className="dot">•</p>
              <p className="year">2002</p>
            </div>
          </div>
          <div className="years-child">
            {" "}
            <div className="border-container"></div>
            <div className="text">
              <p className="dot">•</p>
              <p className="year">1989</p>
            </div>
          </div>
          <div className="years-child">
            {" "}
            <div className="border-container"></div>
            <div className="text">
              <p className="dot">•</p>
              <p className="year">1979</p>
            </div>
          </div>
          <div className="years-child">
            {" "}
            <div className="border-container"></div>
            <div className="text">
              <p className="dot">•</p>
              <p className="year">1970</p>
            </div>
          </div>
          <div className="years-child">
            {" "}
            <div className="border-container"></div>
            <div className="text">
              <p className="dot">•</p>
              <p className="year">1959</p>
            </div>
          </div>
          <div className="years-child">
            {" "}
            <div className="border-container"></div>
            <div className="text">
              <p className="dot">•</p>
              <p className="year">1939</p>
            </div>
          </div>
          <div className="years-child">
            {" "}
            <div className="border-container"></div>
            <div className="text">
              <p className="dot">•</p>
              <p className="year">1926</p>
            </div>
          </div>
          <div className="years-child">
            {" "}
            <div className="border-container"></div>
            <div className="text">
              <p className="dot">•</p>
              <p className="year">1897</p>
            </div>
          </div>
        </div> */}

        <div className="years-container">
          {censusYears.map((year) => {
            return (
              <div className="years-child" key={year}>
                <div className="text">
                  <p className="dot">•</p>
                  <p className="year">{year}</p>
                </div>
                {year !== 1897 && <div className="border-container"></div>}
              </div>
            );
          })}
        </div>

        {/* <div className="years-container">
          <div className="years-child">
            <div className="text">
              <p className="dot">•</p>
              <p className="year">2024</p>
            </div>
            <div className="border-container"></div>
          </div>
          <div className="years-child">
            <div className="text">
              <p className="dot">•</p>
              <p className="year">2014</p>
            </div>
            <div className="border-container"></div>
          </div>
          <div className="years-child">
            <div className="text">
              <p className="dot">•</p>
              <p className="year">2002</p>
            </div>
            <div className="border-container"></div>
          </div>
          <div className="years-child">
            <div className="text">
              <p className="dot">•</p>
              <p className="year">1989</p>
            </div>
            <div className="border-container"></div>
          </div>
          <div className="years-child">
            <div className="text">
              <p className="dot">•</p>
              <p className="year">1979</p>
            </div>
            <div className="border-container"></div>
          </div>
          <div className="years-child">
            <div className="text">
              <p className="dot">•</p>
              <p className="year">1970</p>
            </div>
            <div className="border-container"></div>
          </div>
          <div className="years-child">
            <div className="text">
              <p className="dot">•</p>
              <p className="year">1959</p>
            </div>
            <div className="border-container"></div>
          </div>
          <div className="years-child">
            <div className="text">
              <p className="dot">•</p>
              <p className="year">1939</p>
            </div>
            <div className="border-container"></div>
          </div>
          <div className="years-child">
            <div className="text">
              <p className="dot">•</p>
              <p className="year">1926</p>
            </div>
            <div className="border-container"></div>
          </div>
          <div className="years-child">
            <div className="text">
              <p className="dot">•</p>
              <p className="year">1897</p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
