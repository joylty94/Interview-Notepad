import * as firebase from "firebase";
import { writingNoteScreenHandleCategory, writingNoteScreenHandleTag, writingNoteScreenHandleShare,
  writingNoteScreenHandleCreating, writingNoteScreenHandleUpdating } from "../actions/writingNoteScreen";
import { fetchNoteScreen } from "./noteScreen";
import { fetchDetailNoteScreen } from "./detailNoteScreen";

export const fatchCategoryHandleModal = () => (dispatch, gestate) => {
  const stateItem = gestate();
  const currentCategory = stateItem.noteScreen.currentCategory;
  const categoryItem = stateItem.noteScreen.categoryItem;
  dispatch(writingNoteScreenHandleCategory(currentCategory, categoryItem))
}

export const fatchHandleTag = () => (dispatch) => {
  dispatch(writingNoteScreenHandleTag())
}

export const fatchHandleShare = () => (dispatch) => {
  dispatch(writingNoteScreenHandleShare())
}

export const fatchCreating = (question, answer, tag, navigation) => async (dispatch, gestate) => {
  try{
    const { uid } = firebase.auth().currentUser;
    const stateItem = gestate();
    const currentCategory = stateItem.noteScreen.currentCategory;
    const share = stateItem.writingNoteScreen.writingShare;
    const categoryItem = stateItem.noteScreen.categoryItem;
    const category = categoryItem.find(item => item.categoryName === currentCategory)
    if (share) {
      const notePush = firebase.database().ref(`users/${uid}/notes/${currentCategory}`).push({
        question,
        answer,
        tag,
        time: firebase.database.ServerValue.TIMESTAMP,
        share: share
      })
      const categoryNoteCount = firebase.database().ref(`users/${uid}/categorys/${category.id}`).update({
        categoryName: category.categoryName,
        count: category.count,
        noteCount: category.noteCount + 1,
      })
      const sharePush = firebase.database().ref(`shared/${notePush.key}`).set({
        question,
        answer,
        tag,
        time: firebase.database.ServerValue.TIMESTAMP,
        uid
      })
      const likePush = firebase.database().ref(`likesForNote`).set(`${ notePush.key }`)
      await Promise.all([notePush, categoryNoteCount, sharePush, likePush])
    } else {
      const notePush = firebase.database().ref(`users/${uid}/notes/${currentCategory}`).push({
        question,
        answer,
        tag,
        time: firebase.database.ServerValue.TIMESTAMP,
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
    navigation.goBack()
  } catch(e) {
    console.log(e)
  }
}

export const fatchUpdating = (category, question, answer, tag, navigation) => async(dispatch, gestate) => {
  try {
    const { uid } = firebase.auth().currentUser;
    const stateItem = gestate();
    const currentCategory = stateItem.noteScreen.currentCategory;
    const share = stateItem.writingNoteScreen.writingShare;
    if (share) {
      const notePush = firebase.database().ref(`users/${uid}/notes/${currentCategory}/${category.id}`).update({
        question,
        answer,
        tag,
        time: firebase.database.ServerValue.TIMESTAMP,
        share: share
      })
      const sharePush = firebase.database().ref(`shared/${category.id}`).update({
        question,
        answer,
        tag,
        time: firebase.database.ServerValue.TIMESTAMP,
        uid
      })
      await Promise.all([notePush, sharePush])
    } else {
      const notePush = firebase.database().ref(`users/${uid}/notes/${currentCategory}/${category.id}`).update({
        question,
        answer,
        tag,
        time: firebase.database.ServerValue.TIMESTAMP,
        share: share
      })
      const noteDelete = firebase.database().ref(`shared/${category.id}`).remove()
      await Promise.all([notePush, noteDelete])
    }
    dispatch(writingNoteScreenHandleUpdating())
    dispatch(fetchDetailNoteScreen(category))
    dispatch(fetchNoteScreen())
    navigation.goBack()
  } catch (e) {
    console.log(e)
  }
}
