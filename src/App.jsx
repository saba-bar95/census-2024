import Navbar from "./components/Navbar/Navbar";
import { Link } from "react-router-dom";
import "./App.scss";
import Main from "./components/Main.jsx/Main";

export default function App() {
  return (
    <>
      <Navbar />
      <Main />
      {/* <h3>
        <Link to="/goalsandobjectives">მიზნები და ამოცანები</Link>
        <Link to="/legalbasis">სამართლებრივი საფუძვლები</Link>
      </h3> */}
    </>
  );
}
