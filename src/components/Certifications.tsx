import React from 'react';
import { certificationsData } from '../data/certificationsData';
import { Award, CheckCircle, ExternalLink, BookCheck, Shield } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-ink-200/80 dark:border-ink-800/80 bg-ink-50/40 dark:bg-ink-950/20">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
            Credentials & Training
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-950 dark:text-white">
            Certifications & technical training
          </h2>
          <p className="text-base text-ink-600 dark:text-ink-400 max-w-2xl">
            Verified technical coursework covering Java data structures, computer networking architectures, and business intelligence.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-3xl bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 shadow-xs flex flex-col justify-between hover:border-violet-500/40 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="p-2.5 rounded-2xl bg-violet-500/10 text-violet-600 dark:text-violet-400">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-mono font-medium text-ink-400 dark:text-ink-500 block">
                      {cert.date}
                    </span>
                    {cert.isOnlineTraining && (
                      <span className="inline-block mt-1 text-[10px] font-semibold px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                        Online Training
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold text-ink-950 dark:text-white leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-violet-600 dark:text-violet-400 mt-1">
                    {cert.issuer}
                  </p>
                </div>

                <p className="text-xs text-ink-600 dark:text-ink-300 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="pt-4 mt-4 border-t border-ink-100 dark:border-ink-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-ink-100 dark:bg-ink-800 text-ink-600 dark:text-ink-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
