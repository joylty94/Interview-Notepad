export const LOADING = "categoryListScreen/LOADING";
export const SUCCESS = "categoryListScreen/SUCCESS";
export const ADDCATEGORY = "categoryListScreen/ADDCATEGORY";
export const UPDATECATEGORY = "categoryListScreen/UPDATECATEGORY";
export const DELETECATEGORY = "categoryListScreen/DELETECATEGORY";

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

export function categoryListScreenAddCategory(categoryItem) {
  return {
    type: ADDCATEGORY,
    categoryItem
  };
}

export function categoryListScreenUpdateCategory(categoryItem) {
  return {
    type: UPDATECATEGORY,
    categoryItem
  };
}

export function categoryListScreenDeleteCategory() {
  return {
    type: DELETECATEGORY
  };
}
