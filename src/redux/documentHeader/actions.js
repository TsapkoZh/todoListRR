import { ADD_DOCUMENT_HEADER } from "./types";

export const addDate = date => ({
  type: ADD_DOCUMENT_HEADER,
  payload: date,
})
