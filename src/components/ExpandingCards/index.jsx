import React, { useState } from "react";
import "./expanding.css";

const ExpandingCard = () => {
  const [activeCard, setActiveCard] = useState("cabareteRD");

  function handleClick(currentCard) {
    console.log(currentCard);
    setActiveCard(currentCard);
  }

  function getActiveClass(cardName) {
    return cardName === activeCard ? "active" : "";
  }

  return (
    <React.Fragment>
      <h2>Top 5 lugares a visitar en RD</h2>
      <div className="cardContainer">
        <div
          className={"card cabareteRD " + getActiveClass("cabareteRD")}
          onClick={() => handleClick("cabareteRD")}
        >
          <h3>Cabarete</h3>
        </div>
        <div
          className={
            "card bahiaDeLasAguilasRD " + getActiveClass("bahiaDeLasAguilasRD")
          }
          onClick={() => handleClick("bahiaDeLasAguilasRD")}
        >
          <h3>Bahía de las Águilas</h3>
        </div>
        <div
          className={"card laRomanaRD " + getActiveClass("laRomanaRD")}
          onClick={() => handleClick("laRomanaRD")}
        >
          <h3>La Romana</h3>
        </div>
        <div
          className={"card lasTerrenasRD " + getActiveClass("lasTerrenasRD")}
          onClick={() => handleClick("lasTerrenasRD")}
        >
          <h3>Las Terrenas</h3>
        </div>
        <div
          className={"card samanaRD " + getActiveClass("samanaRD")}
          onClick={() => handleClick("samanaRD")}
        >
          <h3>Samaná</h3>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ExpandingCard;
