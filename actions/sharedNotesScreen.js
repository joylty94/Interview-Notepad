export const LOADING = "sharedNotesScreen/LOADING";
export const SUCCESS = "sharedNotesScreen/SUCCESS";

export function sharedNotesScreenLoading () {
  return {
    type: LOADING
  }
}

export function sharedNotesScreenSuccess(sharedItem) {
  return {
    type: SUCCESS,
    sharedItem
  }
}
