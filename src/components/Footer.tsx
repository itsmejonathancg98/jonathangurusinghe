import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Twitter, Youtube, ExternalLink } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';
import profileImage from '/public/avatar.jpg';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#101010] py-16 px-4 sm:px-6 lg:px-8 text-[#888888]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Section (Perry Wang multi-column footer) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Identity */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={profileImage}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes({profileImage})) {
                    target.src = {profileImage};
                  }
                }}
                alt={personalInfo.name}
                className="w-10 h-10 rounded-full object-cover border border-white/20"
                referrerPolicy="no-referrer"
              />
              <div>
                <h4 className="text-sm font-semibold text-[#f2f2f2]">
                  {personalInfo.name}
                </h4>
                <p className="text-xs font-mono text-[#71717a]">
                  Freelance Software Engineer · Master's Student at ECU
                </p>
              </div>
            </div>
            <p className="text-xs text-[#71717a] max-w-sm leading-relaxed">
              Engineering clean, resilient web applications and responsive client platforms. Based in Perth, Western Australia.
            </p>
            <div className="pt-2 flex items-center gap-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#f2f2f2] text-black text-xs font-semibold hover:bg-white transition-colors"
              >
                <span>Start a Project</span>
              </a>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-medium text-[#a1a1aa] hover:text-white transition-colors"
              >
                <span>Resume</span>
                <ExternalLink className="w-3 h-3 text-[#71717a]" />
              </a>
            </div>
          </div>

          {/* Quick Nav Columns */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-[#f2f2f2]">
              NAVIGATION
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Work</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#personal-spotlight" className="hover:text-white transition-colors">Philosophy</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">Technical Skills</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">Experience</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Form</a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-[#f2f2f2]">
              CONNECT
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#38bdf8] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#38bdf8] transition-colors"
                >
                  <Twitter className="w-3.5 h-3.5" />
                  <span>Twitter / X</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="flex items-center gap-2 hover:text-[#10b981] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>chanukagurusinghe@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-[#a1a1aa]">
              © {new Date().getFullYear()} Jonathan Chanuka Gurusinghe. All rights reserved.
            </p>
            <p className="text-[11px] text-[#71717a]">
              Designed with Perry Wang aesthetic inspiration. Perth, Western Australia · GMT+8
            </p>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-[#f2f2f2] transition-colors focus:outline-none"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#38bdf8]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
