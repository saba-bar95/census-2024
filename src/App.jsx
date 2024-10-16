import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import Main from "./components/Main.jsx/Main";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "ქარ"
  );

  useEffect(() => {
    localStorage.setItem("selectedLanguage", selectedLanguage);
  }, [selectedLanguage]);

  return (
    <>
      <Navbar
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
      <Main />
      <Footer />
    </>
  );
}
