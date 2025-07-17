import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import insta from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <div className="footer">
      <div className="footer-overall">
        <div className="footer-top">
          <div className="footer-left">
            <div className="footer-logo">
              <img src={logo} />
            </div>
            <div className="footer-social">
              <div className="footer-icon instagram">
                <img src={insta} />
              </div>
              <div className="footer-icon twitter">
                <img src={twitter} />
              </div>
              <div className="footer-icon facebook">
                <img src={facebook} />
              </div>
              {/* <div className="footer-icon">
                <img src={facebook} />
              </div> */}
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-right-first">
              <div className="footer-links-group">
                <h2>Quick links</h2>
                <div className="list-flex">
                  <div className="f-q-link" onClick={() => navigate("/about")}>
                    About Us
                  </div>
                  <div
                    className="f-q-link"
                    onClick={() => navigate("/project")}
                  >
                    Project
                  </div>
                  <div
                    className="f-q-link"
                    onClick={() => navigate("/contact")}
                  >
                    Contact
                  </div>
                </div>
              </div>
              <div className="footer-contact-group">
                <h2>Get In Touch</h2>
                <p>
                  Questions or Feeback? We <br />
                  love to hear from you
                </p>
              </div>
            </div>
            <div className="footer-right-second">
              <div className="footer-newsletter">
                <h2>New Letter</h2>
                <p>
                  Sign up for industry alerts, our latest news, thoughts, and
                  insights
                  <br /> from Siddan CNC.
                </p>

                <div className="footer-newsletter-form">
                  <input
                    className="footer-newsletter-input"
                    placeholder="Enter Your Email"
                  />
                  <button className="footer-newsletter-btn">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="bottom-text">
          <h2>@ 2024 SiddanCNC. With Love by shaderscreative</h2>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Site Map</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
