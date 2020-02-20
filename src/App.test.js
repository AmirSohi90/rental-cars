import React from "react";
import App from "./App";
import Searchbox from "./components/Organisms/Searchbox/Searchbox";

import { shallow } from "enzyme";

describe("App", () => {
  it("should render the SearchBox component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Searchbox).length).toBe(1);
  });
});
