import React from 'react';
import { codingProfilesData } from '../data/codingProfilesData';
import { Terminal, ExternalLink, Code2, Cpu } from 'lucide-react';

export const CodingProfiles: React.FC = () => {
  return (
    <section id="profiles" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-ink-200/80 dark:border-ink-800/80">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
            Competitive Programming
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-950 dark:text-white">
            Live coding profiles & practice platforms
          </h2>
          <p className="text-base text-ink-600 dark:text-ink-400 max-w-2xl">
            Where I practice algorithms, data structures, and contest problem-solving. All links point directly to my official profiles without invented ratings.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {codingProfilesData.map((profile) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-3xl bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 shadow-xs hover:shadow-xl hover:border-violet-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-3.5 h-3.5 rounded-full"
                      style={{ backgroundColor: profile.color }}
                    />
                    <h3 className="font-serif text-xl font-bold text-ink-950 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      {profile.name}
                    </h3>
                  </div>

                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-ink-100 dark:bg-ink-800 text-ink-600 dark:text-ink-300">
                    {profile.badge}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-mono text-violet-600 dark:text-violet-400 font-semibold block">
                    @{profile.handle}
                  </span>
                  <p className="text-xs text-ink-600 dark:text-ink-400 mt-2 leading-relaxed">
                    <strong>Focus:</strong> {profile.focus}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-ink-100 dark:border-ink-800/80 flex items-center justify-between text-xs font-semibold text-ink-500 group-hover:text-violet-600 dark:group-hover:text-violet-400">
                <span>View Profile</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
