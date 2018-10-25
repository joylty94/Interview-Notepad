export const LOADING = "categoryListScreen/LOADING"
export const SUCCESS = "categoryListScreen/SUCCESS"

export function categoryListScreenLoading() {
  return {
    type: LOADING
  };
}

export function categoryListScreenSuccess(currentCategory, categoryItem) {
  return {
    type: SUCCESS,
    currentCategory,
    categoryItem
  };
}
