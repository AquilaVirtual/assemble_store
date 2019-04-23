import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";

import "../css/Checkout.css";

class Checkout extends Component {
  render() {
    //compressArray arranges selected products in an array.
    // When a shopper adds more than one quatity of the same product (duplicates),
    //this creates an object and puts the item and count in it.
    function compressArray(original) {
      let compressed = [];
      let copy = original.slice(0);
      for (let i = 0; i < original.length; i++) {
        let myCount = 0;
        for (let j = 0; j < copy.length; j++) {
          if (JSON.stringify(original[i]) === JSON.stringify(copy[j])) {
            myCount++;
            delete copy[j];
          }
        }
        if (myCount > 0) {
          let a = {};
          a.value = original[i];
          a.count = myCount;
          compressed.push(a);
        }
      }

      return compressed;
    }

    let totalOrder = this.props.products.reduce(function(prev, cur) {
      return prev + cur.selectedProduct.unitPrice;
    }, 0);

    let compressedArray = compressArray(this.props.products);

    const items = compressedArray.map((product, i) => {
      return (
        <tbody key={i}>
          <tr>
            <th scope="row" />
            <td>
              <img
                src={product.value.selectedProduct.url}
                width="140"
                height="100"
                alt="..."
                style={{ borderRadius: "24%" }}
              />
            </td>
            <td>
              <div>
                <div>{product.value.selectedProduct.name}</div>
                <div>sku#{product.value.selectedProduct.sku}</div>
              </div>
            </td>
            <td>{product.count}</td>
            <td>${product.value.selectedProduct.unitPrice * product.count}</td>
          </tr>
        </tbody>
      );
    });
    return (
      <div>
        <div className="container">
          {this.props.products.length ? (
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Your Cart</th>
                    <th scope="col" />
                    <th scope="col" />
                    <th scope="col">Quatity</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                {items}
                <span className="footer">
                  <span>Subtotal</span>{" "}
                  <span className="total">${totalOrder}</span>
                </span>
              </table>
              <NavLink to="/order">
                <button
                  className="btn btn-primary checkout"
                  style={{ float: "right" }}
                >
                  check out
                </button>
              </NavLink>
            </div>
          ) : (
            <div style={{ marginTop: "40px" }}>
              You have no item(s) to check out.
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.product
  };
};

export default connect(mapStateToProps)(Checkout);
