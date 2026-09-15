import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Smartphone,
  Cloud,
  Calculator,
  Wrench,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  Layers,
  Sparkles,
} from 'lucide-react';
import { skillGroups, skillBars } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);

  const getGroupIcon = (title: string) => {
    if (title.includes('Frontend') || title.includes('Web') || title.includes('Mobile'))
      return <Code2 className="w-3.5 h-3.5 text-[#38bdf8]" />;
    if (title.includes('Data') || title.includes('Cloud'))
      return <Cloud className="w-3.5 h-3.5 text-[#c084fc]" />;
    if (title.includes('Mathematics'))
      return <Calculator className="w-3.5 h-3.5 text-[#10b981]" />;
    if (title.includes('Database'))
      return <Database className="w-3.5 h-3.5 text-[#fbbf24]" />;
    if (title.includes('WordPress') || title.includes('CMS'))
      return <Layers className="w-3.5 h-3.5 text-[#f43f5e]" />;
    return <Wrench className="w-3.5 h-3.5 text-[#38bdf8]" />;
  };

  return (
    <section
      id="skills"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-white/[0.08] relative"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono tracking-widest text-[#a1a1aa] uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
          <span>TECHNICAL SPECIFICATIONS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.035em] text-[#f2f2f2] leading-[1.1]">
          Capabilities & Tooling.
        </h2>
        <p className="text-sm sm:text-base text-[#a1a1aa] mt-3 font-normal leading-relaxed">
          Full-stack engineering proficiency built on strict static typing, performant runtime engines, and modern tooling.
        </p>
      </motion.div>

      {/* Two Column Perry Wang Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Proficiency Meters */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.165, 0.84, 0.44, 1] }}
          className="lg:col-span-6 project-card-outline flex flex-col group"
        >
          <div className="glare-item-top" />
          <div className="project-card-inner p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <div>
                <h3 className="text-xl font-semibold text-[#f2f2f2] tracking-tight">Core Competencies</h3>
                <p className="text-xs font-mono text-[#71717a] mt-0.5">Production architecture benchmarks</p>
              </div>
              <span className="px-3 py-1 rounded-full text-[11px] font-mono text-[#38bdf8] bg-[#38bdf8]/10 border border-[#38bdf8]/20">
                Verified Stacks
              </span>
            </div>

            <div className="space-y-5">
              {skillBars.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-medium text-[#f2f2f2]">{item.stack}</span>
                    <span className="font-mono text-[#71717a] text-[11px]">{item.progressPercentage}%</span>
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full h-1.5 rounded-full bg-white/[0.06] overflow-hidden p-0.5 border border-white/[0.04]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progressPercentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: idx * 0.06, ease: [0.165, 0.84, 0.44, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-[#38bdf8] to-[#818cf8]"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#71717a] font-mono">
              <span>TypeScript · React · Tailwind</span>
              <span className="text-[#10b981]">100% Tested Stacks</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Domain Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.165, 0.84, 0.44, 1] }}
          className="lg:col-span-6 project-card-outline flex flex-col group"
        >
          <div className="glare-item-top" />
          <div className="project-card-inner p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <div>
                  <h3 className="text-xl font-semibold text-[#f2f2f2] tracking-tight">Domain Matrix</h3>
                  <p className="text-xs font-mono text-[#71717a] mt-0.5">Select category to inspect tooling</p>
                </div>
              </div>

              {/* Pills Row */}
              <div className="flex flex-wrap gap-2">
                {skillGroups.map((group, idx) => {
                  const isSelected = activeGroupIndex === idx;
                  return (
                    <button
                      key={group.title}
                      onClick={() => setActiveGroupIndex(idx)}
                      className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-2 focus:outline-none ${
                        isSelected
                          ? 'text-white'
                          : 'text-[#888888] hover:text-[#f2f2f2] bg-white/[0.02] border border-white/[0.06]'
                      }`}
                    >
                      {isSelected && (
                        <motion.div
                          layoutId="skillDomainPill"
                          className="absolute inset-0 rounded-full bg-white/[0.12] border border-white/20"
                          transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                        />
                      )}
                      <span className="relative z-10">{getGroupIcon(group.title)}</span>
                      <span className="relative z-10">{group.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Display active category skills */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeGroupIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: [0.165, 0.84, 0.44, 1] }}
                  className="p-5 rounded-2xl bg-[#141417] border border-white/[0.08] space-y-3 mt-4"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#f2f2f2]">
                    {getGroupIcon(skillGroups[activeGroupIndex].title)}
                    <span>{skillGroups[activeGroupIndex].title}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {skillGroups[activeGroupIndex].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-[#d4d4d8] hover:border-white/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#71717a]">
              <span>Master's Student in Computer Science · ECU</span>
              <span className="text-[#10b981]">Production Ready</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
