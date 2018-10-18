import { LOADING, ONHANDLEMODAL, OFFHANDLEMODAL, SUCCESS } from "../actions/noteScreen";

const initialState = {
  loading: false,
  modal: false
}

export default function ( state = initialState, action) {
  switch(action.type) {
    case LOADING:
      return{
        ...state,
        loading: true
    };
    case SUCCESS:
      return{
        ...state,
        loading: false,
        notesItem: aciton.notesItem
    };
    case ONHANDLEMODAL:
      return{
        ...state,
        modal: true
    };
    case OFFHANDLEMODAL:
      return{
        ...state,
        modal: false
    };
    default:
      return state;
  }
}
