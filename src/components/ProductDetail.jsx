import React, { Component } from "react";
import { getProdct } from "../services/ProductServices";

class ProductDetail extends Component {
  state = {
    product: {},
    cart: null,
  };
  componentDidMount() {
    const Id = this.props.match.params.id;
    const product = getProdct(Number(Id));
    const cart = JSON.parse(localStorage.getItem("cart"));
    this.setState({
      product,
      cart,
    });
    // this.cart = localStorage.get('cart')
  }

  addProductToCart = () => {
    let currentCart = this.state.cart;
    currentCart.push(this.state.product.id);
    localStorage.setItem("cart", JSON.stringify(currentCart));
    this.updateCartIcon();
  };
  updateCartIcon = () => {
    let itemNo = Number(localStorage.getItem("ItemInCart"));
    // add 1 to no of itm
    let noOfItemsInCart = Number(itemNo) + 1;
    // update the dom
    document.getElementById("cartItems").textContent = noOfItemsInCart;
    //set the local storage
    localStorage.setItem("ItemInCart", noOfItemsInCart);
  };

  render() {
    const product = this.state.product;
    return (
      <div className="product-details-page">
        <div className="product-details-page-head">
          <strong>Laptops &#62; &#62; </strong> {product.name}
        </div>
        <div className="product-details-page-main">
          <div className="product-details-page-main-image">
            <img src={product.image} height="100%" alt="" />
          </div>
          <div className="product-details-page-main-details-and-button">
            <div className="product-details-page-main-details">
              <h1 className="product-details-page-main-details-head">
                {product.name}
              </h1>
              <p className="product-details-page-main-details-para">
                Brand: {product.brand} | Similar products from {product.brand}
              </p>

              <h1 className="product-details-page-main-details-price">
                ₦ {product.price}
              </h1>
              <p className="product-details-page-main-details-view-more">
                View more
              </p>
            </div>

            <div to="#" className="product-details-page-main-button">
              <i className="fa fa-shopping-cart"></i>
              <p
                className="product-details-page-main-button-text"
                onClick={this.addProductToCart}
              >
                Add To Cart
              </p>
            </div>
          </div>
        </div>
        <div className="product-details-page-sub">
          <div className="product-details-page-sub-key-features">
            <div className="product-details-page-sub-key-features-image">
              <img src={product.image} height="100%" alt="" />
            </div>
            <div className="product-details-page-sub-key-features-text">
              <h4 className="product-details-page-sub-key-features-text-head">
                KEY FEATURES
              </h4>
              <p className="product-details-page-sub-key-features-text-para">
                HP Notebook – – Intel® Core™ i3-8130U (2.2 GHz base frequency,
                up to 4 GHz with Intel® Turbo Boost Technology, 4 MB cache, 2
                cores), 15.6″ diagonal HD SVA WLED-backlit touch screen (1366 x
                768) Display, 12 GB DDR4-2400 SDRAM (1 x 4 GB, 1 x 8 GB), 1 TB
                5400 rpm SATA, Integrated Intel® UHD Graphics 620, DVD-Writer,
                Full-size island-style keyboard with numeric keypad, 802.11b/g/n
                (1×1) Wi-Fi® and Bluetooth® 4.2 combo, 1 multiformat SD media
                card reader, 3-cell Battery, Dual speakers, Windows 10 Home 64,
                Warranty
              </p>
            </div>
          </div>
          <div className="product-details-page-sub-key-features">
            <div className="product-details-page-sub-key-features-text">
              <h4 className="product-details-page-sub-key-features-text-head">
                SPECIFICATIONS
              </h4>
              <p className="product-details-page-sub-key-features-text-para">
                SKU: HP246EL1MQ2WSNAFAMZ Processor Type: Intel Core i3 Display
                Features: Full HD Display Size (inches): 15.6 Hard Disk (GB): 1
                Operating System: Windows 10 Internal Memory(GB): 12 Model:
                notebook 15 Product Line: Taofeek computer Weight (kg): 3
              </p>
            </div>
            <div className="product-details-page-sub-key-features-image">
              <p className="product-details-page-sub-key-features-view-less">
                View less
              </p>
              <div className="product-details-page-sub-key-features-button">
                <i className="fa fa-shopping-cart"></i>
              </div>
            </div>
          </div>
          <div className="product-details-page-sub-specification"></div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
