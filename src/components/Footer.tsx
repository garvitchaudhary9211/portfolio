import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Academic Work', href: '#academic' },
    { label: 'Resume', href: '#resume' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Converter', href: '#converter' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-[#DCE8F5] bg-[#F2F8FF] py-12 text-[#526579] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="space-y-1">
            <p className="text-base font-bold text-[#142D4E] tracking-tight">
              {PERSONAL_INFO.name}
            </p>
            <p className="text-xs text-[#526579]">
              B.E. Computer Science Engineering — Artificial Intelligence
            </p>
            <p className="text-xs text-[#526579]">
              {PERSONAL_INFO.institution} · Punjab, India
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white border border-[#DCE8F5] text-[#142D4E] hover:text-[#2563EB] hover:border-[#5B9BEE] transition-all shadow-xs"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white border border-[#DCE8F5] text-[#142D4E] hover:text-[#2563EB] hover:border-[#5B9BEE] transition-all shadow-xs"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl bg-white border border-[#DCE8F5] text-[#142D4E] hover:text-[#2563EB] hover:border-[#5B9BEE] transition-all shadow-xs"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white border border-[#DCE8F5] text-[#142D4E] hover:text-[#2563EB] hover:border-[#5B9BEE] transition-all shadow-xs flex items-center gap-1.5 ml-2 font-semibold"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-[#2563EB]" />
              <span className="hidden sm:inline text-[11px] font-mono">Top</span>
            </button>
          </div>
        </div>

        {/* Clean Nav Links */}
        <div className="pt-6 border-t border-[#DCE8F5] flex flex-wrap gap-x-6 gap-y-2 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#526579] hover:text-[#142D4E] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-[#DCE8F5] flex flex-col sm:flex-row items-center justify-between gap-4 text-[#526579]">
          <p>© 2026 Garvit Chaudhary. All rights reserved.</p>
          <p className="font-mono text-[11px]">Chandigarh University · UID: 25BAI10055</p>
        </div>
      </div>
    </footer>
  );
};
