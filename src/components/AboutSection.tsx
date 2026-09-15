import React from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Code2,
  Globe,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-white/[0.08] relative"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
        className="mb-14 text-center max-w-2xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono tracking-widest text-[#a1a1aa] uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
          <span>BACKGROUND & ARCHITECTURE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.035em] text-[#f2f2f2] leading-[1.1]">
          Rigorous foundations. Measurable digital impact.
        </h2>
        <p className="text-sm sm:text-base text-[#a1a1aa] mt-3 font-normal leading-relaxed">
          Combining computer science theory with commercial freelance delivery across Western Australia and worldwide.
        </p>
      </motion.div>

      {/* Perry Wang Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
        {/* Large Bento Card: Academic & Research at ECU Perth */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.165, 0.84, 0.44, 1] }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="md:col-span-8 project-card-outline flex flex-col group"
        >
          <div className="glare-item-top" />
          <div className="project-card-inner p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-[#38bdf8]">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Edith Cowan University · Perth</span>
                </span>
                <span className="text-xs font-mono text-[#71717a]">Master's Student in CS</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-semibold text-[#f2f2f2] tracking-tight">
                Advanced Software Architecture & Computing Theory
              </h3>

              <p className="text-sm text-[#a1a1aa] leading-relaxed">
                I am a software engineer currently studying as a postgraduate student in the{' '}
                <strong className="text-white font-medium">Master of Computer Science at Edith Cowan University (ECU) in Perth</strong>.
                My academic studies center on resilient cloud architectures, distributed system design, and algorithmic optimization.
              </p>

              <p className="text-sm text-[#a1a1aa] leading-relaxed">
                I hold a <strong className="text-white font-medium">BEng (Hons) in Software Engineering</strong> from the Informatics Institute of Technology (IIT), awarded in partnership with the University of Westminster (UK), bringing an enterprise-grade understanding of typed software, testing, and responsive interface delivery.
              </p>
            </div>

            <div className="pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <p className="text-[11px] font-mono text-[#71717a]">Location</p>
                <p className="text-xs sm:text-sm font-semibold text-[#f2f2f2] mt-0.5">Perth, WA</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <p className="text-[11px] font-mono text-[#71717a]">Master's Study</p>
                <p className="text-xs sm:text-sm font-semibold text-[#38bdf8] mt-0.5">ECU Student</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <p className="text-[11px] font-mono text-[#71717a]">Undergrad</p>
                <p className="text-xs sm:text-sm font-semibold text-[#f2f2f2] mt-0.5">BEng (Hons)</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <p className="text-[11px] font-mono text-[#71717a]">Availability</p>
                <p className="text-xs sm:text-sm font-semibold text-[#10b981] mt-0.5">Open to Roles</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bento Card 2: Commercial Delivery */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.165, 0.84, 0.44, 1] }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="md:col-span-4 project-card-outline flex flex-col group"
        >
          <div className="glare-item-top" />
          <div className="project-card-inner p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-5">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-[#38bdf8]/10 border border-[#38bdf8]/30 text-[#38bdf8] flex items-center justify-center">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-[#f2f2f2] tracking-tight">
                Freelance & Client Delivery
              </h3>
              <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                Direct collaboration with founders, agencies, and businesses in Australia and internationally to engineer custom platforms with precision.
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.08] space-y-2.5">
              <div className="flex items-center gap-2 text-xs text-[#f2f2f2]">
                <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                <span>Full lifecycle conception to deployment</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#f2f2f2]">
                <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                <span>Direct, transparent communication</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#f2f2f2]">
                <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                <span>Modern performance and SEO standards</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bento Card 3: Modern Web Stack */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.165, 0.84, 0.44, 1] }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="md:col-span-6 project-card-outline flex flex-col group"
        >
          <div className="glare-item-top" />
          <div className="project-card-inner p-6 sm:p-7 space-y-4 flex-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#c084fc]/10 border border-[#c084fc]/30 text-[#c084fc] flex items-center justify-center">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#f2f2f2]">Modern Web & React Ecosystem</h3>
                <p className="text-xs font-mono text-[#71717a]">Typed architecture & fluid motion</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
              Engineering web applications using React, TypeScript, Next.js, and modern CSS tooling. Strict static typing eliminates runtime bugs and empowers rapid shipping.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vite', 'Node.js', 'REST APIs'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-[#a1a1aa]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bento Card 4: WordPress & Enterprise CMS */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.165, 0.84, 0.44, 1] }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="md:col-span-6 project-card-outline flex flex-col group"
        >
          <div className="glare-item-top" />
          <div className="project-card-inner p-6 sm:p-7 space-y-4 flex-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#fbbf24]/10 border border-[#fbbf24]/30 text-[#fbbf24] flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#f2f2f2]">WordPress & Bespoke CMS</h3>
                <p className="text-xs font-mono text-[#71717a]">Custom themes & high conversion</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
              Crafting lightweight, custom-coded WordPress themes and tailored CMS portals optimized for speed, client autonomy, and organic search visibility.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['WordPress', 'PHP', 'Custom Hooks', 'ACF Pro', 'Speed Optimization', 'SEO Architecture'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-[#a1a1aa]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
