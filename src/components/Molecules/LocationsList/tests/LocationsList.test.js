import React from "react";
import LocationsList from "../LocationsList";
import ListItem from "../../../Atoms/ListItem/ListItem";
import { mockedFormattedLocations } from "../../../../mockData/mockLocations";

import { shallow } from "enzyme";

describe("ListItems", () => {
  it("should render no ListItem components", () => {
    const wrapper = shallow(
      <LocationsList locations={mockedFormattedLocations} />
    );
    expect(wrapper.find(ListItem).length).toBe(3);
  });
});
