import { LOADING, SUCCESS } from "../actions/sharedNotesScreen";

const initialState = {
  loading: false,
}

export default function(state = initialState, action) {
  switch(action.type) {
    case LOADING :
      return{
        ...state,
        loading: true
      };
    case SUCCESS :
      return{
        ...state,
        sharedItem: action.sharedItem
      }
    default :
      return state
  }
}
