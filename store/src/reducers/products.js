import { PRODUCTS } from "../constants/constants";

const initialState = {
  data: []
};
export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCTS:
      console.log("IN products reducers", state);
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
