'use client';

import Image from 'next/image';

export default function Projects() {
  return (
    <div className="container hidden" id="projects">
      <h1 id="title" className="hidden">Projects</h1>

      <div id="calculusCalc" className="project-card hidden">
        <a href="https://github.com/alanNEF/CalculusCalc" target="_blank" rel="noopener noreferrer">
          <div className="card-top">
            <div className="card-title">
              <Image
                src="/assets/SVGs/calculator-svgrepo-com.svg"
                alt="Calculator"
                width={40}
                height={40}
                id="calculusCalc-logo"
              />
              <h1>Calculus Calc</h1>
            </div>
            <p>A JS calculus calculator capable of deriving derivatives and integrals.</p>
          </div>
          <div className="card-bottom">
            <p>Explore Now</p>
            <Image
              src="/assets/SVGs/reshot-icon-arrow-XDTS3L59MV.svg"
              alt="Arrow"
              width={20}
              height={20}
              className="explore-arrow"
            />
          </div>
        </a>
      </div>

      <div id="personal-website" className="project-card hidden">
        <a href="https://github.com/alanNEF/Personal-Website" target="_blank" rel="noopener noreferrer">
          <div className="card-top">
            <div className="card-title">
              <Image
                src="/assets/SVGs/internet-svgrepo-com.svg"
                alt="Website"
                width={40}
                height={40}
                id="calculusCalc-logo"
              />
              <h1>My Website</h1>
            </div>
            <p>This website! Where I show off all my projects/experience.</p>
          </div>
          <div className="card-bottom">
            <p>Explore Now</p>
            <Image
              src="/assets/SVGs/reshot-icon-arrow-XDTS3L59MV.svg"
              alt="Arrow"
              width={20}
              height={20}
              className="explore-arrow"
            />
          </div>
        </a>
      </div>
    </div>
  );
} 