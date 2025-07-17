import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function LetConnect() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="let-connect-overall">
        <div className="lets-connect-all">
          <h2>Start Your Next CNC Project With Us</h2>
          <p>
            {" "}
            Have a custom machining need or just want to know more? Let’s start
            a conversation and build something powerful together.
          </p>
          <div
            className="lets-connect-btn"
            onClick={() => navigate("/contact")}
          >
            <p class="connect-button">Let`s Connect</p>
            <div className="circle-arrow">
              <FaArrowRight />
            </div>
          </div>
          <div className="lets-style"></div>
        </div>
      </div>
    </div>
  );
}

export default LetConnect;
