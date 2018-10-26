export const LOADING = "categoryListScreen/LOADING";
export const SUCCESS = "categoryListScreen/SUCCESS";
export const ADDCATEGORY = "categoryListScreen/ADDCATEGORY";

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

export function categoryListScreenAddCategory() {
  return {
    type: ADDCATEGORY
  };
}
