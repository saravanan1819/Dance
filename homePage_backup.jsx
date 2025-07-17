import React from "react";
import { useRef } from "react";
import Header from "../components/Header";
import "../styles/homePage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "../components/Footer";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import banner1 from "../assets/Banner1.png";
import banner2 from "../assets/Banner2.png";
import banner3 from "../assets/BottomBanner.png";
import About from "../assets/About.png";
import logo from "../assets/logo.png";
import toolbox from "../assets/toolbox.png";
import service1 from "../assets/Service1.png";
import service2 from "../assets/Service2.png";
import service3 from "../assets/Service3.png";
import service4 from "../assets/Service4.png";
import project1 from "../assets/ProjectHome1.png";
import project2 from "../assets/ProjectHome2.png";
import project3 from "../assets/ProjectHome3.png";
import project4 from "../assets/ProjectHome4.png";

import progress1 from "../assets/Progress1.png";
import progress2 from "../assets/Progress2.png";
import progress3 from "../assets/Progress3.png";
import progress4 from "../assets/Progress4.png";
import { FaDotCircle } from "react-icons/fa";

import whatsappIcon from "../assets/icon-whats.png";
import emailIcon from "../assets/icon-email.png";
import callIcon from "../assets/icon-phone.png";
import webIllustration from "../assets/icon-web.png";
import { FaArrowRight } from "react-icons/fa6";
import idea from '../assets/idea.png'; 
import management from '../assets/management.png'; 
import solution from '../assets/solution.png'; 
import jigsaw from '../assets/jigsaw.png'; 
import doticon from '../assets/dot-icon.png'; 
import ClientTestimonials from "../components/ClientTestimonials";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";

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
    background: `url(${banner1})`,
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
    img: `${project1}`,
    name: "Project Name",
    desc: "It is a long established fact that a reader will be distracted by the.",
  },
  {
    img: `${project2}`,
    name: "Project Name",
    desc: "It is a long established fact that a reader will be distracted by the.",
  },
];

