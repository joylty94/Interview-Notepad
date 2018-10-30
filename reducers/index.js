import { combineReducers } from "redux";
import noteScreen from "./noteScreen";
// import navReducer from "./navigation";
import writingNoteScreen from "./writingNoteScreen";
import categoryListScreen from "./categoryListScreen";
import detailNoteScreen from "./detailNoteScreen";

export default combineReducers({
  noteScreen,
  writingNoteScreen,
  categoryListScreen,
  detailNoteScreen,
  // nav: navReducer,
})
