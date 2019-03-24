import React from "react";
import {connect} from "react-redux";
import Select from "../components/select/select";
import Button from "../components/button/button";
import RadioButton from "../components/radio-button/radio-button";
import { listAllPlanets } from "../action-creators";

class FindFalcone extends React.Component {
  componentDidMount() {
    this.props.listAllPlanets();
    this.props.listAllVehicles();    
  }
  render() {
    return (
      <div className="finding-falcone">
        <h2 className="finding-falcone__title">
          Select Planets you want to search in:
        </h2>
        <Select label="Destination 1" />
        <Select label="Destination 2" />
        <Select label="Destination 3" />
        <Select label="Destination 4" />
        <div style={{ display: "none" }}>
          <RadioButton label="Space pod 1" name="space-pod" />
          <RadioButton label="Space pod 2" name="space-pod" />
          <RadioButton label="Space pod 3" name="space-pod" />
        </div>
        <div>
          <span>Time taken: </span>
          <time>50</time>
        </div>
        <Button>Find Falcone!</Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allVehicles: state.allVehicles,
    allPlanets: state.allPlanets
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    listAllPlanets: () => dispatch(listAllPlanets()),
    listAllVehicles: () => dispatch(listAllVehicles())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FindFalcone);
