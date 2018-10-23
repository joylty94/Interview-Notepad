import { HANDLECATEGORY, HANDLETAG, HANDLESHARE, CREATING } from "../actions/writingNoteScreen";

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
        writingModal: !state.writingModal
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
        ...initialState,
      };
    default :
      return state;
  }
}
