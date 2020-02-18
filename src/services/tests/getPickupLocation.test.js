import { getPickupLocations } from "../getPickupLocations";
import {
  mockedFormattedLocations,
  mockedUnformattedLocations
} from "../../mockData/mockLocations";

import axios from "axios";

jest.mock("axios");

describe("getPickupLocations", () => {
  it("successfully returns the location data", async () => {
    const response = {
      data: {
        results: {
          docs: mockedUnformattedLocations
        }
      }
    };

    const expectedOutput = mockedFormattedLocations;

    axios.get.mockImplementation(() => Promise.resolve(response));
    await expect(getPickupLocations("test")).resolves.toEqual(expectedOutput);
  });
});
