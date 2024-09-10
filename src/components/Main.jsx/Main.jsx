import "./Main.scss";
import History from "./History/History";
import Goals from "./Goals/Goals";
import LegalBasis from "./LegalBasis/LegalBasis";
import Subject from "./Subjects/Subject";
import Responsible from "./Responsible/Responsible";
import Date from "./Date/Date";
import Settlements from "./Settlements/Settlements";
import Methods from "./Methods/Methods";

export default function Main() {
  return (
    <>
      <main>
        <History />
        <Goals />
        <LegalBasis />
        <Subject />
        <Responsible />
        <Date />
        <Settlements />
        <Methods />
      </main>
    </>
  );
}
