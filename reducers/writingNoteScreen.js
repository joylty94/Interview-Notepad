import { HANDLECATEGORY, HANDLETAG, HANDLESHARE, CREATING, UPDATING } from "../actions/writingNoteScreen";

const initialState = {
  writingModal: false,
  writingTag: false,
  writingShare: false
}

export default function ( state = initialState, action ) {
  switch(action.type) {
    case HANDLECATEGORY :
      return{
        ...state,
        writingModal: !state.writingModal,
        currentCategory: action.currentCategory,
        categoryItem: action.categoryItem
    };
    case HANDLETAG :
      return{
        ...state,
        writingTag: !state.writingTag
      };
    case HANDLESHARE :
      return{
        ...state,
        writingShare: !state.writingShare
      };
    case CREATING :
      return{
        ...state,
        writingModal: false,
        writingTag: false,
        writingShare: false
      };
    case UPDATING :
      return{
        ...state,
        writingModal: false,
        writingTag: false,
        writingShare: false
      };
    default :
      return state;
  }
}
