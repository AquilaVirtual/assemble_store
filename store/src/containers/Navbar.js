import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

import * as Actions from "../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import "../css/Navbar.css";
class Navbar extends Component {
  constructor() {
    super();
    this.input = React.createRef();
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.actions.searchProducts(this.input.current.value.trim())
    this.input.current.value = ""
    this.props.history.push("/results")
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <NavLink className="navbar-brand" to="/">
          Assemble Store
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto" />
          <form
            className="form-inline my-2 my-lg-0"
            onSubmit={this.handleSubmit}
          >
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search for products"
              aria-label="Search"
              ref={this.input}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
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
)(withRouter(Navbar));
