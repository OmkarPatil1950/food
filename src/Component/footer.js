import React from "react";
// import './footer.css'
import MouseSmoke from "./smokemouse";
// import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react'
export default function Footer() {
  return (
    <>
      {/*    <!-- Component: Dark Theme Footer --> */}
      <footer className="w-full text-slate-400">
        {/*      <!-- Main footer --> */}
        {/* <MouseSmoke> </MouseSmoke> */}

        <div className=" pt-1 bg-gray-900 py-16 sm:py-24 lg:py-32">
          <div className="pt-1 pb-1 text-sm border-t border-gray-900 bg-gray-900">
            <div className="container px-6 mx-auto">
              <h1
                style={{
                  color: "white",
                  marginBottom: "50px",
                  fontWeight: "bold",
                }}
              >
                WE COOK ONLY{" "}
                <span style={{ color: "red", fontWeight: "bold" }}>
                  THE MOST
                </span>{" "}
                <br />
                <span style={{ color: "red" }}>DELICIOUS</span> MEALS
              </h1>

              <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                <nav
                  className="col-span-2 md:col-span-4 lg:col-span-3"
                  aria-labelledby="footer-product-dark"
                >
                  <h3
                    className="mb-4 ml-7"
                    style={{ color: "orange" }}
                    id="footer-product-dark"
                  >
                    ADDRESS
                  </h3>

                  <ul>
                    <h5 style={{ color: "white", height: "5px" }}>
                      Germany — 785 Street, Office 478 Berlin, De 81566
                    </h5>
                  </ul>
                </nav>
                <nav
                  className="col-span-2 md:col-span-4 lg:col-span-3"
                  aria-labelledby="footer-docs-dark"
                >
                  <h3
                    className="mb-4  ml-7 "
                    style={{ color: "orange" }}
                    id="footer-docs-dark"
                  >
                    SAY HELLO
                  </h3>
                  <ul>
                    <li className="mb-2 leading-6">
                      <a
                        href="javascript:void(0)"
                        className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                        style={{
                          textDecoration: "underline",
                          color: "white",
                          fontSize: "16px",
                        }}
                      >
                        info@email.com
                      </a>
                    </li>

                    <li
                      className="mb-2 leading-6"
                      style={{
                        color: "white",
                        fontSize: "16px",
                      }}
                    >
                      1245636987
                    </li>
                  </ul>
                </nav>
                <nav
                  className="col-span-2 md:col-span-4 lg:col-span-3"
                  aria-labelledby="footer-about-dark"
                >
                  <h3
                    className="mb-4 ml-7"
                    style={{ color: "orange" }}
                    id="footer-product-dark"
                  >
                    SOCIAL
                  </h3>
                  <ul>
                    <li className="mb-2 leading-6">
                      <a
                        href="/about"
                        className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                        style={{
                          color: "white",
                          fontSize: "16px",
                        }}
                      >
                        About Us
                      </a>
                    </li>
                    <li className="mb-2 leading-6">
                      <a
                        href="/contact"
                        className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                        style={{
                          color: "white",
                          fontSize: "16px",
                        }}
                      >
                        Contact Us
                      </a>
                    </li>
                    <li className="mb-2 leading-6">
                      <a
                        href="javascript:void(0)"
                        className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                        style={{
                          color: "white",
                          fontSize: "16px",
                        }}
                      >
                        Facebook
                      </a>
                    </li>
                    <li className="mb-2 leading-6">
                      <a
                        href="javascript:void(0)"
                        className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                        style={{
                          color: "white",
                          fontSize: "16px",
                        }}
                      >
                        Instagram
                      </a>
                    </li>
                    <li className="mb-2 leading-6">
                      <a
                        href="javascript:void(0)"
                        className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                        style={{
                          color: "white",
                          fontSize: "16px",
                        }}
                      >
                        Twitter
                      </a>
                    </li>
                  </ul>
                </nav>
                <nav
                  className="col-span-2 md:col-span-4 lg:col-span-3"
                  aria-labelledby="footer-about-dark"
                >
                  <h3
                    className="mb-4 ml-7"
                    style={{ color: "orange" }}
                    id="footer-product-dark"
                  >
                    SOCIAL
                  </h3>
                  <ul>
                    <li className="mb-2 leading-6">
                      <a
                        href="/about"
                        className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                        style={{
                          color: "white",
                          fontSize: "16px",
                        }}
                      >
                       Admin
                      </a>
                    </li>
                    <li className="mb-2 leading-6">
                      <a
                        href="/contact"
                        className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                        style={{
                          color: "white",
                          fontSize: "16px",
                        }}
                      >
                       Admin login
                      </a>
                    </li>
                  
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <hr style={{ borderTop: "1px solid white", margin: "20px 0" }} />
          <div style={{ color: "white", textAlign: "center" }}>
            All Rights Reserved &copy; {new Date().getFullYear()}
          </div>
        </div>
      </footer>
      {/*    <!-- End Dark Theme Footer --> */}
    </>
  );
}
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
