import { LOADING, SUCCESS, ADDCATEGORY } from "../actions/categoryListScreen";

const initialState = {
  loading: false,
  addPrompt: false
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
    case ADDCATEGORY:
      return {
        ...state,
        addPrompt: !state.addPrompt
      };
    default:
      return state;
  }
}
