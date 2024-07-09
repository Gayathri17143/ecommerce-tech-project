import React from "react";

import "./Footer.css";
import { Container } from "@mui/material";
import logo from "../assets/payment-getways.png";
const Footer = () => {
  return (
    <>
      {/* <Container> */}

      <div className="foot-container pad">
        <div className="foot-item">
          <ul className="menu">
            <li>
              <a>
                <i class="fa-regular fa-phone">
                  <div className="foot-text">123456789</div>
                </i>
                <i class="fa-regular fa-location-dot">
                  <div className="foot-text">
                    25 West 21th Street,Chennai,India.
                  </div>
                </i>
                <i class="fa-regular fa-envelope">
                  <div className="foot-text">info@techconnect.com</div>
                </i>
              </a>
            </li>
          </ul>
        </div>
        <div className="foot-item">
          <div className="menu">
          <div className="foot-text1">
            TechConnect Internet Private Limited, Buildings Alyssa, Outer Ring
            Road, Devarabeesanahalli Village, Bengaluru, 560103,
            Karnataka, India
          </div>
          </div>
        </div>
        <div className="foot-item">
          <ul className="menu">
            <li>
              <a href="/about">
                <i class="fa-regular  ">
                  <div className="foot-text">About Us</div>
                </i>
              </a>
              <a href="/contact">
                <i class="fa-regular  ">
                  <div className="foot-text">Contact Us</div>
                </i>
              </a>

              <a href="/privacypolicy">
                <i class="fa-regular  ">
                  <div className="foot-text">Privacy Policy</div>
                </i>
              </a>
            </li>
          </ul>
        </div>
        <div className="foot-item">
          <ul className="menu">
            <li>
              <a href="/termsandconditions">
                <i class="fa-regular ">
                  <div className="foot-text">Terms and Conditions</div>
                </i>
              </a>

              <a href="/">
                <i class="fa-regular  ">
                  <div className="foot-text">Sitemap</div>
                </i>
              </a>
              <a href="/faq">
                <i class="fa-regular  ">
                  <div className="foot-text">FAQ</div>
                </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className=""
        style={{
          borderBottom: "1px solid #ffbb38",
          width: "50%",
          margin: "0 auto",
        }}
      ></div>
      <div className="foot-container pad">
        <div className="foot-item">
          <ul className="icons">
            <li>
              <span className="bold">
                Follow Us:
                <a>
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </span>
              <div className="foot-text2">
                © 2024 TechConnect Theme. All Rights Reserved.
              </div>
            </li>
          </ul>
        </div>
        <div className="foot-item"></div>
        <div className="foot-item"></div>
        <div className="foot-item">
          <img src={logo} alt="logo"></img>
        </div>
      </div>
      {/* </Container> */}
    </>
  );
};

export default Footer;
