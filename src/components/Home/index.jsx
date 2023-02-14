import React, { useRef, useEffect } from "react";
import "animate.css";
import "./home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  const ref = useRef(null);

  const handleScroll = () => {
    const boxes = ref.current.querySelectorAll(".box");
    const triggerBottom = (window.innerHeight / 6) * 6;
    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  }, []);

  return (
    <div id="homeContainer" ref={ref}>
      <div className="homeTitle">Home - Scroll to see all proyects</div>
      <div className="box">
        <NavLink to="/expanding-cards">Expanding Cards</NavLink>
      </div>
      <div className="box">
        <NavLink to="/blurry-loading">Blurry Loading</NavLink>
      </div>
      <div className="box">
        <NavLink to="/expanding-cards">Expanding Cards</NavLink>
      </div>
      <div className="box">
        <NavLink to="/blurry-loading">Blurry Loading</NavLink>
      </div>
      <div className="box">
        <NavLink to="/expanding-cards">Expanding Cards</NavLink>
      </div>
      <div className="box">
        <NavLink to="/blurry-loading">Blurry Loading</NavLink>
      </div>
      <div className="box">
        <NavLink to="/expanding-cards">Expanding Cards</NavLink>
      </div>
      <div className="box">
        <NavLink to="/blurry-loading">Blurry Loading</NavLink>
      </div>
      <div className="box">
        <NavLink to="/expanding-cards">Expanding Cards</NavLink>
      </div>
      <div className="box">
        <NavLink to="/blurry-loading">Blurry Loading</NavLink>
      </div>
    </div>
  );
};

export default Home;
