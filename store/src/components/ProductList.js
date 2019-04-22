import React from 'react';

 import ProductItem from './ProductItem';
 import '../css/ProductList.css'

const ProductList =({products, onProductClick}) => {
    const productList = products.map((product, i) => (
     <div key={i}> 
    <ProductItem product={product} 
    onProductClick={onProductClick}
    /> 
    </div>
       ))    
 return <div className="product-list">{productList}</div>

}

export default ProductList;




