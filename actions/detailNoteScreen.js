export const LOADING = "detailNoteScreen/LOADING";
export const SUCCESS = "detailNoteScreen/SUCCESS";
export const DELETE = "detailNoteScreen/DELETE";
export const SHARE = "detailNoteScreen/SHARE"

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

export function detailNoteScreenShare() {
  return {
    type: SHARE
  }
}
