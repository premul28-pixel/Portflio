import React, { useEffect } from 'react';
import { X, Download, FileText, CheckCircle, GraduationCap, Briefcase, Award } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-ink-950/80 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-resume-title"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-3xl shadow-2xl overflow-y-auto flex flex-col"
        tabIndex={-1}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/90 dark:bg-ink-900/90 backdrop-blur-md border-b border-ink-200 dark:border-ink-800">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-violet-600 dark:text-violet-400" />
            <h2 id="modal-resume-title" className="font-serif text-lg font-bold text-ink-900 dark:text-white">
              Prem Kumar M — Public Résumé
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close résumé preview"
            className="p-1.5 rounded-full text-ink-500 hover:text-ink-900 dark:text-ink-400 dark:hover:text-white hover:bg-ink-100 dark:hover:bg-ink-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Download CTA Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-gradient-to-r from-violet-600/10 via-indigo-600/10 to-violet-600/5 border border-violet-500/20">
            <div>
              <p className="text-sm font-bold text-ink-900 dark:text-white">
                Official PDF Document
              </p>
              <p className="text-xs text-ink-600 dark:text-ink-300">
                Verified copy with academic credentials, hackathons, and project repos.
              </p>
            </div>
            <a
              href="/assets/resume-prem-kumar-m.pdf"
              download="Prem_Kumar_M_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-violet-600 text-white hover:bg-violet-700 transition-colors shadow-sm shrink-0"
            >
              <Download className="w-4 h-4" />
              Download PDF (Direct)
            </a>
          </div>

          {/* Quick Summary Section */}
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-ink-50 dark:bg-ink-950/60 border border-ink-200 dark:border-ink-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
                <GraduationCap className="w-4 h-4" /> Education & Standing
              </div>
              <p className="text-sm text-ink-800 dark:text-ink-200">
                <strong>B.E. Computer Science and Engineering (2025–2029)</strong>
                <br />
                Karpagam Academy of Higher Education (KAHE), Coimbatore, TN
                <br />
                <span className="text-xs text-violet-600 dark:text-violet-400 font-semibold">
                  Current CGPA: 7.45
                </span>{' '}
                • Class XII: 70.5% (Tagore Matric HSS)
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-ink-50 dark:bg-ink-950/60 border border-ink-200 dark:border-ink-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                <Briefcase className="w-4 h-4" /> Featured Projects
              </div>
              <ul className="text-xs space-y-1.5 text-ink-700 dark:text-ink-300">
                <li>
                  • <strong>Paisa:</strong> Offline-first Flutter personal finance app with SQLite multi-wallets.
                </li>
                <li>
                  • <strong>StudyHub Pro:</strong> React + Firebase student productivity & DSA placement hub.
                </li>
                <li>
                  • <strong>Sitha AI:</strong> Voice-first desktop assistant prototype for routine laptop tasks.
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-ink-50 dark:bg-ink-950/60 border border-ink-200 dark:border-ink-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                <Award className="w-4 h-4" /> Hackathon Honors
              </div>
              <ul className="text-xs space-y-1.5 text-ink-700 dark:text-ink-300">
                <li>
                  • <strong>3rd Place Award:</strong> SIMATS 8-Hour Hackathon (Chennai, 2026).
                </li>
                <li>
                  • <strong>SPIDY HACKERS:</strong> Smart India Hackathon (SIH) 2026 Internal Round (Mining conveyor safety).
                </li>
              </ul>
            </div>
          </div>

          {/* Footer note */}
          <div className="pt-2 flex items-center justify-between text-xs text-ink-500">
            <span>Email: premul28@gmail.com</span>
            <a
              href="/assets/resume-prem-kumar-m.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-600 dark:text-violet-400 hover:underline"
            >
              Open raw PDF in new tab ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
