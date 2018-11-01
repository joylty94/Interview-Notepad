export const LOADING = "detailSharedNotesScreen/LOADING";
export const SUCCESS = "detailSharedNotesScreen/SUCCESS";
export const LIKETYPING = "detailSharedNotesScreen/LIKETYPING";
export const ONSCRAPMODAL = "detailSharedNotesScreen/ONSCRAPMODAL";
export const SCRAP = "detailShareNotesScreen/SCRAP"

export function detailSharedNotesScreenLoading() {
  return{
    type: LOADING
  }
}

export function detailSharedNotesScreenSuccess(sharedItem, like, likesCount) {
  return{
    type: SUCCESS,
    sharedItem,
    like,
    likesCount
  }
}

export function detailSharedNotesScreenLikeTyping(like, likesCount) {
  return {
    type: LIKETYPING,
    like,
    likesCount
  }
}

export function detailSharedNotesScreenOnScrapModal(categoryItem) {
  return {
    type: ONSCRAPMODAL,
    categoryItem
  }
}

export function detailSharedNotesScreenScrap() {
  return {
    type: ONSCRAPMODAL,
  }
}
