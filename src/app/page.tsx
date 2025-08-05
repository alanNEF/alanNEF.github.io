'use client';

import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Only animate if the element hasn't been animated before
          if (!entry.target.classList.contains('animated')) {
            entry.target.classList.add('animate');
            entry.target.classList.add('animated'); // Mark as animated
            console.log('Element animated:', entry.target.id || entry.target.className);
          }
        }
      });
    }, {
      threshold: 0.2, // Trigger when 20% of the element is visible
      rootMargin: '0px 0px -50px 0px'
    });

    // Wait for the DOM to be ready
    setTimeout(() => {
      const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in, .stagger-children');
      console.log('Found animated elements:', animatedElements.length);
      animatedElements.forEach((el) => {
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
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
