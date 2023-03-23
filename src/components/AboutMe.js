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
          I was born in Ukraine in 1996. Since childhood, I have been very fond of video games and have always dreamed of developing them.
          Therefore, I connected my future with the IT industry.</p>

          <p>While in school, I was not good at math, so I immediately forgot my dream of becoming a video game developer.
          
          After graduating from high school, I entered to university at the Faculty of Law.

          One day during the winter holidays was boring and decided to learn the Python programming language.</p>

         <p>I really liked Python, but of course you can not develop AAA video games with it. Nevertheless, I was very interested in programming
          and I started doing web develop.

          Having studied the Django framework, I started developing small websites and online stores for myself and my family. These were small pet-projects that I learned and practised my skills doing.

          After some time, my skills reached the point where I cloud already do freelance and work for company.

          To improve my skills, I entered the School of Computer Science and Information Technology "Hillel" and began to study English more.</p>

         <p>In 2022, I went to an English language school in England for 4 months, and after I want to an English language school in Dublin, Ireland.

          November 12, 2022 I arrived in Canada instead of which I hope I can call my second home.

          While programming, I liked mathematics, because now I know where to apply it.

          I enrolled in the University of Toronto Boot Camp to improve my skills and gain new skills.</p>
        
          <p>I would be glad to receive your offer.</p>

          <p><strong>Sincerely, Yaroslav Volvach (You can call me Yaro)</strong></p>
    

        </div>
      </div>
    </section>
  );
}

export default AboutMe;