import "./Main.scss";
import History from "./History/History";
import Goals from "./Goals/Goals";
import LegalBasis from "./LegalBasis/LegalBasis";

export default function Main() {
  return (
    <>
      <main>
        <div className="main-container">
          <History />
          <Goals />
          <LegalBasis />
        </div>
      </main>
    </>
  );
}
