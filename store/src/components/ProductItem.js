import React from "react";

import '../css/ProductItem.css'
const ProductItem = ({product, onProductClick}) => {    
    return (
        <div>            
      <div className="card">
     <img src={product.url}  className="card-img-top" alt="..."/>
     <div className="card-body">
       <h5 className="card-title">{product.name}</h5>
       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <span className="btn btn-primary" >add to cart</span>
     </div>
   </div> 
        </div>

    )
 
}
export default ProductItem;


