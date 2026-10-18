import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function ProductEnquiry({ productName, onOpenQuoteModal }) {
  return (
    <section className="bg-[#F7F7F7] border border-[#E2E2E2] rounded-2xl p-8 sm:p-12 text-center space-y-6 pt-4">
      <div className="space-y-2 max-w-2xl mx-auto">
        <span className="text-[11px] font-mono uppercase tracking-[0.2em] font-bold text-[#FF393B]">
          PROJECT CONSULTATION
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-[#171717] tracking-tight">
          ENQUIRE ABOUT THIS PRODUCT
        </h3>
        <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed">
          Talk to our technical team for custom CAD drawings, wind-load calculations and pricing for {productName}.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
        <button
          type="button"
          onClick={onOpenQuoteModal}
          className="btn-aarpu-primary text-xs py-2 px-5 font-display font-bold uppercase tracking-wider shadow-sm hover:scale-105 transition-transform cursor-pointer inline-flex items-center gap-2"
        >
          <span>Enquire Now</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </button>

        <Link
          to="/contact"
          className="px-7 py-3.5 bg-white hover:bg-[#F0F0F0] text-[#171717] border border-[#E2E2E2] hover:border-[#171717] text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center gap-2.5"
        >
          <MessageSquare className="w-4 h-4 text-[#666666]" />
          <span>Contact Aarpu</span>
        </Link>
      </div>
    </section>
  );
}
