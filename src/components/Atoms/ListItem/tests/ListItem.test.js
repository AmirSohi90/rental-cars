import React from "react";
import ListItem from "../ListItem";
import PlaceType from "../../PlaceType/PlaceType";

import { mount } from "enzyme";

describe("ListItem", () => {
  it("should render the PlaceType and the region", () => {
    const wrapper = mount(
      <ListItem name="Test Name" region="Test Region" placeType="Test" />
    );
    expect(wrapper.find(PlaceType).length).toBe(1);
    expect(wrapper.find(".place-type").text()).toBe("Test");
    expect(wrapper.find(".no-border").exists()).toBe(false);

    expect(wrapper.find(".location-name").text()).toBe("Test Name");
    expect(wrapper.find(".supportive-location-text").text()).toBe(
      "Test Region"
    );
  });

  it("should not render the PlaceType and region if no results found", () => {
    const wrapper = mount(<ListItem name="No results found" lastItem />);

    expect(wrapper.find(PlaceType).length).toBe(0);
    expect(wrapper.find(".no-border").exists()).toBe(true);

    expect(wrapper.find(".supportive-location-text").length).toBe(0);
    expect(wrapper.find(".location-name").text()).toBe("No results found");
  });
});
