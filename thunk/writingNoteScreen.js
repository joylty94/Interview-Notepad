import * as firebase from "firebase";
import { writingNoteScreenHandleCategory, writingNoteScreenHandleTag, writingNoteScreenHandleShare,
  writingNoteScreenHandleCreating } from "../actions/writingNoteScreen";
import { fetchNoteScreen } from "./noteScreen";

export const fatchCategoryHandleModal = () => (dispatch) => {
  dispatch(writingNoteScreenHandleCategory())
}

export const fatchHandleTag = () => (dispatch) => {
  dispatch(writingNoteScreenHandleTag())
}

export const fatchHandleShare = () => (dispatch) => {
  dispatch(writingNoteScreenHandleShare())
}

export const fatchCreating = (question, answer, tag) => async (dispatch, gestate) => {
  try{
    const { uid } = firebase.auth().currentUser;
    const stateItem = gestate();
    const currentCategory = stateItem.noteScreen.currentCategory;
    const countItem = stateItem.noteScreen.notesItem;
    const count = countItem.length + 1;
    const share = stateItem.writingNoteScreen.writingShare;
    if (share) {
      const notePush = firebase.database().ref(`users/${uid}/${currentCategory}/`).push({
        question,
        answer,
        tag,
        time: firebase.database.ServerValue.TIMESTAMP,
        count
      })
      const categoryNumber = firebase.database().ref(`users/${uid}/categorys`).update({
        count,
      })
      const sharePush = firebase.database().ref(`shared/`).push({
        question,
        answer,
        tag,
        time: firebase.database.ServerValue.TIMESTAMP,
        uid,
      })
      await Promise.all([notePush, categoryNumber, sharePush])
    } else {
      await firebase.database().ref(`users/${uid}/${currentCategory}/`).push({
        question,
        answer,
        tag,
        time: firebase.database.ServerValue.TIMESTAMP,
        count,
        share: share
      })
    }
    dispatch(writingNoteScreenHandleCreating())
    dispatch(fetchNoteScreen())
  } catch(e) {
    console.log(e)
  }
}
