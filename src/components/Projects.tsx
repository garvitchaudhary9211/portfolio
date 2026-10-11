import React, { useState } from 'react';
import { Github, ArrowUpRight, Sparkles, Cpu, Play, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export const Projects: React.FC = () => {
  // Interactive demonstrator state for AdGenix
  const [selectedAdPrompt, setSelectedAdPrompt] = useState(0);
  const adExamples = [
    {
      label: 'Eco-Friendly Coffee Brand',
      prompt: 'Sustainable single-origin roast for eco-conscious urban professionals',
      adCopy:
        'Elevate your morning ritual without compromising the earth. 100% fair-trade, ethically sourced single-origin beans roasted to perfection. Fuel your day sustainably.',
      channels: ['Instagram Reel', 'LinkedIn Sponsored', 'Newsletter Banner'],
    },
    {
      label: 'Tech Campus Hackathon',
      prompt: 'Annual 36-hour AI & systems engineering hackathon at Chandigarh University',
      adCopy:
        '36 hours. Boundless compute. One defining breakthrough. Assemble your team and build frontier AI solutions at Chandigarh University’s premier hackathon.',
      channels: ['Discord Spotlight', 'Campus Posters', 'Dev Community'],
    },
    {
      label: 'Local Artisan Bakery',
      prompt: 'Fresh sourdough and French pastries baked daily before sunrise',
      adCopy:
        'Crisp crust, naturally fermented dough, and warm Parisian croissants ready the moment you wake up. Handcrafted daily from ancient grains.',
      channels: ['Local Google Ad', 'Instagram Carousel', 'Geo-Targeted Banner'],
    },
  ];

  // Interactive demonstrator state for Instruction Set Simulator
  const [simStep, setSimStep] = useState(0);
  const simSteps = [
    {
      phase: '1. Instruction Fetch',
      pc: '0x0004',
      ir: 'LOAD R1, [0x1000]',
      r0: '0x002A (42)',
      r1: '0x0000 (0)',
      explanation: 'Processor fetches memory word at Program Counter (0x0004) into Instruction Register.',
    },
    {
      phase: '2. Decode & Memory Read',
      pc: '0x0008',
      ir: 'LOAD R1, [0x1000]',
      r0: '0x002A (42)',
      r1: '0x0017 (23)',
      explanation: 'Decodes opcode 0x0A (LOAD), computes effective address 0x1000, loads operand (23) into R1.',
    },
    {
      phase: '3. Execute (ALU Operation)',
      pc: '0x000C',
      ir: 'ADD R0, R1',
      r0: '0x0041 (65)',
      r1: '0x0017 (23)',
      explanation: 'ALU executes R0 = R0 + R1 (42 + 23 = 65). Zero flag cleared, Carry flag 0.',
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#F2F8FF] border-t border-[#DCE8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
            Featured Engineering
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142D4E] tracking-tight">
            Projects
          </h2>
          <p className="text-[#526579] text-base sm:text-lg leading-relaxed">
            Practical software implementations demonstrating applied AI and foundational computer systems architecture.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-12">
          {/* Project 1: AdGenix — AI Advertisement Generator */}
          <div className="rounded-3xl bg-white border border-[#DCE8F5] shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10 items-center">
              {/* Left Column: Metadata & Narrative */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#2563EB] font-bold tracking-wider">
                    PROJECT 01
                  </span>
                  <span aria-hidden="true" className="text-[#DCE8F5]">·</span>
                  <span className="text-xs text-[#526579] font-medium">AI / Machine Learning</span>
                  <span aria-hidden="true" className="text-[#DCE8F5]">·</span>
                  <span className="text-xs text-amber-600 font-mono font-semibold bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                    In Active Development
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#142D4E] tracking-tight">
                    {PROJECTS[0].title}
                  </h3>
                  <p className="text-base font-semibold text-[#2563EB]">
                    {PROJECTS[0].tagline}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#526579] leading-relaxed">
                  {PROJECTS[0].description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 pt-2">
                  {PROJECTS[0].highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#526579]">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="pt-3 flex flex-wrap gap-2">
                  {PROJECTS[0].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono font-medium text-[#142D4E] bg-[#F2F8FF] border border-[#DCE8F5] rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Status notice */}
                <div className="pt-4 flex items-center gap-3 text-xs text-[#526579] border-t border-[#DCE8F5]">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span>Coursework project actively under development. Code and demos will be posted upon release.</span>
                </div>
              </div>

              {/* Right Column: Interactive Pipeline Simulation Visual */}
              <div className="lg:col-span-6">
                <div className="p-6 rounded-2xl bg-[#F8FBFF] border border-[#DCE8F5] space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-[#DCE8F5]">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#2563EB]" />
                      <span className="text-xs font-mono font-bold text-[#142D4E] uppercase tracking-wide">
                        AdGenix Pipeline Architecture
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#526579]">Prompt Adaptation</span>
                  </div>

                  {/* Selector Tabs */}
                  <div className="space-y-1.5">
                    <span className="text-xs font-semibold text-[#142D4E]">Select Input Prompt:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {adExamples.map((ex, idx) => (
                        <button
                          key={ex.label}
                          type="button"
                          onClick={() => setSelectedAdPrompt(idx)}
                          className={`px-3 py-2 rounded-xl text-xs font-medium text-left truncate transition-colors border ${
                            selectedAdPrompt === idx
                              ? 'bg-[#2563EB] text-white border-[#2563EB] font-semibold shadow-sm'
                              : 'bg-white text-[#526579] hover:text-[#142D4E] hover:bg-slate-50 border-[#DCE8F5]'
                          }`}
                        >
                          {ex.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Active Prompt Box */}
                  <div className="p-4 rounded-xl bg-white border border-[#DCE8F5] text-xs font-mono space-y-1 shadow-sm">
                    <span className="text-[10px] uppercase text-[#2563EB] tracking-wider font-sans font-bold block">
                      User Context Parameter
                    </span>
                    <p className="text-[#142D4E]">"{adExamples[selectedAdPrompt].prompt}"</p>
                  </div>

                  {/* Generated Output Box */}
                  <div className="p-4 rounded-xl bg-white border border-[#5B9BEE]/40 space-y-3 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-[#2563EB] uppercase tracking-wide">
                        Generated Ad Output
                      </span>
                      <span className="text-[10px] text-[#526579] font-mono">Pre-trained Model Synth</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#142D4E] leading-relaxed italic">
                      "{adExamples[selectedAdPrompt].adCopy}"
                    </p>
                    <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px] text-[#526579]">
                      <span className="font-medium text-[#142D4E]">Target channels:</span>
                      {adExamples[selectedAdPrompt].channels.map((ch) => (
                        <span key={ch} className="px-2 py-0.5 rounded-md bg-[#F2F8FF] text-[#142D4E] border border-[#DCE8F5] font-mono text-[10px]">
                          {ch}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2: Instruction Set Simulator */}
          <div className="rounded-3xl bg-white border border-[#DCE8F5] shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10 items-center">
              {/* Left Column: Metadata & Narrative */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#2563EB] font-bold tracking-wider">
                    PROJECT 02
                  </span>
                  <span aria-hidden="true" className="text-[#DCE8F5]">·</span>
                  <span className="text-xs text-[#526579] font-medium">Computer Organization & Architecture</span>
                  <span aria-hidden="true" className="text-[#DCE8F5]">·</span>
                  <span className="text-xs text-emerald-700 font-mono font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Open Source
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#142D4E] tracking-tight">
                    {PROJECTS[1].title}
                  </h3>
                  <p className="text-base font-semibold text-[#2563EB]">
                    {PROJECTS[1].tagline}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#526579] leading-relaxed">
                  {PROJECTS[1].description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 pt-2">
                  {PROJECTS[1].highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#526579]">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="pt-3 flex flex-wrap gap-2">
                  {PROJECTS[1].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono font-medium text-[#142D4E] bg-[#F2F8FF] border border-[#DCE8F5] rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Working Verified GitHub CTA */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href={PROJECTS[1].githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#2563EB] hover:bg-blue-700 rounded-xl transition-all shadow-md shadow-blue-500/20"
                  >
                    <Github className="w-4 h-4" />
                    <span>View on GitHub</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <span className="text-xs text-[#526579] font-mono">
                    garvitchaudhary9211/InstructionSetSimulator
                  </span>
                </div>
              </div>

              {/* Right Column: Register State & Decode Cycle Visualizer */}
              <div className="lg:col-span-6">
                <div className="p-6 rounded-2xl bg-[#F8FBFF] border border-[#DCE8F5] space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-[#DCE8F5]">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-[#2563EB]" />
                      <span className="text-xs font-mono font-bold text-[#142D4E] uppercase tracking-wide">
                        CPU Cycle Simulation
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSimStep((prev) => (prev + 1) % simSteps.length)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono font-semibold text-[#2563EB] bg-white hover:bg-blue-50 border border-[#DCE8F5] rounded-lg transition-colors shadow-sm"
                    >
                      <Play className="w-3 h-3 text-[#2563EB]" />
                      <span>Step Next Cycle</span>
                    </button>
                  </div>

                  {/* Register Bank State Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    <div className="p-3 rounded-xl bg-white border border-[#DCE8F5] shadow-sm">
                      <span className="text-[10px] text-[#526579] font-mono block">PC</span>
                      <span className="text-xs font-mono font-bold text-[#2563EB]">
                        {simSteps[simStep].pc}
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-[#DCE8F5] shadow-sm">
                      <span className="text-[10px] text-[#526579] font-mono block">IR</span>
                      <span className="text-xs font-mono font-bold text-amber-700 truncate block">
                        {simSteps[simStep].ir}
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-[#DCE8F5] shadow-sm">
                      <span className="text-[10px] text-[#526579] font-mono block">R0</span>
                      <span className="text-xs font-mono font-bold text-emerald-600">
                        {simSteps[simStep].r0}
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-[#DCE8F5] shadow-sm">
                      <span className="text-[10px] text-[#526579] font-mono block">R1</span>
                      <span className="text-xs font-mono font-bold text-[#5B9BEE]">
                        {simSteps[simStep].r1}
                      </span>
                    </div>
                  </div>

                  {/* Active Phase & Explanation */}
                  <div className="p-4 rounded-xl bg-white border border-[#DCE8F5] space-y-2 shadow-sm">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#142D4E]">
                        {simSteps[simStep].phase}
                      </span>
                      <span className="text-[11px] font-mono text-[#526579]">
                        Step {simStep + 1} of 3
                      </span>
                    </div>
                    <p className="text-xs text-[#526579] leading-relaxed font-mono">
                      {simSteps[simStep].explanation}
                    </p>
                  </div>

                  {/* Cycle Stepper Indicator */}
                  <div className="flex items-center gap-2">
                    {simSteps.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setSimStep(i)}
                        className={`h-2 rounded-full flex-1 transition-all ${
                          simStep === i ? 'bg-[#2563EB]' : 'bg-[#DCE8F5] hover:bg-blue-200'
                        }`}
                        aria-label={`Jump to step ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
