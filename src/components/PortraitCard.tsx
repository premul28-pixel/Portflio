import React, { useState } from 'react';
import { Sparkles, User, RefreshCw } from 'lucide-react';

interface PortraitCardProps {
  className?: string;
}

export const PortraitCard: React.FC<PortraitCardProps> = ({ className = '' }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [imgRealisticError, setImgRealisticError] = useState(false);
  const [imgAnimeError, setImgAnimeError] = useState(false);

  const toggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFlip();
    }
  };

  return (
    <div
      className={`relative group select-none perspective-1000 ${className}`}
      onClick={toggleFlip}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-pressed={isFlipped}
      aria-label="Portrait of Prem Kumar M in navy suit. Press Space or Enter to flip to anime illustrated version"
    >
      {/* Decorative Aura / Layered Glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-tr from-violet-600/30 via-indigo-500/20 to-blue-600/30 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

      {/* 3D Card Container */}
      <div
        className={`relative w-72 h-[380px] sm:w-80 sm:h-[430px] rounded-3xl cursor-pointer transition-transform duration-700 transform-style-preserve-3d shadow-xl shadow-ink-950/20 dark:shadow-violet-950/30 border border-ink-200/80 dark:border-ink-800/80 ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* FRONT FACE: Realistic Navy Suit Portrait */}
        <div className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden backface-hidden bg-ink-900 border border-ink-700/50 flex flex-col justify-between">
          <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-b from-ink-800 to-ink-950">
            {/* Image / SVG Art */}
            {!imgRealisticError ? (
              <img
                src="/assets/prem.svg"
                alt="Prem Kumar M in tailored navy-blue suit with white shirt and natural skin tone"
                onError={() => setImgRealisticError(true)}
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
            ) : (
              <div className="flex flex-col items-center justify-center p-6 text-center text-ink-200">
                <User className="w-16 h-16 text-violet-400 mb-2" />
                <span className="font-serif text-lg font-bold text-white">Prem Kumar M</span>
                <span className="text-xs text-ink-400 mt-1">B.E. Computer Science</span>
              </div>
            )}

            {/* Subtle Gradient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent opacity-80" />

            {/* Bottom info badge */}
            <div className="absolute bottom-4 inset-x-4 p-3 rounded-2xl bg-ink-950/80 backdrop-blur-md border border-ink-800/80 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-white tracking-wide">Prem Kumar M</p>
                <p className="text-[11px] text-violet-300 font-medium">Software Engineer • KAHE</p>
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-ink-300 bg-ink-800/80 px-2.5 py-1 rounded-full border border-ink-700">
                <RefreshCw className="w-3 h-3 text-violet-400 animate-spin-reverse" />
                Flip
              </span>
            </div>
          </div>
        </div>

        {/* BACK FACE: Anime / Illustrated Portrait */}
        <div className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden backface-hidden rotate-y-180 bg-ink-950 border border-violet-500/50 flex flex-col justify-between">
          <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-b from-violet-950/60 to-ink-950">
            {/* Anime Illustration */}
            {!imgAnimeError ? (
              <img
                src="/assets/prem-illustrated.svg"
                alt="Illustrated anime version of Prem Kumar M with violet cyber accents"
                onError={() => setImgAnimeError(true)}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            ) : (
              <div className="flex flex-col items-center justify-center p-6 text-center text-ink-200">
                <Sparkles className="w-16 h-16 text-violet-400 mb-2" />
                <span className="font-serif text-lg font-bold text-white">Anime Avatar</span>
                <span className="text-xs text-violet-300 mt-1">Prem Kumar M</span>
              </div>
            )}

            {/* Gradient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent opacity-80" />

            {/* Bottom info badge */}
            <div className="absolute bottom-4 inset-x-4 p-3 rounded-2xl bg-ink-950/85 backdrop-blur-md border border-violet-500/40 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-white tracking-wide">Illustrated Avatar</p>
                <p className="text-[11px] text-violet-300 font-medium">Digital Art Version</p>
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-violet-200 bg-violet-900/60 px-2.5 py-1 rounded-full border border-violet-700">
                <RefreshCw className="w-3 h-3 text-violet-400" />
                Flip back
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tap / Hover helper pill underneath */}
      <div className="mt-3 flex items-center justify-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-ink-500 dark:text-ink-400 bg-ink-100/80 dark:bg-ink-800/60 border border-ink-200 dark:border-ink-700/60 backdrop-blur-xs">
          <RefreshCw className="w-3 h-3 text-violet-500" />
          Click or press Space to {isFlipped ? 'view photo' : 'view anime version'}
        </span>
      </div>
    </div>
  );
};
