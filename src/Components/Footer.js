import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
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
              {/* <i class="fa-regular fa-clock">
                <div className="foot-text">Mon-Fri:10:00-18:00 PM</div>
              </i> */}
            </a>
          </li>
        </ul>
      </div>
      <div className="foot-item">
        <ul className="menu">
          <li>
            <a>
              <i class="fa-regular fa-arrow-right">
                <div className="foot-text">About Us</div>
              </i>
              <i class="fa-regular fa-arrow-right">
                <div className="foot-text">Contact Us</div>
              </i>
              <i class="fa-regular fa-arrow-right">
                <div className="foot-text">Careers</div>
              </i>
             
              <i class="fa-regular fa-arrow-right">
                <div className="foot-text">Security</div>
              </i>
              <i class="fa-regular fa-arrow-right">
                <div className="foot-text">Privacy Policy</div>
              </i>
            </a>
          </li>
        </ul>
      </div>
      <div className="foot-item">
        <ul className="menu">
          <li>
            <a>
              <i class="fa-regular fa-arrow-right">
                <div className="foot-text">Payment</div>
              </i>
              <i class="fa-regular fa-arrow-right">
                <div className="foot-text">Shipping</div>
              </i>
              <i class="fa-regular fa-arrow-right">
                <div className="foot-text">Terms Of Use</div>
              </i>
              <i class="fa-regular fa-arrow-right">
                <div className="foot-text">Cancellation & Returns</div>
              </i>
              <i class="fa-regular fa-arrow-right">
                <div className="foot-text">Sitemap</div>
              </i>
              <i class="fa-regular fa-arrow-right">
                <div className="foot-text">FAQ</div>
              </i>
            </a>
          </li>
        </ul>
      </div>
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
          </li>
        </ul>

        <div className="foot-text1">
          TechConnect Internet Private Limited,
          Buildings Alyssa, Begonia &
          Clove Embassy Tech Village,
          Outer Ring Road,
          Devarabeesanahalli Village,
          Bengaluru, 560103,
          Karnataka, India
        </div>
        <div className="foot-text2">
          © 2023 TechConnect Theme. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
