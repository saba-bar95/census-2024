/* eslint-disable react/prop-types */
import History from "./History/History";
import Goals from "./Goals/Goals";
import LegalBasis from "./LegalBasis/LegalBasis";
import Subject from "./Subjects/Subject";
import Responsible from "./Responsible/Responsible";
import Date from "./Date/Date";
import Settlements from "./Settlements/Settlements";
import Methods from "./Methods/Methods";
import Section from "./Section";
import TopArrow from "../TopArrow/TopArrow";

export default function Main() {
  return (
    <>
      <main>
        <Section>
          <History />
        </Section>
        <Section>
          <Goals />
        </Section>
        <Section>
          <LegalBasis />
        </Section>
        <Section>
          <Subject />
        </Section>
        <Section>
          <Responsible />
        </Section>
        <Section>
          <Date />
        </Section>
        <Section>
          <Settlements />
        </Section>
        <Section>
          <Methods />
        </Section>
        <TopArrow />
      </main>
    </>
  );
}
