import React, { Component } from "react";
import Genesys from "../images/Genesys.png";

class ThankYou extends Component {
  state = {};
  render() {
    return (
      <div className="thank-you-page">
        <img src={Genesys} alt="" />
        <h1 className="thank-you-page-head">Thank You For Your Patronage.</h1>
        <p className="thank-you-page-para">
          Your order was completely successful
        </p>
        <button className="thank-you-page-button">Home</button>
      </div>
    );
  }
}

export default ThankYou;
