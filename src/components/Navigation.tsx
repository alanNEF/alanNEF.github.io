'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id="nav" className="container">
      {/* Logo */}
      <div id="logo" className="logo">
        <div className="logo-circle">
          <span>A</span>
        </div>
      </div>

      {/* Hamburger Menu Button */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}></div>

      {/* Mobile Menu Content */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        {/* Navigation Links */}
        <ul className="nav-links">
          <li><a href="#intro" onClick={toggleMenu}>HOME</a></li>
          <li><a href="#about-section" onClick={toggleMenu}>ABOUT</a></li>
          <li><a href="#experience-section" onClick={toggleMenu}>EXPERIENCE</a></li>
          <li><a href="#projects-section" onClick={toggleMenu}>PROJECTS</a></li>
          <li><a href="#contact-me" onClick={toggleMenu}>CONTACT</a></li>
        </ul>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/alan-achilles-1ba6a1246/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/assets/SVGs/iconmonstr-linkedin-3.svg"
              alt="LinkedIn"
              width={24}
              height={24}
              className="social-icon"
            />
          </a>
          <a href="https://github.com/alanNEF" target="_blank" rel="noopener noreferrer">
            <Image
              src="/assets/SVGs/github-mark-white.svg"
              alt="GitHub"
              width={24}
              height={24}
              className="social-icon"
            />
          </a>
          <a href="https://www.instagram.com/alan_achilles21?igsh=MWVwbnZtbnVvNXRoZQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <Image
              src="/assets/SVGs/iconmonstr-instagram-11.svg"
              alt="Instagram"
              width={24}
              height={24}
              className="social-icon"
            />
          </a>
          <a href="https://x.com/alan_achilles21" target="_blank" rel="noopener noreferrer">
            <Image
              src="/assets/SVGs/logo.svg"
              alt="X (Twitter)"
              width={24}
              height={24}
              className="social-icon"
            />
          </a>
        </div>
      </div>

      {/* Desktop Navigation (hidden on mobile) */}
      <ul className="nav-links desktop-nav">
        <li><a href="#intro">HOME</a></li>
        <li><a href="#about-section">ABOUT</a></li>
        <li><a href="#experience-section">EXPERIENCE</a></li>
        <li><a href="#projects-section">PROJECTS</a></li>
        <li><a href="#contact-me">CONTACT</a></li>
      </ul>

      {/* Desktop Social Media Icons (hidden on mobile) */}
      <div className="social-icons desktop-social">
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