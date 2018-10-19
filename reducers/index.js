import { combineReducers } from "redux";
import loginScreen from "./loginScreen";
import noteScreen from "./noteScreen";
import navReducer from "./navigation";

export default combineReducers({
  noteScreen,
  nav: navReducer,
})
