import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        {/* <p className="footer-subscription-heading">
          Check out our products which are of high quality and affordable!
        </p> */}
        <p className="footer-subscription-text">Talk to Us!</p>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>
              <Link to="/Contact">Find Us ||</Link>
            </h2>
          </div>
          <div class="footer-link-items">
            <h2>
              <Link to="/Contact">Contact ||</Link>
            </h2>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>
              <Link to="https://wa.link/hwbvve">Whatsapp</Link>
            </h2>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              <i className="fas fa-chair" />
              omeOffice
            </Link>
          </div>
          <small class="website-rights">
            Home Office Furnitures © 2021 || All Rights Reserved
          </small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to={{ pathname: "https://wa.link/hwbvve" }}
              target="_blank"
              aria-label="Whatsapp"
            >
              <i class="fab fa-whatsapp"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
