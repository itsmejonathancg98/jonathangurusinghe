import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  FileText,
  Mail,
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  MapPin,
  GraduationCap,
  ExternalLink,
  Check,
  Code2,
  Sparkles,
} from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socialLinks.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Specular Ambient Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1100px] h-[480px] pointer-events-none -z-10"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255, 255, 255, 0.08) 0%, rgba(56, 189, 248, 0.05) 40%, transparent 75%)',
        }}
      />

      {/* Top Overline & Status Pills */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
        className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6"
      >
        <div
          id="hero-availability-badge"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/25 text-xs font-mono text-[#10b981]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
          </span>
          <span>Available for client projects & roles · Q1/Q2 2026</span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#a1a1aa] hover:text-[#f2f2f2] transition-colors">
          <MapPin className="w-3.5 h-3.5 text-[#38bdf8]" />
          <span>Perth, Western Australia</span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#a1a1aa] hover:text-[#f2f2f2] transition-colors">
          <GraduationCap className="w-3.5 h-3.5 text-[#c084fc]" />
          <span>Master of Computer Science Student @ ECU</span>
        </div>
      </motion.div>

      {/* Main Grid: Editorial Typography + Perry Wang macOS Window Frame */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Perry Wang Display Typography */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.165, 0.84, 0.44, 1] }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] text-[#f2f2f2] leading-[1.08]">
              I craft resilient web platforms, applications & digital experiences.
            </h1>
            <p className="text-base sm:text-xl font-normal text-[#a1a1aa] tracking-tight leading-relaxed pt-1">
              Freelance Software Engineer & Master's Student in Computer Science at <strong className="text-white font-medium">ECU</strong>. Based in Perth, Western Australia. BEng (Hons) graduate from <span className="text-[#e4e4e7]">IIT / University of Westminster</span>.
            </p>
          </div>

          <p className="text-xs sm:text-sm text-[#888888] leading-relaxed max-w-xl font-normal">
            Specializing in performant full-stack development, modern frontend architecture, and bespoke WordPress / CMS platforms. I engineer systems with clean code, purposeful interaction, and production stability.
          </p>

          {/* Metric Cards in Perry Wang Style */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
            {personalInfo.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-white/20 transition-all text-left"
              >
                <p className="text-[11px] font-mono text-[#71717a] uppercase tracking-wider">
                  {stat.label}
                </p>
                <p className="text-lg sm:text-xl font-semibold text-[#f2f2f2] mt-1 tracking-tight">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#contact"
              id="hero-contact-btn"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#f2f2f2] hover:bg-white text-black font-semibold text-xs shadow-md transition-all duration-200 active:scale-95 group"
            >
              <span>Start a Project Inquiry</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <button
              onClick={handleCopyEmail}
              id="hero-copy-email-btn"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-[#f2f2f2] font-medium text-xs transition-all duration-200 active:scale-95 group"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#10b981]" />
                  <span className="text-[#10b981]">Email Copied!</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5 text-[#a1a1aa] group-hover:text-white" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-resume-btn"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] text-[#a1a1aa] hover:text-white font-medium text-xs transition-all duration-200 active:scale-95"
            >
              <FileText className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>Resume</span>
              <ExternalLink className="w-3 h-3 text-[#71717a]" />
            </a>
          </div>

          {/* Social Links Bar */}
          <div className="flex items-center gap-2.5 pt-1">
            <span className="text-xs font-mono text-[#71717a] mr-1">Profiles:</span>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-[#a1a1aa] hover:text-white hover:border-white/20 transition-all"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-[#a1a1aa] hover:text-[#38bdf8] hover:border-white/20 transition-all"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
              className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-[#a1a1aa] hover:text-[#38bdf8] hover:border-white/20 transition-all"
            >
              <Twitter className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              aria-label="Email Jonathan"
              className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-[#a1a1aa] hover:text-[#10b981] hover:border-white/20 transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Signature Perry Wang macOS Window Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.165, 0.84, 0.44, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end w-full"
        >
          <div
            id="hero-portrait-window"
            className="w-full max-w-sm project-card-outline"
          >
            <div className="glare-item-top" />
            
            <div className="project-card-inner overflow-hidden p-3.5 sm:p-4 space-y-3">
              {/* macOS Window Title Bar */}
              <div className="flex items-center justify-between px-1 pb-2 border-b border-white/[0.08]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-[11px] font-mono text-[#71717a]">
                  jonathan_gurusinghe.dev
                </span>
                <span className="text-[10px] font-mono text-[#10b981] bg-[#10b981]/10 px-1.5 py-0.5 rounded">
                  ONLINE
                </span>
              </div>

              {/* Portrait Image Frame */}
              <div className="aspect-square sm:aspect-[4/5] w-full rounded-xl overflow-hidden bg-[#18181c] border border-white/[0.08] relative group">
                <img
                  src={personalInfo.profileImage}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('avatar.jpg')) {
                      target.src = {personalInfo.profileImage};
                    }
                  }}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Ambient Specular Glass Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.06] to-transparent pointer-events-none" />

                {/* Bottom Glass Tag */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2.5 rounded-xl bg-[#101010]/85 backdrop-blur-md border border-white/[0.12] flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-white tracking-tight">{personalInfo.name}</p>
                    <p className="text-[10px] text-[#a1a1aa]">Freelance Engineer · Master's Student @ ECU</p>
                  </div>
                  <span className="text-[10px] font-mono text-[#38bdf8] bg-[#38bdf8]/10 px-2 py-0.5 rounded-full border border-[#38bdf8]/20">
                    Perth, WA
                  </span>
                </div>
              </div>

              {/* Tech Spec Pill Footer */}
              <div className="pt-1 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[#71717a]">
                <div className="flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>React · TypeScript · Node</span>
                </div>
                <span>Perth · GMT+8</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Explore Indicator */}
      <div className="mt-14 flex items-center justify-center">
        <a
          href="#projects"
          className="inline-flex flex-col items-center gap-1.5 text-[11px] font-mono text-[#71717a] hover:text-[#f2f2f2] transition-colors group"
        >
          <span>SCROLL TO EXPLORE WORK</span>
          <ChevronDown className="w-3.5 h-3.5 text-[#a1a1aa] group-hover:translate-y-1 transition-transform animate-bounce" />
        </a>
      </div>
    </section>
  );
};
