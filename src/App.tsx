import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { AcademicWork } from './components/AcademicWork';
import { CaseStudy3Section } from './components/CaseStudy3Section';
import { Assignment3Section } from './components/Assignment3Section';
import { ResumeSection } from './components/ResumeSection';
import { Certificates } from './components/Certificates';
import { NumberSystemConverter } from './components/NumberSystemConverter';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'skills',
      'projects',
      'academic',
      'case-study-3',
      'assignment-3',
      'resume',
      'certificates',
      'converter',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#526579] flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar activeSection={activeSection} />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AcademicWork />
        <CaseStudy3Section />
        <Assignment3Section />
        <ResumeSection />
        <Certificates />
        <NumberSystemConverter />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
