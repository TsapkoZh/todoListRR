import { combineReducers } from "redux";
import todoReducer from "./todo/todoReducer";
import filterReducer from "./filter/filterReducer";

export default combineReducers({
	tasks: todoReducer,
	filter: filterReducer,
})