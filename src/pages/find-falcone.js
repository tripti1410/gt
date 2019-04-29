import React from "react";
import { connect } from "react-redux";

import Button from "../components/button/button";
import { listAllPlanets, listAllVehicles } from "../async-action-creators";
import { setSelectedPlanet, onChangeOfVehicle } from "../action-creators";
import Time from "../components/time/time";
import Destination from "../components/destination/destination";

import "./find-falcone.css";
class FindFalcone extends React.Component {
  componentDidMount() {
    this.props.listAllPlanets();
    this.props.listAllVehicles();
  }
  render() {
    const {
      uniquePlanets,
      allVehicles,
      onPlanetChange,
      selectedPlanets,
      selectedVehicles,
      onChangeOfVehicle,
      availableVehicles,
      destinations
    } = this.props;
    return (
      <div className="finding-falcone">
        <h2 className="finding-falcone__title">
          Select Planets you want to search in:
        </h2>
        {destinations.map((destination, index) => (
          <Destination
            key={`dest-${index}`}
            destination={destination}
            selectedPlanets={selectedPlanets}
            selectedVehicles={selectedVehicles}
            onPlanetChange={onPlanetChange}
            onChangeOfVehicle={onChangeOfVehicle}
            uniquePlanets={uniquePlanets}
            allVehicles={allVehicles}
          />
        ))}
        <Time />
        <div className="find-falcon-button">
          <Button>Find Falcone!</Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    uniquePlanets: state.ui.uniquePlanets,
    allVehicles: state.allVehicles,
    selectedPlanets: state.app.selectedPlanets,
    selectedVehicles: state.app.selectedVehicles,
    destinations: state.destinations
  };
};

const mapDispatchToProps = dispatch => {
  return {
    listAllPlanets: () => dispatch(listAllPlanets()),
    listAllVehicles: () => dispatch(listAllVehicles()),
    onPlanetChange: (destination, planet) =>
      dispatch(setSelectedPlanet(destination, planet)),
    onChangeOfVehicle: (destinationName, vehicleName) =>
      dispatch(onChangeOfVehicle(destinationName, vehicleName))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FindFalcone);
