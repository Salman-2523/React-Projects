import React from "react";
import ProfilePic from "../assets/salman.png";
import "../styles/info.css";
const Info = () => {
  return (
    <div className="info">
      <img src={ProfilePic} alt="Profile Picture" className="profile-picture" />
      <h1 className="name">Salman Khan</h1>
      <p className="designation"> Full Stack Web Developer</p>
      <p className="portfolio">https://salman-nine.vercel.app/</p>
      <div className="btn-container">
        <button className="email">
          <i className="fa-solid fa-envelope" id = "email"></i> Email
        </button>
        <button className="linkedin">
          <i className="fa-brands fa-linkedin" id = "linkedin"></i> LinkedIn
        </button>
      </div>
    </div>
  );
};

export default Info;
