import React, { useState } from 'react';
import { Download, ExternalLink, FileText, CheckCircle2, ChevronDown, ChevronUp, Cpu, Binary, Layers } from 'lucide-react';
import { ASSIGNMENT_3 } from '../data/portfolioData';
import { PdfViewer } from './PdfViewer';

export const Assignment3Section: React.FC = () => {
  const [showDocPreview, setShowDocPreview] = useState<boolean>(true);
  const [showObservations, setShowObservations] = useState<boolean>(true);

  return (
    <section id="assignment-3" className="py-20 md:py-28 bg-white border-t border-[#DCE8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2F8FF] border border-[#DCE8F5] text-xs font-semibold text-[#2563EB] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
            <span>Academic Coursework · Category: {ASSIGNMENT_3.category}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142D4E] tracking-tight">
            Assignment 3
          </h2>
          <p className="text-lg font-bold text-[#2563EB]">
            {ASSIGNMENT_3.title}
          </p>
          <p className="text-[#526579] text-base leading-relaxed">
            {ASSIGNMENT_3.description}
          </p>
        </div>

        {/* Professional Document Card */}
        <div className="rounded-3xl bg-white border border-[#DCE8F5] shadow-sm overflow-hidden mb-10">
          {/* Top Banner Info */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-white via-[#F8FBFF] to-[#F2F8FF] border-b border-[#DCE8F5] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#526579]">
                <span className="px-2.5 py-1 rounded-md bg-[#EBF3FC] text-[#2563EB] font-bold">
                  {ASSIGNMENT_3.subject}
                </span>
                <span aria-hidden="true" className="text-[#DCE8F5]">·</span>
                <span>{ASSIGNMENT_3.institution}</span>
                <span aria-hidden="true" className="text-[#DCE8F5]">·</span>
                <span className="font-semibold text-[#142D4E]">UID: {ASSIGNMENT_3.uid}</span>
                <span aria-hidden="true" className="text-[#DCE8F5]">·</span>
                <span>Class: {ASSIGNMENT_3.className}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#142D4E] tracking-tight">
                {ASSIGNMENT_3.title}
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-xs text-[#526579]">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Available Formats: PDF & Word (.docx)</span>
                </span>
                <span aria-hidden="true" className="text-[#DCE8F5]">·</span>
                <span className="font-mono text-[#526579] truncate max-w-xs sm:max-w-none">
                  {ASSIGNMENT_3.pdfFilename}
                </span>
              </div>
            </div>

            {/* Required Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {/* Action 1: View Assignment (opens PDF) */}
              <a
                href={ASSIGNMENT_3.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#142D4E] bg-white hover:bg-slate-50 border border-[#DCE8F5] rounded-xl transition-all shadow-xs hover:border-[#5B9BEE]"
              >
                <ExternalLink className="w-4 h-4 text-[#2563EB]" />
                <span>View Assignment</span>
              </a>

              {/* Action 2: Download PDF */}
              <a
                href={ASSIGNMENT_3.pdfUrl}
                download={ASSIGNMENT_3.pdfFilename}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#2563EB] hover:bg-blue-700 rounded-xl transition-all shadow-md shadow-blue-500/20"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>

              {/* Action 3: Download Editable Word Document */}
              <a
                href={ASSIGNMENT_3.docxUrl}
                download={ASSIGNMENT_3.docxFilename}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#142D4E] bg-[#EBF3FC] hover:bg-blue-100 border border-[#DCE8F5] rounded-xl transition-all shadow-xs"
              >
                <FileText className="w-4 h-4 text-[#2563EB]" />
                <span>Download Word (.docx)</span>
              </a>
            </div>
          </div>

          {/* Key Quantitative Metrics Strip */}
          {ASSIGNMENT_3.keyCalculations && (
            <div className="p-6 bg-white border-b border-[#DCE8F5] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {ASSIGNMENT_3.keyCalculations.map((calc, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-[#F8FBFF] border border-[#DCE8F5] space-y-1">
                  <span className="text-[11px] font-medium text-[#526579] block truncate">{calc.label}</span>
                  <p className="text-sm font-bold text-[#142D4E] font-mono">{calc.result}</p>
                  <span className="text-[10px] text-[#5B9BEE] font-mono block truncate">{calc.formula}</span>
                </div>
              ))}
            </div>
          )}

          {/* CPU–Cache–RAM Diagram & 3 Performance Observations */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-[#DCE8F5] pb-4">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#2563EB]" />
                <h4 className="text-sm sm:text-base font-bold text-[#142D4E]">
                  CPU–Cache–RAM Hierarchy & Performance Observations
                </h4>
              </div>

              <button
                type="button"
                onClick={() => setShowObservations(!showObservations)}
                className="text-xs font-semibold text-[#2563EB] hover:text-blue-800 flex items-center gap-1"
              >
                <span>{showObservations ? 'Collapse Details' : 'Expand Details'}</span>
                {showObservations ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>

            {showObservations && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in duration-150">
                {/* Visual Architecture Diagram */}
                <div className="lg:col-span-5 p-5 rounded-2xl bg-[#F8FBFF] border border-[#DCE8F5] space-y-3">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#2563EB] font-mono">
                    (b) CPU–Cache–RAM Architecture Diagram
                  </h5>
                  <div className="p-4 rounded-xl bg-white border border-[#DCE8F5] font-mono text-xs text-[#142D4E] leading-tight space-y-2 select-none overflow-x-auto">
                    <pre className="text-xs text-[#142D4E]">
{`+--------------------------+
|           CPU            |
+--------------------------+
             |
             v
+--------------------------+
|       CACHE MEMORY       |
+--------------------------+
      /              \\
   HIT                MISS
    |                  |
    v                  v
+---------------+  +------------------+
| Return to CPU |  |       RAM        |
+---------------+  +------------------+
                           |
                           v
                  Data returned to CPU`}
                    </pre>
                  </div>
                  <p className="text-[11px] text-[#526579] leading-relaxed">
                    Shows processor routing: hits resolve immediately at cache speed (2 ns), whereas misses fall back to RAM with a 50 ns penalty.
                  </p>
                </div>

                {/* 3 Core Observations */}
                <div className="lg:col-span-7 p-5 rounded-2xl bg-[#F8FBFF] border border-[#DCE8F5] space-y-4">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#2563EB] font-mono">
                    (c) Three Core Performance Observations
                  </h5>
                  <div className="space-y-3">
                    {ASSIGNMENT_3.performanceObservations?.map((obs, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-white border border-[#DCE8F5] flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                        <p className="text-xs text-[#526579] leading-relaxed">
                          <strong className="text-[#142D4E]">{obs.split(':')[0]}:</strong>
                          {obs.split(':')[1]}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#EBF3FC] border border-[#DCE8F5] text-xs text-[#142D4E] leading-relaxed">
                    <strong>Conclusion:</strong> Cache hit ratio is 85% and miss ratio is 15%. With hit time of 2 ns and miss penalty of 50 ns, AMAT = 9.5 ns. Cache performance directly governs the processor's memory throughput.
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
                  url={ASSIGNMENT_3.pdfUrl}
                  filename={ASSIGNMENT_3.pdfFilename}
                  title="Assignment 3: Average Memory Access Time (AMAT)"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
