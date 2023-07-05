import React, { useState } from "react";
import Header from "../../Components/Header/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Home = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div id="home-container">
      <Header />
      <div className="container">
        <div className="top">
          <div className="intro">
            <h2>Lucky Riammei</h2>
            <h3>Web Developer</h3>
            <p>
              Welcome to the portfolio of Lucky Riammei, a passionate and
              skilled web developer!
            </p>
            <p>
              Hello, I'm Lucky Riammei, a web developer with a deep love for
              crafting exceptional digital experiences. With a strong background
              in coding and a keen eye for design, I specialize in creating
              dynamic and user-friendly websites that make an impact.
            </p>
            {showMore ? (
              <div>
                <p>
                  Through my years of experience, I have honed my skills in
                  front-end development, back-end programming, and everything in
                  between. I thrive on turning complex ideas into seamless,
                  functional websites that not only meet but exceed client
                  expectations.
                </p>
                <p>
                  My commitment to staying up-to-date with the latest industry
                  trends and technologies allows me to deliver cutting-edge
                  solutions that are both visually striking and highly
                  functional. Whether it's building responsive websites,
                  optimizing site performance, or integrating captivating
                  animations, I pride myself on delivering results that leave a
                  lasting impression.
                </p>
                <p>
                  Collaboration and communication are at the core of my work
                  philosophy. I believe in working closely with clients to truly
                  understand their vision, goals, and target audience. This
                  enables me to develop tailored solutions that align perfectly
                  with their needs and objectives.
                </p>
                <p>
                  Feel free to explore my portfolio, where you'll find a
                  collection of my past projects that showcase my expertise.
                  From sleek and modern corporate websites to engaging
                  e-commerce platforms, each project reflects my dedication to
                  quality and attention to detail. If you're looking to bring
                  your ideas to life or revamp your online presence, I'm here to
                  help. Let's collaborate and create a remarkable web experience
                  together. Get in touch today to discuss how we can elevate
                  your digital presence.
                </p>
              </div>
            ) : null}

            <button onClick={toggleShowMore} className="show-more-button">
              {showMore ? (
                <span>
                  Show Less <FontAwesomeIcon icon={faAngleUp} />
                </span>
              ) : (
                <span>
                  Show More <FontAwesomeIcon icon={faAngleDown} />
                </span>
              )}
            </button>
          </div>
        </div>
        <p>
          For any further queries and services feel free to reach me , by
          clicking the below button let's make something wonderful.
        </p>
        <button>
          <Link to="/contact-me">Reach Me</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
