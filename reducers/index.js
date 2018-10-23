import { combineReducers } from "redux";
import noteScreen from "./noteScreen";
import navReducer from "./navigation";
import writingNoteScreen from "./writingNoteScreen";

export default combineReducers({
  noteScreen,
  writingNoteScreen,
  nav: navReducer,
})
