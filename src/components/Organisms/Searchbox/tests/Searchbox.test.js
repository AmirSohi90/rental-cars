import React from "react";
import Searchbox from "../Searchbox";
import LocationsList from "../../../Molecules/LocationsList/LocationsList";
import ListItem from "../../../Atoms/ListItem/ListItem";

import { mockedFormattedLocations } from "../../../../mockData/mockLocations";

import { mount } from "enzyme";

describe("Searchbox", () => {
  const wrapper = mount(<Searchbox />);
  it("should not render the LocationsList component", () => {
    expect(wrapper.find(LocationsList).length).toBe(0);
  });

  it("should render the LocationsList component", () => {
    wrapper.setState({ locationSearch: "test" });
    wrapper.update();
    expect(wrapper.find(LocationsList).length).toBe(1);
  });

  it("should render no ListItem component", () => {
    expect(wrapper.find(ListItem).length).toBe(0);
  });

  it("should render the correct number of ListItem components", () => {
    wrapper.setState({ pickupLocations: mockedFormattedLocations });

    expect(wrapper.find(ListItem).length).toBe(3);
  });

  it("test", async () => {
    wrapper.instance().onChange = jest.fn();

    wrapper
      .find("#search-input")
      .simulate("change", { target: { value: "test" } });

    expect(wrapper.instance().onChange).toHaveBeenCalledWith("test");
  });
});
