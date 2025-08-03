'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <div className="container" id="intro">
      <Image
        src="/assets/imgs/DSC03989.jpg"
        alt="Alan Achilles"
        width={400}
        height={400}
        className="my-photo"
      />
      <div id="intro-text">
        <div className="type-container">
          <h1 className="type">Hi I'm Alan!</h1>
        </div>
        <p className="type-2">developer, student, and entrepreneur</p>
        <div id="intro-svgs">
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
  );
} 