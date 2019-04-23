import { SEARCH_PRODUCTS } from "../constants/constants";

const initialState = {
  data: []
};
export default function searchProductsReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_PRODUCTS:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
