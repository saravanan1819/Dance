import React from "react";
import "../styles/ProjectPage.css";
import Footer from "../components/Footer";
function ProjectPage() {
  return (
    <>
      <div className="project-overall">
        <div className="project-section">
          <div className="project-top">
            <h3>We work with global Industries!</h3>
            <h2>Siddan CNC Completed Some Project For Clients</h2>
            <p>
              We weld on most including & steel, stainless Our state-of-the-art
              facility is well equipped to take on all types of welding
              challenges.
            </p>
          </div>
          <div className="project-img-section">
            <div className="flex-box">
              <div className="p-div1">
                <div className="p-photos p-p1"></div>
                <div className="p-photos p-p2"></div>
                <div className="p-photos p-p3"></div>
              </div>
              <div className="p-div2">
                <div className="p-photos p-p4"></div>
                <div className="p-photos p-p5"></div>
                <div className="p-photos p-p6"></div>
              </div>
            </div>
            <div className="flex-box">
              <div className="p-div3">
                <div className="p-photos p-p7"></div>
                <div className="p-photos p-p8"></div>
                <div className="p-photos p-p9"></div>
              </div>
              <div className="p-div4">
                <div className="p-photos p-p10"></div>
                <div className="p-photos p-p11"></div>
                <div className="p-photos p-p12"></div>
              </div>
            </div>
          </div>
          <div className="youtube-video">
            <h2 className="h2">Watch Our Youtube Videos.</h2>
            <div className="video-all">
              <div className="video-box video-box1">
                <div className="video-box-bg"></div>
                <div
                  className="click-watch"
                  onClick={() =>
                    window.open(
                      "https://youtube.com/shorts/31S44_99b68?si=Fouvnx5RE8Sammgq",
                      "_blank"
                    )
                  }
                >
                  <div>
                    <h2>Click to watch</h2>
                    <p>Valve Part Making</p>
                  </div>
                </div>
              </div>
              <div className="video-box video-box2">
                <div className="video-box-bg"></div>
                <div
                  className="click-watch"
                  onClick={() =>
                    window.open(
                      "https://youtube.com/shorts/e05jYH59HLA?si=OGKVN8_qi7sL_2E-",
                      "_blank"
                    )
                  }
                >
                  <div>
                    <h2>Click to watch</h2>
                    <p>Making Flanges 1</p>
                  </div>
                </div>
              </div>
              <div className="video-box video-box3">
                <div className="video-box-bg"></div>
                <div
                  className="click-watch"
                  onClick={() =>
                    window.open(
                      "https://youtube.com/shorts/GDbvAXaARts?si=mQgxrfE378ybzuoB",
                      "_blank"
                    )
                  }
                >
                  <div>
                    <h2>Click to watch</h2>
                    <p>Making Flanges 2</p>
                  </div>
                </div>
              </div>
              <div className="video-box video-box4">
                <div className="video-box-bg"></div>
                <div
                  className="click-watch"
                  onClick={() =>
                    window.open(
                      "https://youtube.com/shorts/4jJ8y4uHfes?si=m3WZJAI8Vu1Sn2OW",
                      "_blank"
                    )
                  }
                >
                  <div>
                    <h2>Click to watch</h2>
                    <p>Flanges - Partial Completion</p>
                  </div>
                </div>
              </div>
              <div className="video-box video-box5">
                <div className="video-box-bg"></div>
                <div
                  className="click-watch"
                  onClick={() =>
                    window.open(
                      "https://youtube.com/shorts/GDbvAXaARts?si=mQgxrfE378ybzuoB",
                      "_blank"
                    )
                  }
                >
                  <div>
                    <h2>Click to watch</h2>
                    <p>Flanges - HSF Engineering</p>
                  </div>
                </div>
              </div>
              <div className="video-box video-box6">
                <div className="video-box-bg"></div>
                <div
                  className="click-watch"
                  onClick={() =>
                    window.open(
                      "https://youtube.com/shorts/31S44_99b68?si=Fouvnx5RE8Sammgq",
                      "_blank"
                    )
                  }
                >
                  <div>
                    <h2>Click to watch</h2>
                    <p>Machining volvo b23 pistons to fit b20 stroker crank</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default ProjectPage;
