export const HANDLECATEGORY = "writingNoteScreen/HANDLECATEGORY";
export const HANDLETAG = "writingNoteScreen/HANDLETAG";
export const HANDLESHARE = "writingNoteScreen/HANDLESHARE";
export const CREATING = 'writingNoteScreen/CREATING';

export function writingNoteScreenHandleCategory(){
  return{
    type: HANDLECATEGORY,
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
