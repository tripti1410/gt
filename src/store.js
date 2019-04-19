import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import findingFalcone from "./reducer";

import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(findingFalcone, composeWithDevTools(applyMiddleware(thunk)));

export default store; 