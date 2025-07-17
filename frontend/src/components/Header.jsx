import React, { useState } from "react";
import "../styles/Header.css";
import logo from "../assets/logo.png";
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const navigate = useNavigate();

  return (
    <>
      <div className={`header-overall ${menuOpen ? "blur-background" : ""}`}>
        <div className="header-contact">
          <div className="span span1">
            <div className="span-circle">
              <MdEmail />
            </div>
            <p>Siddancnc@gmail.com</p>
          </div>
          <div className="span span1">
            <div className="span-circle">
              <FaLocationDot />
            </div>
            <p>Appai naidu layout, P.N.Palayam road, CBE-06</p>
          </div>
          <div className="span span1">
            <div className="span-circle">
              <FaPhone />
            </div>
            <p>+91 9626274422</p>
          </div>
          <div className="social-all">
            <div className="social-icon-div">
              <TiSocialFacebook />
            </div>
            <div className="social-icon-div">
              <TiSocialInstagram />
            </div>
            <div className="social-icon-div">
              <TiSocialYoutube />
            </div>
            <div className="social-icon-div">
              <TiSocialTwitter />
            </div>
          </div>
        </div>

        <div className="header">
          <div className="header-left">
            <img src={logo} alt="logo" />
          </div>

          <div className="header-middle desktop-nav">
            <nav className="header-nav">
              {["/", "/about", "/contact", "/project"].map((path, i) => {
                const labels = ["Home", "About us", "Contact us", "Project"];
                return (
                  <Link key={path} to={path} style={{ textDecoration: "none" }}>
                    <div
                      className={`nav-item ${
                        location.pathname === path ? "active" : ""
                      }`}
                    >
                      <span className="nav-dot" />
                      <span>{labels[i]}</span>
                    </div>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="header-right">
            <button className="quote-btn" onClick={() => navigate("/contact")}>
              Request A Quote
            </button>
            <div className="mobile-menu-icon" onClick={toggleMenu}>
              <GiHamburgerMenu />
            </div>
          </div>
        </div>
      </div>

      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <div className="close-btn" onClick={closeMenu}>
          <IoMdClose />
        </div>
        <nav className="mobile-nav">
          {["/", "/about", "/contact", "/project"].map((path, i) => {
            const labels = ["Home", "About us", "Contact us", "Project"];
            return (
              <Link
                key={path}
                to={path}
                onClick={closeMenu}
                style={{ textDecoration: "none" }}
              >
                <div
                  className={`nav-item ${
                    location.pathname === path ? "active" : ""
                  }`}
                >
                  <span className="nav-dot" />
                  <span>{labels[i]}</span>
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Header;
