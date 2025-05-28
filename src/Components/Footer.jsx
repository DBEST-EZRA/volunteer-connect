import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-light pt-5 pb-3 mt-5 border-top">
      <div className="container">
        <div className="row text-start">
          {/* Column 1 */}
          <div className="col-md-3 col-6 mb-4">
            <h6 className="fw-bold text-dark mb-3">About Us</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Company Profile
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Investor Relations
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-md-3 col-6 mb-4">
            <h6 className="fw-bold text-dark mb-3">Products & Services</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Voice
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Data
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Fixed Internet
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  M-PESA
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-3 col-6 mb-4">
            <h6 className="fw-bold text-dark mb-3">Support</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Store Locator
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-md-3 col-6 mb-4">
            <h6 className="fw-bold text-dark mb-3">Connect With Us</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-4 mt-4 border-top">
          <p className="text-muted mb-0">
            &copy; {new Date().getFullYear()} VolunteerConnect. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
