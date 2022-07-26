import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          
          <div className="col">
            <h4>INSOFTLINK SOFTWARE</h4>
            <h1 className="list-unstyled">
              <li>insoftlink@gmail.com</li>
              <li> 9540349392</li>
              <li>Office Address: E 44/3, Pocket D, Okhla</li>
              <li>Phase II, Okhla Industrial Area, New Delhi,</li>
              
            </h1>
          </div>
          
          <div className="col">
            <h4>Company</h4>
            <ui className="list-unstyled">
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Contact Us</li>
            </ui>
          </div>
          
          <div className="col">
            <h4>Services</h4>
            <ui className="list-unstyled">
              <li>Designing</li>
              <li>Website Development</li>
              <li>SEO and Marketing</li>
              <li>Content Writing</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} INSOFTLINK SOFTWAREn | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;