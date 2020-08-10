import { ADD_PRODUCT } from "./types";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];

    default: return state;
  }
} 