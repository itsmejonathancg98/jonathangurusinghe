import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Sparkles, Terminal, Code, Cpu, Music, RefreshCw } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface DeveloperWorkstationAnimationProps {
  compact?: boolean;
}

type CodeMode = 'react' | 'ai' | 'wordpress';

const codeSnippets: Record<CodeMode, { title: string; file: string; lines: string[]; lang: string }> = {
  react: {
    title: 'React & TypeScript',
    file: 'App.tsx',
    lang: 'typescript',
    lines: [
      'import { useState, useEffect } from "react";',
      'import { motion } from "motion/react";',
      '',
      'export const ClientExperience = () => {',
      '  const [status, setStatus] = useState("shipping");',
      '  return <motion.div animate={{ scale: 1.05 }} />;',
      '};',
    ],
  },
  ai: {
    title: 'Python & Machine Learning',
    file: 'model_pipeline.py',
    lang: 'python',
    lines: [
      'import tensorflow as tf',
      'from spacy import load_nlp',
      '',
      'def train_transformer(dataset):',
      '    model = tf.keras.models.Sequential([',
      '        tf.keras.layers.Dense(128, activation="relu"),',
      '    ])',
      '    return model.fit(dataset, epochs=50)',
    ],
  },
  wordpress: {
    title: 'WordPress & E-Commerce',
    file: 'functions.php',
    lang: 'php',
    lines: [
      'add_action("init", function() {',
      '    register_post_type("service_portal", [',
      '        "public" => true,',
      '        "has_archive" => true,',
      '    ]);',
      '});',
      '// Care Renovations & My Grill Friend',
    ],
  },
  audio: {
    title: 'Audio Engine & DSP',
    file: 'audioEngine.ts',
    lang: 'typescript',
    lines: [
      '// Spatial Audio & Web Audio Engine',
      'const ctx = new AudioContext();',
      'const osc = ctx.createOscillator();',
      'osc.type = "sine";',
      'osc.frequency.setValueAtTime(440, ctx.currentTime);',
      'console.log("Audio Stream & DSP Active 🎵");',
    ],
  },
};

