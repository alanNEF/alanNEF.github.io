'use client';

export default function Experience() {
    return (
        <div className="container" id="experience-section">
            <div className="experience-content">
                {/* Section Header */}
                <div className="section-header fade-in-up">
                    <h1>Experience</h1>
                    <div className="section-underline"></div>
                </div>

                {/* Experience Items */}
                <div className="experience-items stagger-children">
                    {/* Job 1 */}
                    <div className="experience-item">
                        <div className="job-header">
                            <div className="job-info">
                                <h3 className="job-title">Software Developer</h3>
                                <p className="company-name">UMass BUILD</p>
                            </div>
                            <div className="job-meta">
                                <p className="job-dates">Feb 2025 - Present</p>
                                <p className="job-location">Amherst, MA</p>
                            </div>
                        </div>
                        <ul className="job-responsibilities">
                            <li>Building a bikepacking app to help users find bikepacking routes worldwide, using Next.js framework.</li>
                            <li>Facilitated map and GPS functionality to enhance route discovery and navigation.</li>
                            <li>Streamlined UI components for an intuitive user experience.</li>
                            <li>Enhancing backend systems, including database management, APIs, and authentication to ensure fast load times and easy access to data.</li>
                        </ul>
                    </div>

                    {/* Job 2 */}
                    <div className="experience-item">
                        <div className="job-header">
                            <div className="job-info">
                                <h3 className="job-title">Summer IT Intern</h3>
                                <p className="company-name">Niskayuna Central School District</p>
                            </div>
                            <div className="job-meta">
                                <p className="job-dates">Jun 2023 - Sep 2023 and Jul 2024 - Sep 2024</p>
                                <p className="job-location">Niskayuna, NY</p>
                            </div>
                        </div>
                        <ul className="job-responsibilities">
                            <li>Restored Promethean boards and Chromeboxes into classrooms, promoting effective use of technology for teaching and learning. Increasing affectiveness in the classroom.</li>
                            <li>Created comprehensive training materials for staff to facilitate the adoption of new technologies. Reducing service tickets by 30%.</li>
                            <li>Refurbished Mac computers and Chromebooks, ensuring optimal performance and extending device lifespans. Reducing costs on new devices.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
} 