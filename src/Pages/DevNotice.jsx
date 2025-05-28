import React from "react";

const DevNotice = () => {
  return (
    <div className="bg-warning text-dark text-center py-2 px-3 shadow-sm">
      <p className="mb-0 small">
        🚧 This website is currently under development by{" "}
        <a
          href="https://wa.me/254712405172"
          target="_blank"
          rel="noopener noreferrer"
          className="fw-bold text-dark text-decoration-underline"
        >
          Beta Designs
        </a>
        .
      </p>
    </div>
  );
};

export default DevNotice;
