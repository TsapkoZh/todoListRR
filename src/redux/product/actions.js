import { ADD_PRODUCT } from "./types";

export const addProduct = products => ({
  type: ADD_PRODUCT,
  payload: products,
})