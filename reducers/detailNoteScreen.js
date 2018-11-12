import { LOADING, SUCCESS, DELETE, MOVE, MODAL } from "../actions/detailNoteScreen";

const initialState = {
  loading: false,
  modal: false,
}

export default function (state = initialState, action) {
  switch (action.type){
    case LOADING :
      return {
        ...state,
        loading: true,
      };
    case SUCCESS :
      return {
        ...state,
        loading: false,
        detailCategory: action.detailCategory
      }
    case DELETE :
      return {
        ...state,
      }
    case MOVE :
      return {
        ...state
      }
    case MODAL :
      return {
        ...state,
        modal: !state.modal,
        categoryItem: action.categoryItem
      }
    default:
      return state;
  }
}
