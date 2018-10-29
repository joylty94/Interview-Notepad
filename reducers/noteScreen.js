import { LOADING, ONHANDLEMODAL, SUCCESS, CURRENTCATEGORYUPDATING } from "../actions/noteScreen";

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
        notesItem: action.notesItem,
        categoryItem: action.categoryItem
    };
    case ONHANDLEMODAL :
      return{
        ...state,
        noteModal: !state.noteModal,
    };
    case CURRENTCATEGORYUPDATING :
      return{
        ...state,
        currentCategory: action.currentCategory,
    };
    default:
      return state;
  }
}
