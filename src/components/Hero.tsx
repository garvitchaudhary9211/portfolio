import React, { useState } from 'react';
import { ArrowRight, FileText, Binary, Github, Linkedin, Mail, Camera, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [photoUrl, setPhotoUrl] = useState<string | null>('/images/profile.jpg');
  const [imageError, setImageError] = useState(false);

  const handleCustomPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPhotoUrl(url);
      setImageError(false);
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-[#F8FBFF] to-white">
      {/* Delicate background decorative glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#E8F3FF] rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#F0F6FE] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Academic Kicker */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2F8FF] border border-[#DCE8F5] text-xs font-medium text-[#526579]">
              <span className="text-[#2563EB] font-semibold">{PERSONAL_INFO.institution}</span>
              <span aria-hidden="true">·</span>
              <span>B.E. CSE Artificial Intelligence</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono text-[#142D4E] font-semibold">UID: {PERSONAL_INFO.uid}</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#142D4E] leading-[1.1] text-balance">
                Building Intelligent Solutions with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#5B9BEE] to-[#3B82F6]">AI</span>.
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-[#142D4E]/90">
                Hi, I'm <span className="text-[#2563EB]">{PERSONAL_INFO.name}</span>.
              </p>
            </div>

            {/* Concise Bio */}
            <p className="text-base sm:text-lg text-[#526579] leading-relaxed max-w-2xl">
              Second-year Artificial Intelligence student at Chandigarh University focused on machine learning, automation, and computer architecture. Passionate about engineering practical software that turns advanced models into dependable real-world applications.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#2563EB] hover:bg-blue-700 active:scale-[0.98] rounded-xl transition-all shadow-md shadow-blue-500/25"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#resume"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#142D4E] bg-white hover:bg-[#F2F8FF] border border-[#DCE8F5] rounded-xl transition-all shadow-sm hover:border-[#5B9BEE]"
              >
                <FileText className="w-4 h-4 text-[#2563EB]" />
                <span>View Resume</span>
              </a>

              <a
                href="#converter"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-[#526579] hover:text-[#2563EB] bg-[#F2F8FF] hover:bg-blue-100/60 border border-[#DCE8F5] rounded-xl transition-all"
              >
                <Binary className="w-4 h-4 text-[#5B9BEE]" />
                <span>Number Converter</span>
              </a>
            </div>

            {/* Social and quick links */}
            <div className="pt-4 flex items-center gap-4 text-[#526579]">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#526579]">Connect:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white border border-[#DCE8F5] text-[#142D4E] hover:text-[#2563EB] hover:border-[#5B9BEE] hover:bg-[#F2F8FF] transition-all shadow-sm"
                aria-label="GitHub profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white border border-[#DCE8F5] text-[#142D4E] hover:text-[#2563EB] hover:border-[#5B9BEE] hover:bg-[#F2F8FF] transition-all shadow-sm"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-white border border-[#DCE8F5] text-[#142D4E] hover:text-[#2563EB] hover:border-[#5B9BEE] hover:bg-[#F2F8FF] transition-all shadow-sm"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <span className="text-xs text-[#526579] font-mono hidden sm:inline">
                {PERSONAL_INFO.email}
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Container / Profile Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer frame styling */}
              <div className="relative p-3.5 rounded-3xl bg-white border border-[#DCE8F5] shadow-xl shadow-blue-900/5">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-b from-[#F2F8FF] to-[#E8F3FF] flex flex-col items-center justify-center p-6 border border-[#DCE8F5]">
                  {/* Photo display or Monogram Avatar */}
                  {!imageError && photoUrl ? (
                    <img
                      src={photoUrl}
                      alt={PERSONAL_INFO.name}
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-center rounded-xl"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-between py-6 px-4 text-center">
                      {/* Top badge */}
                      <div className="flex items-center gap-2 text-xs font-mono text-[#2563EB] bg-white border border-[#DCE8F5] px-3.5 py-1 rounded-full shadow-sm">
                        <span>STUDENT ID: {PERSONAL_INFO.uid}</span>
                      </div>

                      {/* Monogram emblem */}
                      <div className="relative my-4">
                        <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[#5B9BEE] to-[#2563EB] flex items-center justify-center shadow-lg shadow-blue-500/25 ring-4 ring-blue-100">
                          <span className="text-3xl font-extrabold tracking-tight text-white font-mono">
                            GC
                          </span>
                        </div>
                        <div className="absolute -bottom-2 -right-2 p-2 rounded-xl bg-white border border-[#DCE8F5] text-[#2563EB] shadow-sm">
                          <Binary className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Profile info caption */}
                      <div className="space-y-1">
                        <p className="text-lg font-bold text-[#142D4E] tracking-tight">{PERSONAL_INFO.name}</p>
                        <p className="text-xs font-medium text-[#526579]">Computer Science Engineering — AI</p>
                        <p className="text-xs text-[#526579]/80">Chandigarh University · 2025–2029</p>
                      </div>

                      {/* Photo preview affordance */}
                      <div className="pt-2 w-full">
                        <label
                          htmlFor="avatar-upload"
                          className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#142D4E] bg-white hover:bg-slate-50 border border-[#DCE8F5] rounded-xl cursor-pointer transition-colors shadow-sm"
                        >
                          <Camera className="w-3.5 h-3.5 text-[#2563EB]" />
                          <span>Preview Your Photo</span>
                        </label>
                        <input
                          id="avatar-upload"
                          type="file"
                          accept="image/*"
                          onChange={handleCustomPhoto}
                          className="hidden"
                        />
                        <p className="text-[10px] text-[#526579] mt-1.5 font-mono">
                          Or add photo to <code>public/images/profile.jpg</code>
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Corner Accent Decor */}
                  <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-[#5B9BEE]" />
                  <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-[#5B9BEE]" />
                  <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-[#5B9BEE]" />
                  <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-[#5B9BEE]" />
                </div>

                {/* Sub-card summary footer */}
                <div className="mt-3 px-2 py-2 flex items-center justify-between text-xs text-[#526579] border-t border-[#DCE8F5]">
                  <span className="font-mono font-medium">B.Tech AI · Year 2</span>
                  <span className="text-[#2563EB] font-semibold">Open to Internships</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width KPI / Highlights strip below the hero split */}
        <div className="mt-16 pt-8 border-t border-[#DCE8F5] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 rounded-2xl bg-white border border-[#DCE8F5] shadow-sm">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#142D4E] font-mono">B.E. CSE</p>
            <p className="text-xs text-[#526579] mt-1 font-medium">Artificial Intelligence Focus</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-[#DCE8F5] shadow-sm">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#142D4E] font-mono">4 Bases</p>
            <p className="text-xs text-[#526579] mt-1 font-medium">Integrated Number Converter</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-[#DCE8F5] shadow-sm">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#142D4E] font-mono">COA & AI</p>
            <p className="text-xs text-[#526579] mt-1 font-medium">Practical Coursework & Labs</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-[#DCE8F5] shadow-sm">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#142D4E] font-mono">AZ-900</p>
            <p className="text-xs text-[#526579] mt-1 font-medium">Microsoft Azure Certified</p>
          </div>
        </div>
      </div>
    </section>
  );
};
