import React, { useState } from 'react';
import { Download, ExternalLink, FileText, CheckCircle2, ChevronDown, ChevronUp, Cpu, Binary, Calculator } from 'lucide-react';
import { CASE_STUDY_3 } from '../data/portfolioData';
import { PdfViewer } from './PdfViewer';

export const CaseStudy3Section: React.FC = () => {
  const [showDocPreview, setShowDocPreview] = useState<boolean>(true);
  const [showAnalysisDetails, setShowAnalysisDetails] = useState<boolean>(true);

  return (
    <section id="case-study-3" className="py-20 md:py-28 bg-[#F2F8FF] border-t border-[#DCE8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DCE8F5] text-xs font-semibold text-[#2563EB] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
            <span>Academic Coursework · Category: {CASE_STUDY_3.category}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142D4E] tracking-tight">
            Case Study 3
          </h2>
          <p className="text-lg font-bold text-[#2563EB]">
            {CASE_STUDY_3.title}
          </p>
          <p className="text-[#526579] text-base leading-relaxed">
            {CASE_STUDY_3.description}
          </p>
        </div>

        {/* Professional Document Card */}
        <div className="rounded-3xl bg-white border border-[#DCE8F5] shadow-sm overflow-hidden mb-10">
          {/* Top Banner Info */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-white via-[#F8FBFF] to-[#F2F8FF] border-b border-[#DCE8F5] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#526579]">
                <span className="px-2.5 py-1 rounded-md bg-[#EBF3FC] text-[#2563EB] font-bold">
                  {CASE_STUDY_3.subject}
                </span>
                <span aria-hidden="true" className="text-[#DCE8F5]">·</span>
                <span>{CASE_STUDY_3.institution}</span>
                <span aria-hidden="true" className="text-[#DCE8F5]">·</span>
                <span className="font-semibold text-[#142D4E]">UID: {CASE_STUDY_3.uid}</span>
                <span aria-hidden="true" className="text-[#DCE8F5]">·</span>
                <span>Class: {CASE_STUDY_3.className}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#142D4E] tracking-tight">
                {CASE_STUDY_3.title}
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-xs text-[#526579]">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Available Formats: PDF & Word (.docx)</span>
                </span>
                <span aria-hidden="true" className="text-[#DCE8F5]">·</span>
                <span className="font-mono text-[#526579] truncate max-w-xs sm:max-w-none">
                  {CASE_STUDY_3.pdfFilename}
                </span>
              </div>
            </div>

            {/* Required Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {/* Action 1: View Case Study (opens PDF) */}
              <a
                href={CASE_STUDY_3.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#142D4E] bg-white hover:bg-slate-50 border border-[#DCE8F5] rounded-xl transition-all shadow-xs hover:border-[#5B9BEE]"
              >
                <ExternalLink className="w-4 h-4 text-[#2563EB]" />
                <span>View Case Study</span>
              </a>

              {/* Action 2: Download PDF */}
              <a
                href={CASE_STUDY_3.pdfUrl}
                download={CASE_STUDY_3.pdfFilename}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#2563EB] hover:bg-blue-700 rounded-xl transition-all shadow-md shadow-blue-500/20"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>

              {/* Action 3: Download Editable Word Document */}
              <a
                href={CASE_STUDY_3.docxUrl}
                download={CASE_STUDY_3.docxFilename}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#142D4E] bg-[#EBF3FC] hover:bg-blue-100 border border-[#DCE8F5] rounded-xl transition-all shadow-xs"
              >
                <FileText className="w-4 h-4 text-[#2563EB]" />
                <span>Download Word (.docx)</span>
              </a>
            </div>
          </div>

          {/* Quick Quantitative Metrics Strip */}
          {CASE_STUDY_3.keyCalculations && (
            <div className="p-6 bg-white border-b border-[#DCE8F5] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {CASE_STUDY_3.keyCalculations.map((calc, i) => (
                <div key={i} className="p-3 rounded-2xl bg-[#F8FBFF] border border-[#DCE8F5] space-y-1">
                  <span className="text-[11px] font-medium text-[#526579] block truncate">{calc.label}</span>
                  <p className="text-sm font-bold text-[#142D4E] font-mono">{calc.result}</p>
                  <span className="text-[10px] text-[#5B9BEE] font-mono block truncate">{calc.formula}</span>
                </div>
              ))}
            </div>
          )}

          {/* Analysis Topics & Core Questions Accordion */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-[#DCE8F5] pb-4">
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[#2563EB]" />
                <h4 className="text-sm sm:text-base font-bold text-[#142D4E]">
                  Case Study Questions & Analytical Structure
                </h4>
              </div>

              <button
                type="button"
                onClick={() => setShowAnalysisDetails(!showAnalysisDetails)}
                className="text-xs font-semibold text-[#2563EB] hover:text-blue-800 flex items-center gap-1"
              >
                <span>{showAnalysisDetails ? 'Collapse Details' : 'Expand Details'}</span>
                {showAnalysisDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>

            {showAnalysisDetails && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-150">
                <div className="p-5 rounded-2xl bg-[#F8FBFF] border border-[#DCE8F5] space-y-3">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#2563EB] font-mono">
                    Core Concepts Investigated
                  </h5>
                  <ul className="space-y-2 text-xs text-[#526579]">
                    {CASE_STUDY_3.topics.map((t, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                        <span className="text-[#142D4E] font-medium">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-[#F8FBFF] border border-[#DCE8F5] space-y-3">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#2563EB] font-mono">
                    Mathematical Conclusion
                  </h5>
                  <div className="space-y-2 text-xs text-[#526579] leading-relaxed">
                    <p>
                      <strong>Scenario:</strong> 1,000 accesses with 850 hits (hit time = 2 ns) and 150 misses (miss penalty = 50 ns).
                    </p>
                    <div className="p-3 rounded-xl bg-white border border-[#DCE8F5] font-mono text-[11px] space-y-1">
                      <p className="text-[#142D4E] font-bold">Hit Ratio: 850 / 1,000 = 85%</p>
                      <p className="text-[#142D4E] font-bold">Miss Ratio: 150 / 1,000 = 15%</p>
                      <p className="text-[#2563EB] font-bold pt-1">AMAT = 2 + (0.15 × 50) = 9.5 ns</p>
                    </div>
                    <p className="text-[11px]">
                      Increasing the hit ratio from 85% to 90% reduces AMAT from 9.5 ns down to 7.0 ns, demonstrating the direct leverage of locality optimization.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Document Preview Toggle and Canvas Viewer */}
            <div className="pt-2 border-t border-[#DCE8F5] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#142D4E]">Document Preview</span>
                <button
                  type="button"
                  onClick={() => setShowDocPreview(!showDocPreview)}
                  className="text-xs font-semibold text-[#2563EB] hover:text-blue-800"
                >
                  {showDocPreview ? 'Hide Preview' : 'Show In-Page Preview'}
                </button>
              </div>

              {showDocPreview && (
                <PdfViewer
                  url={CASE_STUDY_3.pdfUrl}
                  filename={CASE_STUDY_3.pdfFilename}
                  title="Case Study 3: Cache Memory Performance Analysis"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
