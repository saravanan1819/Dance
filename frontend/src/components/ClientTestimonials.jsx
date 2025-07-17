import React from "react";
import { FaStar } from "react-icons/fa";
import doticon from "../assets/dot-icon.png";
import { FaUser } from "react-icons/fa";

function ClientTestimonials() {
  return (
    <div>
      <div className="client-section-overall">
        <div className="client-tag">
          <div className="circle-dot"></div>
          <p>
            Client Testimonials<span>.</span>
          </p>
        </div>
        <div className="client-section">
          <div className="client-box-all">
            <div className="client-box">
              <div className="circle-top-outside">
                <div className="inside"></div>
              </div>
              <img src={doticon} />
              <div className="profile">
                <div className="circle">
                  <FaUser />
                </div>
                <p>VijayKumar</p>
              </div>
              <div className="star">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <p>
                  <span>5</span> / 5
                </p>
              </div>
              <div className="hr"></div>
              <p className="desc">
                Highly recommended & a great experience. delivery was quick and
                convinient.
              </p>
            </div>
            <div className="client-box">
              <div className="circle-top-outside">
                <div className="inside"></div>
              </div>
              <img src={doticon} />
              <div className="profile">
                <div className="circle">
                  <FaUser />
                </div>
                <p>Kumaran</p>
              </div>
              <div className="star">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <p>
                  <span>5</span> / 5
                </p>
              </div>
              <div className="hr"></div>
              {/* <hr/> */}
              <p className="desc">
                Very great &amp; CNC Solution. I wanted a customized metal
                cutting, team gave us a best solutions for the Customizations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientTestimonials;
