import { PRODUCTS } from '../constants/constants';

import { data } from  '../dummyData';

console.log("Dummy data", data)
export const loadProducts = () => {
    return {
        type: PRODUCTS,
        payload: data
    }
}



