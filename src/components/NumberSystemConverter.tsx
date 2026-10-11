import React, { useState } from 'react';
import { ArrowLeftRight, Copy, Check, AlertCircle, BookOpen, Calculator } from 'lucide-react';
import { BaseType, convertNumber, ConversionResult, getBaseName } from '../utils/numberConverter';

export const NumberSystemConverter: React.FC = () => {
  const [inputVal, setInputVal] = useState<string>('101101');
  const [sourceBase, setSourceBase] = useState<BaseType>(2);
  const [targetBase, setTargetBase] = useState<BaseType>(10);
  const [result, setResult] = useState<ConversionResult>(() =>
    convertNumber('101101', 2, 10)
  );
  const [copied, setCopied] = useState<boolean>(false);
  const [educationalTab, setEducationalTab] = useState<BaseType>(2);

  const runConversion = (val: string, src: BaseType, tgt: BaseType) => {
    const res = convertNumber(val, src, tgt);
    setResult(res);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextVal = e.target.value;
    setInputVal(nextVal);
    runConversion(nextVal, sourceBase, targetBase);
  };

  const handleSourceBaseChange = (base: BaseType) => {
    setSourceBase(base);
    runConversion(inputVal, base, targetBase);
  };

  const handleTargetBaseChange = (base: BaseType) => {
    setTargetBase(base);
    runConversion(inputVal, sourceBase, base);
  };

  const handleSwapBases = () => {
    const newSrc = targetBase;
    const newTgt = sourceBase;
    setSourceBase(newSrc);
    setTargetBase(newTgt);
    const nextInput = result.success ? result.result : inputVal;
    setInputVal(nextInput);
    runConversion(nextInput, newSrc, newTgt);
  };

  const handleClear = () => {
    setInputVal('');
    setResult({
      success: false,
      result: '',
      error: 'Please enter a number to convert.',
      sourceBase,
      targetBase,
    });
  };

  const handleCopyResult = async () => {
    if (!result.success || !result.result) return;
    try {
      await navigator.clipboard.writeText(result.result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = result.result;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleApplyTestCase = (val: string, src: BaseType, tgt: BaseType) => {
    setInputVal(val);
    setSourceBase(src);
    setTargetBase(tgt);
    runConversion(val, src, tgt);
  };

  const testCases = [
    { label: 'Binary 101101 → Decimal 45', val: '101101', src: 2 as BaseType, tgt: 10 as BaseType, expected: '45' },
    { label: 'Decimal 255 → Binary 11111111', val: '255', src: 10 as BaseType, tgt: 2 as BaseType, expected: '11111111' },
    { label: 'Hex FF → Decimal 255', val: 'FF', src: 16 as BaseType, tgt: 10 as BaseType, expected: '255' },
    { label: 'Octal 77 → Decimal 63', val: '77', src: 8 as BaseType, tgt: 10 as BaseType, expected: '63' },
  ];

  const baseOptions: { base: BaseType; name: string; prefix: string; radix: string }[] = [
    { base: 2, name: 'Binary', prefix: '0b', radix: 'Base 2' },
    { base: 8, name: 'Octal', prefix: '0o', radix: 'Base 8' },
    { base: 10, name: 'Decimal', prefix: '', radix: 'Base 10' },
    { base: 16, name: 'Hexadecimal', prefix: '0x', radix: 'Base 16' },
  ];

  return (
    <section id="converter" className="py-20 md:py-28 bg-[#F2F8FF] border-t border-[#DCE8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
            Interactive Engineering Utility
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142D4E] tracking-tight">
            Number System Converter
          </h2>
          <p className="text-[#526579] text-base sm:text-lg leading-relaxed">
            Full-precision integer converter supporting arbitrary precision (BigInt), negative numbers, real-time input validation, and architectural radix explanations.
          </p>
        </div>

        {/* Main Grid: Converter Tool + Educational Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Converter Tool Area */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#DCE8F5] shadow-sm space-y-6">
              {/* Base Selectors Row */}
              <div className="grid grid-cols-1 sm:grid-cols-11 gap-3 items-center">
                {/* Source Base */}
                <div className="sm:col-span-5 space-y-1.5">
                  <label className="text-xs font-bold text-[#142D4E] block">
                    Source Base:
                  </label>
                  <div className="grid grid-cols-2 gap-1.5 p-1.5 bg-[#F2F8FF] rounded-2xl border border-[#DCE8F5]">
                    {baseOptions.map((opt) => (
                      <button
                        key={opt.base}
                        type="button"
                        onClick={() => handleSourceBaseChange(opt.base)}
                        className={`px-2.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                          sourceBase === opt.base
                            ? 'bg-[#2563EB] text-white shadow-sm'
                            : 'text-[#526579] hover:text-[#142D4E] hover:bg-white'
                        }`}
                      >
                        {opt.name} ({opt.base})
                      </button>
                    ))}
                  </div>
                </div>

                {/* Swap Button */}
                <div className="sm:col-span-1 flex justify-center pt-5 sm:pt-4">
                  <button
                    type="button"
                    onClick={handleSwapBases}
                    className="p-2.5 rounded-xl bg-[#F2F8FF] hover:bg-blue-100 text-[#2563EB] border border-[#DCE8F5] transition-colors shadow-xs"
                    title="Swap source and target bases"
                    aria-label="Swap bases"
                  >
                    <ArrowLeftRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Target Base */}
                <div className="sm:col-span-5 space-y-1.5">
                  <label className="text-xs font-bold text-[#142D4E] block">
                    Target Base:
                  </label>
                  <div className="grid grid-cols-2 gap-1.5 p-1.5 bg-[#F2F8FF] rounded-2xl border border-[#DCE8F5]">
                    {baseOptions.map((opt) => (
                      <button
                        key={opt.base}
                        type="button"
                        onClick={() => handleTargetBaseChange(opt.base)}
                        className={`px-2.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                          targetBase === opt.base
                            ? 'bg-[#2563EB] text-white shadow-sm'
                            : 'text-[#526579] hover:text-[#142D4E] hover:bg-white'
                        }`}
                      >
                        {opt.name} ({opt.base})
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Input Field */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <label htmlFor="number-input" className="font-bold text-[#142D4E]">
                    Enter {getBaseName(sourceBase)} Number:
                  </label>
                  <span className="text-[#526579] font-mono">
                    Integer only · Supports negative sign (-)
                  </span>
                </div>
                <div className="relative">
                  <input
                    id="number-input"
                    type="text"
                    value={inputVal}
                    onChange={handleInputChange}
                    placeholder={`e.g. ${sourceBase === 2 ? '101101' : sourceBase === 8 ? '77' : sourceBase === 10 ? '255' : 'FF'}`}
                    className={`w-full px-4 py-3.5 rounded-xl bg-white border font-mono text-base text-[#142D4E] placeholder-slate-400 focus:outline-none transition-all ${
                      result.error && inputVal.trim()
                        ? 'border-rose-400 focus:ring-2 focus:ring-rose-200'
                        : 'border-[#DCE8F5] focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100'
                    }`}
                  />
                  {inputVal && (
                    <button
                      type="button"
                      onClick={handleClear}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-[#526579] hover:text-[#142D4E] px-2.5 py-1 rounded-lg bg-[#F2F8FF] border border-[#DCE8F5]"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Validation error feedback */}
                {result.error && (
                  <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-2.5 text-xs text-rose-700 font-medium">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-600 mt-0.5" />
                    <span>{result.error}</span>
                  </div>
                )}
              </div>

              {/* Conversion Controls Strip */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => runConversion(inputVal, sourceBase, targetBase)}
                  className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#2563EB] hover:bg-blue-700 active:scale-[0.98] transition-all shadow-md shadow-blue-500/25 inline-flex items-center gap-2"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Convert</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleClear}
                    className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-[#526579] hover:text-[#142D4E] bg-[#F2F8FF] hover:bg-slate-100 border border-[#DCE8F5] transition-colors"
                  >
                    Clear All
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyResult}
                    disabled={!result.success}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition-all ${
                      result.success
                        ? copied
                          ? 'bg-emerald-600 text-white'
                          : 'bg-white hover:bg-slate-50 text-[#142D4E] border border-[#DCE8F5] shadow-xs'
                        : 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-100" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#2563EB]" />
                        <span>Copy Result</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Result Display Box */}
              <div className="p-6 rounded-2xl bg-[#F8FBFF] border border-[#DCE8F5] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-bold">
                    Conversion Result ({getBaseName(targetBase)})
                  </span>
                  {result.success && (
                    <span className="text-xs font-mono text-emerald-700 font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      Valid Computation
                    </span>
                  )}
                </div>

                <div className="min-h-[56px] flex items-center justify-between p-4 rounded-xl bg-white border border-[#DCE8F5] shadow-xs">
                  <span className="font-mono text-lg sm:text-2xl font-extrabold text-[#142D4E] break-all tracking-wider">
                    {result.success ? result.result : '—'}
                  </span>

                  {result.success && (
                    <button
                      type="button"
                      onClick={handleCopyResult}
                      className="text-xs text-[#526579] hover:text-[#2563EB] p-2 rounded-lg hover:bg-[#F2F8FF] transition-colors shrink-0 ml-3"
                      title="Copy result string"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  )}
                </div>

                {/* Additional Math Context */}
                {result.success && (
                  <div className="pt-2 border-t border-[#DCE8F5] flex flex-wrap items-center justify-between gap-3 text-xs text-[#526579] font-mono">
                    <div>
                      <span>Equivalent Decimal (Base 10): </span>
                      <strong className="text-[#142D4E] font-bold">{result.decimalValue}</strong>
                    </div>
                    <div>
                      <span>Sign: </span>
                      <strong className="text-[#142D4E] font-bold">
                        {result.isNegative ? 'Negative (-)' : 'Positive (+)'}
                      </strong>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Verification Presets */}
              <div className="pt-2 space-y-2.5">
                <div className="flex items-center justify-between text-xs text-[#526579]">
                  <span className="font-bold text-[#142D4E]">Mandatory Verification Test Cases:</span>
                  <span className="text-[11px] font-mono text-[#526579]">1-Click Test</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {testCases.map((tc) => (
                    <button
                      key={tc.label}
                      type="button"
                      onClick={() => handleApplyTestCase(tc.val, tc.src, tc.tgt)}
                      className="p-3 rounded-xl text-left text-xs bg-white hover:bg-[#F2F8FF] border border-[#DCE8F5] hover:border-[#5B9BEE] transition-all group flex items-center justify-between shadow-xs"
                    >
                      <span className="font-mono text-[#142D4E] font-medium group-hover:text-[#2563EB] transition-colors">
                        {tc.label}
                      </span>
                      <span className="text-[11px] text-[#2563EB] font-mono font-bold">Test →</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Educational Radix Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#DCE8F5] shadow-sm space-y-6">
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-5 h-5 text-[#2563EB]" />
                <h3 className="text-lg font-bold text-[#142D4E] tracking-tight">
                  Educational Radix Guide
                </h3>
              </div>

              {/* Educational Base Tabs */}
              <div className="grid grid-cols-4 gap-1 p-1.5 bg-[#F2F8FF] rounded-2xl border border-[#DCE8F5] text-xs font-semibold">
                {baseOptions.map((opt) => (
                  <button
                    key={opt.base}
                    type="button"
                    onClick={() => setEducationalTab(opt.base)}
                    className={`py-2 rounded-xl transition-all text-center ${
                      educationalTab === opt.base
                        ? 'bg-[#2563EB] text-white shadow-sm'
                        : 'text-[#526579] hover:text-[#142D4E]'
                    }`}
                  >
                    {opt.radix}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {educationalTab === 2 && (
                <div className="space-y-3 text-xs text-[#526579] leading-relaxed animate-in fade-in duration-150">
                  <h4 className="text-sm font-bold text-[#142D4E]">Binary System (Base 2)</h4>
                  <p>
                    The foundational language of digital electronics and Von Neumann computer architecture. Built on two distinct states: <code className="text-[#2563EB] font-mono font-bold">0</code> and <code className="text-[#2563EB] font-mono font-bold">1</code>, corresponding to low and high voltages.
                  </p>
                  <div className="p-3.5 rounded-xl bg-[#F8FBFF] border border-[#DCE8F5] font-mono text-[11px] space-y-1">
                    <p className="text-[#526579] font-medium">Positional Place Weights:</p>
                    <p className="text-[#142D4E]">2³ (8), 2² (4), 2¹ (2), 2⁰ (1)</p>
                    <p className="text-[#2563EB] font-bold pt-1">Example: 101101₂ = 32 + 8 + 4 + 1 = 45₁₀</p>
                  </div>
                </div>
              )}

              {educationalTab === 8 && (
                <div className="space-y-3 text-xs text-[#526579] leading-relaxed animate-in fade-in duration-150">
                  <h4 className="text-sm font-bold text-[#142D4E]">Octal System (Base 8)</h4>
                  <p>
                    Uses 8 symbols (<code className="text-[#2563EB] font-mono font-bold">0–7</code>). Historically popular in computing because exactly 3 binary bits (<code className="text-[#142D4E]">2³ = 8</code>) map to one octal digit, offering compact notation for file permissions (e.g. Unix chmod 755).
                  </p>
                  <div className="p-3.5 rounded-xl bg-[#F8FBFF] border border-[#DCE8F5] font-mono text-[11px] space-y-1">
                    <p className="text-[#526579] font-medium">Positional Place Weights:</p>
                    <p className="text-[#142D4E]">8² (64), 8¹ (8), 8⁰ (1)</p>
                    <p className="text-[#2563EB] font-bold pt-1">Example: 77₈ = (7 × 8) + (7 × 1) = 56 + 7 = 63₁₀</p>
                  </div>
                </div>
              )}

              {educationalTab === 10 && (
                <div className="space-y-3 text-xs text-[#526579] leading-relaxed animate-in fade-in duration-150">
                  <h4 className="text-sm font-bold text-[#142D4E]">Decimal System (Base 10)</h4>
                  <p>
                    The standard human numeral system using 10 symbols (<code className="text-[#2563EB] font-mono font-bold">0–9</code>). Positional notation where each place value increases by a factor of 10 from right to left.
                  </p>
                  <div className="p-3.5 rounded-xl bg-[#F8FBFF] border border-[#DCE8F5] font-mono text-[11px] space-y-1">
                    <p className="text-[#526579] font-medium">Positional Place Weights:</p>
                    <p className="text-[#142D4E]">10³ (1000), 10² (100), 10¹ (10), 10⁰ (1)</p>
                    <p className="text-[#2563EB] font-bold pt-1">Example: 255₁₀ = 11111111₂ = FF₁₆</p>
                  </div>
                </div>
              )}

              {educationalTab === 16 && (
                <div className="space-y-3 text-xs text-[#526579] leading-relaxed animate-in fade-in duration-150">
                  <h4 className="text-sm font-bold text-[#142D4E]">Hexadecimal System (Base 16)</h4>
                  <p>
                    Employs 16 symbols: <code className="text-[#2563EB] font-mono font-bold">0–9</code> and <code className="text-[#2563EB] font-mono font-bold">A–F</code> (where A=10, B=11, C=12, D=13, E=14, F=15). Extensively used for memory addressing, machine code offsets, and byte representations because 1 byte equals exactly 2 hex digits.
                  </p>
                  <div className="p-3.5 rounded-xl bg-[#F8FBFF] border border-[#DCE8F5] font-mono text-[11px] space-y-1">
                    <p className="text-[#526579] font-medium">Positional Place Weights:</p>
                    <p className="text-[#142D4E]">16² (256), 16¹ (16), 16⁰ (1)</p>
                    <p className="text-[#2563EB] font-bold pt-1">Example: FF₁₆ = (15 × 16) + (15 × 1) = 240 + 15 = 255₁₀</p>
                  </div>
                </div>
              )}

              {/* Equivalence Summary Table */}
              <div className="pt-4 border-t border-[#DCE8F5] space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#142D4E] block">
                  Quick Equivalence Reference
                </span>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono">
                    <thead>
                      <tr className="border-b border-[#DCE8F5] text-[#526579]">
                        <th className="py-1 px-1.5 font-semibold">Decimal</th>
                        <th className="py-1 px-1.5 font-semibold">Binary</th>
                        <th className="py-1 px-1.5 font-semibold">Octal</th>
                        <th className="py-1 px-1.5 font-semibold">Hex</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#DCE8F5]/80 text-[#142D4E]">
                      <tr>
                        <td className="py-1.5 px-1.5">0</td>
                        <td className="py-1.5 px-1.5">0000</td>
                        <td className="py-1.5 px-1.5">0</td>
                        <td className="py-1.5 px-1.5">0</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-1.5">7</td>
                        <td className="py-1.5 px-1.5">0111</td>
                        <td className="py-1.5 px-1.5">7</td>
                        <td className="py-1.5 px-1.5">7</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-1.5">15</td>
                        <td className="py-1.5 px-1.5">1111</td>
                        <td className="py-1.5 px-1.5">17</td>
                        <td className="py-1.5 px-1.5">F</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-1.5">45</td>
                        <td className="py-1.5 px-1.5">101101</td>
                        <td className="py-1.5 px-1.5">55</td>
                        <td className="py-1.5 px-1.5">2D</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-1.5">63</td>
                        <td className="py-1.5 px-1.5">111111</td>
                        <td className="py-1.5 px-1.5">77</td>
                        <td className="py-1.5 px-1.5">3F</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-1.5">255</td>
                        <td className="py-1.5 px-1.5">11111111</td>
                        <td className="py-1.5 px-1.5">377</td>
                        <td className="py-1.5 px-1.5">FF</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
