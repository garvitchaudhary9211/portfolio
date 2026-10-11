import React from 'react';
import { Award, Cloud, BookOpen, Lightbulb, CheckCircle2 } from 'lucide-react';
import { CERTIFICATES } from '../data/portfolioData';

const iconByIssuer: Record<string, React.ReactNode> = {
  Microsoft: <Cloud className="w-5 h-5 text-[#2563EB]" />,
  Coursera: <BookOpen className="w-5 h-5 text-[#5B9BEE]" />,
  'LinkedIn Learning': <Lightbulb className="w-5 h-5 text-amber-500" />,
};

export const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-20 md:py-28 bg-white border-t border-[#DCE8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
            Professional & Academic Credentials
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142D4E] tracking-tight">
            Certifications
          </h2>
          <p className="text-[#526579] text-base sm:text-lg leading-relaxed">
            Completed industry and university-accredited certifications covering cloud architecture, research enquiry, entrepreneurial leadership, and design thinking.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.title}
              className="p-8 rounded-3xl bg-white border border-[#DCE8F5] shadow-sm hover:shadow-md hover:border-[#5B9BEE]/60 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header with Issuer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-2xl bg-[#F2F8FF] border border-[#DCE8F5]">
                      {iconByIssuer[cert.issuer] || <Award className="w-5 h-5 text-[#2563EB]" />}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#142D4E] font-mono">
                        {cert.issuer}
                      </span>
                      <p className="text-[11px] text-[#526579]">
                        {cert.credentialType}
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Completed</span>
                  </span>
                </div>

                {/* Certificate Title */}
                <h3 className="text-lg font-bold text-[#142D4E] tracking-tight leading-snug">
                  {cert.title}
                </h3>

                {/* Syllabus / Focus Topics */}
                <div className="pt-2 space-y-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#526579] block">
                    Curriculum Focus
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.topics.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs text-[#142D4E] bg-[#F2F8FF] border border-[#DCE8F5] rounded-lg font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verified Text Record Notice */}
              <div className="pt-6 mt-6 border-t border-[#DCE8F5] flex items-center justify-between text-xs text-[#526579] font-mono">
                <span>Verified Curriculum Record</span>
                <span className="font-semibold text-[#142D4E]">Chandigarh University CSE AI</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Policy Disclaimer */}
        <div className="mt-10 p-5 rounded-2xl bg-[#F2F8FF] border border-[#DCE8F5] text-xs text-[#526579] flex items-start gap-3 shadow-xs">
          <span className="text-[#2563EB] font-bold text-sm shrink-0">ℹ</span>
          <p className="leading-relaxed">
            Certifications are presented as accurate text records from completed coursework and examinations. In adherence to strict portfolio integrity, no fabricated credential verification links or mock certificate download buttons are displayed.
          </p>
        </div>
      </div>
    </section>
  );
};
