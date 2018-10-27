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
    const categoryItem = stateItem.noteScreen.categoryItem;
    const category = categoryItem.find(item => item.categoryName === currentCategory)
    if (share) {
      const notePush = firebase.database().ref(`users/${uid}/${currentCategory}`).push({
        question,
        answer,
        tag,
        time: firebase.database.ServerValue.TIMESTAMP,
        count,
        share: share
      })
      const categoryNoteCount = firebase.database().ref(`users/${uid}/categorys/${category.id}`).update({
        categoryName: category.categoryName,
        count: category.count,
        noteCount: category.noteCount + 1,
      })
      const sharePush = firebase.database().ref(`shared/${uid}/${notePush.key}`).set({
        question,
        answer,
        tag,
        time: firebase.database.ServerValue.TIMESTAMP,
      })
      await Promise.all([notePush, categoryNoteCount, sharePush])
    } else {
      const notePush = firebase.database().ref(`users/${uid}/${currentCategory}`).push({
        question,
        answer,
        tag,
        time: firebase.database.ServerValue.TIMESTAMP,
        count,
        share: share
      })
      const categoryNoteCount = firebase.database().ref(`users/${uid}/categorys/${category.id}`).update({
        categoryName: category.categoryName,
        count: category.count,
        noteCount: category.noteCount + 1,
      })
      await Promise.all([notePush, categoryNoteCount])
    }
    dispatch(writingNoteScreenHandleCreating())
    dispatch(fetchNoteScreen())
  } catch(e) {
    console.log(e)
  }
}
