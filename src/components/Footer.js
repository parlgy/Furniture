// import React from "react";
// import "./Footer.css";
// // import { Button } from "./Button";
// import { Link } from "react-router-dom";

// function Footer() {
//   return (
//     <div className="footer-container">
//       <section className="footer-subscription">
//         <p className="footer-subscription-text">Talk to Us!</p>
//       </section>
//       <div class="footer-links">
//         <div className="footer-link-wrapper">
//           <div class="footer-link-items">
//             <h2>
//               <Link to="/Contact">Find Us ||</Link>
//             </h2>
//           </div>
//           <div class="footer-link-items">
//             <h2>
//               <Link to="/Contact">Contact ||</Link>
//             </h2>
//           </div>
//         </div>
//         <div className="footer-link-wrapper">
//           <div class="footer-link-items">
//             <h2>
//               <Link
//                 target="_blank"
//                 aria-label="Facebook"
//                 to={{ pathname: "https://wa.link/hwbvve" }}
//               >
//                 Whatsapp
//               </Link>
//             </h2>
//           </div>
//         </div>
//       </div>
//       <section class="social-media">
//         <div class="social-media-wrap">
//           <div class="footer-logo">
//             <Link to="/" className="social-logo">
//               <i className="fas fa-chair" />
//               ome Office
//             </Link>
//           </div>

//           <div class="social-icons">
//             <Link
//               class="social-icon-link facebook"
//               to="/"
//               target="_blank"
//               aria-label="Facebook"
//             >
//               <i class="fab fa-facebook-f" />
//             </Link>
//             <Link
//               class="social-icon-link instagram"
//               to="/"
//               target="_blank"
//               aria-label="Instagram"
//             >
//               <i class="fab fa-instagram" />
//             </Link>
//             <Link
//               class="social-icon-link youtube"
//               to={{ pathname: "https://wa.link/hwbvve" }}
//               target="_blank"
//               aria-label="Whatsapp"
//             >
//               <i class="fab fa-whatsapp"></i>
//             </Link>
//           </div>
//           <small class="website-rights" style={{ marginTop: "20px" }}>
//             Home Office Furnitures © 2021 || All Rights Reserved
//           </small>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Footer;
import React from "react";

export default function Footer() {
  return (
    <footer className="relative pt-8 pb-6" style={{backgroundColor: "#242424"}}>
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "100px" }}
      >
        {/* <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-300"
            points="2560 0 2560 100 0 100"
            style={{backgroundColor: "#242424"}}
          ></polygon>
        </svg> */}
      </div>
      <div className="container mx-auto px-4" style={{backgroundColor: "#242424"}}>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-white">
              Let's keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-700">
              Find us on any of these platforms.
            </h5>
            <div className="mt-6">
              <button
                className="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i class="flex fab fa-instagram-square" />
              </button>
              <button
                className="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-facebook-square"></i>
              </button>
              <button
                className="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i class="flex fab fa-whatsapp-square"></i>
              </button>
              
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4 mt-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-white text-lg font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-gray-300 hover:text-gray-300 font-semibold block pb-2 text-sm"
                        href="https://wa.link/hwbvve">About Us
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-300 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://wa.link/hwbvve">Blog
                    </a>
                  </li>
                  
                  <li>
                    <a className="text-gray-300 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://wa.link/hwbvve">Free Products
                    </a>
                  </li>

                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4 ">
                <span className="block uppercase text-white text-lg font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  
                  <li>
                    <a className="text-gray-300 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://wa.link/hwbvve">Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-300 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://wa.link/hwbvve">Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-300 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://wa.link/hwbvve">Contact Us
                    </a>
                  </li>
                </ul>
              
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              Copyright © {new Date().getFullYear()}{" "}Home Office{" "}
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
