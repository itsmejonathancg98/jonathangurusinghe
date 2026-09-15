import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Building2 } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
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
          <span>EXPERIENCE & TRACK RECORD</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.035em] text-[#f2f2f2] leading-[1.1]">
          Commercial Track Record.
        </h2>
        <p className="text-sm sm:text-base text-[#a1a1aa] mt-3 font-normal leading-relaxed">
          From full-lifecycle commercial freelance engineering to industrial enterprise ERP systems and academic tutoring.
        </p>
      </motion.div>

      {/* Perry Wang Card List */}
      <div className="space-y-6">
        {experiences.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: idx * 0.07, ease: [0.165, 0.84, 0.44, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="project-card-outline group"
          >
            <div className="glare-item-top" />
            <div className="project-card-inner p-6 sm:p-8 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.08]">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-[#38bdf8] mb-2">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{item.company}</span>
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#f2f2f2] tracking-tight group-hover:text-white transition-colors">
                    {item.role}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-[#71717a]">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
                    <Calendar className="w-3.5 h-3.5 text-[#38bdf8]" />
                    <span>{item.date}</span>
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
                    <MapPin className="w-3.5 h-3.5 text-[#71717a]" />
                    <span>{item.location}</span>
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#a1a1aa] leading-relaxed font-normal">
                {item.desc}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.03] border border-white/[0.06] text-[#888888] group-hover:border-white/15 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
