import React, { Component } from "react";

class PaymentOptions extends Component {
  state = {};
  render() {
    return (
      <div className="payment-options">
        <aside className="payment-options-aside">
          <div className="payment-options-aside-item">Pay With</div>
          <div className="payment-options-aside-item">
            <i className="fa fa-credit-card"></i>
            <p className="payment-options-aside-item-para">Card</p>
          </div>
          <div className="payment-options-aside-item">
            <i className="fa fa-bank"></i>
            <p className="payment-options-aside-item-para">Bank</p>
          </div>
          <div className="payment-options-aside-item">
            <i className="fa fa-credit-card"></i>
            <p className="payment-options-aside-item-para">GTB 737</p>
          </div>
          <div className="payment-options-aside-item">
            <i className="fa fa-mobile-phone"></i>
            <p className="payment-options-aside-item-para">Mobile Money</p>
          </div>
          <div className="payment-options-aside-item">
            <i className="fa fa-mobile-phone"></i>
            <p className="payment-options-aside-item-para">Visa QR</p>
          </div>
        </aside>
        <main className="payment-options-main">
          <i className="fa fa-facebook"></i>
          <h1>Enter Your Card Details To Pay</h1>
          <div className="checkout-form-input">
            <label htmlFor="address">Zip Code (Optional)</label>
            <input
              className="checkout-form-input-inp"
              type="text"
              id="address"
            />
          </div>
        </main>
      </div>
    );
  }
}

export default PaymentOptions;
