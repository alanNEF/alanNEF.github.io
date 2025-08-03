'use client';

import Image from 'next/image';

export default function Navigation() {
  return (
    <nav id="nav" className="container">
      {/* Logo */}
      <div id="logo" className="logo">
        <div className="logo-circle">
          <span>A</span>
        </div>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><a href="#intro">HOME</a></li>
        <li><a href="#about-section">ABOUT</a></li>
        <li><a href="#projects">EXPLORER</a></li>
        <li><a href="#contact-me">RESUME</a></li>
      </ul>

      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/alan-achilles-1ba6a1246/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/assets/SVGs/iconmonstr-linkedin-3.svg"
            alt="LinkedIn"
            width={20}
            height={20}
            className="social-icon"
          />
        </a>
        <a href="https://github.com/alanNEF" target="_blank" rel="noopener noreferrer">
          <Image
            src="/assets/SVGs/github-mark-white.svg"
            alt="GitHub"
            width={20}
            height={20}
            className="social-icon"
          />
        </a>
        <a href="https://www.instagram.com/alan_achilles21?igsh=MWVwbnZtbnVvNXRoZQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
          <Image
            src="/assets/SVGs/iconmonstr-instagram-11.svg"
            alt="Instagram"
            width={20}
            height={20}
            className="social-icon"
          />
        </a>
        <a href="https://x.com/alan_achilles21" target="_blank" rel="noopener noreferrer">
          <Image
            src="/assets/SVGs/logo.svg"
            alt="X (Twitter)"
            width={20}
            height={20}
            className="social-icon"
          />
        </a>
      </div>
    </nav>
  );
} 