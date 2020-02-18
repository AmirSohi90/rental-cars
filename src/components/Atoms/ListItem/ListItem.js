import React from "react";
import PlaceType from "../PlaceType/PlaceType";

import "./ListItem.css";

const ListItem = () => {
  return (
    <li className="pick-up-list-item">
      <PlaceType />
      <div className="location-wrapper">
        <span className="location-name">Manchester Airport</span>
        <span className="supportive-location-text">Manchester, UK</span>
      </div>
    </li>
  );
};

export default ListItem;
