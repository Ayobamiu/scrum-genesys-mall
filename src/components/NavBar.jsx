import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Genesys from "../images/Genesys.png";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="main-navbar">
        <NavLink to="/" className="main-navbar-logo">
          <img src={Genesys} width="100%" alt="" />
        </NavLink>
        <div className="main-navbar-search">
          <i className="fa fa-search main-navbar-search-icon"></i>
          <input
            className="main-navbar-search-input"
            type="search"
            name="search"
            id="search"
            placeholder="Search"
          />
          <i className="fa fa-camera main-navbar-search-icon"></i>
          <i className="fa fa-microphone main-navbar-search-icon"></i>
        </div>
        <NavLink to="/cart" className="main-navbar-item">
          <i className="fa fa-shopping-cart"></i>
          <span className="main-navbar-item-sub-text">Cart</span>
        </NavLink>
        <NavLink to="/help" className="main-navbar-item">
          <i className="fa fa-question-circle-o"></i>
          <span className="main-navbar-item-sub-text">Help</span>
        </NavLink>
      </div>
    );
  }
}

export default NavBar;
