import "bootstrap/dist/css/bootstrap.min.css";
import heroImage from "../assets/why us.jpg";

const HeroSection = () => {
  return (
    <section
      className="text-white position-relative overflow-hidden w-100"
      style={{
        minHeight: "75vh",
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", zIndex: 1 }}
      ></div>

      {/* Text Content */}
      <div
        className="container h-100 d-flex align-items-center justify-content-center text-center position-relative"
        style={{ zIndex: 2 }}
      >
        <div className="px-3">
          <small className="text-uppercase fw-semibold">
            GET ON THE RIGHT WAY
          </small>
          <h1 className="fw-bold display-4">Transforming Workplaces</h1>
        </div>
      </div>

      {/* Responsive height override for smaller devices */}
      <style>
        {`
          @media (max-width: 767.98px) {
            section {
              min-height: 50vh !important;
            }

            h1 {
              font-size: 1.8rem;
            }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
