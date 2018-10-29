export const LOADING = "noteScreen/LOADING";
export const ONHANDLEMODAL = "noteScreen/ONHANDLEMODAL";
export const SUCCESS = "noteScreen/SUCCESS";
export const CURRENTCATEGORYUPDATING = "noteScreen/CURRENTCATEGORYUPDATING";


//NoteScreen
export function noteScreenLoading() {
  return{
    type: LOADING
  };
}

export function noteScreenSuccess(currentCategory, notesItem, categoryItem) {
  return{
    type: SUCCESS,
    currentCategory,
    notesItem,
    categoryItem
  };
}

export function noteScreenOnHandleModal() {
  return{
    type: ONHANDLEMODAL,
  };
}

export function noteScreenCurrentCategoryUpdating(currentCategory) {
  return{
    type: CURRENTCATEGORYUPDATING,
    currentCategory
  };
}
