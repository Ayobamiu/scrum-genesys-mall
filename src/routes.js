import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import Categories from "./components/Categories";
import Checkout from "./components/Checkout";
import PaymentOptions from "./components/PaymentOptions";
import ProductDetail from "./components/ProductDetail";
import ProductsList from "./components/ProductsList";

class MainRoutes extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route path="/pay" component={PaymentOptions} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/cart" component={Cart} />
        <Route path="/products" component={ProductsList} />
        <Route path="/product" component={ProductDetail} />
        <Route path="/" exact component={Categories} />
      </Switch>
    );
  }
}

export default MainRoutes;
