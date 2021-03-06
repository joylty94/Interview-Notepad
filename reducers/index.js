import { combineReducers } from "redux";
import noteScreen from "./noteScreen";
import writingNoteScreen from "./writingNoteScreen";
import categoryListScreen from "./categoryListScreen";
import detailNoteScreen from "./detailNoteScreen";
import sharedNotesScreen from "./sharedNotesScreen";
import detailSharedNotesScreen from "./detailSharedNotesScreen";

export default combineReducers({
  noteScreen,
  writingNoteScreen,
  categoryListScreen,
  detailNoteScreen,
  sharedNotesScreen,
  detailSharedNotesScreen
})
