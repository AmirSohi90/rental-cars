import React, { Component } from "react";
import { getPickupLocations } from "../../../services/getPickupLocations";
import LocationsList from "../../Molecules/LocationsList/LocationsList";
import { debounce } from "lodash";

import "./Searchbox.css";

class Searchbox extends Component {
  state = {
    pickupLocations: [],
    locationSearch: ""
  };

  locationSearch = debounce(async () => {
    if (this.state.locationSearch.length > 1) {
      const pickupLocations = await getPickupLocations(
        this.state.locationSearch
      );
      this.setState({ pickupLocations });
    }
  }, 250);

  onChange = locationSearch => {
    this.setState({ locationSearch });
    this.locationSearch();
  };

  render() {
    return (
      <div className="searchbox-wrapper">
        <form className="searchbox">
          <h1 className="searchbox-title">Where are you going?</h1>
          <div className="input">
            <label htmlFor="pick-up-location" className="input-label">
              Pick-up Location
            </label>
            <div className="input-wrapper">
              <input
                onChange={e => this.onChange(e.target.value)}
                name="pick-up-location"
                type="text"
                id="search-input"
                placeholder="city, airport, station, region, district…"
              />
              {this.state.locationSearch.length > 1 && (
                <LocationsList locations={this.state.pickupLocations} />
              )}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbox;
