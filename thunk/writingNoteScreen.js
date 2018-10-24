import * as firebase from "firebase";
import { writingNoteScreenHandleCategory, writingNoteScreenHandleTag, writingNoteScreenHandleShare,
  writingNoteScreenHandleCreating } from "../actions/writingNoteScreen";
import { noteScreenSuccess } from "../actions/noteScreen";
const highestTimeoutId = setTimeout(() => ';');
for (let i = 0; i < highestTimeoutId; i++) {
  clearTimeout(i);
}

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
      const sharePush = firebase.database().ref(`shared/`).push({
        question,
        answer,
        tag,
        time: firebase.database.ServerValue.TIMESTAMP,
        uid,
      })
      await Promise.all([notePush, sharePush])
    } else {
      await firebase.database().ref(`users/${uid}/${currentCategory}/`).push({
        question,
        answer,
        tag,
        time: firebase.database.ServerValue.TIMESTAMP,
        count
      })
    }
    dispatch(writingNoteScreenHandleCreating())
    const snapshot = await firebase.database().ref(`users/${uid}/${currentCategory}`).once("value");
    const notesObject = snapshot.val() || [];
    const notesItem = Object.entries(notesObject).map(([category, article]) => ({
      ...article,
    }));
    const sortNotesItem = notesItem.reverse()
    dispatch(noteScreenSuccess(currentCategory, sortNotesItem))
  } catch(e) {
    console.log(e)
  }
}
