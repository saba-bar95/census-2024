import "./Main.scss";
import History from "./History/History";
import Goals from "./Goals/Goals";
import LegalBasis from "./LegalBasis/LegalBasis";

export default function Main() {
  return (
    <>
      <main>
        <History />
        <Goals />
        <LegalBasis />
      </main>
    </>
  );
}
