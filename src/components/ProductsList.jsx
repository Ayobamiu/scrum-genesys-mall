import React, { Component } from "react";
import image_22 from "../images/image 22.png";
import image_23 from "../images/image 23.png";
import image_24 from "../images/image 24.png";
import image_26 from "../images/image 26.png";
import image_27 from "../images/image 27.png";

import { Link } from "react-router-dom";

class ProductsList extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "Apple MacBook Pro 16inch Corei7 / 512GB",
        price: "950,000",
        image: image_22,
      },
      {
        id: 2,
        name: "Hp Notebook 15 Intel Pentium Silver 4GB RAM 500GB HDD Win 10",
        price: "150,990",
        image: image_23,
      },
      {
        id: 3,
        name: "Mtk High Quality 10.1 Inch Android 6.0 Netbook Computer Laptop",
        price: "54,999",
        image: image_24,
      },
      {
        id: 4,
        name:
          "Asus E203MAH Intel Celeron 500GB HDD 4GB RAM 11.6-Inch Windows 10",
        price: "129,980",
        image: image_26,
      },
      {
        id: 5,
        name:
          "Asus E203MAH Intel Celeron 500GB HDD 4GB RAM 11.6-Inch Windows 10",
        price: "129,980",
        image: image_26,
      },
      {
        id: 6,
        name: "Apple Macbook Pro (2020)",
        price: "675,000",
        image: image_27,
      },
    ],
  };
  render() {
    return (
      <div className="product-products">
        <div className="product-products-heading">
          <strong>Categories >></strong> Laptops
        </div>
        <div className="product-products-list">
          {this.state.products.map((product) => (
            <Link
              to="/product"
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
