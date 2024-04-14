import React from "react";
import profileImage from "../assets/profile/Yaro.jpeg";
import "../css/AboutMe.css";

function AboutMe() {
  return (
    <section id="about-me" className="my-5 intro">
      <div className="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div className="intro-info">
          <div className="intro-img">
            <img id="image" src={profileImage} alt="profile" />
          </div>
          <div>
            <p>
              <strong>Software Engineer</strong> with <strong>3 years</strong>{" "}
              of experience in full stack development, with a strong focus on{" "}
              <strong>JavaScript/React</strong> for front-end and{" "}
              <strong>Python</strong> for back-end programming.
            </p>
            <p>
              I'm dedicated to creating <em>clean</em>, <em>efficient code</em>{" "}
              and <em>user-friendly</em>, <em>reusable designs</em>.
            </p>
            <p>
              Eager to grow, I am currently enhancing my skills by learning{" "}
              <strong>Rust</strong> and <strong>Solidity</strong>.
            </p>
          </div>

          <p>
            <strong>Sincerely, Yaroslav Volvach (You can call me Yaro)</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

