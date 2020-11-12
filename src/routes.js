import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Categories from "./components/Categories";
import ProductDetail from "./components/ProductDetail";

class MainRoutes extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route path="/product" component={ProductDetail} />
        <Route path="/" exact component={Categories} />
      </Switch>
    );
  }
}

export default MainRoutes;
