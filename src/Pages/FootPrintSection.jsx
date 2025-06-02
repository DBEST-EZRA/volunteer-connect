import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import mapImage from "../assets/why us.jpg"; // Replace with actual path

const AnimatedCircle = ({
  percent,
  strokeColor,
  label,
  description,
  trigger,
}) => {
  const [offset, setOffset] = useState(100);

  useEffect(() => {
    if (trigger) {
      setOffset(100 - percent);
    }
  }, [trigger, percent]);

  return (
    <div className="col-6 position-relative text-center" data-aos="zoom-in">
      <div className="position-relative d-inline-block">
        <svg width="150" height="150" viewBox="0 0 36 36">
          <circle
            cx="18"
            cy="18"
            r="15.9155"
            fill="none"
            stroke="#eee"
            strokeWidth="4"
          />
          <circle
            cx="18"
            cy="18"
            r="15.9155"
            fill="none"
            stroke={strokeColor}
            strokeWidth="4"
            strokeDasharray="100"
            strokeDashoffset={offset}
            style={{
              transition: "stroke-dashoffset 1.5s ease-out",
            }}
          />
        </svg>
        <div className="position-absolute top-50 start-50 translate-middle fw-bold fs-4">
          <CountUp end={trigger ? percent : 0} duration={1.5} />%
        </div>
      </div>
      <p className="fw-semibold mt-2" style={{ color: strokeColor }}>
        {label}
      </p>
      <p className="fw-semibold">{description}</p>
    </div>
  );
};

const FootprintSection = () => {
  const sectionRef = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target); // only trigger once
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="container py-5" ref={sectionRef}>
      <div className="row align-items-center g-5">
        {/* Left Column */}
        <div className="col-lg-6" data-aos="fade-right">
          <h6 className="text-danger fw-bold">Our Footprint</h6>
          <h2 className="fw-bold text-black">
            Volunteer Connect Consultant Ltd
          </h2>
          <p className="text-muted">
            Transforming Workplaces in East Africa Community.
          </p>

          <div className="row text-center mt-4">
            <AnimatedCircle
              percent={98}
              strokeColor="#000"
              label="Soft Services"
              description="Up to 98% inhouse"
              trigger={inView}
            />
            <AnimatedCircle
              percent={75}
              strokeColor="#dc143c"
              label="Hard Services"
              description="Up to 75% inhouse"
              trigger={inView}
            />
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="col-lg-6 text-center" data-aos="fade-left">
          <img
            src={mapImage}
            alt="Why Us"
            className="img-fluid rounded shadow"
            style={{ maxHeight: "400px", width: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

export default FootprintSection;
