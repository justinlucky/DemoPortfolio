import React from "react";
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile, faHome, faSignOut,faToolbox,faUser} from '@fortawesome/free-solid-svg-icons'
import "./header.css";
const Header = () => {
  return (
    <div id="header-container">
      <div className="top">
        <div className="logo">
          <h1>
            <span className="first">L</span>
            <span className="second">R</span>
          </h1>
        </div>
        <div className="intro">
          <h2>
            <span>Lucky</span>
            <span>Riammei</span>
          </h2>
        </div>
      </div>
      <div className="center">
        <div className="navigate-bar">
          <ul>
            <li>
              <Link to='/lungchuingam/home'>
                <FontAwesomeIcon icon={faHome} className="icon"/>
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link to='/about-me'>
                <FontAwesomeIcon icon={faUser} className="icon"/>
                <p>About Me</p>
              </Link>
            </li>
            <li>
              <Link to='/contact-me'>
                <FontAwesomeIcon icon={faEnvelope} className="icon"/>
                <p>Reach Me</p>
              </Link>
            </li>
            <li>
              <Link to='/my-services'>
                <FontAwesomeIcon icon={faToolbox} className="icon"/>
                <p>My Services</p>
              </Link>
            </li>
            <li>
              <Link to='/my-cv'>
                <FontAwesomeIcon icon={faFile} className="icon"/>
                <p>My CV</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <div className="profile">
          <img src="" alt="My profile"></img>
          <Link to='/about-me'>Lucky Rammei</Link>
        </div>
        <div className="sign-out">
            <Link to='/'>
              <FontAwesomeIcon icon={faSignOut} className="logout"/>
              <p>Log Out</p>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
