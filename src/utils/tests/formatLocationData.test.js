import {
  formatLocationResponseData,
  formatLocation
} from "../formatLocationData";
import {
  mockedFormattedLocations,
  mockedUnformattedLocations
} from "../../mockData/mockLocations";

describe("formatLocationData", () => {
  it("returns an array with the correctly formatted data", () => {
    const mockedLocations = mockedUnformattedLocations;

    const expectedOutput = mockedFormattedLocations;

    expect(formatLocationResponseData(mockedLocations)).toEqual(expectedOutput);
  });
});

describe("formatLocation", () => {
  const mockedLocation = {
    name: "Test",
    region: "Region",
    city: "City",
    country: "Country",
    placeType: "C",
    lat: 13124124,
    lng: 123141
  };

  it("should return the correct placeType", () => {
    expect(formatLocation(mockedLocation)).toEqual({
      name: "Test",
      placeType: "City",
      region: "City, Region, Country",
      id: "13124124123141"
    });

    expect(formatLocation({ ...mockedLocation, placeType: "" })).toEqual({
      name: "Test",
      placeType: "Place",
      region: "City, Region, Country",
      id: "13124124123141"
    });
  });

  it("should return the correct region", () => {
    expect(formatLocation(mockedLocation)).toEqual({
      name: "Test",
      placeType: "City",
      region: "City, Region, Country",
      id: "13124124123141"
    });

    expect(formatLocation({ ...mockedLocation, city: "" })).toEqual({
      name: "Test",
      placeType: "City",
      region: "Region, Country",
      id: "13124124123141"
    });

    expect(formatLocation({ ...mockedLocation, city: "", region: "" })).toEqual(
      {
        name: "Test",
        placeType: "City",
        region: "Country",
        id: "13124124123141"
      }
    );
  });

  it("should return the correct id", () => {
    expect(formatLocation({ ...mockedLocation, lat: "", lng: "" })).toEqual({
      name: "Test",
      placeType: "City",
      region: "City, Region, Country",
      id: "Test"
    });
  });
});
