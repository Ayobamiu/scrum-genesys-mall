import React, { Component } from "react";
import PaystackHookExample from './Payment'
class Checkout extends Component {
  state = {};
  render() {
    return (
      <div className="checkout">
        <div className="checkout-heading">Billing Information</div>
        <div className="checkout-form">
          <div className="checkout-form-input">
            <label htmlFor="address">Email</label>
            <input
              className="checkout-form-input-inp"
              type="email"
              id="email"
            />
          </div>
          <div className="checkout-form-input">
            <label htmlFor="address">Address</label>
            <input
              className="checkout-form-input-inp"
              type="text"
              id="address"
            />
          </div>
          <div className="checkout-form-input">
            <label htmlFor="address">City</label>
            <input
              className="checkout-form-input-inp"
              type="text"
              id="address"
            />
          </div>
          <div className="checkout-form-input">
            <label htmlFor="address">Country</label>
            <input
              className="checkout-form-input-inp"
              type="text"
              id="address"
            />
          </div>
          <div className="checkout-form-input">
            <label htmlFor="address">Zip Code (Optional)</label>
            <input
              className="checkout-form-input-inp"
              type="text"
              id="address"
            />
          </div>
        </div>
        <div className="cart-call-to-action">
          <button className="cart-call-to-action-btn-green">
            Pay on Delivery
          </button>
          <PaystackHookExample/>
        </div>
      </div>
    );
  }
}
export default Checkout;
