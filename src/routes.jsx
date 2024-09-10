import App from "./App.jsx";
import Questionnaires from "./Pages/Questionnaires/Questionnaires.jsx";
import Methodology from "./Pages/Methodology/Methodology.jsx";
import Results from "./Pages/Results/Results.jsx";
import Vacancies from "./Pages/Vacancies/Vacancies.jsx";
import Goals from "./Pages/Goals/Goals.jsx";
import LegalBasis from "./Pages/LegalBasis/LegalBasis.jsx";
import ScrollToTop from "./ScrollToTop";

const routes = [
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <App />
      </>
    ),
  },
  {
    path: "main",
    element: (
      <>
        <ScrollToTop />
        <App />
      </>
    ),
  },
  {
    path: "questionnaries",
    element: (
      <>
        <ScrollToTop />
        <Questionnaires />
      </>
    ),
  },
  {
    path: "methodology",
    element: (
      <>
        <ScrollToTop />
        <Methodology />
      </>
    ),
  },
  {
    path: "results",
    element: (
      <>
        <ScrollToTop />
        <Results />
      </>
    ),
  },
  {
    path: "vacancies",
    element: (
      <>
        <ScrollToTop />
        <Vacancies />
      </>
    ),
  },
  {
    path: "goals",
    element: (
      <>
        <ScrollToTop />
        <Goals />
      </>
    ),
  },
  {
    path: "legalbasis",
    element: (
      <>
        <ScrollToTop />
        <LegalBasis />
      </>
    ),
  },
];

export default routes;
