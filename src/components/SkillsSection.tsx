import React, { useState } from 'react';
import { skillsData, codeSnippets } from '../data/skillsData';
import { Code, Check, Copy, Terminal, Cpu, Database, Layout, Sparkles } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeSnippetIdx, setActiveSnippetIdx] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  const activeSnippet = codeSnippets[activeSnippetIdx];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-ink-200/80 dark:border-ink-800/80 bg-ink-50/50 dark:bg-ink-950/20">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
            On Code & Competencies
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-950 dark:text-white">
            Practical skills grounded in real builds
          </h2>
          <p className="text-base text-ink-600 dark:text-ink-400 max-w-2xl">
            Grouped by application and backed by concrete project citations rather than abstract percentage bars.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 shadow-xs space-y-4 hover:border-violet-500/30 transition-colors"
            >
              <div>
                <h3 className="font-serif text-lg font-bold text-ink-900 dark:text-white">
                  {category.title}
                </h3>
                <p className="text-xs text-ink-500 dark:text-ink-400 mt-1">
                  {category.description}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-2xl bg-ink-50/80 dark:bg-ink-950/60 border border-ink-100 dark:border-ink-800/60 space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-ink-900 dark:text-white font-mono">
                        {skill.name}
                      </span>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                          skill.level === 'Proficient'
                            ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                            : skill.level === 'Intermediate'
                            ? 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20'
                            : 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20'
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-[11px] text-ink-600 dark:text-ink-300 leading-relaxed">
                      {skill.context}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Code Snippets Showcase */}
        <div className="p-6 sm:p-8 rounded-3xl bg-ink-900 text-white border border-ink-800 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-ink-800">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-violet-400">
                Code Style & Algorithmic Patterns
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-0.5">
                {activeSnippet.title}
              </h3>
              <p className="text-xs text-ink-300 mt-1 max-w-xl">
                {activeSnippet.description}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                aria-label="Copy code snippet to clipboard"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-ink-800 text-ink-200 hover:text-white hover:bg-ink-700 transition-colors border border-ink-700"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Snippet Selector Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {codeSnippets.map((snippet, idx) => (
              <button
                key={snippet.id}
                onClick={() => setActiveSnippetIdx(idx)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                  activeSnippetIdx === idx
                    ? 'bg-violet-600 text-white shadow-sm'
                    : 'bg-ink-800 text-ink-400 hover:text-ink-200 hover:bg-ink-700'
                }`}
              >
                {snippet.title.split(' ')[0]} {snippet.language.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Code Viewer */}
          <div className="relative rounded-2xl bg-ink-950 p-4 sm:p-6 border border-ink-800 font-mono text-xs sm:text-sm text-ink-200 overflow-x-auto">
            <pre className="leading-relaxed">
              <code>{activeSnippet.code}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};
