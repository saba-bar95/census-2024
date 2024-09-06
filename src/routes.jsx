import App from "./App.jsx";
import Questionnaires from "./components/Questionnaires/Questionnaires";
import Methodology from "./components/Methodology/Methodology.jsx";
import Results from "./components/Results/Results.jsx";
import Vacancies from "./components/Vacancies/Vacancies.jsx";
import GoalsAndObjectives from "./components/GoalsAndObjectives/GoalsAndObjectives.jsx";
import LegalBasis from "./components/LegalBasis/LegalBasis.jsx";

const routes = [
  { path: "main", element: <App /> },
  {
    path: "questionnaries",
    element: <Questionnaires />,
  },
  {
    path: "methodology",
    element: <Methodology />,
  },
  {
    path: "results",
    element: <Results />,
  },
  {
    path: "vacancies",
    element: <Vacancies />,
  },
  {
    path: "goalsandobjectives",
    element: <GoalsAndObjectives />,
  },
  {
    path: "legalbasis",
    element: <LegalBasis />,
  },
];

export default routes;
