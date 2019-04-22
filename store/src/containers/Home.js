import React, { Component } from "react";
import * as Actions from "../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ProductList from "../components/ProductList";
import Cart from './Cart';

class Home extends Component {
  componentDidMount = () => {
    this.props.actions.loadProducts();
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-11">
        <ProductList
          products={this.props.products}
          onProductClick={selectedProduct =>
            this.props.actions.addToCart({ selectedProduct })
          }
        />
        </div>
        <div className="col-1">
        <Cart products={this.props.selectedProduct}/>
        </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.products.data,
    selectedProduct: state.product
  };
};

const mapDispatchToAction = dispatch => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToAction
)(Home);
