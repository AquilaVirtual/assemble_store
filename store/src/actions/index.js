import { PRODUCTS, ADD_TO_CART, CLEAR_CART, SEARCH_PRODUCTS  } from '../constants/constants';

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
export const clearCart = () => {
    return {
        type: CLEAR_CART,     
    }

}
export const searchProducts = (searchTerm) => {
    const results = data.filter(product => {
        return product.name.toString().toLocaleLowerCase() === searchTerm.toString().toLocaleLowerCase()
    })  
    return {
        type: SEARCH_PRODUCTS, 
        payload: results    
    }

}



