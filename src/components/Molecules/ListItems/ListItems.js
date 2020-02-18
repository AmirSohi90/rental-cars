import React from "react";
import ListItem from "../../Atoms/ListItem/ListItem";

import "./ListItems.css";

const ListItems = () => {
  return (
    <div className="results-wrapper">
      <ol className="pick-up-ordered-list">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </ol>
    </div>
  );
};

export default ListItems;
