const initialState = {
  initialEnble: true,
  joinEnble: false,
  LoginEnble: false
}

export default function ( state = initialState, action ) {
  switch(action.type) {
    case JOIN_PAGINATION:
      return {
        ...state,
        initialEnble: false,
        joinEnble: true
      };
    case LOGIN_PAGINATION:
      return {
        ...state,
        initialEnble: false,
        LoginEnble: true
      };
    default:
      return state;
  }
}
