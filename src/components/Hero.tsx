'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <div className="container" id="intro">
      {/* Skill Labels */}
      <div className="skill-label top-left">AI/ML Engineer</div>
      <div className="skill-label bottom-left">Software Engineer</div>
      <div className="skill-label top-right">Full Stack Developer</div>
      <div className="skill-label bottom-right">Product Manager</div>

      {/* Connecting Lines */}
      <div className="skill-connector top-left"></div>
      <div className="skill-connector bottom-left"></div>
      <div className="skill-connector top-right"></div>
      <div className="skill-connector bottom-right"></div>

      {/* Main Content */}
      <div className="hero-content fade-in-up">
        <Image
          src="/assets/imgs/DSC03989.jpg"
          alt="Alan Achilles"
          width={200}
          height={200}
          className="my-photo scale-in"
        />

        <div id="intro-text">
          <div className="type-container">
            <h1 className="type">Hi, I'm Alan!</h1>
          </div>
          <p className="type-2">Developer, Student, and Entrepreneur</p>

          {/* Call to Action Button */}
          <button className="cta-button">
            Connect With Me
          </button>

          {/* Social Links */}
          <div id="intro-svgs" className="stagger-children">
            <a id="linkedin-svg" href="https://www.linkedin.com/in/alan-achilles-1ba6a1246/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/assets/SVGs/iconmonstr-linkedin-3.svg"
                alt="LinkedIn"
                width={30}
                height={30}
                className="intro-svg"
              />
            </a>
            <a id="instagram-svg" href="https://www.instagram.com/alan_achilles21?igsh=MWVwbnZtbnVvNXRoZQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <Image
                src="/assets/SVGs/iconmonstr-instagram-11.svg"
                alt="Instagram"
                width={30}
                height={30}
                className="intro-svg"
              />
            </a>
            <a id="github-svg" href="https://github.com/alanNEF" target="_blank" rel="noopener noreferrer">
              <Image
                src="/assets/SVGs/github-mark-white.svg"
                alt="GitHub"
                width={30}
                height={30}
                className="intro-svg"
              />
            </a>
            <a id="x-svg" href="https://x.com/alan_achilles21" target="_blank" rel="noopener noreferrer">
              <Image
                src="/assets/SVGs/logo.svg"
                alt="X (Twitter)"
                width={30}
                height={30}
                className="intro-svg"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 