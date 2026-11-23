import React, { useState } from 'react';
import { notesData } from '../data/notesData';
import { EngineeringNote } from '../types';
import { BookOpen, Clock, Calendar, ArrowRight, X, Check, Copy } from 'lucide-react';

export const NotesSection: React.FC = () => {
  const [selectedNote, setSelectedNote] = useState<EngineeringNote | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="notes" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-ink-200/80 dark:border-ink-800/80 bg-ink-50/50 dark:bg-ink-950/20">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
            Writing & Engineering Notes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-950 dark:text-white">
            Technical notes from practice and code
          </h2>
          <p className="text-base text-ink-600 dark:text-ink-400 max-w-2xl">
            Short, readable engineering reflections on data structures, algorithmic optimizations, and offline database transactions.
          </p>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {notesData.map((note) => (
            <article
              key={note.id}
              onClick={() => setSelectedNote(note)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedNote(note);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`Read note: ${note.title}`}
              className="group cursor-pointer p-6 sm:p-7 rounded-3xl bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 shadow-xs hover:shadow-xl hover:border-violet-500/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[11px] font-mono text-ink-500">
                  <span className="text-violet-600 dark:text-violet-400 font-semibold bg-violet-500/10 px-2 py-0.5 rounded-full border border-violet-500/20">
                    {note.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {note.readTime}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-ink-950 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors leading-snug">
                    {note.title}
                  </h3>
                  <p className="mt-2 text-xs text-ink-600 dark:text-ink-300 leading-relaxed line-clamp-3">
                    {note.summary}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-ink-100 dark:border-ink-800/80 flex items-center justify-between text-xs font-semibold text-violet-600 dark:text-violet-400">
                <span>Read note</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>

        {/* Modal Note Reader */}
        {selectedNote && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-ink-950/80 backdrop-blur-md animate-fade-in"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-note-title"
          >
            <div
              className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-3xl shadow-2xl overflow-y-auto flex flex-col"
              tabIndex={-1}
            >
              <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-ink-900/95 backdrop-blur-md border-b border-ink-200 dark:border-ink-800">
                <div className="flex items-center gap-2 text-xs font-mono text-violet-600 dark:text-violet-400">
                  <BookOpen className="w-4 h-4" />
                  <span>{selectedNote.category}</span>
                  <span>•</span>
                  <span>{selectedNote.readTime}</span>
                </div>
                <button
                  onClick={() => setSelectedNote(null)}
                  aria-label="Close note"
                  className="p-1.5 rounded-full text-ink-500 hover:text-ink-900 dark:text-ink-400 dark:hover:text-white hover:bg-ink-100 dark:hover:bg-ink-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h2 id="modal-note-title" className="font-serif text-2xl sm:text-3xl font-bold text-ink-950 dark:text-white leading-tight">
                    {selectedNote.title}
                  </h2>
                  <p className="text-xs text-ink-400 font-mono mt-2">
                    Published in {selectedNote.date} by Prem Kumar M
                  </p>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-ink-700 dark:text-ink-300 leading-relaxed">
                  {selectedNote.content.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                {selectedNote.codeSnippet && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink-500">
                        Code Example ({selectedNote.codeSnippet.language.toUpperCase()})
                      </span>
                      <button
                        onClick={() => handleCopy(selectedNote.codeSnippet!.code)}
                        className="text-xs font-mono text-violet-600 dark:text-violet-400 hover:underline flex items-center gap-1"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                        {copied ? 'Copied' : 'Copy Code'}
                      </button>
                    </div>
                    <pre className="p-4 rounded-2xl bg-ink-950 text-ink-100 font-mono text-xs overflow-x-auto border border-ink-800">
                      <code>{selectedNote.codeSnippet.code}</code>
                    </pre>
                  </div>
                )}

                <div className="p-4 rounded-2xl bg-violet-50 dark:bg-violet-950/20 border border-violet-200/60 dark:border-violet-900/40 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-violet-700 dark:text-violet-300">
                    Key Engineering Takeaways
                  </h4>
                  <ul className="space-y-1">
                    {selectedNote.keyTakeaways.map((takeaway, tIdx) => (
                      <li key={tIdx} className="text-xs text-ink-700 dark:text-ink-300 flex items-start gap-2">
                        <span className="text-violet-500 font-bold">•</span>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
