import React from 'react';
import { Code2, Cpu, Cloud, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-[#2563EB]" />,
  Cpu: <Cpu className="w-5 h-5 text-[#5B9BEE]" />,
  Cloud: <Cloud className="w-5 h-5 text-[#2563EB]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#5B9BEE]" />,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-white border-t border-[#DCE8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
            Technical Competencies
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142D4E] tracking-tight">
            Skills & Capabilities
          </h2>
          <p className="text-[#526579] text-base sm:text-lg leading-relaxed">
            Proficiencies built through engineering coursework at Chandigarh University, independent software projects, and hands-on laboratory experimentation.
          </p>
        </div>

        {/* 4 Grouped Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.title}
              className="p-8 rounded-3xl bg-white border border-[#DCE8F5] shadow-sm hover:shadow-md hover:border-[#5B9BEE]/60 transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-2xl bg-[#F2F8FF] border border-[#DCE8F5]">
                      {iconMap[cat.icon]}
                    </div>
                    <h3 className="text-lg font-bold text-[#142D4E] tracking-tight">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#5B9BEE]">0{idx + 1}</span>
                </div>

                <p className="text-sm text-[#526579] leading-relaxed">
                  {cat.description}
                </p>
              </div>

              {/* Skills Items - Clean unboxed styling */}
              <div className="pt-6 mt-6 border-t border-[#DCE8F5]">
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 text-xs font-semibold text-[#142D4E] bg-[#F2F8FF] hover:bg-blue-100/70 border border-[#DCE8F5] rounded-xl transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Competency Foundation Note */}
        <div className="mt-12 p-5 rounded-2xl bg-[#F2F8FF] border border-[#DCE8F5] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#526579]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
            <span className="font-medium">Curriculum and project validated proficiencies without artificial rating percentages.</span>
          </div>
          <span className="font-mono text-[#142D4E] font-medium">Chandigarh University · Dept. of Computer Science & AI</span>
        </div>
      </div>
    </section>
  );
};
