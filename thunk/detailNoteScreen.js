import * as firebase from "firebase";
import { detailNoteScreenLoading, detailNoteScreenSuccess, detailNoteScreenDelete } from "../actions/detailNoteScreen";
import { fetchNoteScreen} from "./noteScreen";

export const fetchDetailNoteScreen = (item) => async(dispatch, getstate) => {
  dispatch(detailNoteScreenLoading())
  const stateItem = getstate();
  const currentCategory = stateItem.noteScreen.currentCategory;
  const { uid } = firebase.auth().currentUser;
  const snapshot = await firebase.database().ref(`/users/${uid}/${currentCategory}/${item.id}`).once("value")
  const detailCategoryObject = snapshot.val() || [];
  const detailCategory = Object.assign({}, detailCategoryObject, {id: item.id})
  dispatch(detailNoteScreenSuccess(detailCategory))
}

export const fetchDetailNoteScreenDelete = (detailCategory) => async (dispatch, getstate) => {
  const { uid } = firebase.auth().currentUser;
  const stateItem = getstate();
  const currentCategory = stateItem.noteScreen.currentCategory;
  const categoryItem = stateItem.noteScreen.categoryItem;
  const category = categoryItem.find(item => item.categoryName === currentCategory)
  const deletenote = firebase.database().ref(`users/${uid}/${currentCategory}/${detailCategory.id}`).remove()
  const categoryNoteCount = firebase.database().ref(`users/${uid}/categorys/${category.id}`).update({
    categoryName: category.categoryName,
    count: category.count,
    noteCount: category.noteCount - 1,
  })
  await Promise.all([deletenote, categoryNoteCount])
  dispatch(detailNoteScreenDelete());
  dispatch(fetchNoteScreen())
}

export const fetchDetailNoteScreenShare = (detailCategory) => async (dispatch, getstate) => {
  const { uid } = firebase.auth().currentUser;
  const stateItem = getstate();
  const currentCategory = stateItem.noteScreen.currentCategory;
  if(detailCategory.share){
    const rmShare = firebase.database().ref(`/shared/${uid}/${detailCategory.id}`).remove()
    const categoryUpdate = firebase.database().ref(`users/${uid}/${currentCategory}/${detailCategory.id}`).update({
      question: detailCategory.question,
      answer: detailCategory.answer,
      tag: detailCategory.tag,
      time: detailCategory.time,
      count: detailCategory.count,
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
    const categoryUpdate = firebase.database().ref(`users/${uid}/${currentCategory}/${detailCategory.id}`).update({
      question: detailCategory.question,
      answer: detailCategory.answer,
      tag: detailCategory.tag,
      time: detailCategory.time,
      count: detailCategory.count,
      share: true
    })
    await Promise.all([addShare, categoryUpdate])
    dispatch(fetchDetailNoteScreen(detailCategory))
  }
}
