import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Services.css";

const services = [
  {
    title: "HYGIENE SERVICES",
    description:
      "Hygiene services that are effective, efficient and unobtrusive.",
    icon: "bi-rocket",
  },
  {
    title: "PEST CONTROL",
    description: "Provides specialist pest control services.",
    icon: "bi-bug",
  },
  {
    title: "WASTE MANAGEMENT",
    description:
      "Hurricane global makes good business sense to clear all junk from your premises.",
    icon: "bi-trash",
  },
  {
    title: "COMMERCIAL LANDSCAPING",
    description:
      "Process development helps to maintain, set up and implement and ensure.",
    icon: "bi-tree",
  },
  {
    title: "LABOUR OUTSOURCING",
    description:
      "Our expertise helps you to take control, leave out the complexity, make",
    icon: "bi-person-gear",
  },
  {
    title: "GENERAL BUILDING REPAIR AND MAINTENANCE",
    description: "As reactive and planned property maintenance specialists.",
    icon: "bi-building-gear",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="container py-5">
      <div className="row g-4">
        {services.map((service, index) => (
          <div
            className="col-md-6 col-lg-4"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="service-card p-4 h-100 border shadow-sm d-flex align-items-start gap-3">
              {/* Icon on the left */}
              <i className={`bi ${service.icon} fs-1 text-danger`}></i>

              {/* Content */}
              <div>
                <h5 className="text-uppercase fw-bold text-black">
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
