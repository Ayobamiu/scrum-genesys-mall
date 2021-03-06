import React, { Component } from "react";
import { Link } from "react-router-dom";
import image_12 from "../images/image 12.png";

class Cart extends Component {
  state = {};
  
  render() {
    let itemNo = Number(localStorage.getItem('ItemInCart'));
    return (
      <div className="cart">
        <div className="medium-heading">Cart ({itemNo} Item)</div>
        <table className="cart-table">
          <thead>
            <th>ITEM</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Sub Total</th>
          </thead>
          <tr>
            <td className="cart-table-product">
              <img
                className="cart-table-product-image"
                src={image_12}
                width="300px"
                alt=""
              />
              <p className="cart-table-product-text">
                Seller: Primer Computer Store Notebook 15 Intel Core I3 Laptop
                15.6 Inch 12GB RAM 1TB HDD
              </p>
            </td>
            <td>
              <input
                className="cart-table-quantity-input"
                type="number"
                name="quantity"
                id="quantity"
                value="1"
              />
            </td>
            <td>217, 000</td>
            <td>217, 000</td>
          </tr>
        </table>
        <div dir="rtl">
          <p>
            <strong> Total: ₦ </strong> 217,000
          </p>
          <p>
            <strong>Delivery fee:</strong> Not included yet
          </p>
        </div>
        <div className="cart-call-to-action">
          <Link to='/' className="cart-call-to-action-btn-green">
            Continue Shopping
          </Link>
          <Link to='/checkout' className="cart-call-to-action-btn-white">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    );
  }
}

export default Cart;
