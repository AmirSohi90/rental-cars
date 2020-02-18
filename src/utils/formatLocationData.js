const placeTypes = {
  C: {
    placeType: "City"
  },
  T: {
    placeType: "Station"
  },
  A: {
    placeType: "Airport"
  },
  Z: {
    placeType: "Place"
  },
  F: {
    placeType: "Region"
  }
};

export const formatLocation = location => {
  const region = `${location.city ? `${location.city}, ` : ""}${
    location.region ? `${location.region}, ` : ""
  }${location.country ? location.country : ""}`;

  return {
    name: location.name,
    region,
    placeType: Boolean(placeTypes[location.placeType])
      ? placeTypes[location.placeType].placeType
      : "Place",
    id: Boolean(location.lat && location.lng)
      ? `${location.lat}${location.lng}`
      : location.name
  };
};

export const formatLocationResponseData = locations =>
  locations.map(formatLocation);
