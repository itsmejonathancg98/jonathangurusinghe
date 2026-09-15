import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, GraduationCap } from 'lucide-react';
import { educations } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
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
          <span>ACADEMIC CREDENTIALS & RESEARCH</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.035em] text-[#f2f2f2] leading-[1.1]">
          Qualifications & Research.
        </h2>
        <p className="text-sm sm:text-base text-[#a1a1aa] mt-3 font-normal leading-relaxed">
          Currently studying Master of Computer Science at Edith Cowan University in Perth, paired with an honours undergraduate degree in Software Engineering.
        </p>
      </motion.div>

      {/* Perry Wang Education Cards */}
      <div className="space-y-6">
        {educations.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.165, 0.84, 0.44, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="project-card-outline group"
          >
            <div className="glare-item-top" />
            <div className="project-card-inner p-6 sm:p-8 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#f2f2f2] tracking-tight group-hover:text-white transition-colors">
                      {edu.degree}
                    </h3>
                    <span className="px-3 py-0.5 rounded-full text-xs font-mono text-[#38bdf8] bg-white/[0.04] border border-white/10">
                      {edu.grade}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-[#38bdf8]">
                    {edu.schoolName}
                  </p>
                  {edu.affiliation && (
                    <p className="text-xs font-mono text-[#71717a]">
                      {edu.affiliation}
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#71717a]">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
                    <Calendar className="w-3.5 h-3.5 text-[#38bdf8]" />
                    <span>{edu.duration}</span>
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
                    <MapPin className="w-3.5 h-3.5 text-[#71717a]" />
                    <span>{edu.location}</span>
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#a1a1aa] leading-relaxed font-normal">
                {edu.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
