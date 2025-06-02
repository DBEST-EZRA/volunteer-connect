import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./SupportServices.css";
import image1 from "../assets/why us.jpg";

const services = [
  {
    title: "Fumigation Services",
    image: image1,
  },
  {
    title: "Office Support Services",
    image: image1,
  },
  {
    title: "Labour Outsourcing",
    image: image1,
  },
];

const SupportServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="container py-5">
      <div className="row g-4">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="col-12 col-md-6 col-lg-4"
            data-aos="zoom-in"
            data-aos-delay={idx * 100}
          >
            <div className="card border-0 shadow-sm h-100">
              <img
                src={service.image}
                alt={service.title}
                className="card-img-top"
                style={{ height: "240px", objectFit: "cover" }}
              />
              <div className="card-body text-center bg-white">
                <h5 className="card-title fw-bold text-black mb-0">
                  {service.title}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupportServices;
