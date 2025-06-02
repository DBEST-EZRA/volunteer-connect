import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Services.css";

const services = [
  {
    title: "HYGIENE SERVICES",
    description:
      "Hygiene services that are effective, efficient and unobtrusive.",
    icon: "/icons/rocket.png",
  },
  {
    title: "PEST CONTROL",
    description: "Provides specialist pest control services.",
    icon: "/icons/target.png",
  },
  {
    title: "WASTE MANAGEMENT",
    description:
      "Hurricane global makes good business sense to clear all junk from your premises.",
    icon: "/icons/chart.png",
  },
  {
    title: "COMMERCIAL LANDSCAPING",
    description:
      "Process development helps to maintain, set up and implement and ensure.",
    icon: "/icons/circle.png",
  },
  {
    title: "LABOUR OUTSOURCING",
    description:
      "Our expertise helps you to take control, leave out the complexity, make",
    icon: "/icons/tools.png",
  },
  {
    title: "GENERAL BUILDING REPAIR AND MAINTENANCE",
    description: "As reactive and planned property maintenance specialists.",
    icon: "/icons/bar.png",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="container py-5">
      <div className="row g-4">
        {services.map((service, idx) => (
          <div
            className="col-md-6 col-lg-4"
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <div className="service-card p-4 border h-100 shadow-sm">
              <div className="mb-3 text-center">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="service-icon"
                />
              </div>
              <h5 className="text-uppercase fw-bold text-primary">
                {service.title}
              </h5>
              <p className="text-muted">{service.description}</p>
              <a
                href="#"
                className="read-more text-danger d-inline-flex align-items-center"
              >
                <span className="me-1">➔</span> Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
