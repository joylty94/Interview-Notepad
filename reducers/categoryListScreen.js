import { LOADING, SUCCESS } from "../actions/categoryListScreen";

const initialState = {
  loading: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case SUCCESS:
      return {
        ...state,
        loading: false,
        currentCategory: action.currentCategory,
        categoryItem: action.categoryItem
      };
    default:
      return state;
  }
}
