'use client';

export default function Navigation() {
  return (
    <div id="nav" className="container">
      <div id="logo">
        Alan Achilles
      </div>
      <ul>
        <li id="home"><a href="#intro">Home</a></li>
        <li id="about"><a href="#about-section">About</a></li>
        <li id="projects-link"><a href="#projects">Projects</a></li>
        <li id="cv"><a href="#contact-me">Contact Me</a></li>
      </ul>
    </div>
  );
} 