import React from "react";
import "../styles/Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>SympToDialog</h3>
          <p>An AI-powered chatbot for healthcare training using OpenAI API.</p>
          <div className="links">
            <a
              href="https://devpost.com/software/symptodialog"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project on DevPost
            </a>
            <a
              href="https://nam.edu/hackathon-awards-60k-to-innovative-implementable-solutions-to-prevent-treat-and-control-stis-in-the-u-s/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Winner Announcement
            </a>
          </div>
        </div>
        <div className="project-item">
          <h3>CodeClimber</h3>
          <p>A web app for tracking coding progress on LeetCode and HackerRank.</p>
          <a
            href="https://github.com/bebopkenny"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Repository
          </a>
        </div>
        <div className="project-item">
          <h3>Dorsia</h3>
          <p>A restaurant website showcasing my web development skills.</p>
          <a
            href="https://github.com/bebopkenny"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Repository
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;

