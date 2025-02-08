import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-6 mb-3">
            <h5>MyStore</h5>
            <p>
              Contact:{" "}
              <a href="mailto:info@mystore.com" className="text-light">
                info@mystore.com
              </a>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="col-md-6">
            <h5>Follow Us</h5>
            <div className="d-flex justify-content-center gap-3">
              <a
                href="https://facebook.com"
                className="text-light text-decoration-none"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                className="text-light text-decoration-none"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                className="text-light text-decoration-none"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <hr className="border-light my-3" />
        <p className="mb-0">
          &copy; {new Date().getFullYear()} MyStore. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
