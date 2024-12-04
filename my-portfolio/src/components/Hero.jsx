import React from "react";
import "../styles/Hero.css";

function Hero() {
  return (
    <section id="hero">
      <h1>Welcome to Kenny Garcia's Portfolio</h1>
      <p>Computer Science Undergraduate | AI Enthusiast | Software Developer</p>
      <p className="construction-notice">
        🚧 This portfolio is currently being reconstructed for the{" "}
        <a
          href="https://acm-design-portfolio.devpost.com/?ref_content=default&ref_feature=challenge&ref_medium=portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          ACM Design Annual Personal Portfolio Competition
        </a>. Feel free to explore while updates are being made! 🚧
      </p>
    </section>
  );
}

export default Hero;
