import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        {/* <p className="footer-subscription-heading">
          Check out our products which are of high quality and affordable!
        </p> */}
      </section>
      <p className="copy">
        copyright &copy; Home-Office 2021 || All Rights Reserved
        <script>document.write(new Date().getFullYear());</script>
      </p>
    </div>
  );
}

export default Footer;
