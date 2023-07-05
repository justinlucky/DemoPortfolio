import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div id="index-container">
      <div className="introduction">
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
          <h3>Frontend Developer, UI/UX Designer</h3>
        </div>
      </div>
      <form>
        <div className="form-group">
          <label>Want to remain mystery?</label>
          <Link to='/lungchuingam/home'>Continue Mysteriously</Link>
        </div>
      </form>
    </div>
  );
};

export default Index;
