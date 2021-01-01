import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <div className="footer-logo-and-links">
          <div className="footer-logo">GENESYS MALL</div>
          <div className="footer-links">
            <div className="footer-link">About</div>
            <div className="footer-link">Contact Us</div>
            <div className="footer-link">FAQ</div>
            <div className="footer-link">Blog</div>
          </div>
          <div className="footer-socials">
            <div className="footer-social-link">
              <i className="fa fa-facebook"></i>
            </div>
            <div className="footer-social-link">
              <i className="fa fa-instagram"></i>
            </div>
            <div className="footer-social-link">
              <i className="fa fa-twitter"></i>
            </div>
          </div>
        </div>
        <div className="footer-right-reserve">
          2020 @ All rights reserved by Genesys Mall
        </div>
      </div>
    );
  }
}

export default Footer;
