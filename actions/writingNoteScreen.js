export const HANDLECATEGORY = "writingNoteScreen/ONHANDLECATEGORY";
export const HANDLETAG = "writingNoteScreen/HANDLETAG";
export const HANDLESHARE = "writingNoteScreen/HANDLESHARE";
export const CREATING = 'writingNoteScreen/CREATING';

export function WritingNotesScreenHandleCategory(){
  return{
    type: ONHANDLEBUTTON,
  }
}

export function WritingNotesScreenHandleTag(){
  return{
    type: HANDLETAG
  }
}

export function WritingNotesScreenHandleShare(){
  return{
    type: HANDLESHARE
  }
}

export function WritingNotesScreenCreating(){
  return{
    type: CREATING
  }
}
