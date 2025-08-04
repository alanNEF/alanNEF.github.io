'use client';

export default function Projects() {
  return (
    <div className="container" id="projects-section">
      <div className="projects-content">
        {/* Section Header */}
        <div className="section-header fade-in-up">
          <h1>Projects</h1>
          <div className="section-underline"></div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid stagger-children">
          {/* Project 1 */}
          <div className="project-item">
            <div className="project-header">
              <h3 className="project-title">DormDuo</h3>
              <div className="project-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>Express</span>
              </div>
            </div>
            <div className="project-description">
              <p>A roommate matching platform for college students that uses algorithms to pair compatible roommates based on lifestyle preferences, study habits, and personality traits.</p>
              <ul className="project-features">
                <li>Built a comprehensive matching algorithm using user preferences and compatibility scores</li>
                <li>Implemented real-time chat functionality for matched roommates</li>
                <li>Created an intuitive user interface with profile creation and preference settings</li>
                <li>Integrated secure authentication and user verification systems</li>
              </ul>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-item">
            <div className="project-header">
              <h3 className="project-title">CalculusCalc</h3>
              <div className="project-tech">
                <span>Python</span>
                <span>NumPy</span>
                <span>Matplotlib</span>
                <span>Tkinter</span>
              </div>
            </div>
            <div className="project-description">
              <p>A comprehensive calculus calculator that can solve derivatives, integrals, limits, and plot mathematical functions with step-by-step solutions.</p>
              <ul className="project-features">
                <li>Implemented symbolic mathematics for accurate calculus calculations</li>
                <li>Created interactive plotting functionality with zoom and pan capabilities</li>
                <li>Built a step-by-step solution generator for educational purposes</li>
                <li>Designed an intuitive GUI for easy input and result visualization</li>
              </ul>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-item">
            <div className="project-header">
              <h3 className="project-title">Personal Website</h3>
              <div className="project-tech">
                <span>Next.js</span>
                <span>React</span>
                <span>TypeScript</span>
                <span>Tailwind CSS</span>
              </div>
            </div>
            <div className="project-description">
              <p>A modern, responsive portfolio website showcasing my skills, projects, and experience with smooth animations and professional design.</p>
              <ul className="project-features">
                <li>Built with Next.js for optimal performance and SEO</li>
                <li>Implemented smooth scroll animations and interactive elements</li>
                <li>Created a responsive design that works on all devices</li>
                <li>Integrated contact form with Web3Forms for easy communication</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 