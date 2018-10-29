import * as firebase from "firebase";
import { categoryListScreenLoading, categoryListScreenSuccess, categoryListScreenAddCategory,
  categoryListScreenUpdateCategory, categoryListScreenDeleteCategory } from "../actions/categoryListScreen";
import { fetchNoteScreen } from "./noteScreen"

export const fetchCategoryListScreen = () => async (dispatch) => {
  try{
    dispatch(categoryListScreenLoading())
    const { uid } = firebase.auth().currentUser;
    const snapshot = await firebase.database().ref(`/users/${uid}/currentCategory`).once("value");
    const currentCategory = snapshot.val() || [];
    const snapshot2 = await firebase.database().ref(`/users/${uid}/categorys`).once("value");
    const categoryObject = snapshot2.val() || [];
    const categoryItem = Object.entries(categoryObject).map(([id, category]) => ({
      id,
      ...category
    }))
    dispatch(categoryListScreenSuccess(currentCategory, categoryItem))
  } catch(e){
    console.log(e)
  }
}

export const fetchAddCategory = (text) => async (dispatch) => {
  try{
    if( text.length >= 1 ){
      const { uid } = firebase.auth().currentUser;
      const snapshot = await firebase.database().ref(`/users/${uid}/categorys`).once("value");
      const categoryObject = snapshot.val() || [];
      const categoryItem = Object.entries(categoryObject).map(([id, category]) => ({
        id,
        ...category
      }))
      const count = categoryItem.length + 1
      await firebase.database().ref(`/users/${uid}/categorys/`).push({
        categoryName: text,
        count,
        noteCount: 0,
      })
    }
    dispatch(categoryListScreenAddCategory())
    dispatch(fetchCategoryListScreen())
    dispatch(fetchNoteScreen())
  } catch(e){
    console.log(e)
  }
}

export const fetchUpdateCategory = (text, category) => async(dispatch) => {
  try{
    if (text.length >= 1) {
      const { uid } = firebase.auth().currentUser;
      await firebase.database().ref(`/users/${uid}/categorys/${category.id}`).update({
        categoryName: text,
        count: category.count,
        noteCount: category.noteCount
      })
    }
    dispatch(categoryListScreenUpdateCategory())
    dispatch(fetchCategoryListScreen())
    dispatch(fetchNoteScreen())
  } catch(e) {
    console.log(e)
  }
}
export const fetchDeleteCategory = (category) => async(dispatch) => {
  try{
    const { uid } = firebase.auth().currentUser;
    await firebase.database().ref(`/users/${uid}/categorys/${category.id}`).remove()
    dispatch(categoryListScreenDeleteCategory())
    dispatch(fetchCategoryListScreen())
    dispatch(fetchNoteScreen())
  } catch(e) {
    console.log(e)
  }
}
