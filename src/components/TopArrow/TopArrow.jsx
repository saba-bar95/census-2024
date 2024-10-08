import arrow from "/src/assets/images/white-top-arrow.svg";
import "./TopArrow.scss";

const TopArrow = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      easing: "ease-in-out",
    });
  };

  return (
    <div className="top-arrow">
      <img src={arrow} alt="" onClick={scrollToTop} />
    </div>
  );
};

export default TopArrow;
