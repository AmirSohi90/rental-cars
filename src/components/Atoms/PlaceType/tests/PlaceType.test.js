import React from "react";
import PlaceType from "../PlaceType";

import { mount } from "enzyme";

describe("PlaceType", () => {
  it("should render the PlaceType component with the correct text and class", () => {
    const wrapper = mount(<PlaceType placeType="Airport" />);
    expect(wrapper.find(".airport").exists()).toBe(true);
    expect(wrapper.find(".place-type").text()).toBe("Airport");
  });
});
