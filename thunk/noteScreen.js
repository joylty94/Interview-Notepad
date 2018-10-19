import * as firebase from 'firebase';
import { noteScreenLoading, noteScreenOnHandleModal, noteScreenOffHandleModal, noteScreenSuccess } from "../actions/noteScreen";;

export const fetchNoteScreen = () => async (dispatch) => {
  dispatch(noteScreenLoading())
  // const { uid } = firebase.auth().currentUser;
  // console.log(uid)
  const snapshot = await firebase.database().ref("users/visit").once("value");
  const visit = snapshot.val() || [];
  if(visit === undefined){
    try {
      await firebase.database().ref(`users/categorys/`).set("메모장")
    } catch (e) {
      console.log(e);
    }
  }
  try {
    const snapshot = await firebase.database().ref(`${uid}/categorys`).once("value");
    const categorysObject = snapshot.val() || [];
    const categoryItem = Object.entries(categorysObject).map(([category, article]) => ({
      ...article,
      id,
    }));
    dispatch(noteScreenSuccess(categoryItem))
  } catch(e) {
    console.log(e);
  }
}

export const fetchcategoryOnModal = () => (dispatch) => {
  dispatch(noteScreenOnHandleModal())
}

export const fetchcategoryOffModal = () => (dispatch) => {
  console.log("디스패치")
  dispatch(noteScreenOffHandleModal())
}
