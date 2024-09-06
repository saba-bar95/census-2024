import App from "./App.jsx";
import Questionnaires from "./Pages/Questionnaires/Questionnaires.jsx";
import Methodology from "./Pages/Methodology/Methodology.jsx";
import Results from "./Pages/Results/Results.jsx";
import Vacancies from "./Pages/Vacancies/Vacancies.jsx";
import GoalsAndObjectives from "./Pages/GoalsAndObjectives/GoalsAndObjectives.jsx";
import LegalBasis from "./Pages/LegalBasis/LegalBasis.jsx";

const routes = [
  { path: "/", element: <App /> },

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
  ,
];

export default routes;
