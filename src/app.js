import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import FindFalcone from "./pages/find-falcone/find-falcone";
import Header from "./header/header";
import store from "./store";
import ErrorBoundaries from "./components/error-boundary";
import "./global.css";
import "./planets.css";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main className="container">
          <ErrorBoundaries>
            <div className="planets">
              <div className="planet donlon"></div>
              <div className="planet enchai">
              </div>
              <div className="planet jebing"></div>
              <div className="planet sapir"></div>
              <div className="planet lerbin"></div>
              <div className="planet pangasor"></div>
            </div>
            <FindFalcone />
          </ErrorBoundaries>
        </main>
      </React.Fragment>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
