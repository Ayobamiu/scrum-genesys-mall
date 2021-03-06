import React, { Component } from "react";

import { Link } from "react-router-dom";
import { getProdcts } from "../services/ProductServices";

class ProductsList extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    const products = getProdcts();
    this.setState({
      products,
    });
  }
  render() {
    return (
      <div className="product-products">
        <div className="product-products-heading">
          <strong>Categories &#62;&#62;</strong> Laptops
        </div>
        <div className="product-products-list">
          {this.state.products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="product-products-item"
            >
              <div className="product-products-item-image">
                <img src={product.image} height="100%" alt="" />
              </div>
              <div className="product-products-item-text">{product.name}</div>
              <div className="product-products-item-price">
                ₦ {product.price}
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductsList;
