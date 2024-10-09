import arrowimg from "/src/assets/images/caret-arrow.png";
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
    <div className="top-arrow" onClick={scrollToTop}>
      <img src={arrowimg} alt="" />
    </div>
  );
};

export default TopArrow;
