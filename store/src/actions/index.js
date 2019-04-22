import { PRODUCTS, ADD_TO_CART } from '../constants/constants';

import { data } from  '../dummyData';

console.log("Dummy data", data)
export const loadProducts = () => {
    return {
        type: PRODUCTS,
        payload: data
    }
}
export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }

}

