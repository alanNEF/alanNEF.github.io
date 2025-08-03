'use client';

import Image from 'next/image';

export default function About() {
  return (
    <div className="container" id="about-section">
      <div id="about" className="hidden">
        <h1 id="about-me">About Me</h1>
        <p id="paragraph-am">
          Alan Achilles is a dedicated Computer Science student at the University of Massachusetts Amherst,
          specializing in machine learning and web development. Passionate about leveraging technology to
          drive innovation, Alan is actively seeking opportunities for collaboration on projects, internships,
          and research. If you're interested in collaborating or have opportunities to discuss, please reach
          out—Alan is eager to contribute, grow, and connect with others in the field.
        </p>
      </div>
      <Image
        src="/assets/imgs/DSC03989.jpg"
        alt="Alan Achilles"
        width={400}
        height={400}
        className="my-photo hidden"
        id="my-photo2"
      />
    </div>
  );
} 