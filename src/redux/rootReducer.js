import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import filterReducer from "./filterReducer";

export default combineReducers({
    tasks: taskReducer,
    filter: filterReducer,
})