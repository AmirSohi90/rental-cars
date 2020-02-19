import React from "react";
import "./PlaceType.css";

const PlaceType = ({ placeType }) => {
  return (
    <div className="place-type-wrapper">
      <div className={`place-type ${placeType.toLowerCase()}`}>{placeType}</div>
    </div>
  );
};

export default PlaceType;
