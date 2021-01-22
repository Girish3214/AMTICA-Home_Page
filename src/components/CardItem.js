import React from "react";
import CardInfo from "./CardInfo";

const CardItem = ({ src, cardInfo }) => {
  return (
    <>
      <div className="card-item">
        <div className="card text-white">
          <img src={src} className="card-img" alt="..." />
          <div
            className={`card-img-overlay ${
              cardInfo ? cardInfo : "card-info-container"
            } `}
          >
            <CardInfo cardInfo={cardInfo} />
          </div>
          {!cardInfo ? (
            <div className="name-job">
              <h4 className="card-title">Seller Name</h4>
              <p className="card-text">West Bengal, Kolkata</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default CardItem;
