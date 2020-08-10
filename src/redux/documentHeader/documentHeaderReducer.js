import { ADD_DOCUMENT_HEADER, } from "./types";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_DOCUMENT_HEADER:
      return action.payload;

    default: return state;
  }
} 