import React from 'react';
import { motion } from 'framer-motion';
import { CORE_VALUES } from '../../constants/companyData';

export default function WhyAarpu() {
  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 relative bg-white border-t border-[#E2E2E2] overflow-hidden text-[#171717]">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Custom Header */}
        <div className="text-center space-y-1.5 w-full max-w-5xl mx-auto px-2 sm:px-6">
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-light tracking-tight text-[#171717] leading-tight">
             Designed for Performance
          </h2>
          
        </div>

        {/* 1 Row 4 Columns Grid Format with Gaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CORE_VALUES.map((val, index) => (
            <motion.div
              key={val.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden border border-black/10 hover:border-[#FF393B] p-5 sm:p-6 transition-all duration-300 transform hover:-translate-y-1 shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-xl sm:text-2xl font-mono font-bold text-[#FF393B] bg-[#F7F7F7] px-3 py-1 rounded-xl border border-[#E2E2E2] group-hover:border-[#FF393B]/40 transition-colors shadow-2xs">
                    {val.number}
                  </span>
                </div>

                <div className="pt-1">
                  <h3 className="text-xs sm:text-sm md:text-[15px] font-bold font-display text-[#171717] group-hover:text-[#FF393B] transition-colors mb-1.5">
                    {val.title}
                  </h3>
                  {val.points ? (
                    <ul className="space-y-1.5 text-xs sm:text-[13px] text-[#5F5F5F] leading-relaxed font-sans text-justify">
                      {val.points.map((pt, pIdx) => (
                        <li key={pIdx} className="leading-relaxed">
                          <span className="text-[#171717] font-medium">• {pt.subtitle}: </span>
                          <span>{pt.text}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs sm:text-[13px] text-[#5F5F5F] leading-relaxed font-sans whitespace-pre-line text-justify">
                      {val.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
