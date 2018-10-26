import { LOADING, SUCCESS, ADDCATEGORY, UPDATECATEGORY, DELETECATEGORY } from "../actions/categoryListScreen";

const initialState = {
  loading: false,
  addPrompt: false,
  updatePrompt: false
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
    case UPDATECATEGORY:
      return {
        ...state,
        updatePrompt: !state.updatePrompt
      };
    case DELETECATEGORY:
      return {
        ...state,
        updatePrompt: !state.updatePrompt
      };
    default:
      return state;
  }
}
