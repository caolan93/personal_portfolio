import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import mobileMenuReducer from "./utility";

const rootReducer = combineReducers({
  mobileMenu: mobileMenuReducer,
});

export default rootReducer;
