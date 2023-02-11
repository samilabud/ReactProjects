import React, { useRef, useEffect } from "react";
import "./blurry.css";

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const Blurry = () => {
  const refBgBlurry = useRef(null);
  const refTextBlurry = useRef(null);

  const reloadBlurry = () => {
    let fakeLoading = 0;
    const backgroundSection = refBgBlurry.current;
    const loadingText = refTextBlurry.current;
    const myInterval = setInterval(() => {
      fakeLoading++;
      if (fakeLoading > 99) {
        clearInterval(myInterval);
      }
      loadingText.innerText = `${fakeLoading}%`;
      loadingText.style.opacity = scale(fakeLoading, 0, 100, 1, 0);
      backgroundSection.style.filter = `blur(${scale(
        fakeLoading,
        0,
        100,
        30,
        0
      )}px)`;
    }, 30);
  };

  useEffect(() => {
    reloadBlurry();
  }, []);

  //Playa El Valle, Dominican Republic
  return (
    <div id="blurryContainer" onClick={reloadBlurry}>
      <section ref={refBgBlurry} className="blurryBG"></section>
      <div ref={refTextBlurry} className="loading-text">
        0%
      </div>
    </div>
  );
};

export default Blurry;
