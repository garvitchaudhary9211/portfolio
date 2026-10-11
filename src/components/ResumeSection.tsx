import React, { useState } from 'react';
import { Download, ExternalLink, FileText, CheckCircle2, User, Phone, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, CERTIFICATES } from '../data/portfolioData';
import { PdfViewer } from './PdfViewer';

export const ResumeSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'sheet' | 'pdf'>('pdf');

  return (
    <section id="resume" className="py-20 md:py-28 bg-[#F2F8FF] border-t border-[#DCE8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
            Curriculum Vitae
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142D4E] tracking-tight">
            Resume
          </h2>
          <p className="text-[#526579] text-base sm:text-lg leading-relaxed">
            Verified academic and project resume for Garvit Chaudhary. Download the official PDF or review the embedded canvas preview and structured details below.
          </p>
        </div>

        {/* Top Action Bar with Download Button */}
        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#DCE8F5] mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F2F8FF] border border-[#DCE8F5] flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6 text-[#2563EB]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#142D4E]">
                Garvit Chaudhary — Official Resume
              </h3>
              <p className="text-xs text-[#526579] font-mono">
                Format: PDF · Verified Coursework & Skills · Path: /documents/resume.pdf
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="p-1 bg-[#F2F8FF] rounded-xl border border-[#DCE8F5] flex items-center">
              <button
                type="button"
                onClick={() => setViewMode('pdf')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === 'pdf'
                    ? 'bg-[#2563EB] text-white shadow-sm'
                    : 'text-[#526579] hover:text-[#142D4E]'
                }`}
              >
                PDF Document
              </button>
              <button
                type="button"
                onClick={() => setViewMode('sheet')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === 'sheet'
                    ? 'bg-[#2563EB] text-white shadow-sm'
                    : 'text-[#526579] hover:text-[#142D4E]'
                }`}
              >
                Structured Sheet
              </button>
            </div>

            <a
              href={PERSONAL_INFO.documents.resumePdf}
              download="garvit_chaudhary_resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#2563EB] hover:bg-blue-700 active:scale-[0.98] rounded-xl transition-all shadow-md shadow-blue-500/20"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            <a
              href={PERSONAL_INFO.documents.resumePdf}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold text-[#142D4E] bg-white hover:bg-slate-50 border border-[#DCE8F5] rounded-xl transition-colors shadow-sm hover:border-[#5B9BEE]"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-4 h-4 text-[#2563EB]" />
              <span className="hidden sm:inline">Open in Tab</span>
            </a>
          </div>
        </div>

        {/* View Mode: PDF Canvas Previewer (pdfjs-dist) */}
        {viewMode === 'pdf' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <PdfViewer
              url={PERSONAL_INFO.documents.resumePdf}
              filename="garvit_chaudhary_resume.pdf"
              title="Official Resume — Garvit Chaudhary"
            />
          </div>
        )}

        {/* View Mode: Structured Document Sheet */}
        {viewMode === 'sheet' && (
          <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-[#DCE8F5] shadow-sm p-6 sm:p-10 lg:p-12 space-y-8 animate-in fade-in duration-200">
            {/* Sheet Header */}
            <div className="border-b border-[#DCE8F5] pb-6 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#142D4E] tracking-tight uppercase">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2563EB] font-bold mt-0.5">
                    {PERSONAL_INFO.degree} · Chandigarh University
                  </p>
                </div>
                <div className="text-xs font-mono text-[#526579] space-y-1 sm:text-right">
                  <p>{PERSONAL_INFO.phone}</p>
                  <p>{PERSONAL_INFO.email}</p>
                  <p className="text-[#142D4E] font-semibold">UID: {PERSONAL_INFO.uid}</p>
                </div>
              </div>
            </div>

            {/* CAREER OBJECTIVE */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-bold border-b border-[#DCE8F5] pb-1">
                Career Objective
              </h4>
              <p className="text-xs sm:text-sm text-[#526579] leading-relaxed">
                Second-year Artificial Intelligence student with hands-on project experience in machine learning, automation, and web-based platforms. Seeking an internship/entry-level opportunity to apply skills in AI/ML, Python, and cloud technologies to solve real-world problems.
              </p>
            </div>

            {/* EDUCATION */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-bold border-b border-[#DCE8F5] pb-1">
                Education
              </h4>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <p className="text-sm font-bold text-[#142D4E]">
                      Bachelor of Technology – Artificial Intelligence
                    </p>
                    <p className="text-xs text-[#526579]">
                      Chandigarh University, Gharuan, Punjab
                    </p>
                  </div>
                  <span className="text-xs font-mono text-[#2563EB] font-semibold">2025–2029</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <p className="text-sm font-semibold text-[#142D4E]">
                      Senior Secondary (Class XII)
                    </p>
                    <p className="text-xs text-[#526579]">Satluj Public School</p>
                  </div>
                  <span className="text-xs font-mono text-[#526579]">2024–2025</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <p className="text-sm font-semibold text-[#142D4E]">
                      Secondary (Class X)
                    </p>
                    <p className="text-xs text-[#526579]">Satluj Public School</p>
                  </div>
                  <span className="text-xs font-mono text-[#526579]">2022–2023</span>
                </div>
              </div>
            </div>

            {/* PROJECTS */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-bold border-b border-[#DCE8F5] pb-1">
                Projects
              </h4>
              <div className="space-y-2">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-sm font-bold text-[#142D4E]">
                    AdGenix — AI Advertisement Generator
                  </span>
                  <span className="text-xs font-mono text-[#526579]">
                    | AI/ML, Python, Pre-trained AI Models
                  </span>
                </div>
                <ul className="text-xs sm:text-sm text-[#526579] space-y-1 pl-4 list-disc marker:text-[#2563EB]">
                  <li>
                    Developed a tool that uses pre-trained AI models to generate advertisements from user input.
                  </li>
                  <li>
                    Designed for brands, businesses, influencers, and events to quickly create tailored ad content.
                  </li>
                </ul>
                <p className="text-xs text-[#526579] italic pt-1">
                  Additional projects in progress — details to be added.
                </p>
              </div>
            </div>

            {/* SKILLS */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-bold border-b border-[#DCE8F5] pb-1">
                Skills
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="font-bold text-[#142D4E]">Programming:</span>{' '}
                  <span className="text-[#526579]">C++, Python, Java</span>
                </div>
                <div>
                  <span className="font-bold text-[#142D4E]">AI/ML:</span>{' '}
                  <span className="text-[#526579]">Artificial Intelligence, Machine Learning, NLP</span>
                </div>
                <div>
                  <span className="font-bold text-[#142D4E]">Data / Databases:</span>{' '}
                  <span className="text-[#526579]">SQL, Data Analytics</span>
                </div>
                <div>
                  <span className="font-bold text-[#142D4E]">Cloud:</span>{' '}
                  <span className="text-[#526579]">Microsoft Azure</span>
                </div>
                <div>
                  <span className="font-bold text-[#142D4E]">Tools:</span>{' '}
                  <span className="text-[#526579]">Git, GitHub, VS Code, Jupyter</span>
                </div>
                <div>
                  <span className="font-bold text-[#142D4E]">Interpersonal:</span>{' '}
                  <span className="text-[#526579]">Problem Solving, Communication, Teamwork, Adaptability, Continuous Learning</span>
                </div>
              </div>
            </div>

            {/* CERTIFICATIONS */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-bold border-b border-[#DCE8F5] pb-1">
                Certifications
              </h4>
              <ul className="text-xs sm:text-sm text-[#526579] space-y-1.5 pl-4 list-disc marker:text-[#2563EB]">
                <li>Microsoft Azure Fundamentals (AZ-900)</li>
                <li>Critical Enquiry and Research Methodology — Coursera</li>
                <li>Entrepreneurial Mindset: Build, Grow, & Lead Your Own Venture — Coursera</li>
                <li>Design Thinking and Creativity for Innovation — LinkedIn Learning</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
