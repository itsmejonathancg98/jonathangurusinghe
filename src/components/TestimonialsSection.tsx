import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, CheckCircle, Briefcase, HeartPulse, Music, Sparkles } from 'lucide-react';
import { feedbacks } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  const [selectedClient, setSelectedClient] = useState<string>('all');

  const filteredFeedbacks = feedbacks.filter((item) => {
    if (selectedClient === 'all') return true;
    if (selectedClient === 'siraj') return item.name.toLowerCase().includes('siraj');
    if (selectedClient === 'janith') return item.name.toLowerCase().includes('janith');
    if (selectedClient === 'melantha') return item.name.toLowerCase().includes('melantha');
    return true;
  });

  return (
    <section
      id="feedback"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-white/[0.08] relative"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
        className="text-center max-w-2xl mx-auto mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono tracking-widest text-[#a1a1aa] uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
          <span>CLIENT REVIEWS & ENDORSEMENTS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.035em] text-[#f2f2f2] leading-[1.1]">
          Trusted by founders & leaders.
        </h2>
        <p className="text-sm sm:text-base text-[#a1a1aa] mt-3 font-normal leading-relaxed">
          Direct feedback from commercial directors, clinical psychologists, and creative academy founders.
        </p>
      </motion.div>

      {/* Capsule Client Switcher */}
      <div className="flex items-center justify-center mb-12 overflow-x-auto py-2">
        <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-[#16161a] border border-white/[0.08] shadow-lg">
          <button
            onClick={() => setSelectedClient('all')}
            className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap focus:outline-none ${
              selectedClient === 'all' ? 'text-[#f2f2f2]' : 'text-[#71717a] hover:text-[#d4d4d8]'
            }`}
          >
            {selectedClient === 'all' && (
              <motion.div
                layoutId="testimonialPill"
                className="absolute inset-0 rounded-full bg-white/[0.12] border border-white/20"
                transition={{ type: 'spring', stiffness: 450, damping: 32 }}
              />
            )}
            <span className="relative z-10">All Reviews</span>
          </button>

          <button
            onClick={() => setSelectedClient('siraj')}
            className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap focus:outline-none flex items-center gap-1.5 ${
              selectedClient === 'siraj' ? 'text-[#f2f2f2]' : 'text-[#71717a] hover:text-[#d4d4d8]'
            }`}
          >
            {selectedClient === 'siraj' && (
              <motion.div
                layoutId="testimonialPill"
                className="absolute inset-0 rounded-full bg-white/[0.12] border border-white/20"
                transition={{ type: 'spring', stiffness: 450, damping: 32 }}
              />
            )}
            <Briefcase className="w-3 h-3 text-[#38bdf8] relative z-10" />
            <span className="relative z-10">Siraj Haniffa</span>
          </button>

          <button
            onClick={() => setSelectedClient('janith')}
            className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap focus:outline-none flex items-center gap-1.5 ${
              selectedClient === 'janith' ? 'text-[#f2f2f2]' : 'text-[#71717a] hover:text-[#d4d4d8]'
            }`}
          >
            {selectedClient === 'janith' && (
              <motion.div
                layoutId="testimonialPill"
                className="absolute inset-0 rounded-full bg-white/[0.12] border border-white/20"
                transition={{ type: 'spring', stiffness: 450, damping: 32 }}
              />
            )}
            <HeartPulse className="w-3 h-3 text-[#c084fc] relative z-10" />
            <span className="relative z-10">Dr. Janith Rajapaksha</span>
          </button>

          <button
            onClick={() => setSelectedClient('melantha')}
            className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap focus:outline-none flex items-center gap-1.5 ${
              selectedClient === 'melantha' ? 'text-[#f2f2f2]' : 'text-[#71717a] hover:text-[#d4d4d8]'
            }`}
          >
            {selectedClient === 'melantha' && (
              <motion.div
                layoutId="testimonialPill"
                className="absolute inset-0 rounded-full bg-white/[0.12] border border-white/20"
                transition={{ type: 'spring', stiffness: 450, damping: 32 }}
              />
            )}
            <Music className="w-3 h-3 text-[#fbbf24] relative z-10" />
            <span className="relative z-10">Melantha Perera</span>
          </button>
        </div>
      </div>

      {/* Reviews Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredFeedbacks.map((item, idx) => (
            <motion.div
              layout
              key={item.name}
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.165, 0.84, 0.44, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.165, 0.84, 0.44, 1] } }}
              className="project-card-outline flex flex-col group"
            >
              <div className="glare-item-top" />
              <div className="project-card-inner p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-5">
                <div>
                  {/* Rating & Verified Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-1 text-[#fbbf24]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 text-[10px] font-mono text-[#10b981]">
                      <CheckCircle className="w-3 h-3" />
                      <span>Verified Client</span>
                    </span>
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-sm text-[#d4d4d8] leading-relaxed font-normal">
                    "{item.feedback}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-5 border-t border-white/[0.06] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-xs font-semibold text-[#f2f2f2] shrink-0">
                    {item.avatarText}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#f2f2f2]">{item.name}</h4>
                    <p className="text-xs text-[#71717a]">{item.role}</p>
                    <p className="text-[11px] font-mono text-[#38bdf8] mt-0.5">{item.clientCompany}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
