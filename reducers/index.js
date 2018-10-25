import { combineReducers } from "redux";
import noteScreen from "./noteScreen";
import navReducer from "./navigation";
import writingNoteScreen from "./writingNoteScreen";
import categoryListScreen from "./categoryListScreen";

export default combineReducers({
  noteScreen,
  writingNoteScreen,
  categoryListScreen,
  nav: navReducer,
})