const progress = [
  {
    icon: `${progress1}`,
    title: "10+ Years of Experience",
  },
  {
    icon: `${progress2}`,
    title: "Best team member",
  },
  {
    icon: `${progress3}`,
    title: "The best Solution",
  },
  {
    icon: `${progress4}`,
    title: "Customization of Solution",
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

  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="homepage-overall">
        <div className="first-section hero-section">
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
                        <div className="banner-r-btn ">
                          <p>Request Quote</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

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

        <div className="aboutus-root">
          {/* Left Image Section */}
          <div className="aboutus-left">
            <img src={About} alt="About Us" className="aboutus-main-img" />
            <div className="aboutus-overlay-card">
              <img src={logo} alt="Logo" className="aboutus-logo" />
            </div>
          </div>

          {/* Right Text Section */}
          <div className="aboutus-right">
            <div className="aboutus-tag">
              <button class="custom-button">
                <span class="dot"></span> About US
              </button>
            </div>
            <h2 className="aboutus-title">
              Welcome To The Siddan CNC - Best CNC Solution{" "}
              <span className="aboutus-highlight">Provider in Coimbatore.</span>
            </h2>
            <p className="aboutus-desc">
              SIDDAN was created from the vision of successful entrepreneur, &
              who has more than 15 years of experience in the welding and repair
              industry. After successfully helping build a previous company from
              the ground up, Bravo saw an opportunity for additional markets in
              2017 and wanted to take his vision to the next level.
            </p>
            <div className="aboutus-boxes">
              {/* First Box */}
              <div className="aboutus-box">
                <div className="aboutus-box-ellipse">
                  <img
                    src={toolbox}
                    alt="Toolbox"
                    className="aboutus-box-icon"
                  />


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
                <div className="aboutus-box-content">
                  <div className="aboutus-box-title">
                    Vertical Machining Center Solutions
                  </div>
                  <div className="aboutus-box-desc">
                    Vertical Machining Centers, also referred to as Vertical
                    Milling Machines are preferred for flat parts that must have
                    through holes.
                  </div>
                </div>
              </div>
              
              {/* Second Box */}
              <div className="aboutus-box aboutus-box-wide">
                <div className="aboutus-box-ellipse">
                  <img
                    src={toolbox}
                    alt="Toolbox"
                    className="aboutus-box-icon"
                  />
                </div>
                <div className="aboutus-box-content">
                  <div className="aboutus-box-title">
                    Certified Welding Staff
                  </div>
                  <div className="aboutus-box-desc">
                    Our skilled, certified welding staff has years of welding
                    experience and can provide a full range of services ranging
                    from structural and plate welding to light gauge welding.
                  </div>
                </div>
              </div>
          

            <div className="aboutus-more-btn">
              <button class="more-button">
                More About Us
                <span class="arrow-circle">
                  <svg
                    class="arrow-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    // class="feather feather-arrow-right"
                    viewBox="0 0 24 24"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="tag-container">
            <div className="ellipse" />
            <div className="tag-text">Services we offer</div>
          </div>

          <div className="service-box1">
            <div className="service-box1-white" />
            <h2 className="service-box1-title">
              Metal Fabrication & Engineering services
            </h2>
            <p className="service-box1-desc">
              Siddan CNC is a world class & CNC Solution Provider in Coimbatore.
            </p>
          </div>

          <ServiceBox2
            style={{ left: "970px", top: "143px" }}
            image={service1}
            title="Cutting"
            description="Precision Cutting with Siddan CNC: Revolutionizing Accuracy and Efficiency."
          />

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

        <div className="projects-section">
          <div className="projects-header">
            <div className="arrow-btn-left" onClick={() => scroll(-420)}>
              <svg
                width="120"
                height="30"
                viewBox="0 0 160 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="160"
                  height="50"
                  rx="25"
                  fill="url(#blueGradient)"
                />
                <line
                  x1="135"
                  y1="25"
                  x2="35"
                  y2="25"
                  stroke="white"
                  stroke-width="2"
                />
                <polyline
                  points="55,15 35,25 55,35"
                  fill="none"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="blueGradient"
                    x1="0"
                    y1="0"
                    x2="160"
                    y2="50"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#1B396A" />
                    <stop offset="1" stop-color="#234B8B" />
                  </linearGradient>
                </defs>
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
            <div className="arrow-btn right" onClick={() => scroll(420)}>
              <svg
                width="120"
                height="30"
                viewBox="0 0 160 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="160"
                  height="50"
                  rx="25"
                  fill="url(#blueGradient)"
                />
                <line
                  x1="25"
                  y1="25"
                  x2="125"
                  y2="25"
                  stroke="white"
                  stroke-width="2"
                />
                <polyline
                  points="105,15 125,25 105,35"
                  fill="none"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="blueGradient"
                    x1="0"
                    y1="0"
                    x2="160"
                    y2="50"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#1B396A" />
                    <stop offset="1" stop-color="#234B8B" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <a href="#" className="view-all-link">
            View All
          </a>
          <div className="projects-cards-container" ref={scrollRef}>
            {projects.map((project, idx) => (
              <div className="project-card" key={idx}>
                <img src={project.img} alt={project.name} />
                <div className="project-card-hover">
                  <div>
                    <h3>{project.name}</h3>
                    <p>{project.desc}</p>
                  </div>
                  <button className="view-btn">
                    View
                    <span className="view-arrow">&#8594;</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          //{" "}
          {/* <div className="container">
          //   <div className="tag-container">
          //     <div className="ellipse" />
          //     <div className="tag-text">Services we offer</div>
          //   </div>

          //   <div className="service-box1">
          //     <div className="service-box1-white" />
          //     <h2 className="service-box1-title">
          //       Metal Fabrication & Engineering services
          //     </h2>
          //     <p className="service-box1-desc">
          //       Siddan CNC is a world class & CNC Solution Provider in Coimbatore.
          //     </p>
          //   </div>

          //   <ServiceBox2
          //     style={{ left: "970px", top: "143px" }}
          //     image={service1}
          //     title="Cutting"
          //     description="Precision Cutting with Siddan CNC: Revolutionizing Accuracy and Efficiency."
          //   />

          //   <ServiceBox2
          //     style={{ left: "107px", top: "500px" }}
          //     image={service2}
          //     title="Welding"
          //     description="Expert Welding Solutions with Siddan CNC: Precision and Durability in Every Weld."
          //   />

          //   <ServiceBox2
          //     style={{ left: "540px", top: "500px" }}
          //     image={service3}
          //     title="Turning"
          //     description="Mastering Turning Techniques with Siddan CNC: Achieving Unmatched Precision."
          //   />

          //   <ServiceBox2
          //     style={{ left: "970px", top: "500px" }}
          //     image={service4}
          //     title="Milling"
          //     description="Advanced Milling with Siddan CNC: Precision and Efficiency Redefined."
          //   />
          // </div> */}
          //{" "}
          {/* <div className="projects-section">
          //   <div className="projects-header">
          //     <div className="arrow-btn-left" onClick={() => scroll(-420)}>
          //       <svg
          //         width="120"
          //         height="30"
          //         viewBox="0 0 160 50"
          //         fill="none"
          //         xmlns="http://www.w3.org/2000/svg"
          //       >
          //         <rect width="160" height="50" rx="25" fill="url(#blueGradient)" />
          //         <line
          //           x1="135"
          //           y1="25"
          //           x2="35"
          //           y2="25"
          //           stroke="white"
          //           stroke-width="2"
          //         />
          //         <polyline
          //           points="55,15 35,25 55,35"
          //           fill="none"
          //           stroke="white"
          //           stroke-width="2"
          //           stroke-linecap="round"
          //           stroke-linejoin="round"
          //         />
          //         <defs>
          //           <linearGradient
          //             id="blueGradient"
          //             x1="0"
          //             y1="0"
          //             x2="160"
          //             y2="50"
          //             gradientUnits="userSpaceOnUse"
          //           >
          //             <stop stop-color="#1B396A" />
          //             <stop offset="1" stop-color="#234B8B" />
          //           </linearGradient>
          //         </defs>
          //       </svg>
          //     </div>
          //     <div className="projects-titles">
          //       <h2>Our Projects</h2>
          //       <p className="projects-subtitle">We work with global solutions!</p>
          //       <p className="projects-desc">
          //         Siddan CNC Completed Some Project For Our Clients
          //       </p>
          //     </div>
          //     <div className="arrow-btn right" onClick={() => scroll(420)}>
          //       <svg
          //       width="120"
          //         height="30"
          //         viewBox="0 0 160 50"
          //         fill="none"
          //         xmlns="http://www.w3.org/2000/svg"
          //       >
          //         <rect width="160" height="50" rx="25" fill="url(#blueGradient)" />
          //         <line
          //           x1="25"
          //           y1="25"
          //           x2="125"
          //           y2="25"
          //           stroke="white"
          //           stroke-width="2"
          //         />
          //         <polyline
          //           points="105,15 125,25 105,35"
          //           fill="none"
          //           stroke="white"
          //           stroke-width="2"
          //           stroke-linecap="round"
          //           stroke-linejoin="round"
          //         />
          //         <defs>
          //           <linearGradient
          //             id="blueGradient"
          //             x1="0"
          //             y1="0"
          //             x2="160"
          //             y2="50"
          //             gradientUnits="userSpaceOnUse"
          //           >
          //             <stop stop-color="#1B396A" />
          //             <stop offset="1" stop-color="#234B8B" />
          //           </linearGradient>
          //         </defs>
          //       </svg>
          //     </div>
          //   </div>
          //   <a href="#" className="view-all-link">
          //     View All
          //   </a>
          //   <div className="projects-cards-container" ref={scrollRef}>
          //     {projects.map((project, idx) => (
          //       <div className="project-card" key={idx}>
          //         <img src={project.img} alt={project.name} />
          //         <div className="project-card-hover">
          //           <div>
          //             <h3>{project.name}</h3>
          //             <p>{project.desc}</p>
          //           </div>
          //           <button className="view-btn">
          //             View
          //             <span className="view-arrow">&#8594;</span>
          //           </button>
          //         </div>
          //       </div>
          //     ))}
          //   </div>
          // </div> */}
          //{" "}
          {/* <div className="progress-section">
          //   <h2 className="progress-title">
          //     Siddan CNC provides the best CNC
          //     <br />
          //     Solutions for sustainable
          //     <br />
          //     progress!
          //   </h2>
          //   <div className="progress-cards">
          //     {progress.map((item, index) => (
          //       <div className="progress-card" key={index}>
          //         <img src={item.icon} alt="icon" className="card-icon" />
          //         <p className="card-title">{item.title}</p>
          //       </div>
          //     ))}
          //   </div>
          // </div> */}
          //{" "}
          {/* <div className="customised-wrapper">
          //   <div className="customised-container">
          //     <div className="customised-left">
          //       <h2>
          //         Get Your Design
          //         <br />
          //         Customised for Metal
          //         <br />
          //         work.
          //       </h2>
          //     </div>

          //     <div className="customised-divider" />

              <div className="customised-middle">
              <div className="customised-middle">
                <button className="customised-btn">
                  <img src={whatsappIcon} alt="WhatsApp" />
                  Whatsapp
                </button>
                <button className="customised-btn">
                  <img src={emailIcon} alt="Email" />
                  Email
                </button>
                <button className="customised-btn">
                  <img src={callIcon} alt="Call" />
                  Call
                </button>
              </div>

              <div className="customised-right">
                <img src={webIllustration} alt="Illustration" />
              </div>
            </div>
          </div> 
       </div>
// =======
          <div className="customised-right">
            <img src={webIllustration} alt="Illustration" />

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

               <div className="aboutus-more-btn">
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
              </div>
            </div>

          </div>
        </div>


      <div className="let-connect">
        {/* Background Ellipse */}
          <div className="ellipse-37"></div>
          {/* Decorative Image (optional, hidden) */}
          <div className="hidden-image"></div>
          {/* Decorative Image */}
          <div className="decorative-image"></div>
          {/* Blue Rounded Rectangle */}
          <div className="rectangle-71"></div>
          <div className="rectangle-77"></div>
          {/* White Rounded Rectangle Border */}
          <div className="rectangle-76"></div>
          {/* Main Content */}
          <div className="content">
            <div className="title">Start Your Next CNC Project With Us</div>
            <div className="subtitle">
              Have a custom machining need or just want to know more? Let’s
              start
              <br />a conversation and build something powerful together.
            </div>
            {/* Button */}
            <div className="cta-button">
              <div className="rectangle-51"></div>
              <span className="cta-text">Let’s Connect</span>
              <div className="ellipse-26"></div>
              <div className="arrow-1"></div>
            </div>
          </div>
        </div>
        <div className="footer-wrapper">
          <Footer />
        </div>

        <div className="third-section">
          <div className="service-container">
                          <div className="tag-container">
                            <div className="ellipse" />
                            <div className="tag-text">Services we offer</div>
                          </div>

                          <div className="first-row">
                                <div className="service-box1">
                                  <div className="service-box1-white" />
                                  <h2 className="service-box1-title">
                                    Metal Fabrication & Engineering services
                                  </h2>
                                  <p className="service-box1-desc">
                                    Siddan CNC is a world class & CNC Solution Provider in Coimbatore.
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

        <div className="fourth-section project-section">
            <div className="projects-section">
                      <div className="projects-header">
                        <div className="arrow-btn-left arrow-btn" onClick={() => scroll(-420)}>
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
                        <div className="arrow-btn-right arrow-btn" onClick={() => scroll(420)}>
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
                        <a href="#" className="view-all-link">
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
                  
                    </div>
        </div>

        <div className="fiveth-section">
             <h2>Siddan CNC provides the best CNC <br/>Solutions for sustainable <br/>

progress!</h2>
            <div className="fiveth-sec-boxs">
                <div className="f-p-box">
                    <div className="f-p-b-icon"><img src={idea}/></div>
                    <p>10+ Years of Experience</p>
                </div>
                <div className="f-p-box">
                    <div className="f-p-b-icon"><img src={management}/></div>
                    <p>Best team<br/> member</p>
                </div>
                <div className="f-p-box">
                    <div className="f-p-b-icon"><img src={solution}/></div>
                    <p>The best <br/>Solution</p>
                </div>
                <div className="f-p-box">
                    <div className="f-p-b-icon"><img src={jigsaw}/></div>
                    <p>Customization of <br/>Solution</p>
                </div>
            
            </div>
        </div>

        <div className="sixth-section get-cus-metal">
             <div className="get-cus-metal-inside">
               
                     <h2>Get Your Design Customised for Metal Work.</h2>
           
                <div className="right">
                     <div className="right-box">
                        <IoLogoWhatsapp className="right-box-icon"/>
                        <p>Whatsapp</p>
                      </div>
                     <div className="right-box">
                        <MdEmail className="right-box-icon"/>
                        <p>Email</p>
                      </div>
                     <div className="right-box">
                        <MdCall className="right-box-icon"/>
                        <p>Call</p>
                     </div>
                </div>
             </div>
        </div>

        <div className="seventh-section client-section-overall">
              <div className="client-tag">
                  <div className="circle-dot"></div>
                  <p>Client Testimonials<span>.</span></p>
              </div>
              <div className="client-section">
                   <div className="client-box-all">
                        <div className="client-box">
                            <div className="circle-top-outside">
                                <div className="inside"></div>
                            </div>
                            <img src={doticon}/>
                            <div className="profile">
                                <div className="circle"></div>
                                <p>VijayKumar</p>
                            </div>
                            <div className="star">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <p><span>5</span> / 5</p>
                            </div>
                            <div className="hr"></div>
                            {/* <hr/> */}
                            <p className="desc">Highly recommended & a great experience. delivery was quick and convinient.</p>
                        </div>
                        <div className="client-box">
                            <div className="circle-top-outside">
                                <div className="inside"></div>
                            </div>
                            <img src={doticon}/>
                            <div className="profile">
                                <div className="circle"></div>
                                <p>Kumaran</p>
                            </div>
                            <div className="star">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <p><span>5</span> / 5</p>
                            </div>
                            <div className="hr"></div>
                            {/* <hr/> */}
                            <p className="desc">Very great &amp; CNC Solution. I wanted a customized metal cutting, team gave us a best solutions for the Customizations.</p>
                        </div>
                   </div>
              </div>
        </div>

        <div className="eight-section let-connect-overall">
            <div className="lets-connect-all">
                <h2>Start Your Next CNC Project With Us</h2>
                <p> Have a custom machining need or just want to know more? Let’s start a conversation and build something powerful together.</p>
                <div className="lets-connect-btn">
                  <p class="connect-button">Let`s Connect</p>
                <div className="circle-arrow">
                        <FaArrowRight />
                </div>
              </div>
              <div className="lets-style">
              </div>
            
            </div>

        </div>
        <div className="last-section footer">
             <Footer/>
        </div>

      



>>>>>>> 95cddc5 (Save changes before rebase)
      </div>
    </>
  );
}

export default homePage;
