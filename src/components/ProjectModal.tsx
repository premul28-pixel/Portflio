import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, ExternalLink, Github, CheckCircle2, ArrowRight, ShieldCheck, Layers, Cpu, Wrench } from 'lucide-react';
import { ProjectArtwork } from './ProjectArtwork';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-ink-950/80 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-3xl shadow-2xl overflow-y-auto overflow-x-hidden flex flex-col focus:outline-hidden"
        tabIndex={-1}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/90 dark:bg-ink-900/90 backdrop-blur-md border-b border-ink-200 dark:border-ink-800">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">
              Case Study
            </span>
            <span className="text-ink-300 dark:text-ink-600">•</span>
            <span
              className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                project.status === 'Completed'
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
                  : project.status === 'In Development'
                  ? 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20'
                  : project.status === 'Hackathon'
                  ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
                  : 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20'
              }`}
            >
              {project.status}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="p-1.5 rounded-full text-ink-500 hover:text-ink-900 dark:text-ink-400 dark:hover:text-white hover:bg-ink-100 dark:hover:bg-ink-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Custom 3D Cover Artwork */}
          <ProjectArtwork type={project.artworkType} title={project.title} />

          {/* Title and Tagline */}
          <div>
            <h2 id="modal-project-title" className="font-serif text-2xl sm:text-3xl font-bold text-ink-950 dark:text-white">
              {project.title}
            </h2>
            <p className="mt-1 text-base text-ink-600 dark:text-ink-300">
              {project.tagline}
            </p>
          </div>

          {/* Key Role Badge */}
          <div className="flex items-center gap-2 p-3 rounded-xl bg-violet-500/5 dark:bg-violet-500/10 border border-violet-500/15">
            <ShieldCheck className="w-4 h-4 text-violet-600 dark:text-violet-400 shrink-0" />
            <span className="text-xs text-ink-700 dark:text-ink-300">
              <strong>Prem's Role:</strong> {project.role}
            </span>
          </div>

          {/* Problem Section */}
          <div className="space-y-2">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-ink-900 dark:text-ink-100">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              The Problem
            </h3>
            <p className="text-sm leading-relaxed text-ink-600 dark:text-ink-300 bg-ink-50 dark:bg-ink-950/60 p-4 rounded-2xl border border-ink-100 dark:border-ink-800/60">
              {project.problem}
            </p>
          </div>

          {/* Implementation & Architecture */}
          <div className="space-y-2">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-ink-900 dark:text-ink-100">
              <span className="w-2 h-2 rounded-full bg-violet-500" />
              Architecture & Implementation
            </h3>
            <p className="text-sm leading-relaxed text-ink-600 dark:text-ink-300 bg-ink-50 dark:bg-ink-950/60 p-4 rounded-2xl border border-ink-100 dark:border-ink-800/60">
              {project.implementation}
            </p>
          </div>

          {/* Key Highlights */}
          <div className="space-y-2">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-ink-900 dark:text-ink-100">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Engineering Highlights
            </h3>
            <ul className="space-y-2">
              {project.keyHighlights.map((highlight, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-ink-600 dark:text-ink-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-ink-400 dark:text-ink-500">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-ink-100 dark:bg-ink-800 text-ink-700 dark:text-ink-200 border border-ink-200 dark:border-ink-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Roadmap (if available) */}
          {project.roadmap && project.roadmap.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-ink-100 dark:border-ink-800">
              <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
                <Wrench className="w-3.5 h-3.5" />
                Active Roadmap & Next Milestones
              </h3>
              <ul className="space-y-1.5">
                {project.roadmap.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-ink-500 dark:text-ink-400">
                    <ArrowRight className="w-3 h-3 text-violet-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-ink-200 dark:border-ink-800">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-ink-900 text-white dark:bg-ink-100 dark:text-ink-950 hover:bg-violet-700 dark:hover:bg-violet-300 transition-colors shadow-xs"
              >
                <Github className="w-4 h-4" />
                View GitHub Repository
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            )}

            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-violet-600 text-white hover:bg-violet-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo (Verified)
              </a>
            ) : (
              <span className="text-xs text-ink-400 dark:text-ink-500 font-mono italic">
                (Verified code repository provided above)
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
