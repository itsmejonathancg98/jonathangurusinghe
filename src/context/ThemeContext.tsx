import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeId = 'indigo' | 'ocean' | 'emerald' | 'sunset' | 'purple';

export interface ThemeOption {
  id: ThemeId;
  name: string;
  swatch: string; // Tailwind bg color or hex
  gradient: string;
  glow: string;
  primary: string;
  primaryHover: string;
  primaryBg: string;
  primaryText: string;
  primaryBorder: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  heroGradientText: string;
  activeNav: string;
}

export const themes: Record<ThemeId, ThemeOption> = {
  indigo: {
    id: 'indigo',
    name: 'Electric Indigo',
    swatch: '#4f46e5',
    gradient: 'from-indigo-600 via-purple-600 to-indigo-700',
    glow: 'rgba(79, 70, 229, 0.25)',
    primary: 'bg-indigo-600',
    primaryHover: 'hover:bg-indigo-700',
    primaryBg: 'bg-indigo-50',
    primaryText: 'text-indigo-600',
    primaryBorder: 'border-indigo-200',
    badgeBg: 'bg-indigo-50/80',
    badgeText: 'text-indigo-700',
    badgeBorder: 'border-indigo-200/70',
    heroGradientText: 'from-indigo-600 via-purple-600 to-pink-600',
    activeNav: 'text-indigo-700 bg-white border-indigo-200 shadow-sm',
  },
  ocean: {
    id: 'ocean',
    name: 'Perth Ocean & Cyan',
    swatch: '#0284c7',
    gradient: 'from-sky-600 via-cyan-600 to-teal-600',
    glow: 'rgba(2, 132, 199, 0.25)',
    primary: 'bg-sky-600',
    primaryHover: 'hover:bg-sky-700',
    primaryBg: 'bg-sky-50',
    primaryText: 'text-sky-600',
    primaryBorder: 'border-sky-200',
    badgeBg: 'bg-sky-50/80',
    badgeText: 'text-sky-700',
    badgeBorder: 'border-sky-200/70',
    heroGradientText: 'from-sky-600 via-cyan-600 to-teal-500',
    activeNav: 'text-sky-700 bg-white border-sky-200 shadow-sm',
  },
  emerald: {
    id: 'emerald',
    name: 'Emerald & Mint',
    swatch: '#059669',
    gradient: 'from-emerald-600 via-teal-600 to-cyan-700',
    glow: 'rgba(5, 150, 105, 0.25)',
    primary: 'bg-emerald-600',
    primaryHover: 'hover:bg-emerald-700',
    primaryBg: 'bg-emerald-50',
    primaryText: 'text-emerald-600',
    primaryBorder: 'border-emerald-200',
    badgeBg: 'bg-emerald-50/80',
    badgeText: 'text-emerald-700',
    badgeBorder: 'border-emerald-200/70',
    heroGradientText: 'from-emerald-600 via-teal-600 to-cyan-600',
    activeNav: 'text-emerald-700 bg-white border-emerald-200 shadow-sm',
  },
  sunset: {
    id: 'sunset',
    name: 'Sunset Amber & Coral',
    swatch: '#ea580c',
    gradient: 'from-orange-600 via-amber-600 to-rose-600',
    glow: 'rgba(234, 88, 12, 0.25)',
    primary: 'bg-orange-600',
    primaryHover: 'hover:bg-orange-700',
    primaryBg: 'bg-orange-50',
    primaryText: 'text-orange-600',
    primaryBorder: 'border-orange-200',
    badgeBg: 'bg-orange-50/80',
    badgeText: 'text-orange-700',
    badgeBorder: 'border-orange-200/70',
    heroGradientText: 'from-orange-600 via-amber-600 to-rose-600',
    activeNav: 'text-orange-700 bg-white border-orange-200 shadow-sm',
  },
  purple: {
    id: 'purple',
    name: 'Royal Purple & Fuchsia',
    swatch: '#9333ea',
    gradient: 'from-purple-600 via-fuchsia-600 to-pink-600',
    glow: 'rgba(147, 51, 234, 0.25)',
    primary: 'bg-purple-600',
    primaryHover: 'hover:bg-purple-700',
    primaryBg: 'bg-purple-50',
    primaryText: 'text-purple-600',
    primaryBorder: 'border-purple-200',
    badgeBg: 'bg-purple-50/80',
    badgeText: 'text-purple-700',
    badgeBorder: 'border-purple-200/70',
    heroGradientText: 'from-purple-600 via-fuchsia-600 to-pink-500',
    activeNav: 'text-purple-700 bg-white border-purple-200 shadow-sm',
  },
};

interface ThemeContextType {
  currentTheme: ThemeOption;
  themeId: ThemeId;
  setThemeId: (id: ThemeId) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeId, setThemeIdState] = useState<ThemeId>(() => {
    const saved = localStorage.getItem('portfolio-color-theme');
    if (saved && saved in themes) {
      return saved as ThemeId;
    }
    return 'indigo';
  });

  const setThemeId = (id: ThemeId) => {
    setThemeIdState(id);
    localStorage.setItem('portfolio-color-theme', id);
  };

  const currentTheme = themes[themeId];

  return (
    <ThemeContext.Provider value={{ currentTheme, themeId, setThemeId }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
