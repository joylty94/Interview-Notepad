import { LOADING, ONHANDLEMODAL, SUCCESS } from "../actions/noteScreen";

const initialState = {
  loading: false,
  noteModal: false
}

export default function ( state = initialState, action) {
  switch(action.type) {
    case LOADING :
      return{
        ...state,
        loading: true
    };
    case SUCCESS :
      return{
        ...state,
        loading: false,
        currentCategory: action.currentCategory,
        notesItem: action.notesItem
    };
    case ONHANDLEMODAL :
      return{
        ...state,
        noteModal: !state.noteModal,
        categoryItem: action.categoryItem
    };
    default:
      return state;
  }
}