export const DeveloperWorkstationAnimation: React.FC<DeveloperWorkstationAnimationProps> = ({
  compact = false,
}) => {
  const { currentTheme } = useTheme();
  const [mode, setMode] = useState<CodeMode>('react');
  const [isHyperSpeed, setIsHyperSpeed] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [typingLineIdx, setTypingLineIdx] = useState(0);

  // Cycle lines of code for typing effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTypingLineIdx((prev) => (prev + 1) % codeSnippets[mode].lines.length);
    }, isHyperSpeed ? 1000 : 2200);
    return () => clearInterval(interval);
  }, [mode, isHyperSpeed]);

  const handleTurboBoost = () => {
    setIsHyperSpeed(true);
    setShowCelebration(true);
    setTimeout(() => {
      setIsHyperSpeed(false);
    }, 3500);
    setTimeout(() => {
      setShowCelebration(false);
    }, 4500);
  };

  const gearDuration = isHyperSpeed ? 1.5 : 9;
  const smallGearDuration = isHyperSpeed ? 1.1 : 6;
  const typingHandSpeed = isHyperSpeed ? 0.12 : 0.28;

  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-b from-[#0284c7] via-[#0369a1] to-[#0f172a] shadow-2xl border border-sky-400/30 text-white select-none">
      {/* Top Interactive Mode Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 bg-slate-900/60 backdrop-blur-md border-b border-sky-400/20">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-bold tracking-wide text-sky-100 font-mono">
            {isHyperSpeed ? 'TURBO BUILD & DEPLOY ACTIVE' : 'DEV WORKSTATION ACTIVE'}
          </span>
        </div>

        {/* Mode Selector */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 scrollbar-none">
          <button
            onClick={() => setMode('react')}
            className={`px-2.5 py-1 rounded-xl text-[11px] font-semibold transition-all flex items-center gap-1.5 ${
              mode === 'react'
                ? 'bg-sky-400 text-slate-950 shadow-md font-bold'
                : 'text-sky-200 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Code className="w-3 h-3" />
            <span>React / TS</span>
          </button>

          <button
            onClick={() => setMode('ai')}
            className={`px-2.5 py-1 rounded-xl text-[11px] font-semibold transition-all flex items-center gap-1.5 ${
              mode === 'ai'
                ? 'bg-purple-400 text-slate-950 shadow-md font-bold'
                : 'text-sky-200 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Cpu className="w-3 h-3" />
            <span>Python / AI</span>
          </button>

          <button
            onClick={() => setMode('wordpress')}
            className={`px-2.5 py-1 rounded-xl text-[11px] font-semibold transition-all flex items-center gap-1.5 ${
              mode === 'wordpress'
                ? 'bg-emerald-400 text-slate-950 shadow-md font-bold'
                : 'text-sky-200 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Terminal className="w-3 h-3" />
            <span>WordPress</span>
          </button>

          <button
            onClick={() => setMode('audio')}
            className={`px-2.5 py-1 rounded-xl text-[11px] font-semibold transition-all flex items-center gap-1.5 ${
              mode === 'audio'
                ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
                : 'text-sky-200 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Music className="w-3 h-3" />
            <span>Audio DSP</span>
          </button>
        </div>
      </div>

      {/* Main Illustration Stage */}
      <div className="relative w-full aspect-[16/11] sm:aspect-[16/10] flex items-center justify-center p-2 sm:p-4 overflow-hidden">
        {/* Animated Celebration Burst */}
        <AnimatePresence>
          {showCelebration && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              className="absolute top-4 left-1/2 -translate-x-1/2 z-30 px-4 py-2 rounded-2xl bg-emerald-500/90 text-white font-bold text-xs shadow-lg backdrop-blur-md flex items-center gap-2 border border-emerald-300"
            >
              <Sparkles className="w-4 h-4 text-amber-200 animate-spin" />
              <span>100% Tests Green • Zero Build Errors • Deployed to Cloud!</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-cyan-400/20 blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-blue-600/30 blur-3xl pointer-events-none" />

        {/* SVG Workstation Scene */}
        <svg
          viewBox="0 0 800 650"
          className="w-full h-full max-h-[560px] drop-shadow-md select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="skyBackdrop" x1="0" y1="0" x2="800" y2="650" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.1" />
            </linearGradient>

            <linearGradient id="chairGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>

            <linearGradient id="chairCushion" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>

            <linearGradient id="screenGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#090d16" />
            </linearGradient>

            <linearGradient id="screenBlueGlow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>

            <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* 1. FLOATING BACKGROUND CODE STREAMS (Animated) */}
          <g opacity="0.6">
            {/* Floating code stream block 1 (Top Left) */}
            <motion.g
              animate={{
                x: [-12, 12, -12],
                opacity: [0.5, 0.85, 0.5],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <rect x="90" y="105" width="180" height="4" rx="2" fill="#ffffff" opacity="0.8" />
              <rect x="90" y="117" width="130" height="4" rx="2" fill="#ffffff" opacity="0.65" />
              <rect x="110" y="129" width="140" height="4" rx="2" fill="#38bdf8" opacity="0.8" />
              <rect x="110" y="141" width="100" height="4" rx="2" fill="#ffffff" opacity="0.6" />
              <rect x="90" y="153" width="160" height="4" rx="2" fill="#a78bfa" opacity="0.75" />
              <rect x="90" y="165" width="80" height="4" rx="2" fill="#ffffff" opacity="0.5" />
            </motion.g>

            {/* Floating code stream block 2 (Top Center/Right) */}
            <motion.g
              animate={{
                x: [15, -15, 15],
                opacity: [0.4, 0.75, 0.4],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            >
              <rect x="300" y="90" width="150" height="4" rx="2" fill="#ffffff" opacity="0.85" />
              <rect x="330" y="102" width="180" height="4" rx="2" fill="#ffffff" opacity="0.6" />
              <rect x="330" y="114" width="130" height="4" rx="2" fill="#34d399" opacity="0.7" />
              <rect x="350" y="126" width="190" height="4" rx="2" fill="#ffffff" opacity="0.7" />
              <rect x="420" y="138" width="110" height="4" rx="2" fill="#38bdf8" opacity="0.6" />
            </motion.g>
          </g>

          {/* 2. WHITE GROUND SHADOW ELLIPSE */}
          <ellipse cx="400" cy="565" rx="360" ry="24" fill="#ffffff" opacity="0.9" />
          <ellipse cx="400" cy="565" rx="330" ry="18" fill="#e2e8f0" opacity="0.7" />

          {/* 3. WASTE BASKET (Next to Right Desk Leg) */}
          <g transform="translate(620, 480)">
            {/* Wastebasket basket frame */}
            <path
              d="M5 0 L15 70 L75 70 L85 0 Z"
              fill="#38bdf8"
              opacity="0.35"
              stroke="#0284c7"
              strokeWidth="2.5"
            />
            {/* Criss-cross wire mesh pattern */}
            <line x1="12" y1="0" x2="72" y2="70" stroke="#0284c7" strokeWidth="1.5" opacity="0.5" />
            <line x1="32" y1="0" x2="78" y2="55" stroke="#0284c7" strokeWidth="1.5" opacity="0.5" />
            <line x1="52" y1="0" x2="80" y2="35" stroke="#0284c7" strokeWidth="1.5" opacity="0.5" />
            <line x1="78" y1="0" x2="18" y2="70" stroke="#0284c7" strokeWidth="1.5" opacity="0.5" />
            <line x1="58" y1="0" x2="12" y2="55" stroke="#0284c7" strokeWidth="1.5" opacity="0.5" />
            <line x1="38" y1="0" x2="10" y2="35" stroke="#0284c7" strokeWidth="1.5" opacity="0.5" />
            {/* Crumpled paper inside */}
            <circle cx="35" cy="45" r="10" fill="#ffffff" opacity="0.9" />
            <circle cx="55" cy="50" r="12" fill="#f1f5f9" opacity="0.95" />
            <circle cx="45" cy="30" r="8" fill="#e2e8f0" opacity="0.8" />
          </g>

          {/* 4. WORKSTATION DESK */}
          {/* Desk Legs */}
          {/* Left leg */}
          <polygon points="90,265 105,265 82,570 67,570" fill="#94a3b8" />
          <polygon points="105,265 115,265 95,570 82,570" fill="#cbd5e1" />
          {/* Center-left support strut */}
          <polygon points="190,265 200,265 220,570 208,570" fill="#94a3b8" opacity="0.85" />
          {/* Desk Tabletop */}
          <rect x="75" y="250" width="460" height="15" rx="4" fill="#e2e8f0" />
          <rect x="75" y="260" width="460" height="5" fill="#cbd5e1" />

          {/* 5. MONITORS ON DESK */}
          {/* Monitor 1: LEFT MONITOR (Angled view) */}
          <g transform="translate(85, 160)">
            {/* Monitor Stand */}
            <rect x="42" y="90" width="14" height="15" fill="#334155" />
            <ellipse cx="49" cy="105" rx="20" ry="4" fill="#1e293b" />
            {/* Screen Bezel */}
            <rect
              x="0"
              y="0"
              width="98"
              height="90"
              rx="6"
              fill="#0f172a"
              stroke="#38bdf8"
              strokeWidth="2.5"
            />
            {/* Screen Glass */}
            <rect x="5" y="5" width="88" height="80" rx="4" fill="#ffffff" />
            {/* Code Lines on left screen */}
            <rect x="12" y="14" width="45" height="3" rx="1.5" fill="#2563eb" />
            <rect x="12" y="22" width="65" height="3" rx="1.5" fill="#64748b" />
            <rect x="18" y="30" width="55" height="3" rx="1.5" fill="#0284c7" />
            <rect x="18" y="38" width="40" height="3" rx="1.5" fill="#64748b" />
            <rect x="18" y="46" width="60" height="3" rx="1.5" fill="#334155" />
            <rect x="12" y="54" width="70" height="3" rx="1.5" fill="#2563eb" />
            <rect x="18" y="62" width="35" height="3" rx="1.5" fill="#10b981" />
            <rect x="18" y="70" width="50" height="3" rx="1.5" fill="#f59e0b" />
          </g>

          {/* Monitor 3: RIGHT MONITOR (Background behind user) */}
          <g transform="translate(390, 165)">
            {/* Screen Bezel */}
            <rect
              x="0"
              y="0"
              width="140"
              height="100"
              rx="6"
              fill="#1e293b"
              stroke="#38bdf8"
              strokeWidth="2"
            />
            {/* Code lines */}
            <rect x="10" y="12" width="60" height="3" rx="1.5" fill="#38bdf8" />
            <rect x="10" y="20" width="80" height="3" rx="1.5" fill="#94a3b8" />
            <rect x="20" y="28" width="55" height="3" rx="1.5" fill="#a78bfa" />
            <rect x="20" y="36" width="70" height="3" rx="1.5" fill="#34d399" />
            <rect x="10" y="44" width="90" height="3" rx="1.5" fill="#94a3b8" />
            <rect x="20" y="52" width="45" height="3" rx="1.5" fill="#f43f5e" />
          </g>

          {/* Monitor 2: CENTER MAIN MONITOR (Dual Windows + Interactive Text) */}
          <g transform="translate(230, 155)">
            {/* Stand */}
            <rect x="70" y="100" width="20" height="15" fill="#334155" />
            <ellipse cx="80" cy="115" rx="36" ry="5" fill="#1e293b" />
            {/* Outer Screen Frame */}
            <rect
              x="0"
              y="0"
              width="160"
              height="105"
              rx="6"
              fill="#0f172a"
              stroke="#38bdf8"
              strokeWidth="3"
            />
            {/* Screen Inner Display */}
            <rect x="5" y="5" width="150" height="95" rx="4" fill="url(#screenGrad)" />

            {/* Top Code Window 1 (Dark Theme Window) */}
            <rect x="12" y="14" width="90" height="50" rx="3" fill="#1e293b" />
            {/* Window title bar */}
            <rect x="12" y="14" width="90" height="9" rx="2" fill="#334155" />
            <circle cx="17" cy="18.5" r="1.8" fill="#ef4444" />
            <circle cx="23" cy="18.5" r="1.8" fill="#f59e0b" />
            <circle cx="29" cy="18.5" r="1.8" fill="#10b981" />
            {/* Syntax lines */}
            <rect x="16" y="28" width="45" height="2.5" rx="1" fill="#38bdf8" />
            <rect x="16" y="34" width="60" height="2.5" rx="1" fill="#cbd5e1" />
            <rect x="22" y="40" width="50" height="2.5" rx="1" fill="#a78bfa" />
            <rect x="22" y="46" width="35" height="2.5" rx="1" fill="#34d399" />
            <rect x="16" y="52" width="70" height="2.5" rx="1" fill="#38bdf8" />

            {/* Overlapping Blue Child Window (As in User's Screenshot!) */}
            <motion.g
              animate={{
                scale: isHyperSpeed ? [1, 1.02, 1] : 1,
              }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              <rect
                x="65"
                y="38"
                width="82"
                height="56"
                rx="4"
                fill="#1e3a8a"
                stroke="#60a5fa"
                strokeWidth="1.5"
              />
              <rect x="65" y="38" width="82" height="10" rx="3" fill="#1d4ed8" />
              {/* Window controls */}
              <circle cx="71" cy="43" r="1.8" fill="#93c5fd" />
              <circle cx="77" cy="43" r="1.8" fill="#bfdbfe" />
              {/* Active animated code lines */}
              <rect x="70" y="54" width="55" height="3" rx="1.5" fill="#ffffff" />
              <rect x="70" y="61" width="68" height="3" rx="1.5" fill="#93c5fd" />
              <rect x="75" y="68" width="45" height="3" rx="1.5" fill="#38bdf8" />
              <rect x="75" y="75" width="58" height="3" rx="1.5" fill="#ffffff" opacity="0.9" />
              {/* Blinking Typing Cursor */}
              <motion.rect
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                x="136"
                y="75"
                width="3"
                height="6"
                fill="#38bdf8"
              />
            </motion.g>
          </g>

          {/* Keyboard on Desk */}
          <rect x="290" y="246" width="70" height="7" rx="2" fill="#334155" />
          <rect x="292" y="247" width="66" height="4" rx="1" fill="#64748b" />

          {/* 6. DEVELOPER CHARACTER (Accurately Styled to Screenshot) */}
          <g id="developer-character">
            {/* Legs & Trousers */}
            {/* Left leg */}
            <path
              d="M440 370 L410 470 L480 470 L490 390 Z"
              fill="#0f172a"
            />
            {/* Right leg (forward, bent at knee) */}
            <path
              d="M450 360 L360 440 L430 550 L450 545 L385 450 L460 380 Z"
              fill="#1e293b"
            />
            {/* Leg cuffs (cyan blue trim as in screenshot) */}
            <rect x="400" y="538" width="35" height="8" rx="3" fill="#38bdf8" />

            {/* Black Shoes */}
            <ellipse cx="435" cy="555" rx="22" ry="7" fill="#0f172a" />
            <path d="M415 552 L455 552 L470 562 L410 562 Z" fill="#1e293b" />

            {/* ERGONOMIC CHAIR */}
            {/* Star Base with Caster Wheels */}
            <path d="M510 540 L450 560" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
            <path d="M510 540 L585 555" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
            <path d="M510 540 L510 565" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
            <circle cx="445" cy="562" r="5" fill="#0f172a" />
            <circle cx="588" cy="557" r="5" fill="#0f172a" />
            <circle cx="510" cy="567" r="5" fill="#0f172a" />
            {/* Chair Gas Lift Column */}
            <rect x="504" y="440" width="12" height="100" rx="3" fill="#475569" />

            {/* Chair Seat Cushion (Blue) */}
            <rect x="410" y="380" width="105" height="26" rx="8" fill="url(#chairCushion)" />

            {/* Chair High Backrest (Charcoal Ergonomic Contour) */}
            <path
              d="M515 200 C515 190 565 190 575 200 L610 380 C610 420 540 430 510 410 L480 390 Z"
              fill="url(#chairGrad)"
            />
            {/* Chair Inner Blue Accent Panel */}
            <path
              d="M525 215 C525 205 558 205 565 215 L590 370 C590 390 545 400 525 390 Z"
              fill="#2563eb"
              opacity="0.3"
            />

            {/* Curved Armrest */}
            <path
              d="M400 360 C400 330 460 330 495 350 L590 370"
              stroke="#64748b"
              strokeWidth="11"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M400 360 C400 330 460 330 495 350 L590 370"
              stroke="#334155"
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
            />

            {/* DEVELOPER BODY & SHIRT */}
            {/* Torso with Geometric Blue Knit Vest */}
            <path
              d="M440 225 L340 330 L380 380 L490 375 L525 235 Z"
              fill="#3b82f6"
            />
            {/* Light blue shirt collar/sleeve peek */}
            <path d="M420 220 L440 225 L435 240 Z" fill="#93c5fd" />

            {/* Vest Geometric Chevron/Diamond Pattern (From Screenshot) */}
            <path
              d="M440 250 L470 290 L440 330 L410 290 Z"
              stroke="#60a5fa"
              strokeWidth="4"
              fill="none"
            />
            <path
              d="M470 290 L500 330 L470 370 L440 330 Z"
              stroke="#93c5fd"
              strokeWidth="4"
              fill="none"
            />
            <path
              d="M410 290 L440 330 L410 370 L380 330 Z"
              stroke="#60a5fa"
              strokeWidth="4"
              fill="none"
            />

            {/* Arms and Typing Hands (Animated) */}
            <motion.g
              animate={{
                y: [0, -2.5, 0, -2, 0],
              }}
              transition={{
                duration: typingHandSpeed,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {/* Arm reaching forward to keyboard */}
              <path
                d="M430 240 C380 270 330 280 310 260 L295 260 L300 245 C320 250 370 250 420 230 Z"
                fill="#93c5fd"
              />
              {/* Hands & Fingers on keyboard */}
              <ellipse cx="300" cy="254" rx="10" ry="5" fill="#fbcfe8" />
              <ellipse cx="320" cy="253" rx="10" ry="5" fill="#fbcfe8" />
            </motion.g>

            {/* Head and Face (Side/Back Profile) */}
            <g transform="translate(395, 150)">
              {/* Neck */}
              <rect x="25" y="55" width="20" height="20" fill="#fbcfe8" />
              {/* Head shape */}
              <ellipse cx="35" cy="40" rx="26" ry="30" fill="#fbcfe8" />
              {/* Glasses/Spectacles Frame */}
              <ellipse cx="14" cy="38" rx="8" ry="7" fill="none" stroke="#0f172a" strokeWidth="2.5" />
              <line x1="22" y1="36" x2="36" y2="34" stroke="#0f172a" strokeWidth="2.5" />
              {/* Dark Stylish Hair */}
              <path
                d="M10 32 C10 10 50 5 62 25 C65 38 60 55 58 60 C50 58 45 42 42 40 C35 42 25 35 10 32 Z"
                fill="#0f172a"
              />
              {/* Hair tuft at top */}
              <path d="M15 15 C8 8 2 12 0 15 C10 18 15 22 20 20 Z" fill="#0f172a" />
            </g>
          </g>

          {/* 7. ANIMATED THOUGHT BUBBLE WITH INTERLOCKING ROTATING GEARS */}
          <motion.g
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            transform="translate(450, 80)"
          >
            {/* Thought Bubble Tail / Small dots */}
            <circle cx="15" cy="65" r="4.5" fill="#38bdf8" opacity="0.9" />
            <circle cx="10" cy="76" r="3" fill="#38bdf8" opacity="0.75" />

            {/* Bubble Main Rounded Box */}
            <rect
              x="5"
              y="0"
              width="68"
              height="60"
              rx="12"
              fill="#38bdf8"
              stroke="#ffffff"
              strokeWidth="2.5"
              filter="url(#glowFilter)"
            />

            {/* GEAR 1: Large Gear (Rotates Clockwise) */}
            <motion.g
              animate={{ rotate: 360 }}
              transition={{
                duration: gearDuration,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{ originX: '28px', originY: '25px' }}
            >
              {/* Outer Gear Teeth */}
              <circle cx="28" cy="25" r="12" fill="#ffffff" />
              {/* 8 Cogs */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                const tx = 28 + Math.cos(rad) * 13;
                const ty = 25 + Math.sin(rad) * 13;
                return (
                  <rect
                    key={i}
                    x={tx - 2.5}
                    y={ty - 2.5}
                    width="5"
                    height="5"
                    rx="1"
                    fill="#ffffff"
                    transform={`rotate(${angle} ${tx} ${ty})`}
                  />
                );
              })}
              {/* Inner Hole */}
              <circle cx="28" cy="25" r="5" fill="#0284c7" />
            </motion.g>

            {/* GEAR 2: Small Interlocking Gear (Rotates Counter-Clockwise) */}
            <motion.g
              animate={{ rotate: -360 }}
              transition={{
                duration: smallGearDuration,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{ originX: '48px', originY: '38px' }}
            >
              <circle cx="48" cy="38" r="8.5" fill="#ffffff" />
              {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                const tx = 48 + Math.cos(rad) * 9.5;
                const ty = 38 + Math.sin(rad) * 9.5;
                return (
                  <rect
                    key={i}
                    x={tx - 2}
                    y={ty - 2}
                    width="4"
                    height="4"
                    rx="1"
                    fill="#ffffff"
                    transform={`rotate(${angle} ${tx} ${ty})`}
                  />
                );
              })}
              <circle cx="48" cy="38" r="3.5" fill="#0284c7" />
            </motion.g>
          </motion.g>
        </svg>
      </div>

      {/* Bottom Live Code Terminal & Turbo Controls */}
      <div className="p-4 bg-slate-950/80 backdrop-blur-md border-t border-sky-400/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        {/* Active File & Code Snippet Display */}
        <div className="space-y-1 font-mono text-[11px] min-w-0">
          <div className="flex items-center gap-2 text-sky-400 font-semibold">
            <span className="px-2 py-0.5 rounded bg-sky-950/90 border border-sky-600/50">
              {codeSnippets[mode].file}
            </span>
            <span className="text-slate-400">· {codeSnippets[mode].title}</span>
          </div>
          <p className="text-slate-300 truncate max-w-lg">
            <span className="text-emerald-400">&gt;&nbsp;</span>
            <span className="text-sky-200">
              {codeSnippets[mode].lines[typingLineIdx] || codeSnippets[mode].lines[0]}
            </span>
          </p>
        </div>

        {/* Turbo / Fast Typing Boost Button */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleTurboBoost}
            id="workstation-boost-btn"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-xs shadow-md shadow-sky-500/25 flex items-center gap-2 transition-all active:scale-95"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isHyperSpeed ? 'animate-spin' : ''}`} />
            <span>{isHyperSpeed ? 'Speed: 5x Turbo' : 'Speed Up Animation'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
