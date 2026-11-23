import React, { useState, useEffect } from 'react';
import { ArrowDown, Download, Sparkles, MapPin, Award, Terminal, Code2 } from 'lucide-react';
import { PortraitCard } from './PortraitCard';
import { ChessKnight3D } from './ChessKnight3D';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || window.innerWidth < 1024) return;
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setParallax({ x: x * 14, y: y * 14 });
  };

  const handleMouseLeave = () => {
    setParallax({ x: 0, y: 0 });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-label="Hero Introduction"
    >
      {/* Editorial Background Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-violet-600/10 via-indigo-500/5 to-transparent rounded-full blur-3xl opacity-70 dark:opacity-40" />
        <div className="absolute top-12 right-12 w-72 h-72 bg-blue-500/5 rounded-full blur-2xl" />
        <div className="absolute bottom-8 left-8 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Confident Editorial Typography & Bio (7 cols) */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
          {/* Status Badge */}
          <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-violet-500/10 dark:bg-violet-500/15 text-violet-700 dark:text-violet-300 border border-violet-500/25">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-600 dark:bg-violet-400" />
            </span>
            <span>Seeking Software Engineering Internship • 2026</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-3">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink-950 dark:text-white leading-[1.08]">
              Prem Kumar M
            </h1>
            <p className="font-serif italic text-xl sm:text-2xl text-ink-600 dark:text-ink-300 font-normal">
              Building resilient backend systems, offline-first mobile apps, and practical AI tools.
            </p>
          </div>

          {/* Natural First-Person Bio Paragraph */}
          <p className="text-base sm:text-lg text-ink-700 dark:text-ink-300 leading-relaxed max-w-2xl">
            I am a second-year B.E. Computer Science and Engineering student at{' '}
            <strong className="text-ink-950 dark:text-white font-semibold">
              Karpagam Academy of Higher Education (KAHE), Coimbatore
            </strong>{' '}
            (CGPA 7.45, graduating in 2029), from Villupuram, Tamil Nadu. I independently taught myself Flutter, Dart, and SQLite to engineer{' '}
            <a href="#projects" className="text-violet-600 dark:text-violet-400 font-semibold underline underline-offset-4 decoration-violet-500/40 hover:decoration-violet-500">
              Paisa
            </a>
            , an offline-first budget manager. My drive stems from competitive programming, algorithms, and turning complex constraints into clean, useful software.
          </p>

          {/* First Screen CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold bg-ink-900 text-white dark:bg-ink-100 dark:text-ink-950 hover:bg-violet-700 dark:hover:bg-violet-200 transition-all duration-200 shadow-md hover:shadow-lg focus-visible:ring-2 focus-visible:ring-violet-500"
            >
              <span>View projects</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold bg-white dark:bg-ink-900 text-ink-800 dark:text-ink-100 border border-ink-200 dark:border-ink-700/80 hover:border-violet-500/50 hover:bg-violet-50/50 dark:hover:bg-ink-800/60 transition-all duration-200 shadow-xs focus-visible:ring-2 focus-visible:ring-violet-500"
            >
              <Download className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              <span>Download résumé</span>
            </button>
          </div>

          {/* Verified Achievements & Social Proof Strip */}
          <div className="pt-4 border-t border-ink-200/80 dark:border-ink-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <p className="text-xs font-semibold text-violet-600 dark:text-violet-400">SIMATS 2026</p>
              <p className="text-sm font-bold text-ink-900 dark:text-white">3rd Place Winner</p>
              <p className="text-[11px] text-ink-500">8-hour Chennai hackathon</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-violet-600 dark:text-violet-400">SIH 2026</p>
              <p className="text-sm font-bold text-ink-900 dark:text-white">SPIDY HACKERS</p>
              <p className="text-[11px] text-ink-500">Mining belt joint safety</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-violet-600 dark:text-violet-400">Published App</p>
              <p className="text-sm font-bold text-ink-900 dark:text-white">Paisa</p>
              <p className="text-[11px] text-ink-500">Flutter • Offline SQLite</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-violet-600 dark:text-violet-400">Competitive</p>
              <p className="text-sm font-bold text-ink-900 dark:text-white">5+ Platforms</p>
              <p className="text-[11px] text-ink-500">LeetCode, CF, CSES</p>
            </div>
          </div>
        </div>

        {/* Right Column: Layered Navy-Suit Portrait & 3D Chess Knight (5 cols) */}
        <div
          className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-6 relative transition-transform duration-300 ease-out"
          style={{
            transform: !reducedMotion
              ? `translate3d(${parallax.x}px, ${parallax.y}px, 0)`
              : 'none',
          }}
        >
          {/* Main Layered Flipping Portrait Card */}
          <div className="relative z-10">
            <PortraitCard />
          </div>

          {/* Small Locally Rendered 3D Chess Knight beside the photo */}
          <div className="relative z-20 flex flex-col items-center">
            <ChessKnight3D className="shadow-lg" />
            <div className="mt-2 text-center">
              <span className="text-[11px] font-medium text-ink-500 dark:text-ink-400 flex items-center justify-center gap-1">
                <span>Chess enthusiast</span>
                <span className="text-ink-300 dark:text-ink-600">•</span>
                <span>Tactical thinking</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
