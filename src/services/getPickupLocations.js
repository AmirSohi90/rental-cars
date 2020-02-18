import axios from "axios";
import { formatLocationResponseData } from "../utils/formatLocationData";

export const getPickupLocations = async location => {
  const response = await axios.get(
    `https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=${location}`
  );
  return formatLocationResponseData(response.data.results.docs);
};
