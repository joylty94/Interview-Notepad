export const HANDLECATEGORY = "writingNoteScreen/HANDLECATEGORY";
export const HANDLETAG = "writingNoteScreen/HANDLETAG";
export const HANDLESHARE = "writingNoteScreen/HANDLESHARE";
export const CREATING = 'writingNoteScreen/CREATING';
export const UPDATING = 'writingNoteScreen/UPDATING';

export function writingNoteScreenHandleCategory(currentCategory, categoryItem){
  return{
    type: HANDLECATEGORY,
    currentCategory,
    categoryItem
  }
}

export function writingNoteScreenHandleTag(){
  return{
    type: HANDLETAG
  }
}

export function writingNoteScreenHandleShare(){
  return{
    type: HANDLESHARE
  }
}

export function writingNoteScreenHandleCreating(){
  return{
    type: CREATING,
  }
}

export function writingNoteScreenHandleUpdating(){
  return{
    type: UPDATING,
  }
}
