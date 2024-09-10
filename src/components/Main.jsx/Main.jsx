import "./Main.scss";
import History from "./History/History";
import Goals from "./Goals/Goals";
import LegalBasis from "./LegalBasis/LegalBasis";
import Subject from "./Subjects/Subject";

export default function Main() {
  return (
    <>
      <main>
        <div className="main-container">
          <History />
          <Goals />
          <LegalBasis />
          <Subject />
        </div>
      </main>
    </>
  );
}
