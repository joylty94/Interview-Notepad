import * as firebase from "firebase"
import { detailSharedNotesScreenLoading, detailSharedNotesScreenSuccess,
  detailSharedNotesScreenLikeTyping, detailSharedNotesScreenOnScrapModal,
  detailSharedNotesScreenScrap } from "../actions/detailSharedNotesScreen";

export const fetchDetailSharedNotes = (item) => async (dispatch) => {
  try{
    dispatch(detailSharedNotesScreenLoading())
    const { uid } = firebase.auth().currentUser
    const snapshot = await firebase.database().ref(`likesForNote/${item.id}`).once("value");
    const likesObject = snapshot.val() || []
    if (likesObject.length === 0) {
      dispatch(detailSharedNotesScreenSuccess(item, false, 0))
    }
    const likesForNote = Object.keys(likesObject)
    if(likesForNote.find(item => item===uid)) {
      dispatch(detailSharedNotesScreenSuccess(item, true, likesForNote.length))
    } else {
      dispatch(detailSharedNotesScreenSuccess(item, false, likesForNote.length))
    }
  } catch(e) {
    console.log(e)
  }
}

export const fetchDetailSharedNotesLikeTyping = () => async (dispatch, getstate) => {
  try{
    const {uid} = firebase.auth().currentUser
    const stateItem = getstate();
    const like = stateItem.detailSharedNotesScreen.like
    const sharedItem = stateItem.detailSharedNotesScreen.sharedItem
    const likesCount = stateItem.detailSharedNotesScreen.likesCount
    if (like) {
      await firebase.database().ref(`likesForNote/${sharedItem.id}/${uid}`).remove()
      const newCount = likesCount - 1
      dispatch(detailSharedNotesScreenLikeTyping(false, newCount))
    } else {
      await firebase.database().ref(`likesForNote/${sharedItem.id}`).update({
        [`${uid}`]: true
      })
      const newCount = likesCount + 1
      dispatch(detailSharedNotesScreenLikeTyping(true, newCount))
    }
  } catch(e) {
    console.log(e)
  }
}

export const fetchDetailSharedNotesOnScrapModal = () => async (dispatch, getstate) => {
  const stateItem = getstate();
  const categoryItem = stateItem.noteScreen.categoryItem
  console.log("이거", categoryItem)
  dispatch(detailSharedNotesScreenOnScrapModal(categoryItem))
}

export const fetchDetailSharedNotesScrap = (categoryName ,id) => async (dispatch, getstate) => {
  try {
    const { uid } = firebase.auth().currentUser
    const stateItem = getstate()
    const sharedItem = stateItem.detailSharedNotesScreen.sharedItem
    const notePush = firebase.database().ref(`users/${uid}/notes/${categoryName}`).push({
      question: sharedItem.question,
      answer: sharedItem.answer,
      tag: sharedItem.tag,
      time: firebase.database.ServerValue.TIMESTAMP,
      share: false
    })
    const categoryNoteCount = firebase.database().ref(`users/${uid}/categorys/${id}`).update({
      categoryName: item.categoryName,
      count: item.count,
      noteCount: item.noteCount + 1,
    })
    await Promise.all([notePush, categoryNoteCount])
    dispatch(detailSharedNotesScreenScrap())
  } catch(e) {
    console.log(e)
  }
}
