import * as firebase from "firebase";
import { detailNoteScreenLoading, detailNoteScreenSuccess, detailNoteScreenDelete,
  detailNoteScreenModal, detailNoteScreenMove } from "../actions/detailNoteScreen";
import { noteScreenSuccess } from "../actions/noteScreen";

export const fetchDetailNoteScreen = (item) => async(dispatch, getstate) => {
  dispatch(detailNoteScreenLoading())
  const stateItem = getstate();
  const currentCategory = stateItem.noteScreen.currentCategory;
  const { uid } = firebase.auth().currentUser;
  const snapshot = await firebase.database().ref(`/users/${uid}/notes/${currentCategory}/${item.id}`).once("value")
  const detailCategoryObject = snapshot.val() || [];
  const detailCategory = Object.assign({}, detailCategoryObject, {id: item.id})
  dispatch(detailNoteScreenSuccess(detailCategory))
}

export const fetchDetailNoteScreenDelete = (detailCategory) => async (dispatch, getstate) => {
  const { uid } = firebase.auth().currentUser;
  const stateItem = getstate();
  const currentCategory = stateItem.noteScreen.currentCategory;
  const categoryItem = stateItem.noteScreen.categoryItem;
  const notesItem = stateItem.noteScreen.notesItem;
  const category = categoryItem.find(item => item.categoryName === currentCategory)
  const deletenote = firebase.database().ref(`users/${uid}/notes/${currentCategory}/${detailCategory.id}`).remove()
  const categoryNoteCount = firebase.database().ref(`users/${uid}/categorys/${category.id}`).update({
    categoryName: category.categoryName,
    count: category.count,
    noteCount: category.noteCount - 1,
  })
  await Promise.all([deletenote, categoryNoteCount])
  const index = notesItem.findIndex(item => item.id === detailCategory.id)
  notesItem.splice(index, 1)
  dispatch(detailNoteScreenDelete());
  dispatch(noteScreenSuccess(currentCategory, notesItem ,categoryItem ))
}

export const fetchDetailNoteScreenShare = (detailCategory) => async (dispatch, getstate) => {
  const { uid } = firebase.auth().currentUser;
  const stateItem = getstate();
  const currentCategory = stateItem.noteScreen.currentCategory;
  if(detailCategory.share){
    const rmShare = firebase.database().ref(`/shared/${uid}/${detailCategory.id}`).remove()
    const categoryUpdate = firebase.database().ref(`users/${uid}/notes/${currentCategory}/${detailCategory.id}`).update({
      question: detailCategory.question,
      answer: detailCategory.answer,
      tag: detailCategory.tag,
      time: detailCategory.time,
      share: false
    })
    await Promise.all([rmShare, categoryUpdate])
    dispatch(fetchDetailNoteScreen(detailCategory))
  } else {
    const addShare = firebase.database().ref(`/shared/${uid}/${detailCategory.id}`).set({
      question: detailCategory.question,
      answer: detailCategory.answer,
      tag: detailCategory.tag,
      time: detailCategory.time,
    })
    const categoryUpdate = firebase.database().ref(`users/${uid}/notes/${currentCategory}/${detailCategory.id}`).update({
      question: detailCategory.question,
      answer: detailCategory.answer,
      tag: detailCategory.tag,
      time: detailCategory.time,
      share: true
    })
    await Promise.all([addShare, categoryUpdate])
    dispatch(fetchDetailNoteScreen(detailCategory))
  }
}

export const fetchDetailNoteScreenModal = () => async (dispatch, getstate) => {
  const stateItem = getstate();
  const categoryItem = stateItem.noteScreen.categoryItem;
  dispatch(detailNoteScreenModal(categoryItem))
}

export const fetchDetailNoteScreenMove = (item, category) => async (dispatch) => {
  try {
    const { uid } = firebase.auth().currentUser;
    if (item.length !== 0) {
      dispatch(fetchDetailNoteScreenDelete(item))
      const notePush = firebase.database().ref(`users/${uid}/notes/${category.categoryName}/${item.id}`).set({
        question: item.question,
        answer: item.answer,
        tag: item.tag,
        time: item.time,
        share: item.share
      })
      const categoryNoteCount = firebase.database().ref(`users/${uid}/categorys/${category.id}`).update({
        categoryName: category.categoryName,
        count: category.count,
        noteCount: category.noteCount + 1,
      })
      await Promise.all([notePush, categoryNoteCount])
      dispatch(detailNoteScreenMove())
    }
  } catch(e) {
    console.log(e)
  }
}
