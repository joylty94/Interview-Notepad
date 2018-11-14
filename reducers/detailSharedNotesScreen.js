import { LOADING, SUCCESS, LIKETYPING, ONSCRAPMODAL, SCRAP } from "../actions/detailSharedNotesScreen";

const initialState ={
  loading: false,
  modal: false
}

export default function(state= initialState, action) {
  switch (action.type){
    case LOADING :
      return{
        ...state,
        loading: true,
      };
    case SUCCESS :
      return{
        ...state,
        loading: false,
        sharedItem: action.sharedItem,
        like: action.like,
        likesCount: action.likesCount
      };
    case LIKETYPING :
      return{
        ...state,
        like: action.like,
        likesCount: action.likesCount
      };
    case ONSCRAPMODAL :
      return{
        ...state,
        modal: !state.modal,
        categoryItem: action.categoryItem
      };
    case SCRAP :
      return{
        ...state,
        modal: !state.modal,
      };
    default :
      return state;
  }
}
