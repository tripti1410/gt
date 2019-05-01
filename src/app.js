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
            <div className="planets" >
            <svg width="900px" height="700px" viewBox="0 0 1366 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                <path d="M934.5 531.5C934.5 652.932 863.939 762.92 749.752 842.57C635.567 922.22 477.794 971.5 303.5 971.5C129.206 971.5 -28.5666 922.22 -142.752 842.57C-256.939 762.92 -327.5 652.932 -327.5 531.5C-327.5 410.068 -256.939 300.08 -142.752 220.43C-28.5666 140.78 129.206 91.5 303.5 91.5C477.794 91.5 635.567 140.78 749.752 220.43C863.939 300.08 934.5 410.068 934.5 531.5Z" fill="none" stroke="#c5c6c6"/>
                <path d="M695.5 531C695.5 623.255 631.145 706.87 526.896 767.448C422.659 828.02 278.624 865.5 119.5 865.5C-39.6238 865.5 -183.659 828.02 -287.896 767.448C-392.145 706.87 -456.5 623.255 -456.5 531C-456.5 438.745 -392.145 355.13 -287.896 294.552C-183.659 233.98 -39.6238 196.5 119.5 196.5C278.624 196.5 422.659 233.98 526.896 294.552C631.145 355.13 695.5 438.745 695.5 531Z" stroke="#c5c6c6"/>
                <path d="M458.5 512.5C458.5 584.507 417.539 649.745 351.218 697.001C284.898 744.256 193.252 773.5 92 773.5C-9.25232 773.5 -100.898 744.256 -167.218 697.001C-233.539 649.745 -274.5 584.507 -274.5 512.5C-274.5 440.493 -233.539 375.255 -167.218 327.999C-100.898 280.744 -9.25232 251.5 92 251.5C193.252 251.5 284.898 280.744 351.218 327.999C417.539 375.255 458.5 440.493 458.5 512.5Z" stroke="#c5c6c6"/>
                <path d="M1124.5 520.5C1124.5 677.781 1012.25 820.271 830.542 923.47C648.851 1026.66 397.815 1090.5 120.5 1090.5C-156.815 1090.5 -407.851 1026.66 -589.542 923.47C-771.247 820.271 -883.5 677.781 -883.5 520.5C-883.5 363.219 -771.247 220.729 -589.542 117.53C-407.851 14.3402 -156.815 -49.5 120.5 -49.5C397.815 -49.5 648.851 14.3402 830.542 117.53C1012.25 220.729 1124.5 363.219 1124.5 520.5Z" stroke="#c5c6c6"/>
                <path d="M1259.5 512.5C1259.5 699.11 1155.02 868.098 985.998 990.453C816.981 1112.81 583.461 1188.5 325.5 1188.5C67.5386 1188.5 -165.981 1112.81 -334.998 990.453C-504.016 868.098 -608.5 699.11 -608.5 512.5C-608.5 325.89 -504.016 156.902 -334.998 34.5473C-165.981 -87.8069 67.5386 -163.5 325.5 -163.5C583.461 -163.5 816.981 -87.8069 985.998 34.5473C1155.02 156.902 1259.5 325.89 1259.5 512.5Z" stroke="#c5c6c6"/>
                <path d="M1347.5 497.5C1347.5 941.518 972.558 1301.5 510 1301.5C47.4421 1301.5 -327.5 941.518 -327.5 497.5C-327.5 53.4821 47.4421 -306.5 510 -306.5C972.558 -306.5 1347.5 53.4821 1347.5 497.5Z" stroke="#c5c6c6"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="1366" height="1024" fill="white"/>
                </clipPath>
                </defs>
                </svg>


              {/* <div className="planet donlon"></div>
              <div className="planet enchai">
              </div>
              <div className="planet jebing"></div>
              <div className="planet sapir"></div>
              <div className="planet lerbin"></div>
              <div className="planet pangasor"></div> */}
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
