import { combineReducers } from "redux";
import authReducers from "./authReducers";
import { reducer as formReducer } from "redux-form";
import streamReducer from "./streamreducers";

export default combineReducers({
  auth: authReducers,
  form: formReducer,
  streams: streamReducer
});
