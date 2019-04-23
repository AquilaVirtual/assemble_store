import { combineReducers } from "redux";
import productsReducer from "./products";
import addToCartReducer from "./addToCart";
import searchProductsReducer from "./searchProducts"

const rootReducer = combineReducers({
  products: productsReducer,
  product: addToCartReducer,
  searchResults: searchProductsReducer
});

export default rootReducer;
