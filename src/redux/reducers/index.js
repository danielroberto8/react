import { combineReducers } from "redux";
import todo from "./todo";
import user from "./user";

export default combineReducers({
  todo: todo,
  user: user,
});
