import React, { useState } from 'react';
import { faqData } from '../data/faqData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-ink-200/80 dark:border-ink-800/80">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
            Common Inquiries
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-950 dark:text-white">
            Frequently asked questions
          </h2>
          <p className="text-base text-ink-600 dark:text-ink-400 max-w-xl mx-auto">
            Honest answers regarding my internship availability, engineering stack, PremTech services, and working style.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-hidden focus-visible:ring-2 focus-visible:ring-violet-500"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-ink-950 dark:text-white pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center bg-ink-100 dark:bg-ink-800 text-ink-500 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 bg-violet-500/10 text-violet-600 dark:text-violet-400' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-ink-600 dark:text-ink-300 leading-relaxed border-t border-ink-100 dark:border-ink-800/60 animate-fade-in">
                    <p className="mt-2">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
