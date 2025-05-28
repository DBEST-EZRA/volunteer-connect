import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Header = () => {
  return (
    <header className="sticky-top shadow-sm bg-white">
      <nav className="navbar navbar-expand-lg container">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src="/logo.png" alt="Logo" height="40" className="me-2" />
          <span className="fw-bold text-danger">VolunteerConnect</span>
        </a>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {[
              "Home",
              "About Us",
              "IFM",
              "Services",
              "Our Sustainability",
              "Career",
              "Contact",
            ].map((item) => (
              <li className="nav-item" key={item}>
                <a
                  className="nav-link fw-semibold text-dark px-3 py-2 hover-effect"
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Button */}
          <div className="d-flex">
            <a
              href="#account"
              className="btn btn-success rounded-pill d-flex align-items-center px-3 fw-semibold"
            >
              <i className="bi bi-person-circle me-2"></i> My Account
            </a>
          </div>
        </div>
      </nav>

      {/* Custom hover effect */}
      <style>{`
        .hover-effect:hover {
          color: red !important;
        }
      `}</style>
    </header>
  );
};

export default Header;
