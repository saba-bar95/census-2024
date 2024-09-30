/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";

const Section = ({ children }) => {
  const [active, setActive] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportTop = window.scrollY;

      if (
        viewportTop + window.innerHeight >= sectionTop &&
        viewportTop <= sectionTop + sectionHeight &&
        !active
      ) {
        setActive(true);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [active]);

  return (
    <div ref={sectionRef} className={`section ${active ? "active" : ""}`}>
      {children}
    </div>
  );
};

export default Section;
