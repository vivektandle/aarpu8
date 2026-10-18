import React from 'react';
import { motion } from 'framer-motion';
import { PARTNERS_DATA } from '../../constants/companyData';

export default function PartnerMarquee() {
  // Double array for seamless loop
  const marqueePartners = [...PARTNERS_DATA, ...PARTNERS_DATA];

  return (
    <section className="py-12 bg-[#F7F7F7] border-y border-[#E2E2E2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#666666] font-bold">
          GLOBAL ALLIANCES & CERTIFIED EXTRUSION PARTNERS
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex">
        {/* Left & Right gradient masks for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F7F7F7] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F7F7F7] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
          className="flex items-center gap-6 md:gap-12 whitespace-nowrap py-1"
        >
          {marqueePartners.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white px-6 py-3 rounded-xl border border-[#E2E2E2] flex flex-col items-center justify-center min-w-[170px] hover:border-[#FF393B] shadow-2xs transition-colors group cursor-pointer"
            >
              <span className="font-display font-black text-base md:text-lg text-[#171717] tracking-tight group-hover:text-[#FF393B] transition-colors">
                {partner.logoText}
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#8A8A8A] uppercase font-semibold">
                {partner.logoSub}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
