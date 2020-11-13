import React, { Component } from "react";

class PaymentOptions extends Component {
  state = {};
  render() {
    return (
      <div className="payment-options">
        <aside className="payment-options-aside">
          <div className="payment-options-aside-item">
            <strong>PAY WITH</strong>
          </div>
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
          <div className="payment-options-main-icon">
            <i className="fa fa-paypal fa-2x"></i>
          </div>
          <h1 className="payment-options-main-heading">
            Enter Your Card Details To Pay
          </h1>
          <div className="payment-form-input">
            <label htmlFor="address">Zip Code (Optional)</label>
            <input
              className="payment-form-input-inp"
              type="text"
              id="address"
            />
          </div>
          <div className="payment-form-input-small">
            <label htmlFor="address">Zip Code (Optional)</label>
            <input
              className="payment-form-input-inp"
              type="text"
              id="address"
            />
          </div>
          <div className="payment-form-input-small">
            <label htmlFor="address">Zip Code (Optional)</label>
            <input
              className="payment-form-input-inp"
              type="text"
              id="address"
            />
          </div>
          <div className="cart-call-to-action">
            <button className="cart-call-to-action-btn-green">
              Continue Shopping
            </button>
            <button className="cart-call-to-action-btn-white">
              Proceed to payment
            </button>
          </div>
        </main>
      </div>
    );
  }
}

export default PaymentOptions;
