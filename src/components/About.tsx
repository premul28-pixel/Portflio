import React from 'react';
import { User, BookOpen, Compass, Code, Brain, Users, Award, Languages } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-ink-200/80 dark:border-ink-800/80 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
            About Me
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-950 dark:text-white">
            Engineering from curiosity, discipline, and code
          </h2>
          <p className="text-base text-ink-600 dark:text-ink-400 max-w-2xl">
            My background, how I tackle self-directed projects, and the kind of challenges I want to solve as an intern.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Narrative Main Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-ink-700 dark:text-ink-300 leading-relaxed text-base sm:text-lg">
            <p>
              I was born and raised in <strong className="text-ink-950 dark:text-white">Villupuram, Tamil Nadu</strong>, where I completed my schooling at Tagore Matric Higher Secondary School with a deep fascination for mathematics and how algorithms shape the world. Today, I am in my second year pursuing a <strong className="text-ink-950 dark:text-white">Bachelor of Engineering in Computer Science and Engineering at Karpagam Academy of Higher Education (KAHE), Coimbatore</strong>, with an expected graduation in 2029 and a current CGPA of 7.45.
            </p>

            {/* Paisa Story Box */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-violet-50 to-indigo-50/50 dark:from-ink-900 dark:to-violet-950/20 border border-violet-200/60 dark:border-violet-900/40 space-y-3">
              <h3 className="font-serif text-xl font-bold text-ink-950 dark:text-white flex items-center gap-2">
                <Code className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                Teaching Myself Flutter, Dart & SQLite for Paisa
              </h3>
              <p className="text-sm sm:text-base text-ink-700 dark:text-ink-300">
                Rather than waiting for upper-level college courses, I noticed an everyday problem: most expense trackers demand constant internet access, mandate intrusive user logins, and leak transaction data.
              </p>
              <p className="text-sm sm:text-base text-ink-700 dark:text-ink-300">
                I spent evenings diving into official Flutter docs, reactive state lifecycles, and SQLite relational schemas. Within weeks of focused independent coding, I designed and published <strong className="text-ink-950 dark:text-white">Paisa</strong> — a fully offline, privacy-first personal finance app with multi-wallet reconciliation (Cash, Bank, UPI) and atomic SQLite transactions. Building it from scratch taught me how to take an idea from an empty repository to a polished, reliable piece of software.
              </p>
            </div>

            <p>
              My technical interests revolve around <strong className="text-ink-950 dark:text-white">backend architecture</strong>, <strong className="text-ink-950 dark:text-white">offline-first mobile applications</strong>, and <strong className="text-ink-950 dark:text-white">practical AI systems</strong>. I love turning complex algorithmic constraints — like monotonic stacks or 2D prefix sums — into fast, maintainable code.
            </p>

            <p>
              Beyond coding, I am an enthusiastic <strong className="text-ink-950 dark:text-white">chess player</strong>. The strategic foresight, piece coordination, and calm under time pressure in chess directly inform my approach to systems programming and debugging.
            </p>
          </div>

          {/* Quick Facts and Core Strengths (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Core Strengths Card */}
            <div className="p-6 rounded-3xl bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 shadow-xs space-y-4">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
                Core Strengths
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 mt-0.5">
                    <Brain className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-ink-900 dark:text-white">Problem-Solving & DSA</h4>
                    <p className="text-xs text-ink-500 dark:text-ink-400">
                      Deep familiarity with algorithmic patterns across LeetCode, Codeforces, and CodeChef.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 mt-0.5">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-ink-900 dark:text-white">Quick Independent Learning</h4>
                    <p className="text-xs text-ink-500 dark:text-ink-400">
                      Self-taught Flutter, Dart, SQLite, and modern React without relying on formal classrooms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 mt-0.5">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-ink-900 dark:text-white">Teamwork & Adaptability</h4>
                    <p className="text-xs text-ink-500 dark:text-ink-400">
                      Collaborated in 6-member SPIDY HACKERS team (SIH 2026) and 8-hour live SIMATS sprint.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Demographics & Languages Card */}
            <div className="p-6 rounded-3xl bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 shadow-xs space-y-4">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-ink-500 dark:text-ink-400">
                Quick Profile
              </h3>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-ink-50 dark:bg-ink-950/60 border border-ink-100 dark:border-ink-800">
                  <span className="text-ink-400 block mb-0.5">Education</span>
                  <span className="font-semibold text-ink-900 dark:text-white">B.E. CSE (2025–2029)</span>
                </div>

                <div className="p-3 rounded-xl bg-ink-50 dark:bg-ink-950/60 border border-ink-100 dark:border-ink-800">
                  <span className="text-ink-400 block mb-0.5">Current CGPA</span>
                  <span className="font-semibold text-violet-600 dark:text-violet-400">7.45 / 10.0</span>
                </div>

                <div className="p-3 rounded-xl bg-ink-50 dark:bg-ink-950/60 border border-ink-100 dark:border-ink-800">
                  <span className="text-ink-400 block mb-0.5">Hometown</span>
                  <span className="font-semibold text-ink-900 dark:text-white">Villupuram, TN</span>
                </div>

                <div className="p-3 rounded-xl bg-ink-50 dark:bg-ink-950/60 border border-ink-100 dark:border-ink-800">
                  <span className="text-ink-400 block mb-0.5">Languages</span>
                  <span className="font-semibold text-ink-900 dark:text-white">Tamil, English</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
