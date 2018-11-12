import * as firebase from "firebase";
import { categoryListScreenLoading, categoryListScreenSuccess, categoryListScreenAddCategory,
  categoryListScreenUpdateCategory, categoryListScreenDeleteCategory } from "../actions/categoryListScreen";
import { fetchNoteScreen } from "./noteScreen";
import { noteScreenSuccess } from "../actions/noteScreen";

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

export const fetchAddCategory = (text) => async (dispatch ,getstate) => {
  try{
    const { uid } = firebase.auth().currentUser;
    const stateItem = getstate();
    const currentCategory = stateItem.categoryListScreen.currentCategory
    const categoryItem = stateItem.categoryListScreen.categoryItem
    const notesItem = stateItem.noteScreen.notesItem
    if( text.length >= 1 ){
      const count = categoryItem.length + 1
      const categoryPush = await firebase.database().ref(`/users/${uid}/categorys/`).push({
        categoryName: text,
        count,
        noteCount: 0,
      })
      categoryItem.push({
        categoryName: text,
        count,
        noteCount: 0,
        id: categoryPush.key
      })
    }
    dispatch(categoryListScreenAddCategory(categoryItem))
    dispatch(noteScreenSuccess(currentCategory, notesItem, categoryItem))
  } catch(e){
    console.log(e)
  }
}

export const fetchUpdateCategory = (text, category) => async(dispatch, getstate) => {
  try{
    const stateItem = getstate()
    const currentCategory = stateItem.categoryListScreen.currentCategory
    const categoryItem = stateItem.categoryListScreen.categoryItem
    const notesItem = stateItem.noteScreen.notesItem
    if (text.length >= 1) {
      const { uid } = firebase.auth().currentUser;
      if(currentCategory===category.categoryName){
        const updateCurrentCategory = firebase.database().ref(`users/${uid}/currentCategory/`).set(`${text}`)
        const updateCategory = firebase.database().ref(`/users/${uid}/categorys/${category.id}`).update({
          categoryName: text,
          count: category.count,
          noteCount: category.noteCount
        })
        await Promise.all([updateCurrentCategory, updateCategory])
        categoryItem.splice((category.count - 1), 1, {
          categoryName: text,
          count: category.count,
          noteCount: category.noteCount
        })
        dispatch(categoryListScreenSuccess(text, categoryItem))
        dispatch(categoryListScreenUpdateCategory(categoryItem))
        dispatch(noteScreenSuccess(text, notesItem, categoryItem))
      } else {
        await firebase.database().ref(`/users/${uid}/categorys/${category.id}`).update({
          categoryName: text,
          count: category.count,
          noteCount: category.noteCount
        })
        categoryItem.splice((category.count -1), 1, {
          categoryName: text,
          count: category.count,
          noteCount: category.noteCount
        })
        dispatch(categoryListScreenUpdateCategory(categoryItem))
        dispatch(noteScreenSuccess(currentCategory, notesItem, categoryItem))
      }
    } else{
      dispatch(categoryListScreenUpdateCategory(categoryItem))
    }
  } catch(e) {
    console.log(e)
  }
}
export const fetchDeleteCategory = (category) => async(dispatch, getstate) => {
  try{
    const { uid } = firebase.auth().currentUser
    const stateItem = getstate()
    const currentCategory = stateItem.categoryListScreen.currentCategory
    const categoryItem = stateItem.categoryListScreen.categoryItem
    const notesItem = stateItem.noteScreen.notesItem
    if (currentCategory===category.categoryName){
      if (categoryItem.length === 1) {
        const deleteCategory = firebase.database().ref(`/users/${uid}/categorys/${category.id}`).remove()
        const updateCurrentCategory = firebase.database().ref(`users/${uid}/currentCategory/`).set(`메모장`)
        await Promise.all([deleteCategory, updateCurrentCategory])
      } else if (categoryItem[0]["categoryName"] === currentCategory) {
        const deleteCategory = firebase.database().ref(`/users/${uid}/categorys/${category.id}`).remove()
        const updateCurrentCategory = firebase.database().ref(`users/${uid}/currentCategory/`).set(`${categoryItem[1]["categoryName"]}`)
        await Promise.all([deleteCategory, updateCurrentCategory])
      } else {
        const deleteCategory = firebase.database().ref(`/users/${uid}/categorys/${category.id}`).remove()
        const updateCurrentCategory = firebase.database().ref(`users/${uid}/currentCategory/`).set(`${categoryItem[0]["categoryName"]}`)
        await Promise.all([deleteCategory, updateCurrentCategory])
      }
      categoryItem.splice((category.count - 1), 1)
    } else {
      await firebase.database().ref(`/users/${uid}/categorys/${category.id}`).remove()
      categoryItem.splice((category.count - 1), 1)
    }
    dispatch(categoryListScreenDeleteCategory(categoryItem))
    dispatch(noteScreenSuccess(currentCategory, notesItem, categoryItem))
  } catch(e) {
    console.log(e)
  }
}
