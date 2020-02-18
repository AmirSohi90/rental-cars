export const mockedUnformattedLocations = [
  {
    city: "City 1",
    region: "Region 1",
    country: "Country 1",
    name: "Name 1",
    placeType: "A",
    lat: 2832414,
    lng: 98766544
  },
  {
    region: "",
    country: "Country 2",
    city: "City 2",
    name: "Name 2",
    placeType: "T",
    lat: 26741,
    lng: 1829183
  },
  {
    region: "",
    country: "Country 3",
    city: "City 3",
    name: "Name 3",
    lat: 26741,
    lng: 1829183
  }
];

export const mockedFormattedLocations = [
  {
    id: "283241498766544",
    name: "Name 1",
    placeType: "Airport",
    region: "City 1, Region 1, Country 1"
  },
  {
    id: "267411829183",
    name: "Name 2",
    placeType: "Station",
    region: "City 2, Country 2"
  },
  {
    id: "267411829183",
    name: "Name 3",
    placeType: "Place",
    region: "City 3, Country 3"
  }
];
