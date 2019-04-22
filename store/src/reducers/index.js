import { combineReducers } from "redux";
import productsReducer from "./products";
import addToCartReducer from "./addToCart";

const rootReducer = combineReducers({
  products: productsReducer,
  product: addToCartReducer
});

export default rootReducer;
