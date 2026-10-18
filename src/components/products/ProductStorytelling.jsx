import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, ChevronRight, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ProductStorytelling({ product }) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  if (!product || !product.storySteps) return null;

  const steps = product.storySteps;
  const currentStep = steps[activeStepIndex];

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl border border-black/10 shadow-xl space-y-8 text-[#1A1A1A]">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-black/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-widest mb-1 font-semibold">
            <Sparkles className="w-4 h-4 text-[#1A1A1A]" />
            <span>SEE HOW IT WORKS &bull; {product.name}</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-bold font-display text-[#1A1A1A]">
            Sequential Operation Storyboard
          </h3>
        </div>

        <span className="text-xs font-mono bg-slate-100 text-slate-700 px-3.5 py-1.5 rounded-full border border-black/10 font-bold">
          STEP 0{activeStepIndex + 1} OF 0{steps.length}
        </span>
      </div>

      {/* Interactive Progress Bar */}
      <div className="space-y-2">
        <div className="grid grid-cols-6 gap-2">
          {steps.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStepIndex(idx)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                idx === activeStepIndex
                  ? 'bg-[#1A1A1A] ring-2 ring-[#1A1A1A]/30'
                  : idx < activeStepIndex
                  ? 'bg-slate-400'
                  : 'bg-slate-200 hover:bg-slate-300'
              }`}
            />
          ))}
        </div>

        {/* Step Button Labels */}
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 pt-2">
          {steps.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStepIndex(idx)}
              className={`text-[10px] font-mono text-left uppercase py-1 px-2 rounded-lg transition-colors cursor-pointer ${
                idx === activeStepIndex
                  ? 'bg-[#1A1A1A] text-white font-bold'
                  : 'text-slate-600 hover:text-black hover:bg-slate-100'
              }`}
            >
              <span className="opacity-60 block text-[9px]">{s.step}</span>
              <span className="truncate block font-semibold">{s.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Active Step Showcase Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStepIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-slate-50 p-6 md:p-10 rounded-2xl border border-black/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Step Number & Title */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-4xl font-mono font-bold text-slate-300 block">
              {currentStep.step}
            </span>

            <h4 className="text-2xl sm:text-3xl font-bold font-display text-[#1A1A1A]">
              {currentStep.title}
            </h4>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-sans">
              {currentStep.desc}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                className="px-4 py-2 rounded-xl border border-black/10 bg-white text-xs font-mono disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-100 cursor-pointer font-bold"
              >
                PREVIOUS
              </button>

              <button
                disabled={activeStepIndex === steps.length - 1}
                onClick={() => setActiveStepIndex((prev) => Math.min(steps.length - 1, prev + 1))}
                className="px-5 py-2 rounded-xl bg-[#1A1A1A] text-white text-xs font-mono disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black cursor-pointer font-bold flex items-center gap-2"
              >
                <span>NEXT STEP</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Visual Step Illustration Box */}
          <div className="lg:col-span-7 bg-[#111318] p-8 rounded-2xl border border-black/10 text-white min-h-[220px] flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-mono text-amber-300 font-bold uppercase">
                ENGINEERING ANIMATION SEQUENCE &bull; STEP {currentStep.step}
              </span>
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>

            <div className="py-6 text-center space-y-2">
              <span className="text-lg font-mono text-white font-bold block">
                {currentStep.title}
              </span>
              <p className="text-xs font-sans text-slate-300 max-w-md mx-auto">
                {currentStep.desc}
              </p>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-white/10">
              <span>AARPU SYSTEM ARCHITECTURE</span>
              <span>PASSED ISO 9001 TEST</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

    </div>
  );
}
