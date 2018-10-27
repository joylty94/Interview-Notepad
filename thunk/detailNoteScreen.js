import * as firebase from "firebase";
import { detailNoteScreenLoading, detailNoteScreenSuccess, detailNoteScreenDelete } from "../actions/detailNoteScreen";
import { fetchNoteScreen} from "./noteScreen";

export const fetchDetailNoteScreen = (item) => async(dispatch, getstate) => {
  dispatch(detailNoteScreenLoading())
  const stateItem = getstate();
  const currentCategory = stateItem.noteScreen.currentCategory;
  const { uid } = firebase.auth().currentUser;
  const snapshot = await firebase.database().ref(`/users/${uid}/${currentCategory}/${item.id}`).once("value")
  const detailCategoryObject = snapshot.val() || [];
  const detailCategory = Object.assign({}, detailCategoryObject, {id: item.id})
  dispatch(detailNoteScreenSuccess(detailCategory))
}

export const fetchDetailNoteScreenDelete = (detailCategory) => async (dispatch, getstate) => {
  const stateItem = getstate();
  const currentCategory = stateItem.noteScreen.currentCategory;
  const { uid } = firebase.auth().currentUser;
  console.log("currentCategory", currentCategory)
  console.log("id", detailCategory)
  await firebase.database().ref(`users/${uid}/${currentCategory}/${detailCategory.id}`).remove()
  dispatch(detailNoteScreenDelete());
  dispatch(fetchNoteScreen())
}
