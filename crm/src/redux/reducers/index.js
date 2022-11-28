import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { userrightsReducer } from "./userrightsReducer";

const reducers = combineReducers({
  user: userReducer,
  userrights: userrightsReducer,
});

export default reducers;
