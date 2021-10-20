import { combineReducers, createStore } from "redux";
import userLoginReducer from "./reducers/userLogin";

const store = createStore(
  combineReducers({
    userLogin: userLoginReducer
  }),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
