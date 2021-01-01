import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import ProductDetail from "./components/ProductDetail";
import ProductsList from "./components/ProductsList";
import ThankYou from "./components/ThankYou";

class MainRoutes extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route path="/thank-you" component={ThankYou} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/cart" component={Cart} />
        <Route path="/products" component={ProductsList} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/" exact component={ProductsList} />
      </Switch>
    );
  }
}

export default MainRoutes;
