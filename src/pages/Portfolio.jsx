import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import SEO from '../components/common/SEO';
import Hero, { PORTFOLIO_SLIDES } from '../components/home/Hero';
import BeforeAfterSlider from '../components/common/BeforeAfterSlider';
import ContactCTA from '../components/home/ContactCTA';
import { PROJECTS_DATA } from '../constants/projectsData';

export default function Portfolio({ onOpenQuoteModal }) {
  return (
    <>
      <SEO
        title="Architectural Portfolio | Aarpu Minimal Glass Projects"
        description="View completed luxury villas, Monaco coast estates, penthouses and hotels featuring Aarpu minimal glass doors and invisible frames."
      />

      <main className="pb-16 bg-[#F2F2F2] min-h-screen text-[#1A1A1A] overflow-x-hidden">
        {/* Same Hero Slider with Masterpieces in Glass & Aluminium Text */}
        <Hero onOpenQuoteModal={onOpenQuoteModal} slides={PORTFOLIO_SLIDES} />

        <div className="pt-8 sm:pt-10 w-full max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-2 px-2">
            {/* <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-[#1A1A1A] tracking-tight">
              Masterpieces in Glass &amp; Aluminium
            </h1> */}
            <p className="text-[#5F5F5F] text-sm sm:text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed">
              Explore our landmark residential estates, hotels and corporate skyscrapers across 34 countries.
            </p>
          </div>

          {/* Project Cards Grid with Before/After Slider */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8 mb-8 sm:mb-10">
            {PROJECTS_DATA.map((proj, index) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group bg-white rounded-2xl overflow-hidden border border-black/10 hover:border-[#FF393B] shadow-xs hover:shadow-md space-y-3.5 p-4 sm:p-5 flex flex-col justify-between h-full transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Before / After Interactive Slider Component */}
                <BeforeAfterSlider
                  beforeImage={proj.imageBefore}
                  afterImage={proj.imageAfter}
                  beforeLabel="Conventional Structure"
                  afterLabel="Aarpu Minimal Frame"
                  aspectClassName="aspect-[16/9.5] sm:aspect-[16/9.2]"
                />

                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-1.5">
                    <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 font-semibold uppercase tracking-widest">
                      {proj.category} &bull; {proj.year}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-mono text-slate-600 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#1A1A1A]" />
                      {proj.location}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold font-display text-[#171717] group-hover:text-[#FF393B] transition-colors mb-1">
                    {proj.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#5F5F5F] leading-relaxed font-sans line-clamp-2">
                    {proj.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <ContactCTA onOpenQuoteModal={onOpenQuoteModal} />
        </div>
      </main>
    </>
  );
}
