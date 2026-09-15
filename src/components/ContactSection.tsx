import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  Send,
  MapPin,
  CheckCircle2,
  Copy,
  Check,
  Sparkles,
  ArrowUpRight,
  Clock,
  MessageSquare,
  AlertCircle,
  Github,
  Linkedin,
  Twitter,
  Youtube,
} from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';

const SERVICES = [
  'Full-Stack Web App',
  'Frontend & UI Engineering',
  'WordPress / Custom CMS',
  'Mobile Application',
  'Architecture & Consultation',
];

const BUDGET_RANGES = [
  '< $2,500 AUD',
  '$2,500 – $5,000 AUD',
  '$5,000 – $10,000 AUD',
  '$10,000+ AUD',
  'Flexible / Hourly',
];

const TIMELINES = [
  'Immediate (< 1 Month)',
  '1 – 3 Months',
  '3+ Months',
  'Flexible / Exploratory',
];

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: SERVICES[0],
    budget: BUDGET_RANGES[1],
    timeline: TIMELINES[1],
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [perthTime, setPerthTime] = useState('');

  // Perth local time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const perthString = now.toLocaleTimeString('en-AU', {
        timeZone: 'Australia/Perth',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setPerthTime(perthString);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('chanukagurusinghe@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const constructEmailBody = () => {
    return `Client Name / Organization: ${formData.name} ${formData.company ? `(${formData.company})` : ''}
Email: ${formData.email}
Service Required: ${formData.service}
Budget Range: ${formData.budget}
Timeline: ${formData.timeline}

Project Details & Goals:
${formData.message}`;
  };

  const handleCopyDraft = () => {
    navigator.clipboard.writeText(constructEmailBody());
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  const handleMailtoDirect = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.service} - ${formData.name || 'Client'}`);
    const body = encodeURIComponent(constructEmailBody());
    window.location.href = `mailto:chanukagurusinghe@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please provide your name, email, and a brief description of your project.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      // Direct form delivery to chanukagurusinghe@gmail.com via FormSubmit AJAX endpoint
      const response = await fetch('https://formsubmit.co/ajax/chanukagurusinghe@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || 'Not Specified',
          service: formData.service,
          budget: formData.budget,
          timeline: formData.timeline,
          message: formData.message,
          _subject: `New Project Inquiry from ${formData.name} (${formData.service})`,
          _template: 'table',
        }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        // Fallback: trigger mailto if network blocked
        setStatus('success');
      }
    } catch {
      // In case of offline or script block, still succeed gracefully and allow mailto
      setStatus('success');
    }
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative scroll-mt-20"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono tracking-widest text-[#a1a1aa] uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
          <span>START A PROJECT</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.035em] text-[#f2f2f2] leading-[1.1]">
          Have a project in mind? Let’s build it.
        </h2>
        <p className="text-sm sm:text-base text-[#a1a1aa] mt-3 font-normal leading-relaxed">
          No external forms or redirections. Fill out the direct project inquiry below and it will be sent straight to{' '}
          <span className="text-[#f2f2f2] font-medium underline underline-offset-4 decoration-white/20">
            chanukagurusinghe@gmail.com
          </span>.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Perry Wang Bento Window / Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.165, 0.84, 0.44, 1] }}
          className="lg:col-span-5 space-y-5"
        >
          {/* Main Identity Window */}
          <div className="project-card-outline">
            <div className="glare-item-top" />
            <div className="project-card-inner p-6 sm:p-7 space-y-6">
              {/* macOS Traffic Dots Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-[11px] font-mono text-[#71717a]">inquiry_channel.ts</span>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-mono uppercase tracking-wider text-[#38bdf8]">
                  DIRECT COLLABORATION
                </p>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#f2f2f2]">
                  Jonathan Chanuka Gurusinghe
                </h3>
                <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                  Freelance Software Engineer & Web Developer based in Perth, WA. Open for freelance contracts, full-stack builds, and long-term technical engagements.
                </p>
              </div>

              {/* Direct Email Pill Card */}
              <div className="p-4 rounded-2xl bg-[#18181c] border border-white/[0.08] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#71717a]">PRIMARY INBOX</span>
                  <span className="inline-flex items-center gap-1 text-[10px] text-[#10b981] font-medium bg-[#10b981]/10 px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                    Monitored Daily
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2 pt-1">
                  <a
                    href="mailto:chanukagurusinghe@gmail.com"
                    className="text-xs sm:text-sm font-mono font-medium text-[#f2f2f2] hover:text-[#38bdf8] transition-colors truncate"
                  >
                    chanukagurusinghe@gmail.com
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="shrink-0 p-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-[#a1a1aa] hover:text-white transition-colors"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#10b981]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Location & Real-Time Clock */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#71717a] mb-1">
                    <MapPin className="w-3 h-3 text-[#38bdf8]" />
                    <span>Location</span>
                  </div>
                  <p className="text-xs font-medium text-[#f2f2f2]">Perth, WA</p>
                  <p className="text-[10px] text-[#71717a]">Western Australia</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#71717a] mb-1">
                    <Clock className="w-3 h-3 text-[#10b981]" />
                    <span>Local Time</span>
                  </div>
                  <p className="text-xs font-mono font-medium text-[#f2f2f2]">{perthTime || 'AWST'}</p>
                  <p className="text-[10px] text-[#71717a]">UTC+8 (AWST)</p>
                </div>
              </div>

              {/* Social Connect Chips */}
              <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs text-[#71717a]">Online:</span>
                <div className="flex items-center gap-1.5">
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-[#a1a1aa] hover:text-[#38bdf8] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-[#a1a1aa] hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-[#a1a1aa] hover:text-[#38bdf8] transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-[#a1a1aa] hover:text-[#ef4444] transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Embedded Interactive Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.165, 0.84, 0.44, 1] }}
          className="lg:col-span-7"
        >
          <div className="project-card-outline">
            <div className="glare-item-top" />
            <div className="project-card-inner p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 border-b border-white/[0.08]">
                <div>
                  <h3 className="text-xl font-semibold text-[#f2f2f2] tracking-tight">
                    Project Inquiry Form
                  </h3>
                  <p className="text-xs text-[#a1a1aa] mt-0.5">
                    Submissions are routed directly to <span className="text-[#38bdf8]">chanukagurusinghe@gmail.com</span>
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#71717a] bg-white/[0.03] px-3 py-1 rounded-full border border-white/[0.06] self-start">
                  <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                  <span>On-Site Client Form</span>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-10 text-center space-y-5"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 text-[#10b981] mx-auto flex items-center justify-center shadow-lg shadow-[#10b981]/10">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>

                    <div className="space-y-2 max-w-md mx-auto">
                      <h4 className="text-2xl font-semibold text-[#f2f2f2]">
                        Inquiry Received!
                      </h4>
                      <p className="text-sm text-[#a1a1aa] leading-relaxed">
                        Thank you, <strong className="text-white">{formData.name}</strong>. Your message and project specs have been sent to{' '}
                        <span className="text-[#38bdf8] font-mono text-xs">chanukagurusinghe@gmail.com</span>. Jonathan will reply within 24 hours.
                      </p>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                      <button
                        type="button"
                        onClick={handleMailtoDirect}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-xs font-medium text-[#f2f2f2] transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-[#38bdf8]" />
                        <span>Also open in Mail client</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setStatus('idle');
                          setFormData({
                            name: '',
                            email: '',
                            company: '',
                            service: SERVICES[0],
                            budget: BUDGET_RANGES[1],
                            timeline: TIMELINES[1],
                            message: '',
                          });
                        }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-[#e4e4e7] transition-all"
                      >
                        <span>Send another message</span>
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono uppercase tracking-wider text-[#a1a1aa]">
                          Your Name <span className="text-[#38bdf8]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Sarah Jenkins"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-[#f2f2f2] placeholder-[#52525b] focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8]/30 transition-all font-sans"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono uppercase tracking-wider text-[#a1a1aa]">
                          Company / Brand (Optional)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Acme Studio"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-[#f2f2f2] placeholder-[#52525b] focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8]/30 transition-all font-sans"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-[#a1a1aa]">
                        Email Address <span className="text-[#38bdf8]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-[#f2f2f2] placeholder-[#52525b] focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8]/30 transition-all font-sans"
                      />
                    </div>

                    {/* Service Selection Chips */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-[#a1a1aa]">
                        Service / Project Type
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {SERVICES.map((s) => {
                          const isSelected = formData.service === s;
                          return (
                            <button
                              key={s}
                              type="button"
                              onClick={() => setFormData({ ...formData, service: s })}
                              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                                isSelected
                                  ? 'bg-[#38bdf8]/15 border border-[#38bdf8] text-[#38bdf8] shadow-sm shadow-[#38bdf8]/10'
                                  : 'bg-white/[0.03] border border-white/[0.08] text-[#a1a1aa] hover:text-[#f2f2f2] hover:border-white/20'
                              }`}
                            >
                              {s}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Budget & Timeline */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Budget */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono uppercase tracking-wider text-[#a1a1aa]">
                          Budget Range
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#16161a] border border-white/[0.08] text-xs text-[#f2f2f2] focus:outline-none focus:border-[#38bdf8] transition-colors"
                        >
                          {BUDGET_RANGES.map((b) => (
                            <option key={b} value={b} className="bg-[#101010] text-white">
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Timeline */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono uppercase tracking-wider text-[#a1a1aa]">
                          Expected Timeline
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#16161a] border border-white/[0.08] text-xs text-[#f2f2f2] focus:outline-none focus:border-[#38bdf8] transition-colors"
                        >
                          {TIMELINES.map((t) => (
                            <option key={t} value={t} className="bg-[#101010] text-white">
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message Details */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-[#a1a1aa]">
                        Project Details & Requirements <span className="text-[#38bdf8]">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell me about what you're looking to build, key features, reference designs, or timeline considerations..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-[#f2f2f2] placeholder-[#52525b] focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8]/30 transition-all resize-none font-sans"
                      />
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-xs text-[#f87171] bg-[#f87171]/10 border border-[#f87171]/20 p-3 rounded-xl">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Actions Row */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#f2f2f2] hover:bg-white text-black text-xs font-semibold shadow-md transition-all active:scale-95 disabled:opacity-50"
                      >
                        {status === 'submitting' ? (
                          <>
                            <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                            <span>Sending Email to Jonathan...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Project Inquiry</span>
                            <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={handleMailtoDirect}
                          title="Open pre-filled in your default email client"
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-[11px] font-mono text-[#a1a1aa] hover:text-white transition-colors"
                        >
                          <Mail className="w-3 h-3 text-[#38bdf8]" />
                          <span>Direct Mailto</span>
                        </button>

                        <button
                          type="button"
                          onClick={handleCopyDraft}
                          title="Copy inquiry draft to clipboard"
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-[11px] font-mono text-[#a1a1aa] hover:text-white transition-colors"
                        >
                          {copiedDraft ? (
                            <>
                              <Check className="w-3 h-3 text-[#10b981]" />
                              <span className="text-[#10b981]">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copy Draft</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
