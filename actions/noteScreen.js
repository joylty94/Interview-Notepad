export const LOADING = "noteScreen/LOADING";
export const ONHANDLEMODAL = "noteScreen/ONHANDLEMODAL";
export const OFFHANDLEMODAL = "noteScreen/OFFHANDLEMODAL";
export const SUCCESS = "noteScreen/SUCCESS";


//NoteScreen
export function noteScreenLoading() {
  return{
    type: LOADING
  };
}

export function noteScreenSuccess(currentCategory ,notesItem) {
  return{
    type: SUCCESS,
    currentCategory,
    notesItem
  };
}

export function noteScreenOnHandleModal() {
  return{
    type: ONHANDLEMODAL
  };
}

export function noteScreenOffHandleModal() {
  return{
    type: OFFHANDLEMODAL
  };
}

