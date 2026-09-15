import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, FileText, Github, Linkedin, Mail, Check, ExternalLink } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';
import profileImage from '/public/avatar.jpg';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socialLinks.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const navLinks = [
    { name: 'Work', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Philosophy', href: '#personal-spotlight' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Floating Capsule Bar (Perry Wang nav-bar style) */}
        <div
          className={`pointer-events-auto w-full flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 rounded-full transition-all duration-300 ${
            isScrolled
              ? 'bg-[#101010]/92 backdrop-blur-2xl border border-white/[0.12] shadow-[0_15px_40px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.09)]'
              : 'bg-[#141417]/80 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
          }`}
        >
          {/* Left: Identity / Monogram */}
          <a
            href="#hero"
            id="nav-logo-link"
            className="flex items-center gap-2.5 group focus:outline-none pl-1"
          >
            <div className="relative shrink-0">
              <img
                src={profileImage}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes({profileImage})) {
                    target.src = {profileImage};
                  }
                }}
                alt={personalInfo.name}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border border-white/20 shadow-xs group-hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#10b981] border-2 border-[#101010]" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-xs sm:text-sm tracking-tight text-[#f2f2f2] group-hover:text-white transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[10px] font-mono text-[#a1a1aa] tracking-normal font-normal hidden sm:block">
                Freelance Engineer · Master's @ ECU
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Perry Wang Pill bar) */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#18181c]/80 px-2 py-1 rounded-full border border-white/[0.06]">
            {navLinks.map((link) => {
              const isActive =
                activeSection === link.href.substring(1) ||
                (link.href === '#hero' && activeSection === 'hero');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`relative px-3.5 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-[#f2f2f2]'
                      : 'text-[#888888] hover:text-[#d4d4d8]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navPill"
                      className="absolute inset-0 rounded-full bg-white/[0.12] border border-white/20 shadow-xs"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Group */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-xs font-medium text-[#a1a1aa] hover:text-white transition-all"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-2.5 h-2.5 text-[#71717a]" />
            </a>

            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-xs font-medium text-[#a1a1aa] hover:text-white transition-all"
            >
              <span>GitHub</span>
              <ExternalLink className="w-2.5 h-2.5 text-[#71717a]" />
            </a>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-resume-btn"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] text-[#a1a1aa] hover:text-white border border-white/[0.08] font-medium text-xs transition-all active:scale-95"
            >
              <FileText className="w-3 h-3 text-[#38bdf8]" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              id="nav-contact-btn"
              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-[#f2f2f2] text-black hover:bg-white font-semibold text-xs shadow-sm transition-all duration-200 active:scale-95"
            >
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#contact"
              className="px-3 py-1 rounded-full bg-[#f2f2f2] text-black font-semibold text-xs"
            >
              Contact
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              aria-label="Toggle Navigation Menu"
              className="p-1.5 rounded-full text-[#a1a1aa] hover:text-white hover:bg-white/[0.08] focus:outline-none transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.165, 0.84, 0.44, 1] }}
            className="pointer-events-auto max-w-6xl mx-auto mt-2 bg-[#141417]/95 backdrop-blur-2xl border border-white/[0.12] rounded-3xl p-4 shadow-2xl overflow-hidden space-y-2"
          >
            <div className="grid grid-cols-2 gap-1.5 pb-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                      isActive
                        ? 'bg-white/[0.14] text-white font-semibold'
                        : 'text-[#888888] hover:text-white hover:bg-white/[0.05]'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2 text-[#888888] hover:text-white"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 text-[#888888] hover:text-[#38bdf8]"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-[#888888] hover:text-[#10b981]"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#10b981]" /> : <Mail className="w-4 h-4" />}
                </button>
              </div>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-[#f2f2f2] text-black text-xs font-semibold"
              >
                Resume PDF
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
