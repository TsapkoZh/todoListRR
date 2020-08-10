import { combineReducers } from "redux";

import documentHeaderReducer from "./documentHeader/documentHeaderReducer.js";
import productReducer from "./product/productReducer.js";

export default combineReducers({
	documentHeader: documentHeaderReducer,
	products: productReducer
})