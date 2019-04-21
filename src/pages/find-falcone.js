import React from "react";
import { connect } from "react-redux";
import Select from "../components/select/select";
import Button from "../components/button/button";
import { listAllPlanets, listAllVehicles } from "../async-action-creators";
import { setSelectedPlanet, onChangeOfVehicle } from "../action-creators";
import { differenceBy } from "lodash";
import Vehicles from "../components/vehicles/vehicles";
import Time from "../components/time/time";
import "./find-falcone.css";
class FindFalcone extends React.Component {
  componentDidMount() {
    this.props.listAllPlanets();
    this.props.listAllVehicles();
  }
  render() {
    const {
      allPlanets,
      allVehicles,
      onPlanetChange,
      selectedPlanets,
      onChangeOfVehicle
    } = this.props;
    const uniquePlanets = differenceBy(
      [...allPlanets],
      Object.values(selectedPlanets),
      "name"
    );
    return (
      <div className="finding-falcone">
        <h2 className="finding-falcone__title">
          Select Planets you want to search in:
        </h2>
        <div className="destination-container">
          <Select
            id="destination-1"
            label="Destination 1"
            options={uniquePlanets}
            value={[selectedPlanets["destination-1"]]}
            getOptionLabel={planet => planet.name}
            getOptionValue={planet => planet.name}
            onChange={planet => onPlanetChange("destination-1", planet)}
          />
          {selectedPlanets && selectedPlanets["destination-1"] && (
            <Vehicles
              destinationName="destination-1"
              vehicles={allVehicles}
              onChangeOfVehicle={(vehicleName, value) =>
                onChangeOfVehicle(vehicleName)
              }
            />
          )}
        </div>
        <div className="destination-container">
          <Select
            id="destination-2"
            label="Destination 2"
            options={uniquePlanets}
            value={[selectedPlanets["destination-2"]]}
            getOptionLabel={planet => planet.name}
            getOptionValue={planet => planet.name}
            onChange={planet => onPlanetChange("destination-2", planet)}
          />
          {selectedPlanets && selectedPlanets["destination-2"] && (
            <Vehicles
            destinationName="destination-2"
              vehicles={allVehicles}
              onChangeOfVehicle={(vehicleName, value) =>
                onChangeOfVehicle(vehicleName)
              }
            />
          )}
        </div>
        <div className="destination-container">
          <Select
            id="destination-3"
            label="Destination 3"
            options={uniquePlanets}
            value={[selectedPlanets["destination-3"]]}
            getOptionLabel={planet => planet.name}
            getOptionValue={planet => planet.name}
            onChange={planet => onPlanetChange("destination-3", planet)}
          />
          {selectedPlanets && selectedPlanets["destination-3"] && (
            <Vehicles
              destinationName="destination-3"
              vehicles={allVehicles}
              onChangeOfVehicle={(vehicleName, value) =>
                onChangeOfVehicle(vehicleName)
              }
            />
          )}
        </div>
        <div className="destination-container">
          <Select
            id="destination-4"
            label="Destination 4"
            options={uniquePlanets}
            value={[selectedPlanets["destination-4"]]}
            getOptionLabel={planet => planet.name}
            getOptionValue={planet => planet.name}
            onChange={planet => onPlanetChange("destination-4", planet)}
          />
          {selectedPlanets && selectedPlanets["destination-4"] && (
            <Vehicles
              destinationName="destination-4"
              vehicles={allVehicles}
              onChangeOfVehicle={(vehicleName, value) =>
                onChangeOfVehicle(vehicleName)
              }
            />
          )}
        </div>
        <Time />
        <div className="find-falcon-button"><Button>Find Falcone!</Button></div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allVehicles: state.allVehicles,
    allPlanets: state.allPlanets,
    selectedPlanets: state.app.selectedPlanets,
    remainingPlanets: state.app.remainingPlanets
  };
};

const mapDispatchToProps = dispatch => {
  return {
    listAllPlanets: () => dispatch(listAllPlanets()),
    listAllVehicles: () => dispatch(listAllVehicles()),
    onPlanetChange: (destination, planet) =>
      dispatch(setSelectedPlanet(destination, planet)),
    onChangeOfVehicle: vehicleName => dispatch(onChangeOfVehicle(vehicleName))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FindFalcone);
