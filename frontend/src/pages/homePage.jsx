import React from "react";
import { useRef } from "react";
import "../styles/homePage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "react-multi-carousel/lib/styles.css";
import Footer from "../components/Footer";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import banner1 from "../assets/Banner1.png";
import banner2 from "../assets/Banner2.png";
import banner23 from "../assets/Banner3.jpg";
import banner3 from "../assets/BottomBanner.png";
import About from "../assets/About.png";
import logo from "../assets/logo.png";
import toolbox from "../assets/toolbox.png";
import service1 from "../assets/Service1.png";
import service2 from "../assets/Service2.png";
import service3 from "../assets/Service3.png";
import service4 from "../assets/Service4.png";
import project1 from "../assets/project/project1.jpg";
import project2 from "../assets/project/project2.jpg";
import project3 from "../assets/project/project3.jpg";
import project4 from "../assets/project/project4.jpg";
import project5 from "../assets/project/project5.jpg";
import project6 from "../assets/project/project6.jpg";
import project7 from "../assets/project/project7.jpg";
import project8 from "../assets/project/project8.jpg";
import project9 from "../assets/project/project9.jpg";
import project10 from "../assets/project/project10.jpg";
import project11 from "../assets/project/project11.jpg";
import project12 from "../assets/project/project12.jpg";
import project13 from "../assets/project/project13.jpg";
import project14 from "../assets/project/project14.jpg";
import project15 from "../assets/project/project15.jpg";
import project16 from "../assets/project/project16.jpg";
import project17 from "../assets/project/project17.jpg";
import project18 from "../assets/project/project18.jpg";
import project19 from "../assets/project/project19.jpg";
import { useNavigate } from "react-router-dom";
import { FaDotCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import idea from "../assets/idea.png";
import management from "../assets/management.png";
import solution from "../assets/solution.png";
import jigsaw from "../assets/jigsaw.png";
import ClientTestimonials from "../components/ClientTestimonials";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import squarestyle from "../assets/squarestyle.png";
import { FaTools } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";
import LetConnect from "../components/LetConnect";
const banners = [
  {
    background: `url(${banner1})`,
    headline: "Provide Effective Metal Cutting Solution",
    description:
      "Siddan CNC is the Best CNC & Solution Company, We Provide Customized Solutions for Innovative Metal Cutting Solutions",
  },
  {
    background: `url(${banner2})`,
    headline: "Provide Effective VMC Solutions.",
    description: (
      <ul>
        <li>
          <FaDotCircle />
          <p>Accurate Trust Process</p>
        </li>
        <li>
          <FaDotCircle />
          <p>Highly Professional Customizations</p>
        </li>
      </ul>
    ),
  },
  {
    background: `url(${banner23})`,
    headline: "Siddan CNC provide the best service",
    description: "Providing The Best Industrial VMC Service.",
  },
];

const features = [
  {
    bg: "#D5E5FF",
    border: "1px solid rgba(200, 200, 200, 0.8)",
    icon: `${banner3}`,
    titleSmall: "Unique Technology",
    titleLarge: "Advanced Technology",
  },
  {
    bg: "#FFFED5",
    border: "1px solid rgba(200, 200, 200, 0.8)",
    icon: `${banner3}`,
    titleSmall: "Great Support",
    titleLarge: "Expert Engineers",
  },
  {
    bg: "#FFD5F2",
    border: "1px solid rgba(200, 200, 200, 0.8)",
    icon: `${banner3}`,
    titleSmall: "Customers First",
    titleLarge: "Delivery On Time",
  },
];
const projects = [
  {
    img: `${project1}`,
    name: "Project Name",
    desc: "It is a long established fact that a reader will be distracted by the.",
  },
  {
    img: `${project2}`,
    name: "Project Name",
    desc: "It is a long established fact that a reader will be distracted by the.",
  },
  {
    img: `${project3}`,
    name: "Project Name",
    desc: "It is a long established fact that a reader will be distracted by the.",
  },
  {
    img: `${project4}`,
    name: "Project Name",
    desc: "It is a long established fact that a reader will be distracted by the.",
  },
  {
    img: `${project5}`,
    name: "Project Name",
    desc: "It is a long established fact that a reader will be distracted by the.",
  },
  {
    img: `${project6}`,
    name: "Project Name",
    desc: "It is a long established fact that a reader will be distracted by the.",
  },
  {
    img: `${project7}`,
    name: "Project Name",
    desc: "It is a long established fact that a reader will be distracted by the.",
  },
  {
    img: `${project8}`,
    name: "Project Name",
    desc: "It is a long established fact that a reader will be distracted by the.",
  },
  {
    img: `${project9}`,
    name: "Project Name",
    desc: "It is a long established fact that a reader will be distracted by the.",
  },
  {
    img: `${project10}`,
    name: "Project Name",
    desc: "It is a long established fact that a reader will be distracted by the.",
  },
  {
    img: `${project11}`,
    name: "Project Name",
    desc: "It is a long established fact that a reader will be distracted by the.",
  },
  {
    img: `${project12}`,
    name: "Project Name",
    desc: "It is a long established fact that a reader will be distracted by the.",
  },
  {
    img: `${project13}`,
    name: "Project Name",
    desc: "It is a long established fact that a reader will be distracted by the.",
  },
  {
    img: `${project15}`,
    name: "Project Name",
    desc: "It is a long established fact that a reader will be distracted by the.",
  },
  {
    img: `${project16}`,
    name: "Project Name",
    desc: "It is a long established fact that a reader will be distracted by the.",
  },
  {
    img: `${project17}`,
    name: "Project Name",
    desc: "It is a long established fact that a reader will be distracted by the.",
  },
  {
    img: `${project18}`,
    name: "Project Name",
    desc: "It is a long established fact that a reader will be distracted by the.",
  },
  {
    img: `${project19}`,
    name: "Project Name",
    desc: "It is a long established fact that a reader will be distracted by the.",
  },
];

const ServiceBox2 = ({ image, title, description, style }) => (
  <div className="service-box2" style={style}>
    <div
      className="service-box2-image"
      style={{ backgroundImage: `url(${image})` }}
    />
    <div className="service-box2-content">
      <h3 className="service-box2-title">{title}</h3>
      <p className="service-box2-desc">{description}</p>
    </div>
  </div>
);

function homePage() {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const handleEmailClick = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=info@siddancnc@gmail.com&su=Inquiry&body=Hello%20I%20want%20to%20know%20more%20about%20your%20services",
      "_blank"
    );
  };
  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="homepage-overall">
        <div className="first-section hero-section">
          {/* <div className="square-style">
              <img src={squarestyle}></img>
          </div> */}
          <section className="hero-heading-container">
            <h1 className="hero-heading">
              Concerted Effort In Technology and Innovative Business Solution.
            </h1>
          </section>
          <div className="banner-container">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 4000 }}
              className="banner-carousel"
            >
              {banners.map((banner, idx) => (
                <SwiperSlide key={idx}>
                  <div
                    className="banner-slide"
                    style={{
                      backgroundImage: `linear-gradient(270deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%), ${banner.background}`,
                    }}
                  >
                    <div className="banner-content">
                      <div>
                        <h2>{banner.headline}</h2>
                        <div className="banner-desc">
                          <p>{banner.description}</p>
                        </div>
                      </div>
                      <div className="banner-buttons">
                        <div className="banner-btn ">
                          <p>Read More</p>
                          <div className="circle-outside">
                            <div className="circle-inside"></div>
                          </div>
                        </div>
                        <div
                          className="banner-r-btn"
                          onClick={() => navigate("/contact")}
                        >
                          <p>Request Quote</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="banner-bottom">
            {features.map((f, i) => (
              <div
                className="feature-card"
                key={i}
                style={{
                  background: f.bg,
                  border: f.border,
                }}
              >
                <div className="feature-icon">
                  <img src={f.icon} alt="icon" />
                </div>
                <div className="feature-texts">
                  <div className="feature-title-small">{f.titleSmall}</div>
                  <div className="feature-title-large">{f.titleLarge}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="second-section about-section">
          <div className="aboutus-root">
            <div className="aboutus-right">
              <div className="aboutus-tag">
                <button class="custom-button">
                  <span class="dot"></span> About US
                </button>
              </div>
              <h2 className="aboutus-title">
                Welcome To The Siddan CNC - Best CNC Solution{" "}
                <span className="aboutus-highlight">
                  Provider in Coimbatore.
                </span>
              </h2>
              <p className="aboutus-desc">
                SIDDAN was created from the vision of successful entrepreneur, &
                who has more than 15 years of experience in the welding and
                repair industry. After successfully helping build a previous
                company from the ground up, Bravo saw an opportunity for
                additional markets in 2017 and wanted to take his vision to the
                next level.
              </p>

              <div className="aboutus-boxes">
                <div className="aboutus-box">
                  <div className="aboutus-box-ellipse">
                    <FaTools />
                  </div>
                  <div className="aboutus-box-content">
                    <div className="aboutus-box-title">
                      Vertical Machining Center Solutions
                    </div>
                    <div className="aboutus-box-desc">
                      Vertical Machining Centers, also referred to as Vertical
                      Milling Machines are preferred for flat parts that must
                      have through holes.
                    </div>
                  </div>
                </div>

                <div className="aboutus-box aboutus-box-wide">
                  <div className="aboutus-box-ellipse">
                    <FaUserShield />
                  </div>
                  <div className="aboutus-box-content">
                    <div className="aboutus-box-title">
                      Certified Welding Staff
                    </div>
                    <div className="aboutus-box-desc">
                      Our skilled, certified welding staff has years of welding
                      experience and can provide a full range of services
                      ranging from structural and plate welding to light gauge
                      welding.
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="aboutus-more-btn"
                onClick={() => navigate("/about")}
              >
                <p class="more-button">More About Us</p>
                <div className="circle-arrow">
                  <FaArrowRight />
                </div>
              </div>
            </div>
            <div className="aboutus-left">
              <img src={About} alt="About Us" className="aboutus-main-img" />
              <div className="aboutus-overlay-card">
                <img src={logo} alt="Logo" className="aboutus-logo" />
                <p>
                  Shaping Ideas into Reality with World-Class CNC Expertise.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="third-section">
          <div className="service-container">
            <div className="tag-container">
              <div className="ellipse" />
              <div className="tag-text">Services we offer</div>
            </div>

            <div className="first-row">
              <div className="service-box1">
                <div className="service-box1-white">
                  <p>
                    Engineering Precision <span>Delivering Perfection.</span>
                  </p>
                </div>
                <h2 className="service-box1-title">
                  Metal Fabrication & Engineering services
                </h2>
                <p className="service-box1-desc">
                  Siddan CNC is a world class & CNC Solution Provider in
                  Coimbatore.
                </p>
              </div>

              <ServiceBox2
                style={{ left: "970px", top: "143px" }}
                image={service1}
                title="Cutting"
                description="Precision Cutting with Siddan CNC: Revolutionizing Accuracy and Efficiency."
              />
            </div>
            <div className="second-row">
              <ServiceBox2
                style={{ left: "107px", top: "500px" }}
                image={service2}
                title="Welding"
                description="Expert Welding Solutions with Siddan CNC: Precision and Durability in Every Weld."
              />

              <ServiceBox2
                style={{ left: "540px", top: "500px" }}
                image={service3}
                title="Turning"
                description="Mastering Turning Techniques with Siddan CNC: Achieving Unmatched Precision."
              />

              <ServiceBox2
                style={{ left: "970px", top: "500px" }}
                image={service4}
                title="Milling"
                description="Advanced Milling with Siddan CNC: Precision and Efficiency Redefined."
              />
            </div>
          </div>
        </div>

        <div className="fourth-section">
          <div className="projects-section">
            {/* <div className="projectssection"> */}
            <div className="projects-header">
              <div
                className="arrow-btn-left arrow-btn"
                onClick={() => scroll(-420)}
              >
                <svg
                  width="250"
                  height="30"
                  viewBox="0 0 400 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="245"
                    y1="25"
                    x2="35"
                    y2="25"
                    stroke="white"
                    stroke-width="2"
                  />
                  <polyline
                    points="50,15 35,25 50,35"
                    fill="none"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="projects-titles">
                <h2>Our Projects</h2>
                <p className="projects-subtitle">
                  We work with global solutions!
                </p>
                <p className="projects-desc">
                  Siddan CNC Completed Some Project For Our Clients
                </p>
              </div>
              <div
                className="arrow-btn-right arrow-btn"
                onClick={() => scroll(420)}
              >
                <svg
                  width="120"
                  height="30"
                  viewBox="0 0 125 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="-50"
                    y1="25"
                    x2="125"
                    y2="25"
                    stroke="white"
                    stroke-width="2"
                  />
                  <polyline
                    points="110,15 125,25 110,35"
                    fill="none"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <a className="view-all-link" onClick={() => navigate("/project")}>
                View All
              </a>
            </div>
            <div className="projects-cards-container" ref={scrollRef}>
              {projects.map((project, idx) => (
                <div className="project-card" key={idx}>
                  <img src={project.img} alt={project.name} />
                  <div className="project-card-hover">
                    <div className="text">
                      <h3>{project.name}</h3>
                      <p>{project.desc}</p>
                    </div>
                    <div className="view-p-btn">
                      <p>View</p>
                      <div className="view-icon">
                        <FaArrowUpLong />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* </div> */}
          </div>
        </div>

        <div className="fiveth-section">
          <h2>
            Siddan CNC provides the best CNC <br />
            Solutions for sustainable <br />
            progress!
          </h2>
          <div className="fiveth-sec-boxs">
            <div className="f-p-box">
              <div className="f-p-b-icon">
                <img src={idea} />
              </div>
              <p>10+ Years of Experience</p>
            </div>
            <div className="f-p-box">
              <div className="f-p-b-icon">
                <img src={management} />
              </div>
              <p>
                Best team
                <br /> member
              </p>
            </div>
            <div className="f-p-box">
              <div className="f-p-b-icon">
                <img src={solution} />
              </div>
              <p>
                The best <br />
                Solution
              </p>
            </div>
            <div className="f-p-box">
              <div className="f-p-b-icon">
                <img src={jigsaw} />
              </div>
              <p>
                Customization of <br />
                Solution
              </p>
            </div>
          </div>
        </div>

        <div className="sixth-section">
          <div className="get-cus-metal">
            <div className="get-cus-metal-inside">
              <h2>Get Your Design Customised for Metal Work.</h2>

              <div className="right">
                <div className="right-box">
                  <a
                    href="https://wa.me/919626274422"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoWhatsapp className="right-box-icon" />
                    <p>Whatsapp</p>
                  </a>
                </div>

                <div className="right-box" onClick={handleEmailClick}>
                  <MdEmail className="right-box-icon" />
                  <p>Email</p>
                </div>

                <div className="right-box">
                  <a href="tel:+919626274422">
                    <MdCall className="right-box-icon" />
                    <p>Call</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="seventh-section">
          <ClientTestimonials />
        </div>
        <div className="eight-section">
          <LetConnect />
        </div>

        <div className="last-section footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default homePage;
