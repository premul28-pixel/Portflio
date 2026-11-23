import React from 'react';
import { servicesData } from '../data/servicesData';
import { Sparkles, Check, ArrowRight, Laptop, Smartphone, Code, Cpu } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-ink-200/80 dark:border-ink-800/80">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
              Freelance & Engineering Services
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20">
              PremTech
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-950 dark:text-white">
            Independent software development through PremTech
          </h2>
          <p className="text-base text-ink-600 dark:text-ink-400 max-w-2xl">
            My freelance development initiative providing modern web apps, offline mobile tools, Java problem-solving coaching, and automated workflows.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 shadow-xs hover:border-violet-500/40 transition-colors flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-2xl bg-violet-500/10 text-violet-600 dark:text-violet-400">
                    {service.id === 'custom-web' && <Laptop className="w-5 h-5" />}
                    {service.id === 'mobile-dev' && <Smartphone className="w-5 h-5" />}
                    {service.id === 'dsa-mentorship' && <Code className="w-5 h-5" />}
                    {service.id === 'ai-automation' && <Cpu className="w-5 h-5" />}
                  </div>

                  <span className="text-[11px] font-mono font-medium text-ink-400">
                    PremTech
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink-950 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                    {service.subtitle}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-ink-400 dark:text-ink-500">
                    What I Deliver:
                  </span>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-ink-700 dark:text-ink-300">
                        <Check className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Tech Pills & Ideal For */}
              <div className="pt-4 border-t border-ink-100 dark:border-ink-800 space-y-3">
                <p className="text-[11px] text-ink-500 dark:text-ink-400">
                  <strong className="text-ink-700 dark:text-ink-300">Ideal For:</strong> {service.idealFor}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-ink-100 dark:bg-ink-800 text-ink-600 dark:text-ink-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PremTech Guarantee Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-violet-600/10 via-indigo-600/5 to-transparent border border-violet-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-serif text-lg font-bold text-ink-950 dark:text-white">
              Have a project or freelance requirement?
            </h4>
            <p className="text-xs sm:text-sm text-ink-600 dark:text-ink-300 max-w-xl">
              I collaborate directly via Git version control, weekly milestone demos, and straightforward communication without agency overhead.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-xs font-semibold bg-violet-600 text-white hover:bg-violet-700 transition-colors shadow-xs shrink-0"
          >
            <span>Start a conversation</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
