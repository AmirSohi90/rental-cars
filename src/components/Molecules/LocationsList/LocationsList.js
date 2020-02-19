import React from "react";
import ListItem from "../../Atoms/ListItem/ListItem";

import "./LocationsList.css";

const LocationsList = ({ locations }) => {
  return (
    <div className="results-wrapper">
      <ol className="pick-up-ordered-list">
        {locations.map(({ name, region, placeType, id }, index) => (
          <ListItem
            key={id}
            placeType={placeType}
            name={name}
            region={region}
            lastItem={index === locations.length - 1}
          />
        ))}
      </ol>
    </div>
  );
};

export default LocationsList;
