import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Github,
  Sparkles,
  ArrowUpRight,
  ExternalLink,
  Layers,
} from 'lucide-react';
import { projects } from '../data/portfolioData';

type CategoryFilter =
  | 'All'
  | 'Web & Full Stack'
  | 'WordPress / CMS'
  | 'AI / Machine Learning'
  | 'Mobile Apps'
  | 'Enterprise / ERP';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');

  const categories: CategoryFilter[] = [
    'All',
    'Web & Full Stack',
    'WordPress / CMS',
    'Mobile Apps',
    'AI / Machine Learning',
    'Enterprise / ERP',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-white/[0.08] relative"
    >
      {/* Section Header (Perry Wang style) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
        className="text-center max-w-2xl mx-auto mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono tracking-widest text-[#a1a1aa] uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
          <span>SELECTED WORK '24–'26</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.035em] text-[#f2f2f2] leading-[1.1]">
          Engineered for performance & craft.
        </h2>
        <p className="text-sm sm:text-base text-[#a1a1aa] mt-3 font-normal leading-relaxed">
          Production web applications, bespoke client CMS builds, and computational software architectures.
        </p>
      </motion.div>

      {/* Category Filter Pills */}
      <div className="flex items-center justify-center mb-12 overflow-x-auto py-2">
        <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-[#16161a] border border-white/[0.08] shadow-lg">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap focus:outline-none ${
                  isSelected ? 'text-[#f2f2f2]' : 'text-[#71717a] hover:text-[#d4d4d8]'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="projectCategoryPill"
                    className="absolute inset-0 rounded-full bg-white/[0.12] border border-white/20 shadow-sm"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid (Perry Wang Card Outline & Glare Construction) */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.article
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.4, delay: idx * 0.04, ease: [0.165, 0.84, 0.44, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.165, 0.84, 0.44, 1] } }}
              className="project-card-outline flex flex-col group"
            >
              {/* Top Specular Glare Line */}
              <div className="glare-item-top" />

              {/* Inner Card Container */}
              <div className="project-card-inner p-6 sm:p-7 flex flex-col justify-between flex-1 relative overflow-hidden">
                {/* Background Ambient Corner Aura */}
                <div
                  className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-2xl opacity-20 pointer-events-none group-hover:opacity-35 transition-opacity"
                  style={{
                    background:
                      project.category === 'Web & Full Stack'
                        ? '#38bdf8'
                        : project.category === 'WordPress / CMS'
                        ? '#06b6d4'
                        : project.category === 'AI / Machine Learning'
                        ? '#c084fc'
                        : '#10b981',
                  }}
                />

                <div className="relative z-10">
                  {/* Top Bar: Category pill and Featured status */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider bg-white/[0.04] border border-white/[0.08] text-[#a1a1aa]">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#38bdf8]">
                        <Sparkles className="w-3 h-3" />
                        <span>Featured</span>
                      </span>
                    )}
                  </div>

                  {/* Project Title and Diagonal Arrow */}
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-semibold text-[#f2f2f2] tracking-tight group-hover:text-white transition-colors">
                      {project.name}
                    </h3>
                    {(project.demoUrl || project.github) && (
                      <ArrowUpRight className="w-4 h-4 text-[#71717a] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
                    )}
                  </div>

                  {/* Perry Wang Description Formula: Company/Client Tagline */}
                  <p className="text-xs text-[#a1a1aa] mt-2 leading-relaxed font-normal">
                    <span className="font-semibold text-white/90">{project.tagline}</span> — {project.desc}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/[0.03] border border-white/[0.06] text-[#888888]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-5 mt-6 border-t border-white/[0.06] flex items-center justify-between relative z-10">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#38bdf8] hover:text-[#7dd3fc] transition-colors group/link"
                    >
                      <span>Visit Live Platform</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  ) : project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#38bdf8] hover:text-[#7dd3fc] transition-colors"
                    >
                      <span>View Source Code</span>
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-[#71717a]">Client Production</span>
                  )}

                  <div className="flex items-center gap-1.5">
                    {project.github && project.demoUrl && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} GitHub repository`}
                        className="p-1.5 rounded-full text-[#71717a] hover:text-white hover:bg-white/[0.08] transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
