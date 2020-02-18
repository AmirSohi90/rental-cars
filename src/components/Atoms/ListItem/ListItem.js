import React from "react";
import PlaceType from "../PlaceType/PlaceType";

import "./ListItem.css";

const ListItem = ({ name, region = "", placeType, lastItem }) => {
  const hasFoundResults = Boolean(name !== "No results found");

  return (
    <li className={`pick-up-list-item  ${lastItem ? "no-border" : ""}`}>
      {hasFoundResults && <PlaceType placeType={placeType} />}
      <div className="location-wrapper">
        <span className="location-name">{name}</span>
        {hasFoundResults && region && (
          <span className="supportive-location-text">{region}</span>
        )}
      </div>
    </li>
  );
};

export default ListItem;
