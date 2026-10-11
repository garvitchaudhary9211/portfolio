import React, { useState } from 'react';
import { Download, ExternalLink, FileText, ChevronDown, ChevronUp, Github, ArrowUpRight } from 'lucide-react';
import { ACADEMIC_DOCS, COA_QUESTIONS } from '../data/portfolioData';
import { PdfViewer } from './PdfViewer';

export const AcademicWork: React.FC = () => {
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(1);
  const [activeTab, setActiveTab] = useState<'preview' | 'questions' | 'overview'>('preview');

  const coaDoc = ACADEMIC_DOCS[0];

  return (
    <section id="academic" className="py-20 md:py-28 bg-white border-t border-[#DCE8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
            University Curriculum & Submissions
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142D4E] tracking-tight">
            Academic Work
          </h2>
          <p className="text-[#526579] text-base sm:text-lg leading-relaxed">
            Coursework, research summaries, and engineering assignments completed for B.E. CSE Artificial Intelligence at Chandigarh University.
          </p>
        </div>

        {/* Featured Academic Document Card: COA Assignment */}
        <div className="rounded-3xl bg-white border border-[#DCE8F5] shadow-sm overflow-hidden mb-12">
          {/* Header Banner */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-[#F2F8FF] via-white to-[#F2F8FF] border-b border-[#DCE8F5] flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#2563EB]">
                <span className="font-bold">{coaDoc.course}</span>
                <span aria-hidden="true" className="text-[#DCE8F5]">·</span>
                <span className="text-[#526579]">{coaDoc.term}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#142D4E] tracking-tight">
                {coaDoc.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#526579] max-w-2xl leading-relaxed">
                {coaDoc.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={coaDoc.fileUrl}
                download={coaDoc.filename}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#2563EB] hover:bg-blue-700 rounded-xl transition-all shadow-md shadow-blue-500/20"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>
              <a
                href={coaDoc.fileUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#142D4E] bg-white hover:bg-slate-50 border border-[#DCE8F5] rounded-xl transition-all shadow-sm hover:border-[#5B9BEE]"
              >
                <ExternalLink className="w-4 h-4 text-[#2563EB]" />
                <span>Open in Tab</span>
              </a>
            </div>
          </div>

          {/* Interactive Viewer Section */}
          <div className="p-6 sm:p-8 space-y-6 bg-white">
            {/* View Switcher Tabs */}
            <div className="flex flex-wrap items-center justify-between border-b border-[#DCE8F5] pb-4 gap-3">
              <div className="flex items-center gap-2 p-1 bg-[#F2F8FF] rounded-xl border border-[#DCE8F5]">
                <button
                  type="button"
                  onClick={() => setActiveTab('preview')}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'preview'
                      ? 'bg-[#2563EB] text-white shadow-sm'
                      : 'text-[#526579] hover:text-[#142D4E]'
                  }`}
                >
                  Document Preview
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('questions')}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'questions'
                      ? 'bg-[#2563EB] text-white shadow-sm'
                      : 'text-[#526579] hover:text-[#142D4E]'
                  }`}
                >
                  Interactive 12 Questions
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('overview')}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'overview'
                      ? 'bg-[#2563EB] text-white shadow-sm'
                      : 'text-[#526579] hover:text-[#142D4E]'
                  }`}
                >
                  Topic Index
                </button>
              </div>

              <span className="text-xs text-[#526579] font-mono hidden sm:inline">
                Verified File: {coaDoc.filename}
              </span>
            </div>

            {/* Tab 1: Real PDF Preview using PdfViewer canvas */}
            {activeTab === 'preview' && (
              <div className="space-y-4 animate-in fade-in duration-150">
                <PdfViewer
                  url={coaDoc.fileUrl}
                  filename={coaDoc.filename}
                  title="COA Assignment — Garvit Chaudhary (UID: 25BAI10055)"
                />
              </div>
            )}

            {/* Tab 2: Interactive Question Reader */}
            {activeTab === 'questions' && (
              <div className="space-y-3 animate-in fade-in duration-150">
                <div className="flex items-center justify-between text-xs text-[#526579] pb-2">
                  <span>Questions from Garvit's COA Submission (UID: 25BAI10055)</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setExpandedQuestion(null)}
                      className="hover:text-[#142D4E] font-medium"
                    >
                      Collapse All
                    </button>
                    <span>·</span>
                    <button
                      type="button"
                      onClick={() => setExpandedQuestion(1)}
                      className="hover:text-[#142D4E] font-medium"
                    >
                      Reset to Q1
                    </button>
                  </div>
                </div>

                {COA_QUESTIONS.map((q) => {
                  const isExpanded = expandedQuestion === q.num;
                  return (
                    <div
                      key={q.num}
                      className={`rounded-2xl border transition-all duration-150 ${
                        isExpanded
                          ? 'bg-[#F8FBFF] border-[#5B9BEE]/50 shadow-sm'
                          : 'bg-white border-[#DCE8F5] hover:border-slate-300'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setExpandedQuestion(isExpanded ? null : q.num)}
                        className="w-full p-4 text-left flex items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-[#EBF3FC] text-[#2563EB] border border-[#DCE8F5]">
                            Q{q.num}
                          </span>
                          <span className="text-sm font-bold text-[#142D4E]">
                            {q.title}
                          </span>
                        </div>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-[#2563EB] shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-[#526579] shrink-0" />
                        )}
                      </button>

                      {isExpanded && (
                        <div className="px-5 pb-5 pt-1 border-t border-[#DCE8F5] space-y-3 text-xs sm:text-sm text-[#526579]">
                          {q.content && (
                            <p className="leading-relaxed whitespace-pre-line text-[#526579]">
                              {q.content}
                            </p>
                          )}
                          {q.points && q.points.length > 0 && (
                            <ul className="space-y-1.5 pt-1 pl-2">
                              {q.points.map((pt, pIdx) => (
                                <li key={pIdx} className="flex items-start gap-2 text-[#526579]">
                                  <span className="text-[#2563EB] font-bold shrink-0">•</span>
                                  <span>{pt}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Tab 3: Overview of 12 Topics */}
            {activeTab === 'overview' && (
              <div className="space-y-6 animate-in fade-in duration-150">
                <p className="text-sm text-[#526579]">
                  The assignment investigates 12 core domains across hardware architecture, distributed systems, and AI hardware acceleration:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {coaDoc.topics.map((topic, idx) => (
                    <div
                      key={topic}
                      onClick={() => {
                        setActiveTab('questions');
                        setExpandedQuestion(idx + 1);
                      }}
                      className="p-4 rounded-2xl bg-[#F8FBFF] border border-[#DCE8F5] hover:border-[#5B9BEE] hover:bg-[#F2F8FF] transition-all cursor-pointer group flex items-start gap-3 shadow-xs"
                    >
                      <span className="font-mono text-xs text-[#2563EB] font-bold shrink-0 mt-0.5">
                        {String(idx + 1).padStart(2, '0')}.
                      </span>
                      <span className="text-xs font-semibold text-[#142D4E] group-hover:text-[#2563EB] transition-colors">
                        {topic}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Coursework Companion Card */}
        <div className="p-6 sm:p-7 rounded-3xl bg-[#F2F8FF] border border-[#DCE8F5] flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#2563EB]">
              <span className="font-bold">COA PRACTICUM COMPANION</span>
              <span aria-hidden="true" className="text-[#DCE8F5]">·</span>
              <span className="text-[#526579]">Open Source Repository</span>
            </div>
            <h4 className="text-lg font-bold text-[#142D4E]">
              Instruction Set Simulator — Architecture Practicum
            </h4>
            <p className="text-xs sm:text-sm text-[#526579] max-w-2xl leading-relaxed">
              Developed in tandem with the Computer Organization & Architecture course to simulate instruction decode cycles, register states, and address decoding.
            </p>
          </div>

          <a
            href="https://github.com/garvitchaudhary9211/InstructionSetSimulator"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#142D4E] bg-white hover:bg-slate-50 border border-[#DCE8F5] rounded-xl transition-all shrink-0 shadow-sm hover:border-[#5B9BEE]"
          >
            <Github className="w-4 h-4 text-[#142D4E]" />
            <span>View COA Repository</span>
            <ArrowUpRight className="w-4 h-4 text-[#526579]" />
          </a>
        </div>
      </div>
    </section>
  );
};
