import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ContactCTA({ onOpenQuoteModal }) {
  return (
    <section className="w-full py-6 sm:py-8 md:py-9 px-3 sm:px-4 md:px-5 bg-white border-t border-[#E2E2E2] relative overflow-hidden text-[#171717]">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-4xl mx-auto text-center relative z-10 space-y-2.5 sm:space-y-3"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-light tracking-tight text-[#171717] leading-tight w-full">
          Ready to Elevate Your Architectural Vision<span className="question-mark-standard">?</span>
        </h2>

        <p className="text-[#5F5F5F] text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-sans text-justify sm:text-center">
          Connect with Aarpu system engineers for custom CAD profiles, thermal calculation data and personalized technical consultations.
        </p>

        <div className="flex items-center justify-center pt-1">
          <button
            type="button"
            onClick={onOpenQuoteModal}
            className="btn-aarpu-primary text-xs py-2 px-5 font-display font-bold uppercase tracking-wider shadow-xs hover:scale-105 transition-transform cursor-pointer inline-flex items-center gap-2"
          >
            <span>Request Specification Package</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
