import * as firebase from "firebase";
import { writingNoteScreenHandleCategory, writingNoteScreenHandleTag, writingNoteScreenHandleShare,
  writingNoteScreenHandleCreating } from "../actions/writingNoteScreen";

export const fatchCategoryHandleModal = () => (dispatch) => {
  dispatch(writingNoteScreenHandleCategory())
}

export const fatchHandleTag = () => (dispatch) => {
  dispatch(writingNoteScreenHandleTag())
}

export const fatchHandleShare = () => (dispatch) => {
  dispatch(writingNoteScreenHandleShare())
}

export const fatchCreating = (question, answer) => async (dispatch, gestate) => {
  const { uid } = firebase.auth().currentUser;
  const stateItem = gestate();
  const currentCategory = stateItem.noteScreen.currentCategory;
  await firebase.database().ref(`users/${uid}/${currentCategory}/`).push({
    question,
    answer,
    time: firebase.database.ServerValue.TIMESTAMP,
    count: 1
  })
  dispatch(writingNoteScreenHandleCreating())
}
