import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PersonalSpotlight } from './components/PersonalSpotlight';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function PortfolioContent() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'about',
        'personal-spotlight',
        'skills',
        'experience',
        'projects',
        'education',
        'feedback',
        'contact',
      ];

      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#101010] text-[#f2f2f2] flex flex-col font-sans selection:bg-white selection:text-black relative overflow-x-hidden">
      {/* Perry Wang Ambient Specular Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* Top central specular glow */}
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1100px] h-[500px] rounded-full blur-3xl opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(56, 189, 248, 0.1) 40%, transparent 70%)',
          }}
        />
        {/* Mid-page subtle accent */}
        <div
          className="absolute top-[40%] -right-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
          }}
        />
        {/* Bottom subtle accent */}
        <div
          className="absolute top-[75%] -left-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Perry Wang Top Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Page Sections */}
      <main className="flex-1 relative z-10">
        {/* Perry Wang Editorial Hero & Window Frame */}
        <HeroSection />

        {/* Bento Grid Overview */}
        <AboutSection />

        {/* Guiding Philosophy & Developer Station */}
        <PersonalSpotlight />

        {/* Technical Capabilities & Specs */}
        <SkillsSection />

        {/* Professional Experience Timeline */}
        <ExperienceSection />

        {/* Selected Work Showcase */}
        <ProjectsSection />

        {/* Education & Research */}
        <EducationSection />

        {/* Client Endorsements */}
        <TestimonialsSection />

        {/* On-Site Project Inquiry Form (Emails to chanukagurusinghe@gmail.com) */}
        <ContactSection />
      </main>

      {/* Perry Wang Footer */}
      <Footer />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}

export default App;
