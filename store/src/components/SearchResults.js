import React, { Component } from "react";
import * as Actions from "../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ProductList from "../components/ProductList";
import Cart from "../containers/Cart";

class searchResults extends Component {
  render() {
    const results =
      this.props.results.length > 0 ? (
        <div className="row">
          <div className="col-11">
            <ProductList
              products={this.props.results}
              onProductClick={selectedProduct =>
                this.props.actions.addToCart({ selectedProduct })
              }
            />
          </div>
          <div className="col-1">
            <Cart products={this.props.selectedProduct} />
          </div>
        </div>
      ) : (
        "No Search Results"
      );
    return <div className="container">{results}</div>;
  }
}
const mapStateToProps = state => {
  return {
    results: state.searchResults.data,
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
)(searchResults);
