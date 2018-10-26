import * as firebase from 'firebase';
import { noteScreenLoading, noteScreenOnHandleModal, noteScreenSuccess } from "../actions/noteScreen";

export const fetchNoteScreen = () => async (dispatch) => {
  try {
  dispatch(noteScreenLoading())
  const { uid } = firebase.auth().currentUser;
  const snapshot = await firebase.database().ref(`/users/${uid}/currentCategory`).once("value");
  const current = snapshot.val() || [];
  if (current[0] === undefined){
    initCategory = firebase.database().ref(`users/${uid}/categorys/`).push({
      categoryName: "메모장",
      count: 1,
      noteCount: 0,
    })
    initCurrent = firebase.database().ref(`users/${uid}/currentCategory/`).set("메모장")
    await Promise.all([initCategory, initCurrent])
    const snapshot = await firebase.database().ref(`users/${uid}/categorys`).once("value");
    const categoryObject = snapshot.val() || [];
    const categoryItem = Object.entries(categoryObject).map(([id, article]) => ({
      id,
      ...article,
    }));
    dispatch(noteScreenSuccess("메모장", [], categoryItem))
  }else {
    const snapshot = await firebase.database().ref(`users/${uid}/${current}`).once("value");
    const notesObject = snapshot.val() || [];
    const notesItem = Object.entries(notesObject).map(([id, article]) => ({
      id,
      ...article,
    }));
    const sortNotesItem = notesItem.reverse()
    const snapshot2 = await firebase.database().ref(`users/${uid}/categorys`).once("value");
    const categoryObject = snapshot2.val() || [];
    const categoryItem = Object.entries(categoryObject).map(([id, article]) => ({
      id,
      ...article,
    }));
    dispatch(noteScreenSuccess(current, sortNotesItem, categoryItem))
  }
  } catch(e) {
    console.log(e);
  }
}

export const fetchcategoryOnModal = () => async (dispatch) => {
  dispatch(noteScreenOnHandleModal())
}
