import React from "react";
import Button from "./Button";

const CardInfo = ({ cardInfo }) => {
  return (
    <>
      <h4 className="card-title">Title</h4>
      <p className="card-text">
        No matter how far along you are in your sophistication as an ameteur
      </p>
      <div>
        <Button>Discover</Button>
      </div>
    </>
  );
};

export default CardInfo;
