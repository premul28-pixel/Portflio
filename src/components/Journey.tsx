import React from 'react';
import { journeyData } from '../data/journeyData';
import { Trophy, Users, GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-ink-200/80 dark:border-ink-800/80">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
            Milestones & Hackathons
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-950 dark:text-white">
            Journey, hackathons & academic standing
          </h2>
          <p className="text-base text-ink-600 dark:text-ink-400 max-w-2xl">
            Verified competitive coding milestones, team hackathon challenges, and educational foundations.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-ink-200 dark:border-ink-800 ml-4 sm:ml-6 space-y-10 pl-6 sm:pl-8">
          {journeyData.map((item) => (
            <div key={item.id} className="relative group">
              {/* Dot Icon */}
              <div
                className={`absolute -left-[35px] sm:-left-[43px] top-1.5 w-7 h-7 rounded-full flex items-center justify-center border-2 transition-transform duration-300 group-hover:scale-110 ${
                  item.type === 'hackathon'
                    ? 'bg-violet-600 border-white dark:border-ink-950 text-white shadow-md shadow-violet-500/30'
                    : 'bg-white dark:bg-ink-900 border-ink-400 dark:border-ink-600 text-ink-600 dark:text-ink-300'
                }`}
              >
                {item.type === 'hackathon' ? (
                  <Trophy className="w-3.5 h-3.5" />
                ) : (
                  <GraduationCap className="w-3.5 h-3.5" />
                )}
              </div>

              {/* Item Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-ink-900 border border-ink-200/90 dark:border-ink-800/90 shadow-xs hover:shadow-lg hover:border-violet-500/40 transition-all space-y-4">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-semibold text-violet-600 dark:text-violet-400 bg-violet-500/10 px-2.5 py-0.5 rounded-full border border-violet-500/20">
                      {item.period}
                    </span>
                    {item.badge && (
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <span className="text-xs text-ink-500 dark:text-ink-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-ink-400" />
                    {item.location}
                  </span>
                </div>

                {/* Title & Organization */}
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink-950 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-ink-600 dark:text-ink-300 mt-0.5">
                    {item.organization}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights List */}
                <ul className="space-y-1.5 pt-2 border-t border-ink-100 dark:border-ink-800/80">
                  {item.highlights.map((highlight, hIdx) => (
                    <li
                      key={hIdx}
                      className="text-xs text-ink-600 dark:text-ink-300 flex items-start gap-2"
                    >
                      <span className="text-violet-500 font-bold mt-0.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
