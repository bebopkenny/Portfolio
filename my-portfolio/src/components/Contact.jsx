import React from "react";
import "./Contact.css"; // Ensure this file exists in the correct path

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <ul>
        <li>
          Email:{" "}
          <a href="mailto:kennygarcia15@yahoo.com">kennygarcia15@yahoo.com</a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/kennygarcia"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/kennygarcia
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a
            href="https://github.com/bebopkenny"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/bebopkenny
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
