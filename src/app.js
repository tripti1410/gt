import React from "react";
import ReactDOM from "react-dom";
import Select from "./components/select/select";
import Button from "./components/button/button";
import RadioButton from "./components/radio-button/radio-button";
import "./app.css";

class App extends React.Component {
  render() {
    return(
      <div>
        <header>
          <h1>Finding Falcone!</h1>
          <a href="#">Reset</a>
          <a href="#">GeekTrustHome</a>
        </header>
        <h2>Select Planets you want to search in:</h2>
        <Select label="Destination 1" />
        <Select label="Destination 2" />
        <Select label="Destination 3" />
        <Select label="Destination 4" />
        <RadioButton label="Space pod 1" name="space-pod"/>
        <RadioButton label="Space pod 2" name="space-pod"/>
        <RadioButton label="Space pod 3" name="space-pod"/>
        <div><span>Time taken: </span><time>50</time></div>
        <Button>Find Falcone!</Button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"))