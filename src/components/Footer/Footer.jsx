import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";


const Footer = () => {
    return (
      <footer className="bg-dark text-white mt-4">
        <div className="container-fluid">
          <div className="row pt-4">
            <div className="col-md-4">
              <h4 className="mb-4">About Us</h4>
              <p>
              Our mission is to empower students with the opportunity to monetize their skills and become financially independent while pursuing their education.
              </p>
            </div>
            <div className="col-md-4">
              <h4 className="mb-4">Contact Us</h4>
              <ul className="list-unstyled">
                <li>1234 Main St.</li>
                <li>Anytown, USA 12345</li>
                <li>(555) 555-5555</li>
                <li>HuskyHive@gmail.com</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4 className="mb-4">Connect with Us</h4>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="mailto:anikrishna3@gmail.com">
                    <i className="fab fa-facebook fa-lg"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="mailto:anikrishna3@gmail.com">
                    <i className="fab fa-twitter fa-lg"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="mailto:anikrishna3@gmail.com">
                    <i className="fab fa-instagram fa-lg"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="bg-light" />
          <div className="row pb-4">
            <div className="col-md-6">
              <p>&copy; 2023 Huskyhive. All rights reserved.</p>
            </div>
            <div className="col-md-6">
              <ul className="list-inline float-end">
                <li className="list-inline-item">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="list-inline-item">
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;