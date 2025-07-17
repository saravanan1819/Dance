import React from "react";
import "../styles/Aboutpage.css";
import vector from "../assets/vector1.png";
import aboutstyle from "../assets/aboutstyle.png";
import ClientTestimonials from "../components/ClientTestimonials";
import LetConnect from "../components/LetConnect";
import Footer from "../components/Footer";
import swipedown from "../assets/swipedown.gif";
import { useNavigate } from "react-router-dom";

function AboutPage() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="a-first-section">
        <div className="img">
          <img src={vector} />
          <h2>
            Our Story, Vision,
            <br />
            and<span> Mission</span>
          </h2>
          <p>
            Welcome To The Best CNC Solution in <br />
            Coimbatore.
          </p>
          <div className="circle">
            <img src={swipedown} />
          </div>
        </div>
      </div>

      <div className="a-second-section">
        <div className="about-all">
          <div className="text-div">
            <h2>
              Welcome To The Best CNC <br></br>Solution in{" "}
              <span>Coimbatore.</span>
            </h2>
            <p>
              Siddan CNC is the best CNC Solutions & We weld on most including
              steel, stainless Our state-of-the-art facility is well equipped to
              take on all types of welding challenges.
            </p>
          </div>
          <div className="box-all-parent">
            <div className="boxs-all">
              <div className="vision-mission">
                <div className="vision-box">
                  <div className="box-circle"></div>
                  <h4>Vision</h4>
                  <p>
                    To be a leading design, engineering and consulting
                    organization, providing technology and innovative business
                    solutions to our customers through domestic competencies of
                    manufacturing.
                  </p>
                </div>
                <div className="mission-box">
                  <div className="box-circle"></div>
                  <h4>Mission</h4>
                  <p>
                    We at “SIDDAN CNC” fully dedicated to provide the best
                    competitive solution keeping Quality / Cost/ Delivery /
                    Safety in mind.
                  </p>
                </div>
              </div>
              <div className="objective">
                <div className="circle-box"></div>
                <h4>Objective</h4>
                <p>
                  To work towards “Customer delight” by harnessing best-in-class
                  talent, creating a knowledge pool and implementing proven
                  processes to become a preferred partner of our customers and
                  to provide the innovative and technical solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="about-style">
            <img src={aboutstyle}></img>
          </div>
        </div>
      </div>

      <div className="a-third-section">
        <div className="third-section-left">
          <h2>
            About Siddan<br></br> CNC.
          </h2>
        </div>
        <div className="third-section-right">
          <p>
            SIDDAN was created from the vision of successful entrepreneur, who
            has more than 15 years of experience in the welding and repair
            industry. After successfully helping build a previous company from
            the ground up, Bravo saw an opportunity for additional markets in
            2017 and wanted to take his vision to the next level.
          </p>
          <p className="second-p">
            VMCs are primarily used (though not exclusively) as metal cutting
            machines that remove steel, aluminum or other hard materials - thus
            forming a raw block of material into a precisely formed or
            "machined" surface.
          </p>
        </div>
      </div>

      <div className="a-fourth-section">
        <div className="service-overview">
          <div className="service-section-left">
            <div className="left-text">
              <h2>Service Overview.</h2>
              <p>Vertical Machining Center (VMC) Process Description</p>
            </div>
            <div className="view-work-btn"    onClick={() => navigate("/project")}>View Our Works</div>
          </div>
          <div className="service-section-right">
            <p>
              Vertical Machining Centers, also referred to as Vertical Milling
              Machines are preferred for flat parts that must have through
              holes. The Vertical Machine is preferred where three-axis work is
              done on a single face as in mold and die work. Vertical Machining
              Centers (VMC) have been leaders in Machine Tools for the past 20
              years in Aerospace, Die Mold, Medical and Energy Industries.
            </p>
            <p className="second-p">
              Our skilled, certified welding staff has years of welding
              experience and can provide a full range of services ranging from
              structural and plate welding to light gauge welding. We weld on
              most including steel, stainless Our state-of-the-art facility is
              well equipped to take on all types of welding challenges. BRAVO
              Welding has full capabilities for the following welding services
            </p>
          </div>
        </div>
      </div>
      <div className="a-fiveth-section">
        <ClientTestimonials />
      </div>
      <div className="a-sixth-section">
        <LetConnect />
      </div>
      <div className="a-last-section">
        <Footer />
      </div>
    </div>
  );
}

export default AboutPage;
