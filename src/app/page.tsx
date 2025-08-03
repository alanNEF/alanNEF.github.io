'use client';

import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          console.log('Element shown:', entry.target.id || entry.target.className);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    // Wait for the DOM to be ready
    setTimeout(() => {
      const hiddenElements = document.querySelectorAll('.hidden');
      console.log('Found hidden elements:', hiddenElements.length);
      hiddenElements.forEach((el) => {
        observer.observe(el);
        console.log('Observing element:', el.id || el.className);
      });
    }, 500);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-[#0f172a] text-white min-h-screen">
      <Navigation />
      <br />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
