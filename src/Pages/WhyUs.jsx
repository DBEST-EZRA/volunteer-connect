import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WhyUs.css";

const WhyUs = () => {
  return (
    <section className="container my-5 py-4">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 mb-4 mb-md-0 text-center">
          <img
            src="/your-image-path/why-us.png" // Replace with actual image path
            alt="Why Us"
            className="img-fluid rounded shadow-sm"
          />
        </div>

        {/* Text Section */}
        <div className="col-md-6">
          <h4 className="text-danger fw-bold">Why Us</h4>
          <h5 className="fw-bold text-dark">
            Integrity, honesty and focus on putting ourselves in the shoes of
            others.
          </h5>
          <ul className="list-unstyled mt-4">
            {[
              "Full time on site supervisor with real time solutions.",
              "Highly experienced personnel.",
              "Proactive services.",
              "Tailor made systems and processes as agreed with the client.",
              "Specialist contractors on call at all times.",
              "A Service Level Agreement available on request.",
              "Reports provided on request at required frequency.",
            ].map((item, index) => (
              <li className="mb-2 d-flex align-items-start" key={index}>
                <span className="me-2 mt-1 text-danger">■</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
