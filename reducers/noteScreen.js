import { LOADING, ONHANDLEMODAL, SUCCESS, CURRENTCATEGORYUPDATING, SEARCHING } from "../actions/noteScreen";

const initialState = {
  loading: false,
  noteModal: false,
  search: false,
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
    case SEARCHING :
      return{
        ...state,
        search: !state.search,
        searchItem: action.searchItem
    };
    default:
      return state;
  }
}
