import React from 'react';
import { motion } from 'motion/react';
import {
  Quote,
  CheckCircle2,
  Compass,
  Code,
  Layers,
  ArrowRight,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { DeveloperWorkstationAnimation } from './DeveloperWorkstationAnimation';

export const PersonalSpotlight: React.FC = () => {
  return (
    <section
      id="personal-spotlight"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-white/[0.08] relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.165, 0.84, 0.44, 1] }}
        className="project-card-outline relative overflow-hidden group"
      >
        <div className="glare-item-top" />
        <div className="project-card-inner p-6 sm:p-12 space-y-10">
          {/* Subtle Ambient Radial Highlight */}
          <div
            className="absolute -top-32 right-0 w-[500px] h-[300px] pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at top right, rgba(255, 255, 255, 0.08), transparent 70%)',
            }}
          />

          {/* Guiding Philosophy Callout */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3 relative">
            <div className="flex items-center gap-2 text-[#38bdf8] font-mono text-xs uppercase tracking-widest">
              <Quote className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>Guiding Engineering Philosophy</span>
            </div>
            <p className="text-xl sm:text-2xl font-normal text-[#f2f2f2] italic tracking-tight leading-relaxed">
              "{personalInfo.personalQuote}"
            </p>
          </div>

          {/* Narrative Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-[#a1a1aa] leading-relaxed pt-2 border-t border-white/[0.06]">
            <p>
              With roots in software engineering research and practical industry delivery, I approach software with obsessive attention to detail. Studying as a <strong className="text-[#f2f2f2] font-medium">Master of Computer Science student at Edith Cowan University in Perth</strong> allows me to continually deepen my expertise in system performance, algorithmic efficiency, and distributed software design.
            </p>
            <p>
              Whether building bespoke client business platforms, architecting React & TypeScript SPAs, or optimizing WordPress infrastructures, I focus on clean maintainable code, transparent communication, and tangible commercial value for my clients.
            </p>
          </div>

          {/* Principles Bento Grid */}
          <div className="pt-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#71717a] mb-4">
              Core Engineering Tenets
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5">
              <motion.div
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-all group/card"
              >
                <div className="w-9 h-9 rounded-xl bg-[#38bdf8]/10 text-[#38bdf8] flex items-center justify-center mb-3 group-hover/card:bg-[#38bdf8] group-hover/card:text-black transition-colors">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <p className="text-sm font-semibold text-[#f2f2f2] group-hover/card:text-white transition-colors">
                  Clean Code & Types
                </p>
                <p className="text-xs text-[#71717a] mt-1">Strict typing and modular component systems</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-all group/card"
              >
                <div className="w-9 h-9 rounded-xl bg-[#10b981]/10 text-[#10b981] flex items-center justify-center mb-3 group-hover/card:bg-[#10b981] group-hover/card:text-black transition-colors">
                  <Compass className="w-4 h-4" />
                </div>
                <p className="text-sm font-semibold text-[#f2f2f2] group-hover/card:text-white transition-colors">
                  Client-First Delivery
                </p>
                <p className="text-xs text-[#71717a] mt-1">Direct communication & agile milestones</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-all group/card"
              >
                <div className="w-9 h-9 rounded-xl bg-[#c084fc]/10 text-[#c084fc] flex items-center justify-center mb-3 group-hover/card:bg-[#c084fc] group-hover/card:text-black transition-colors">
                  <Code className="w-4 h-4" />
                </div>
                <p className="text-sm font-semibold text-[#f2f2f2] group-hover/card:text-white transition-colors">
                  Modern Tooling
                </p>
                <p className="text-xs text-[#71717a] mt-1">React, TypeScript, Next.js, Node</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-all group/card"
              >
                <div className="w-9 h-9 rounded-xl bg-[#fbbf24]/10 text-[#fbbf24] flex items-center justify-center mb-3 group-hover/card:bg-[#fbbf24] group-hover/card:text-black transition-colors">
                  <Layers className="w-4 h-4" />
                </div>
                <p className="text-sm font-semibold text-[#f2f2f2] group-hover/card:text-white transition-colors">
                  Academic Rigor
                </p>
                <p className="text-xs text-[#71717a] mt-1">ECU Master's Student in Perth</p>
              </motion.div>
            </div>
          </div>

          {/* Developer Workstation Simulation Frame */}
          <div className="pt-6 border-t border-white/[0.08]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-5 gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8]">
                    Interactive Developer Workstation
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono text-[#38bdf8] bg-[#38bdf8]/10 border border-[#38bdf8]/30">
                    <Sparkles className="w-3 h-3" />
                    Live Simulation
                  </span>
                </div>
                <p className="text-xs text-[#71717a] mt-1">
                  Interactive developer station with stack switcher, system metric telemetry, and live streaming code.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] overflow-hidden bg-[#0c0c0e] p-2 sm:p-4">
              <DeveloperWorkstationAnimation />
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 flex flex-wrap items-center gap-3 border-t border-white/[0.08]">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#f2f2f2] hover:bg-white text-black text-xs font-semibold shadow-md transition-all active:scale-95"
            >
              <span>Discuss a Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-[#f2f2f2] text-xs font-medium transition-all group"
            >
              <span>Client Inquiry Form</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#38bdf8] group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
