import * as firebase from 'firebase';
import { noteScreenLoading, noteScreenOnHandleModal, noteScreenOffHandleModal, noteScreenSuccess } from "../actions/noteScreen";;

export const fetchNoteScreen = () => async (dispatch) => {
  try {
  dispatch(noteScreenLoading())
  const { uid } = firebase.auth().currentUser;
  const snapshot = await firebase.database().ref(`/users/${uid}/currentCategory`).once("value");
  const current = snapshot.val() || [];
  if (current[0] === undefined){
    await firebase.database().ref(`users/${uid}/categorys/`).push({
      categoryName: "메모장",
      number: 1,
    })
    await firebase.database().ref(`users/${uid}/currentCategory/`).set("메모장")
    dispatch(noteScreenSuccess("메모장", []))
  }else {
    const snapshot = await firebase.database().ref(`users/${uid}/${current}`).once("value");
    const notesObject = snapshot.val() || [];
    const notesItem = Object.entries(notesObject).map(([category, article]) => ({
      ...article,
    }));
    console.log("노트 아이탬", notesItem)
    dispatch(noteScreenSuccess(current, notesItem))
  }
  } catch(e) {
    console.log(e);
  }
}

export const fetchcategoryOnModal = () => (dispatch) => {
  dispatch(noteScreenOnHandleModal())
}
