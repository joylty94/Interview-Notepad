import * as firebase from "firebase";
import { detailNoteScreenLoading, detailNoteScreenSuccess, detailNoteScreenDelete,
  detailNoteScreenModal, detailNoteScreenMove } from "../actions/detailNoteScreen";
import { noteScreenSuccess } from "../actions/noteScreen";
import { fetchNoteScreen } from "./noteScreen";

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

export const fetchDetailNoteScreenDelete = (detailCategory, navigation) => async (dispatch, getstate) => {
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
  const deleteSharedNote = firebase.database().ref(`shared/${detailCategory.id}`).remove()
  const deleteLikes = firebase.database().ref(`likesForNote/${detailCategory.id}`).remove()
  await Promise.all([deletenote, categoryNoteCount, deleteLikes, deleteSharedNote])
  const index = notesItem.findIndex(item => item.id === detailCategory.id)
  notesItem.splice(index, 1)
  dispatch(detailNoteScreenDelete());
  dispatch(fetchNoteScreen())
  navigation.goBack()
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
  const categoryItem = stateItem.noteScreen.categoryItem.slice()
  const currentCategory = stateItem.noteScreen.currentCategory
  const index = categoryItem.findIndex(item => item.categoryName === currentCategory)
  if(index !== -1){
    categoryItem.splice(index, 1)
  }
  dispatch(detailNoteScreenModal(categoryItem))
}

export const fetchDetailNoteScreenMove = (item, category, navigation) => async (dispatch, getstate) => {
  try {
    const { uid } = firebase.auth().currentUser;
    const stateItem = getstate();
    const categoryItem = stateItem.noteScreen.categoryItem;
    const currentCategory = stateItem.noteScreen.currentCategory;
    if (item.length !== 0) {
      dispatch(fetchDetailNoteScreenDelete(item))
      const notePush = firebase.database().ref(`users/${uid}/notes/${category.categoryName}/${item.id}`).set({
        question: item.question,
        answer: item.answer,
        tag: item.tag,
        time: item.time,
        share: item.share
      })
      const currentCategoryItem = categoryItem.find(item => item.categoryName === currentCategory)
      const subCount = firebase.database().ref(`users/${uid}/categorys/${currentCategoryItem.id}`).update({
        categoryName: currentCategoryItem.categoryName,
        count: currentCategoryItem.count,
        noteCount: currentCategoryItem.noteCount -1,
      })
      const addCount = firebase.database().ref(`users/${uid}/categorys/${category.id}`).update({
        categoryName: category.categoryName,
        count: category.count,
        noteCount: category.noteCount + 1,
      })
      await Promise.all([notePush, subCount, addCount])
      dispatch(detailNoteScreenMove())
      dispatch(fetchNoteScreen())
      navigation.goBack()
    }
  } catch(e) {
    console.log(e)
  }
}
