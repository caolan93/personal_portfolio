import { combineReducers } from "redux";

import mobileMenuReducer from "./utility";

const rootReducer = combineReducers({
  mobileMenu: mobileMenuReducer,
});

export default rootReducer;
