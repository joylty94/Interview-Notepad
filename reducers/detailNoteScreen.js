import { LOADING, SUCCESS, DELETE } from "../actions/detailNoteScreen";

const initialState = {
  loading: false,
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
    default:
      return state;
  }
}
