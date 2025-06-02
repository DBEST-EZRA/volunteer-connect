import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import heroImage from "../assets/why us.jpg";

const HeroSection = () => {
  return (
    <section
      className="d-flex align-items-center justify-content-center text-white position-relative"
      style={{
        width: "100vw",
        height: "75vh",
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      ></div>

      {/* Text Content */}
      <div className="position-relative text-center z-1">
        <small className="text-uppercase fw-semibold">
          GET ON THE RIGHT WAY
        </small>
        <h1 className="display-4 fw-bold">Transforming Workplaces</h1>
      </div>
    </section>
  );
};

export default HeroSection;
