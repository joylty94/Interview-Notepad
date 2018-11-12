export const LOADING = "detailNoteScreen/LOADING";
export const SUCCESS = "detailNoteScreen/SUCCESS";
export const DELETE = "detailNoteScreen/DELETE";
export const MOVE = "detailNoteScreen/MOVE"
export const MODAL = "detailNoteScreen/MODAL"

export function detailNoteScreenLoading() {
  return {
    type: LOADING
  };
}

export function detailNoteScreenSuccess(detailCategory) {
  return {
    type: SUCCESS,
    detailCategory
  };
}

export function detailNoteScreenDelete() {
  return {
    type: DELETE
  }
}

export function detailNoteScreenModal(categoryItem) {
  return {
    type: MODAL,
    categoryItem
  }
}
export function detailNoteScreenMove() {
  return {
    type: MOVE
  }
}
