import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import * as Actions from "../actions";
import { bindActionCreators } from "redux";

import { connect } from "react-redux";

import "../css/Order.css";

class Order extends Component {
  render() {
    return (
      <div className="">
        <div className="Header">Check Out</div>
        <div className="container order-container">
          <div className="row">
            <div className="col-6">
              <form>
                <div className="form-group">
                  <label htmlFor="inputAddress">Name on Card</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="Name on Card"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress2">Card Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="XXXX XXXX XXXX XXXX"
                  />
                </div>
                <div className="form-group">
                  <form method="post">
                    <div className="form-group">
                      <label className="control-label" htmlFor="date">
                        Expiration Date
                      </label>
                      <input
                        className="form-control"
                        id="date"
                        name="date"
                        placeholder="MM/DD/YYY"
                        type="text"
                      />
                    </div>
                    <div className="form-group" />
                  </form>
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress2">CVV</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="CVV"
                  />
                </div>
              </form>
            </div>
            <div className="col-6">
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">First Name</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Last Name</label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword4"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress2">Address 2</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputCity">City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="inputState">State</label>
                    <select id="inputState" className="form-control">
                      <option select>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                  </div>
                </div>
              </form>
            </div>
            <div className="ctn">
              <div className="form-group">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label" v="gridCheck">
                    Billing address as the same
                  </label>
                </div>
              </div>
              <NavLink to="/complete">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.props.actions.clearCart}
                >
                  PLACE ORDER
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToAction = dispatch => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};
export default connect(
  null,
  mapDispatchToAction
)(Order);
