import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ExperienceSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="container py-5">
      <div className="row align-items-center">
        {/* Years Box */}
        <div className="col-12 col-md-3 mb-4 mb-md-0" data-aos="zoom-in">
          <div className="border border-4 border-primary text-center py-5">
            <h1 className="display-3 fw-bold text-danger">8</h1>
            <p className="mb-0">Volunteer Connect</p>
          </div>
        </div>

        {/* Heading */}
        <div className="col-12 col-md-4" data-aos="fade-right">
          <h2 className="fw-bold text-danger">
            Years of Experience <br />
            Better Strategy With <br />
            Quality Business
          </h2>
        </div>

        {/* Description */}
        <div className="col-12 col-md-5" data-aos="fade-left">
          <p className="text-muted">
            Volunteer Connect Consultant Ltd is an integrated Facilities
            Management company supporting individual, private and public
            entities to better manage their properties and workplaces since
            2013. Our commitment to best practice Facilities Management has seen
            Hurricane grow into a significant player in the East African Market,
            now serving Kenya, Uganda, Tanzania and Rwanda.
          </p>
          <a
            href="#about"
            className="text-decoration-underline fw-bold text-danger"
          >
            → Who We Are
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
