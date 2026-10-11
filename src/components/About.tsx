import React from 'react';
import { GraduationCap, Target, Sparkles, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#F2F8FF] border-t border-[#DCE8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
            Background & Mission
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142D4E] tracking-tight">
            About Me
          </h2>
          <p className="text-[#526579] text-base sm:text-lg leading-relaxed">
            A second-year Artificial Intelligence student driven by curiosity, analytical discipline, and a passion for engineering practical, production-ready AI solutions.
          </p>
        </div>

        {/* Split Layout: Bio & Narrative + Education & Focus Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-[#526579] leading-relaxed">
            <div className="p-7 rounded-3xl bg-white border border-[#DCE8F5] shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-[#142D4E] flex items-center gap-2.5">
                <Target className="w-5 h-5 text-[#2563EB]" />
                <span>Engineering Philosophy</span>
              </h3>
              <p className="text-sm sm:text-base text-[#526579] leading-relaxed">
                I am currently pursuing my Bachelor of Engineering in Computer Science with a specialization in Artificial Intelligence at Chandigarh University. My focus lies at the intersection of modern machine learning models and dependable software systems.
              </p>
              <p className="text-sm sm:text-base text-[#526579] leading-relaxed">
                Rather than treating AI as an abstract theory, I enjoy building tools that solve tangible problems—whether that means designing an AI-driven automated advertisement engine like <strong className="text-[#142D4E]">AdGenix</strong>, dissecting the lower-level mechanics of computer processors in an <strong className="text-[#142D4E]">Instruction Set Simulator</strong>, or architecting interactive computing tools.
              </p>
              <p className="text-sm sm:text-base text-[#526579] leading-relaxed">
                My technical interests span <strong className="text-[#142D4E]">Artificial Intelligence, Machine Learning, Python, Natural Language Processing, Data Analytics, and Cloud Computing</strong>. I am continuously refining my skills through rigorous coursework, hands-on personal projects, and industry certifications like Microsoft Azure Fundamentals (AZ-900).
              </p>
            </div>

            {/* Career Objective Callout */}
            <div className="p-7 rounded-3xl bg-gradient-to-br from-blue-50/80 via-white to-blue-50/50 border border-[#DCE8F5] shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
                <Sparkles className="w-4 h-4" />
                <span>Career Objective & Internship Readiness</span>
              </div>
              <p className="text-sm sm:text-base text-[#142D4E] leading-relaxed font-medium">
                Seeking an internship or entry-level opportunity where I can contribute my knowledge of AI/ML, Python, and cloud technologies to active engineering projects, collaborate with experienced software developers, and deliver measurable real-world impact.
              </p>
            </div>
          </div>

          {/* Education & Facts Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-3xl bg-white border border-[#DCE8F5] shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-[#142D4E] flex items-center gap-2.5">
                <GraduationCap className="w-5 h-5 text-[#2563EB]" />
                <span>Academic Journey</span>
              </h3>

              {/* University Timeline item */}
              <div className="space-y-2 pb-6 border-b border-[#DCE8F5]">
                <div className="flex items-center justify-between text-xs font-mono text-[#2563EB]">
                  <span className="font-semibold">{PERSONAL_INFO.batch}</span>
                  <span className="text-[#526579]">UID: {PERSONAL_INFO.uid}</span>
                </div>
                <h4 className="text-base font-bold text-[#142D4E]">
                  {PERSONAL_INFO.degree}
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-[#526579]">
                  <MapPin className="w-3.5 h-3.5 text-[#5B9BEE]" />
                  <span>{PERSONAL_INFO.institution}, Gharuan, Punjab</span>
                </div>
                <p className="text-xs text-[#526579] pt-1 leading-relaxed">
                  Focusing on Artificial Intelligence, Machine Learning algorithms, Data Structures, and Computer Organization & Architecture.
                </p>
              </div>

              {/* Schooling item 1 */}
              <div className="space-y-1.5 pb-4 border-b border-[#DCE8F5]">
                <div className="flex items-center justify-between text-xs font-mono text-[#526579]">
                  <span>2024–2025</span>
                  <span className="font-medium text-[#142D4E]">Senior Secondary (Class XII)</span>
                </div>
                <h4 className="text-sm font-semibold text-[#142D4E]">
                  Satluj Public School
                </h4>
                <p className="text-xs text-[#526579]">
                  Foundational science and mathematics coursework supporting computational thinking.
                </p>
              </div>

              {/* Schooling item 2 */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono text-[#526579]">
                  <span>2022–2023</span>
                  <span className="font-medium text-[#142D4E]">Secondary (Class X)</span>
                </div>
                <h4 className="text-sm font-semibold text-[#142D4E]">
                  Satluj Public School
                </h4>
                <p className="text-xs text-[#526579]">
                  Core secondary academic curriculum with distinction in foundational sciences.
                </p>
              </div>
            </div>

            {/* Quick Details Box */}
            <div className="p-5 rounded-2xl bg-white border border-[#DCE8F5] shadow-sm grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-[#526579] block mb-1">Current Academic Year</span>
                <span className="text-[#142D4E] font-bold">2nd Year (Semester IV)</span>
              </div>
              <div>
                <span className="text-[#526579] block mb-1">Work Availability</span>
                <span className="text-[#2563EB] font-bold">Internships / Co-ops</span>
              </div>
              <div>
                <span className="text-[#526579] block mb-1">Primary Language</span>
                <span className="text-[#142D4E] font-bold">Python & C++</span>
              </div>
              <div>
                <span className="text-[#526579] block mb-1">Cloud Specialization</span>
                <span className="text-[#142D4E] font-bold">Microsoft Azure (AZ-900)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
