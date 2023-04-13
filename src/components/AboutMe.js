import React from "react";
import profileImage from "../assets/profile/Yaro.jpeg";
import "../css/AboutMe.css"


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
          <p id="line"></p>
         <p><strong>Hello, I am Yaroslav. I want to tell you about myself.</strong></p>

         <p>
          I am a skilled full-stack developer with experience in building web applications using various technologies, including NodeJS, React, MongoDB, GraphQL, Python, Django, PostgreSQL, JavaScript, HTML, and CSS. I have developed a dumb language learning service, a platform for cryptocurrency information exchange, an application for providing the latest space industry news, and an e-commerce website for selling flowers. These experiences have taught me how to collaborate with team members, design and implement complex database schema, develop RESTful APIs, implement secure payment gateways, and integrate with external APIs. I am a problem-solver who enjoys taking on new challenges and learning new technologies. When I'm not coding, I enjoy swimming, walking, watching movies, traveling and having time with my family and friends.
          <p><strong>Sincerely, Yaroslav Volvach (You can call me Yaro)</strong></p>
    

        </div>
      </div>
    </section>
  );
}

export default AboutMe;
