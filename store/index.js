import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

const initialState = {};
export default store = createStore(rootReducer, applyMiddleware(thunk, middleware));
