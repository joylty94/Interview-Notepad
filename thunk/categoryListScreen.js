import * as firebase from "firebase";
import { categoryListScreenLoading, categoryListScreenSuccess, categoryListScreenAddCategory } from "../actions/categoryListScreen";

export const fetchCategoryListScreen = () => async (dispatch) => {
  try{
    dispatch(categoryListScreenLoading())
    const { uid } = firebase.auth().currentUser;
    const snapshot = await firebase.database().ref(`/users/${uid}/currentCategory`).once("value");
    const currentCategory = snapshot.val() || [];
    const snapshot2 = await firebase.database().ref(`/users/${uid}/categorys`).once("value");
    const categoryObject = snapshot2.val() || [];
    const categoryItem = Object.entries(categoryObject).map(([id, category]) => ({
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
        ...category
      }))
      const count = categoryItem.length + 1
      await firebase.database().ref(`/users/${uid}/categorys`).push({
        categoryName: text,
        count,
        noteCount: 0,
      })
    }
    dispatch(categoryListScreenAddCategory())
    dispatch(fetchCategoryListScreen())
  } catch(e){
    console.log(e)
  }
}
