import * as firebase from "firebase";
import { sharedNotesScreenLoading, sharedNotesScreenSuccess } from "../actions/sharedNotesScreen";

export const fetchSharedNotesScreen = () => async (dispatch) => {
  try{
    dispatch(sharedNotesScreenLoading())
    const snapshot = await firebase.database().ref(`shared`).once("value")
    const sharedObject = snapshot.val() || []
    const sharedItem = Object.entries(sharedObject).map(([id, item]) => ({
      id,
      ...item
    }))
    dispatch(sharedNotesScreenSuccess(sharedItem))
  } catch(e) {
    console.log(e)
  }
}
