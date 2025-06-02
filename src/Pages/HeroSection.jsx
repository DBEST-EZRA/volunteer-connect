import "bootstrap/dist/css/bootstrap.min.css";
import heroImage from "../assets/why us.jpg";

const HeroSection = () => {
  return (
    <section
      className="text-white position-relative overflow-hidden w-100 d-flex align-items-center"
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
        className="container position-relative z-2 text-center"
        style={{ zIndex: 2 }}
      >
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <small className="text-uppercase fw-semibold">
              GET ON THE RIGHT WAY
            </small>
            <h1 className="fw-bold display-4">Transforming Workplaces</h1>
          </div>
        </div>
      </div>

      {/* Responsive height override */}
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
