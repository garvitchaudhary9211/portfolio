import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, Copy, Check, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedSubject = encodeURIComponent(
      subject.trim() ? subject : `Portfolio Inquiry from ${senderName || 'Recruiter / Engineer'}`
    );
    const bodyText = `Hello Garvit,\n\n${message}\n\nBest regards,\n${senderName || 'A visitor'}`;
    const encodedBody = encodeURIComponent(bodyText);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-[#DCE8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142D4E] tracking-tight">
            Contact
          </h2>
          <p className="text-[#526579] text-base sm:text-lg leading-relaxed">
            Interested in collaboration, internship opportunities, or discussing AI engineering? Reach out directly via email or professional profiles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Channels Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 sm:p-8 rounded-3xl bg-white border border-[#DCE8F5] shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-[#142D4E]">Direct Communication</h3>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-[#F8FBFF] border border-[#DCE8F5] space-y-2">
                <span className="text-xs text-[#526579] font-mono block">Primary Email</span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-semibold text-[#142D4E] hover:text-[#2563EB] transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-white border border-[#DCE8F5] text-[#526579] hover:text-[#142D4E] transition-colors shrink-0 shadow-xs"
                    title="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copiedEmail && (
                  <span className="text-[11px] text-emerald-700 font-mono font-medium block">
                    Copied to clipboard!
                  </span>
                )}
              </div>

              {/* Verified Profiles */}
              <div className="space-y-3">
                <span className="text-xs text-[#526579] font-mono block uppercase tracking-wider font-semibold">
                  Verified Online Profiles
                </span>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#F8FBFF] hover:bg-[#F2F8FF] border border-[#DCE8F5] hover:border-[#5B9BEE] transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-white border border-[#DCE8F5] text-[#142D4E] group-hover:text-[#2563EB] shadow-xs">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#142D4E]">GitHub</p>
                      <p className="text-[11px] text-[#526579] font-mono">garvitchaudhary9211</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#526579] group-hover:text-[#2563EB] transition-colors" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#F8FBFF] hover:bg-[#F2F8FF] border border-[#DCE8F5] hover:border-[#5B9BEE] transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-white border border-[#DCE8F5] text-[#2563EB] shadow-xs">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#142D4E]">LinkedIn</p>
                      <p className="text-[11px] text-[#526579] font-mono">Garvit Chaudhary</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#526579] group-hover:text-[#2563EB] transition-colors" />
                </a>
              </div>

              <div className="pt-2 border-t border-[#DCE8F5] text-xs text-[#526579]">
                <span>Location: Chandigarh University Campus, Mohali / Punjab, India</span>
              </div>
            </div>
          </div>

          {/* Honest Mailto Form Column */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-3xl bg-white border border-[#DCE8F5] shadow-sm space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[#142D4E]">Send a Message</h3>
                <p className="text-xs text-[#526579] mt-1">
                  Drafts an email directly to <code className="text-[#2563EB] font-mono font-semibold">{PERSONAL_INFO.email}</code> in your local email client.
                </p>
              </div>

              <form onSubmit={handleSendMail} className="space-y-4">
                <div>
                  <label htmlFor="sender-name" className="text-xs font-bold text-[#142D4E] block mb-1.5">
                    Your Name / Organization
                  </label>
                  <input
                    id="sender-name"
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Hiring Manager at Tech Corp"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DCE8F5] text-sm text-[#142D4E] placeholder-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" className="text-xs font-bold text-[#142D4E] block mb-1.5">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. AI Internship Opportunity / Collaboration"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DCE8F5] text-sm text-[#142D4E] placeholder-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contact-body" className="text-xs font-bold text-[#142D4E] block mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="contact-body"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your note or opportunity details here..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DCE8F5] text-sm text-[#142D4E] placeholder-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 resize-none"
                    required
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#2563EB] hover:bg-blue-700 active:scale-[0.98] transition-all shadow-md shadow-blue-500/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>Open Email Client & Send</span>
                  </button>

                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs text-[#526579] hover:text-[#2563EB] transition-colors font-medium"
                  >
                    Or open blank email directly →
                  </a>
                </div>

                <p className="text-[11px] text-[#526579] border-t border-[#DCE8F5] pt-3">
                  Honest notice: Handled purely via client-side mailto protocol. No third-party data tracking or simulated backend storage.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
