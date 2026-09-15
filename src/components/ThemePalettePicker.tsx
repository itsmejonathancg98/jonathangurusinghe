import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check, Sparkles } from 'lucide-react';
import { useTheme, themes, ThemeId } from '../context/ThemeContext';

export const ThemePalettePicker: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { themeId, setThemeId, currentTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const themeKeys = Object.keys(themes) as ThemeId[];

  if (compact) {
    return (
      <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/90 border border-slate-200/90 shadow-2xs backdrop-blur-xs">
        {themeKeys.map((key) => {
          const theme = themes[key];
          const isSelected = themeId === key;
          return (
            <button
              key={key}
              onClick={() => setThemeId(key)}
              title={`Switch to ${theme.name}`}
              aria-label={`Switch color to ${theme.name}`}
              className={`relative w-5 h-5 rounded-full transition-transform hover:scale-110 focus:outline-none ${
                isSelected ? 'ring-2 ring-offset-1 ring-slate-700 scale-105' : 'opacity-80 hover:opacity-100'
              }`}
              style={{ backgroundColor: theme.swatch }}
            >
              {isSelected && (
                <span className="absolute inset-0 flex items-center justify-center text-white">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
              )}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        id="theme-palette-button"
        aria-label="Customize page colors"
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200/90 hover:border-slate-300 text-slate-700 hover:text-slate-900 shadow-2xs transition-all text-xs font-medium"
      >
        <span
          className="w-3.5 h-3.5 rounded-full shadow-2xs shrink-0 animate-pulse"
          style={{ backgroundColor: currentTheme.swatch }}
        />
        <span className="hidden sm:inline">Theme Colors</span>
        <Palette className="w-3.5 h-3.5 text-slate-400" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 p-3 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-xs">
            <span className="font-semibold text-slate-800 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Page Color Accents
            </span>
            <span className="text-[10px] text-slate-400">Click to switch</span>
          </div>

          <div className="space-y-1.5">
            {themeKeys.map((key) => {
              const theme = themes[key];
              const isSelected = themeId === key;
              return (
                <button
                  key={key}
                  onClick={() => {
                    setThemeId(key);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between p-2 rounded-xl text-left transition-all ${
                    isSelected
                      ? 'bg-slate-100 font-semibold text-slate-900 shadow-2xs'
                      : 'hover:bg-slate-50 text-slate-600'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-4 h-4 rounded-full shadow-2xs ring-1 ring-black/10"
                      style={{ backgroundColor: theme.swatch }}
                    />
                    <span className="text-xs">{theme.name}</span>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-emerald-600" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
