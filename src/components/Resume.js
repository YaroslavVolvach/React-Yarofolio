import React from "react";
import myResume from "../assets/resume/Full_Stack_Web_Developer_Resume.pdf";
import { BsCloudDownload } from "react-icons/bs";
import '../css/Resume.css'

function Resume() {
  return (
    <>
    <div id="resume">
      <section id="welcome-section" className="download-intro">
        <div className="flex-row">
          <h2 className="section-title primary-border">Check Resume!</h2>
        </div>
        <div className="flex-row">
          <div className="download-info">
            <div className="download-text">
              <a href={myResume} className="download-logo" download><BsCloudDownload /></a>
              <h2>Resume</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
        <div className="row row-cols-1 row-cols-sm-3 row-cols-md-3">
            <div id="front" className="col">
              <h5>Front-End</h5>
              <ul>
                  <li><h6>JavaScript</h6></li>
                  <li><h6>TypeScript</h6></li>
                  <li><h6>React</h6></li>
                  <li><h6>Redux</h6></li>
                  <li><h6>HTML</h6></li>
                  <li><h6>CSS</h6></li>
                  <li><h6>Bootstrap</h6></li>
              </ul>
            </div>
            <div id="back" className="col">
            <h5>Back-End</h5>
            <ul>
                <li><h6>JavaScript</h6></li>
                <li><h6>TypeScript</h6></li>
                <li><h6>Rust</h6></li>
                <li><h6>NodeJS</h6></li>
                <li><h6>ExpressJS</h6></li>
                <li><h6>Python</h6></li>
                <li><h6>Django</h6></li>
              </ul>
            </div>
            <div id="dms" className="col last-col">
            <h5>Database Management System</h5>
            <ul>
                <li><h6>MongoDB</h6></li>
                <li><h6>PostgreSQL</h6></li>
                <li><h6>MySQL</h6></li>
                <li><h6>SQLite</h6></li>
            </ul>
            </div>
         </div>
    </>
  );
}

export default Resume;
