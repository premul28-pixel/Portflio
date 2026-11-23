import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, Download, ExternalLink, Copy, Check, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enquiryType: 'Software Engineering Internship',
    message: '',
  });

  const [copiedDraft, setCopiedDraft] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const enquiryOptions = [
    'Software Engineering Internship',
    'PremTech Freelance Project',
    'Technical Collaboration / Hackathon',
    'General Inquiry / Mentorship',
  ];

  const handleOpenEmailDraft = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      setStatusMessage('Please enter your name and email address.');
      return;
    }

    const subject = encodeURIComponent(`[${formData.enquiryType}] Message from ${formData.name}`);
    const bodyContent = `Hi Prem,

My name is ${formData.name} (${formData.email}).
Enquiry Type: ${formData.enquiryType}

${formData.message || 'I would like to discuss an opportunity with you.'}

Best regards,
${formData.name}`;

    const body = encodeURIComponent(bodyContent);
    const mailtoUrl = `mailto:premul28@gmail.com?subject=${subject}&body=${body}`;

    // Update status note
    setStatusMessage('Launching your email client with your prefilled draft...');
    window.location.href = mailtoUrl;
  };

  const handleCopyDraft = () => {
    const draftText = `To: premul28@gmail.com
Subject: [${formData.enquiryType}] Message from ${formData.name || 'Visitor'}

Hi Prem,
Name: ${formData.name || 'Visitor'}
Email: ${formData.email || 'Not provided'}
Enquiry: ${formData.enquiryType}

Message:
${formData.message || 'I would like to discuss an opportunity with you.'}`;

    navigator.clipboard.writeText(draftText);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-ink-200/80 dark:border-ink-800/80 bg-ink-50/50 dark:bg-ink-950/30">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-950 dark:text-white">
            Let's discuss an internship or project
          </h2>
          <p className="text-base text-ink-600 dark:text-ink-400 max-w-2xl">
            Have an open software engineering role, a freelance requirement, or want to discuss my projects? Reach out below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Verified Profiles (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 shadow-xs space-y-6">
              <h3 className="font-serif text-xl font-bold text-ink-950 dark:text-white">
                Contact Information
              </h3>

              <div className="space-y-4">
                {/* Email item */}
                <a
                  href="mailto:premul28@gmail.com"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-ink-50 dark:bg-ink-950/60 border border-ink-100 dark:border-ink-800/60 hover:border-violet-500/40 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-ink-400 block">Direct Email</span>
                    <span className="text-sm font-semibold text-ink-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400">
                      premul28@gmail.com
                    </span>
                  </div>
                </a>

                {/* GitHub item */}
                <a
                  href="https://github.com/premul28-pixel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-ink-50 dark:bg-ink-950/60 border border-ink-100 dark:border-ink-800/60 hover:border-violet-500/40 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-ink-200 dark:bg-ink-800 text-ink-900 dark:text-white group-hover:scale-105 transition-transform">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-ink-400 block">GitHub Profile</span>
                      <span className="text-sm font-semibold text-ink-900 dark:text-white">
                        github.com/premul28-pixel
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-ink-400 group-hover:text-violet-500" />
                </a>

                {/* LinkedIn item */}
                <a
                  href="https://www.linkedin.com/in/prem-kumar-m-31796a377"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-ink-50 dark:bg-ink-950/60 border border-ink-100 dark:border-ink-800/60 hover:border-violet-500/40 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-ink-400 block">LinkedIn Profile</span>
                      <span className="text-sm font-semibold text-ink-900 dark:text-white">
                        in/prem-kumar-m-31796a377
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-ink-400 group-hover:text-violet-500" />
                </a>
              </div>

              {/* Public Resume Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenResume}
                  className="w-full flex items-center justify-center gap-2 p-3.5 rounded-2xl text-xs font-semibold bg-ink-900 text-white dark:bg-ink-100 dark:text-ink-950 hover:bg-violet-700 dark:hover:bg-violet-200 transition-colors shadow-xs"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Official Résumé (PDF)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Email Draft Form (7 cols) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleOpenEmailDraft}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 shadow-xs space-y-5"
            >
              <div className="flex items-center justify-between pb-3 border-b border-ink-100 dark:border-ink-800">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">
                  <MessageSquare className="w-4 h-4" />
                  <span>Email Composer</span>
                </div>
                <span className="text-[11px] text-ink-400 font-mono">
                  Prefills your mail client
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs font-semibold text-ink-700 dark:text-ink-300">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Alex Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl text-xs bg-ink-50 dark:bg-ink-950 border border-ink-200 dark:border-ink-800 text-ink-900 dark:text-ink-100 placeholder-ink-400 focus:outline-hidden focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-xs font-semibold text-ink-700 dark:text-ink-300">
                    Your Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl text-xs bg-ink-50 dark:bg-ink-950 border border-ink-200 dark:border-ink-800 text-ink-900 dark:text-ink-100 placeholder-ink-400 focus:outline-hidden focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                  />
                </div>
              </div>

              {/* Enquiry Type Dropdown */}
              <div className="space-y-1.5">
                <label htmlFor="contact-enquiry" className="text-xs font-semibold text-ink-700 dark:text-ink-300">
                  Enquiry Type
                </label>
                <select
                  id="contact-enquiry"
                  value={formData.enquiryType}
                  onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl text-xs bg-ink-50 dark:bg-ink-950 border border-ink-200 dark:border-ink-800 text-ink-900 dark:text-ink-100 focus:outline-hidden focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                >
                  {enquiryOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-xs font-semibold text-ink-700 dark:text-ink-300">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Tell me about the role, technical scope, timeline, or question..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl text-xs bg-ink-50 dark:bg-ink-950 border border-ink-200 dark:border-ink-800 text-ink-900 dark:text-ink-100 placeholder-ink-400 focus:outline-hidden focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                />
              </div>

              {/* Status Message */}
              {statusMessage && (
                <p className="text-xs text-violet-600 dark:text-violet-400 font-medium">
                  {statusMessage}
                </p>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-xs font-semibold bg-violet-600 text-white hover:bg-violet-700 transition-colors shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>Open email draft</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyDraft}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-2xl text-xs font-semibold bg-ink-100 dark:bg-ink-800 text-ink-700 dark:text-ink-200 hover:bg-ink-200 dark:hover:bg-ink-700 transition-colors border border-ink-200 dark:border-ink-700"
                >
                  {copiedDraft ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedDraft ? 'Draft Copied!' : 'Copy draft text'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
