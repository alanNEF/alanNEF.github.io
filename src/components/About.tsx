'use client';

import Image from 'next/image';

export default function About() {
  return (
    <div className="container" id="about-section">
      <div className="about-content">
        <div className="about-text fade-in-left">
          <div className="section-header">
            <h1>About Me</h1>
            <div className="section-underline"></div>
          </div>

          <div className="about-description">
            <p>
              I'm a passionate software developer and student at the University of Massachusetts Amherst,
              pursuing a degree in Computer Science. I love building innovative solutions that solve real-world problems
              and create meaningful impact.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
              or working on entrepreneurial ventures. I believe in continuous learning and pushing the boundaries
              of what's possible with technology.
            </p>
          </div>

          <div className="skills-section">
            <h3>Technologies I Work With</h3>
            <div className="skills-grid stagger-children">
              <div className="skill-item">
                <Image src="/javascript-icon.svg" alt="JavaScript" width={20} height={20} className="skill-icon" />
                <span>JavaScript</span>
              </div>
              <div className="skill-item">
                <Image src="/typescriptlang-icon.svg" alt="TypeScript" width={20} height={20} className="skill-icon" />
                <span>TypeScript</span>
              </div>
              <div className="skill-item">
                <Image src="/reactjs-icon.svg" alt="React" width={20} height={20} className="skill-icon" />
                <span>React</span>
              </div>
              <div className="skill-item">
                <Image src="/python-icon.svg" alt="Python" width={20} height={20} className="skill-icon" />
                <span>Python</span>
              </div>
              <div className="skill-item">
                <Image src="/amazon_aws-icon.svg" alt="AWS" width={20} height={20} className="skill-icon" />
                <span>AWS</span>
              </div>
              <div className="skill-item">
                <Image src="/nextjs-icon.svg" alt="Next.js" width={20} height={20} className="skill-icon" />
                <span>Next.js</span>
              </div>
              <div className="skill-item">
                <Image src="/nodejs-icon.svg" alt="Node.js" width={20} height={20} className="skill-icon" />
                <span>Node.js</span>
              </div>
              <div className="skill-item">
                <Image src="/java-icon.svg" alt="Java" width={20} height={20} className="skill-icon" />
                <span>Java</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-image-container fade-in-right">
          <div className="about-photo">
            <Image
              src="/assets/imgs/DSC03989.jpg"
              alt="Alan Achilles"
              width={300}
              height={300}
              className="about-photo-image"
            />
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
} 