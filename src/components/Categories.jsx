import React, { Component } from "react";
import image_1 from "../images/image 1.png";
import image_2 from "../images/image 2.png";
import image_5 from "../images/image 5.png";
import image_6 from "../images/image 6.png";
import image_7 from "../images/image 7.png";
import image_8 from "../images/image 8.png";
import image_9 from "../images/image 9.png";
import image_10 from "../images/image 10.png";
import { Link } from "react-router-dom";

class Categories extends Component {
  state = {
    categories: [
      { id: 1, name: "Android Phones", image: image_1 },
      { id: 2, name: "IoS Phones", image: image_2 },
      { id: 1, name: "Beverages", image: image_5 },
      { id: 1, name: "Laptops", image: image_6 },
      { id: 1, name: "Men's Clothing", image: image_7 },
      { id: 1, name: "Watches", image: image_8 },
      { id: 1, name: "Television", image: image_9 },
      { id: 1, name: "Toasters", image: image_10 },
    ],
  };
  render() {
    return (
      <div className="product-categories">
        <div className="product-categories-heading">Categories</div>
        <div className="product-categories-list">
          {this.state.categories.map((category) => (
            <Link to='/product' key={category.id} className="product-categories-item" >
              <div className="product-categories-item-image">
                <img src={category.image} width="100%" alt="" />
              </div>
              <div className="product-categories-item-text">
                {category.name}
              </div>
            </Link>
          ))}
        </div>
        <div className="product-categories-pagination-ellipses">
          <div className="product-categories-pagination-ellipse-big"></div>
          <div className="product-categories-pagination-ellipse-small"></div>
        </div>
      </div>
    );
  }
}

export default Categories;
