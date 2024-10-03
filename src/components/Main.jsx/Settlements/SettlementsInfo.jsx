import mestia from "/src/assets/images/mestia.png";
import akhmeta from "/src/assets/images/akhmeta.jpg";
import dusheti from "/src/assets/images/dusheti.jpg";
import kazbegi from "/src/assets/images/kazbegi.jpg";
import lentekhi from "/src/assets/images/lentekhi.jpg";

const settlementsInfo = [
  {
    "first-header": "მესტიის მუნიციპალიტეტი",
  },
  {
    "first-header": "ყაზბეგის მუნიციპალიტეტი",
  },
  {
    "first-header": "ლენტეხის მუნიციპალიტეტი",
  },
  {
    "first-header": "ახმეტა",
    settlements: `ომალოს ადმინისტრაციული ერთეული`,
  },
  {
    "first-header": "დუშეთი",
    settlements: `გუდამაყრის, ქვეშეთის, ხევსურეთის, უკანაფშავის, შატილის, მაღაროსკარის და ფასანაურის ადმინისტრაციული ერთეულები`,
  },
];

const images = {
  0: mestia,
  1: kazbegi,
  2: lentekhi,
  3: akhmeta,
  4: dusheti,
};

export { settlementsInfo, images };
