import React, { Component } from "react";
import image_11 from "../images/image 11.png";

class ProductDetail extends Component {
  state = {};
  render() {
    return (
      <div className="product-details-page">
        <div className="product-details-page-head">
          <strong>Laptops >> </strong> Notebook 15 Intel Core I3 Laptop 15.6
          Inch 12GB RAM 1TB HDD
        </div>
        <div className="product-details-page-main">
          <div className="product-details-page-main-image">
            <img src={image_11} height="100%" alt="" />
          </div>
          <div className="product-details-page-main-details-and-button">
            <div className="product-details-page-main-details">
              <h1 className="product-details-page-main-details-head">
                Hp Notebook 15 Intel Core I3 Laptop 15.6 Inch 12GB RAM 1TB HDD
              </h1>
              <p className="product-details-page-main-details-para">
                Brand: Hp | Similar products from Hp
              </p>

              <h1 className="product-details-page-main-details-price">
                ₦ 217,000
              </h1>
              <p className="product-details-page-main-details-view-more">
                View more
              </p>
            </div>
            <div className="product-details-page-main-button">
              <i className="fa fa-shopping-cart"></i>
              <p className="product-details-page-main-button-text">
                Add To Cart
              </p>
            </div>
          </div>
        </div>
        <div className="product-details-page-sub">
          <div className="product-details-page-sub-key-features">
            <div className="product-details-page-sub-key-features-image">
              <img src={image_11} height="100%" alt="" />
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
              <p className="product-details-page-main-details-view-more">
                View more
              </p>
              <div className="product-details-page-main-button">
                <i className="fa fa-shopping-cart"></i>
                <p className="product-details-page-main-button-text">
                  Add To Cart
                </p>
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
