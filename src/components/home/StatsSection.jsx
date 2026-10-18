import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { COMPANY_STATS } from '../../constants/companyData';

export default function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 bg-[#F7F7F7] border-t border-[#E2E2E2] relative text-[#171717] overflow-hidden">
      <div className="w-full max-w-[96%] xl:max-w-[98%] 2xl:max-w-[1780px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {COMPANY_STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-white p-6 sm:p-7 md:p-8 rounded-2xl border border-[#E2E2E2] text-center space-y-2.5 group hover:border-[#FF393B]/40 transition-colors shadow-xs"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-[#171717] tracking-tight">
                {inView ? (
                  <CountUp end={stat.value} duration={2} separator="," />
                ) : (
                  '0'
                )}
                <span className="text-[#FF393B] text-xl sm:text-2xl lg:text-3xl font-sans ml-1">
                  {stat.suffix}
                </span>
              </div>
              <h4 className="text-[11px] sm:text-xs md:text-sm font-mono font-bold tracking-wider text-[#171717] uppercase pt-1">
                {stat.label}
              </h4>
              <p className="text-xs sm:text-sm font-sans text-[#5F5F5F] leading-relaxed">
                {stat.subtext}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

