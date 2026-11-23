import React from 'react';

interface ProjectArtworkProps {
  type: 'wallet' | 'notebook' | 'waveform' | 'generic';
  title: string;
  className?: string;
}

export const ProjectArtwork: React.FC<ProjectArtworkProps> = ({ type, title, className = '' }) => {
  if (type === 'wallet') {
    // 3D Digital Wallet Illustration for Paisa
    return (
      <div className={`relative w-full h-48 sm:h-56 bg-gradient-to-br from-ink-900 via-violet-950/40 to-ink-900 rounded-2xl overflow-hidden flex items-center justify-center p-6 border border-ink-800/80 ${className}`}>
        {/* Glow */}
        <div className="absolute w-32 h-32 bg-violet-600/20 rounded-full blur-2xl" />

        {/* 3D Tilted Wallet */}
        <div className="relative transform -rotate-3 hover:rotate-0 transition-transform duration-500">
          {/* Protruding Credit Card */}
          <div className="w-56 h-32 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-700 p-3.5 shadow-lg shadow-violet-950/50 border border-violet-400/30 transform -translate-y-4 translate-x-2">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-mono tracking-widest text-violet-200">PAISA WALLET</span>
              <div className="w-6 h-4 rounded bg-amber-400/80" />
            </div>
            <div className="mt-4 flex items-baseline gap-1.5">
              <span className="text-xs text-violet-300">₹</span>
              <span className="font-mono text-base font-bold text-white tracking-wider">24,850.00</span>
            </div>
            <div className="mt-2 flex justify-between items-center text-[9px] font-mono text-violet-200">
              <span>OFFLINE SQLITE</span>
              <span>EXPENSES</span>
            </div>
          </div>

          {/* Wallet Base Fold */}
          <div className="w-60 h-28 rounded-2xl bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 border border-ink-700 p-4 shadow-2xl relative -mt-20">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-ink-200">Multi-Wallet (Cash / UPI / Bank)</span>
              </div>
              <span className="text-[10px] font-mono text-violet-400 font-bold bg-violet-950/80 px-2 py-0.5 rounded border border-violet-800">
                100% OFFLINE
              </span>
            </div>
            <div className="mt-3 flex gap-2">
              <div className="flex-1 p-2 rounded-lg bg-ink-800/80 border border-ink-700/60">
                <p className="text-[9px] text-ink-400">Monthly In</p>
                <p className="text-xs font-semibold text-emerald-400">+₹18,500</p>
              </div>
              <div className="flex-1 p-2 rounded-lg bg-ink-800/80 border border-ink-700/60">
                <p className="text-[9px] text-ink-400">Monthly Out</p>
                <p className="text-xs font-semibold text-rose-400">-₹7,200</p>
              </div>
            </div>
          </div>
        </div>

        <span className="sr-only">{title} illustration: 3D wallet with expense cards</span>
      </div>
    );
  }

  if (type === 'notebook') {
    // 3D Notebook & Placement Prep Hub for StudyHub Pro
    return (
      <div className={`relative w-full h-48 sm:h-56 bg-gradient-to-br from-ink-900 via-indigo-950/30 to-ink-900 rounded-2xl overflow-hidden flex items-center justify-center p-6 border border-ink-800/80 ${className}`}>
        {/* Glow */}
        <div className="absolute w-36 h-36 bg-indigo-600/20 rounded-full blur-2xl" />

        {/* Notebook Book Style */}
        <div className="relative w-64 h-36 bg-ink-950 rounded-xl border border-indigo-500/40 shadow-2xl p-4 flex flex-col justify-between transform rotate-1 hover:rotate-0 transition-transform duration-500">
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-2 border-b border-ink-800">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-[10px] font-mono text-ink-400 ml-2">StudyHub_Pro.java</span>
            </div>
            <span className="text-[9px] font-semibold text-indigo-300 bg-indigo-950 px-2 py-0.5 rounded border border-indigo-800">
              DSA ROADMAP
            </span>
          </div>

          {/* Simulated Code lines & Progress */}
          <div className="font-mono text-[10px] space-y-1 text-ink-300 py-1">
            <p className="text-violet-400">class PlacementPrep &#123;</p>
            <p className="pl-3 text-ink-400">
              <span className="text-indigo-300">boolean</span> isReady = true;
            </p>
            <p className="pl-3 text-emerald-400">// Java OOP & Monotonic Stacks</p>
            <p className="text-violet-400">&#125;</p>
          </div>

          {/* Progress bar */}
          <div className="pt-2 border-t border-ink-800/80 flex items-center justify-between">
            <span className="text-[9px] text-ink-400">Placement Prep Progress</span>
            <div className="w-24 h-1.5 bg-ink-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 w-3/4 rounded-full" />
            </div>
            <span className="text-[10px] font-bold text-violet-300">75%</span>
          </div>
        </div>

        <span className="sr-only">{title} illustration: 3D notebook code dashboard</span>
      </div>
    );
  }

  if (type === 'waveform') {
    // 3D Audio Waveform & AI Assistant Orb for Sitha AI
    return (
      <div className={`relative w-full h-48 sm:h-56 bg-gradient-to-br from-ink-900 via-violet-950/40 to-ink-950 rounded-2xl overflow-hidden flex flex-col items-center justify-center p-6 border border-ink-800/80 ${className}`}>
        {/* Glowing Orb */}
        <div className="relative mb-4 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 blur-md opacity-80 animate-pulse" />
          <div className="absolute w-12 h-12 rounded-full bg-ink-950 border-2 border-violet-400 flex items-center justify-center shadow-inner">
            <div className="w-4 h-4 rounded-full bg-violet-400 animate-ping" />
          </div>
        </div>

        {/* Audio Waveform Bars */}
        <div className="flex items-center gap-1.5 h-10">
          {[40, 65, 85, 30, 95, 75, 45, 90, 60, 100, 70, 35, 80, 50, 65].map((height, i) => (
            <div
              key={i}
              className="w-1.5 rounded-full bg-gradient-to-t from-violet-600 to-cyan-400 transition-all duration-300"
              style={{
                height: `${height}%`,
                animationDelay: `${i * 80}ms`,
              }}
            />
          ))}
        </div>

        <span className="mt-3 text-[10px] font-mono tracking-widest text-violet-300 uppercase">
          Voice Engine • Listening
        </span>

        <span className="sr-only">{title} illustration: 3D audio waveform and AI orb</span>
      </div>
    );
  }

  // Generic Tech Blueprint / Hackathon Artwork
  return (
    <div className={`relative w-full h-48 sm:h-56 bg-gradient-to-br from-ink-900 to-ink-950 rounded-2xl overflow-hidden flex items-center justify-center p-6 border border-ink-800/80 ${className}`}>
      <div className="relative flex flex-col items-center justify-center text-center">
        <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center mb-2">
          <div className="w-6 h-6 rounded-md bg-violet-500/30 border border-violet-400/50" />
        </div>
        <span className="text-xs font-mono font-medium text-ink-300 tracking-wide">{title}</span>
        <span className="text-[10px] text-ink-500 mt-1">System Architecture & Code</span>
      </div>
    </div>
  );
};
