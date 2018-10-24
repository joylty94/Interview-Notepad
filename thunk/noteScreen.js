import * as firebase from 'firebase';
import { noteScreenLoading, noteScreenOnHandleModal, noteScreenSuccess } from "../actions/noteScreen";

export const fetchNoteScreen = () => async (dispatch) => {
  try {
  dispatch(noteScreenLoading())
  const { uid } = firebase.auth().currentUser;
  const snapshot = await firebase.database().ref(`/users/${uid}/currentCategory`).once("value");
  const current = snapshot.val() || [];
  if (current[0] === undefined){
    await firebase.database().ref(`users/${uid}/categorys/`).push({
      categoryName: "메모장",
      count: 0,
      number: 0,
    })
    await firebase.database().ref(`users/${uid}/currentCategory/`).set("메모장")
    dispatch(noteScreenSuccess("메모장", []))
  }else {
    const snapshot = await firebase.database().ref(`users/${uid}/${current}`).once("value");
    const notesObject = snapshot.val() || [];
    const notesItem = Object.entries(notesObject).map(([category, article]) => ({
      ...article,
    }));
    const sortNotesItem = notesItem.reverse()
    dispatch(noteScreenSuccess(current, sortNotesItem))
  }
  } catch(e) {
    console.log(e);
  }
}

export const fetchcategoryOnModal = () => async (dispatch, gestate) => {
  try{
    const { uid } = firebase.auth().currentUser;
    const stateItem = gestate();
    const modal = stateItem.noteScreen.noteModal
    if(!modal){
      const snapshot = await firebase.database().ref(`users/${uid}/categorys`).once("value")
      const categoryObject = snapshot.val() || [];
      const categoryItem = Object.entries(categoryObject).map(([category, article]) => ({
        ...article
      }))
      dispatch(noteScreenOnHandleModal(categoryItem))
    } else {
      const categoryItem = stateItem.noteScreen.categoryItem
      dispatch(noteScreenOnHandleModal(categoryItem))
    }
  } catch(e) {
    console.log(e)
  }
}
