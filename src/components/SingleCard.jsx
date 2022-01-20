import React from "react";
import "./SingleCard.css";

const SingleCard = ({ card, handleChoice }) => {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card">
      <div>
        <img src={card.src} className="front" alt="card front" />
        <img
          src="/img/cover.png"
          alt="card back"
          onClick={handleClick}
          className="back"
        />
      </div>
    </div>
  );
};

export default SingleCard;
