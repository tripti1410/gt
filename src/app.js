import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import FindFalcone from "./pages/find-falcone/find-falcone";
import store from "./store";
import ErrorBoundaries from "./components/error-boundary";

import "./app.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>Finding Falcone!</h1>
          <a href="#">Reset</a>
          <a href="#">GeekTrustHome</a>
        </header>
        <main className="container">
          <ErrorBoundaries>
            <FindFalcone />
          </ErrorBoundaries>
        </main>
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
