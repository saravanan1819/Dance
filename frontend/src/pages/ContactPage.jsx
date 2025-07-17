import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import rightPattern from "../assets/LeftPattern.png";
import leftPattern from "../assets/RightPattern.png";
import workerImg from "../assets/workerimg.png";
import { toast } from "react-toastify";
import phoneIcon from "../assets/PhoneIcon.png";
import emailIcon from "../assets/EmailIcon.png";
import mapIcon from "../assets/MapIcon.png";
import "../styles/ContactPage.css";
import Footer from "../components/Footer";
function ContactPage() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_4h76hri",
        "template_l53286f",
        form.current,
        "iB99lBwAnMB6Ee1ka"
      )
      .then(
        (result) => {
          setIsSending(false);
          toast.success("Form Submitted successfully!");
          form.current.reset();
        },
        (error) => {
          setIsSending(false);
          toast.error("Failed to send message. Please try again later.");
          console.error(error);
        }
      );
  };
  return (
    <>
      <div className="contact-page">
        <div className="c-first-section">
          <div className="contact-bg-all">
            <img src={leftPattern} alt="" className="contact-left-pattern" />
            <img src={rightPattern} alt="" className="contact-right-pattern" />
            <div className="contact-content">
              <h2 className="contact-title">Contact Our Team</h2>
              <p className="contact-subtitle">
                Our Team is Happy to answer your questions.
                <br />
                Fill out the form
              </p>
            </div>
            <img src={workerImg} alt="" className="work-img" />
          </div>
        </div>

        <div className="contact-section">
          <div className="contact-left">
            <h2 className="contact-form-title">Let`s Talk!</h2>
            <p className="contact-desc">
              Get in touch with us using enquiry form
              <br />
              or contact details below.
            </p>
            <hr className="contact-divider" />
            <form
              className="contact-form"
              id="contact-form"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" name="first_name" required />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" name="last_name" required />
                </div>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" required />
              </div>
              <div className="form-group">
                <label>Website</label>
                <input type="text" name="website" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows={4} name="message" required></textarea>
              </div>
              <button type="submit" className="submit-btn" disabled={isSending}>
                {isSending ? "Sending..." : "Submit Now"}
              </button>
            </form>
          </div>

          <div className="contact-right">
            <div className="contact-row">
              <div className="contact-card">
                <div className="icon-box">
                  <img src={phoneIcon} alt="Phone" />
                </div>
                <span className="contact-info">+91 9626274422</span>
              </div>
              <div className="contact-card">
                <div className="icon-box">
                  <img src={emailIcon} alt="Email" />
                </div>
                <span className="contact-info">Siddancnc@gmail.com</span>
              </div>
            </div>
            <div className="contact-card address-card">
              <div className="icon-box">
                <img src={mapIcon} alt="Address" />
              </div>
              <span className="contact-info">
                174/3, Appai naidu layout, P.N. Palayam road, Ganapathy PO,
                <br />
                Coimbatore - 641 006
              </span>
            </div>
            <div className="contact-map">
              <div style={{ width: "100%", height: "450px" }}>
                <iframe
                  title="SIDDAN CNC Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.116019722157!2d76.9789713!3d11.0299213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85995bf4e81ff%3A0x40897fd519c7ed09!2sSIDDAN%20CNC!5e0!3m2!1sen!2sin!4v1752728932481!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default ContactPage;
