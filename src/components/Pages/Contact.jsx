import React from "react";
import "../../App.css";
import "./Contact.css";
import { Link } from "react-router-dom";
// import { Button } from "@material-ui/core";
// import { FormControl, TextField } from "@material-ui/core";
// import { Grid } from "@material-ui/core
// import Footer from "../Footer";

const Contact = () => {
  return (
    <>
      {/* <img src="/images/fun2.jpg" alt="" /> */}
      <div className="contact-section">
        <h1>Reach Us!</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt
          <br /> ut labore et dolore magna aliquyam erat, sed diam voluptua. At
          vero eos et accusam et justo duo dolores <br />
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
        </p>
        <div class="contact-icons">
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
        <h3>@Home-Office</h3>
        <div className="address">
          <p>
            info@mih.co.ke <br />
            P.O. Box 158 – 50100,
            <br /> Nairobi
          </p>
          <p>
            0734544564
            <br />
            Mega Mall, Nairobi,
            <br /> 2nd Floor
          </p>
        </div>
      </div>
      <p className="copy">
        copyright &copy; Home-Office 2021 || All Rights Reserved
        {/* <script>document.write(new Date().getFullYear());</script>  */}
      </p>
      {/* <Footer /> */}
    </>
  );
};

export default Contact;
