import React from "react";
import ListItems from "../../Molecules/ListItems/ListItems";

import "./Searchbox.css";

const Searchbox = () => {
  return (
    <div className="searchbox-wrapper">
      <form className="searchbox">
        <h1 className="searchbox-title">Where are you going?</h1>
        <div className="input">
          <label for="pick-up-location" className="input-label">
            Pick-up Location
          </label>
          <div className="input-wrapper">
            <input
              name="pick-up-location"
              type="text"
              id="search-input"
              placeholder="city, airport, station, region, district…"
            />
            <ListItems />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Searchbox;
