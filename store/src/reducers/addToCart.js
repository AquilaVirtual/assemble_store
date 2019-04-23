import { ADD_TO_CART, CLEAR_CART } from "../constants/constants";

const initialState = [];

export default function addToCartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
     
    case CLEAR_CART:  
    return [];
    default:
      return state;
  }
}
