import React from 'react';
import { motion } from 'framer-motion';

const CORE_PRINCIPLES = [
  {
    step: '01',
    title: 'Minimalist Design',
    desc: 'We believe in creating systems where less becomes more. Refined profiles, clean sightlines and thoughtful detailing allow architecture to achieve maximum visual impact with minimal visual interruption.'
  },
  {
    step: '02',
    title: 'Sustainability',
    desc: 'We design with long-term performance in mind. Efficient material usage, durable components, repairability and responsible system development contribute to more sustainable architectural solutions.'
  },
  {
    step: '03',
    title: 'Innovation',
    desc: 'We continuously explore new technologies, engineering concepts, components and manufacturing possibilities to develop systems that respond to evolving architectural demands.'
  },
  {
    step: '04',
    title: 'Quality',
    desc: 'Quality is integrated into every stage of development—from pre-engineering and profile design to component selection, prototyping, validation and final system documentation.'
  },
  {
    step: '05',
    title: 'Service',
    desc: 'Our involvement extends beyond system development. We work closely with architects, fabricators, vendors and project teams to provide technical guidance, coordination and ongoing support throughout implementation.'
  }
];

export default function ProcessTimeline() {
  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 relative bg-white border-t border-[#E2E2E2] overflow-hidden text-[#171717]">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-1.5 w-full max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light tracking-tight text-[#171717] leading-tight">
            Our Core Principles
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 relative">
          {CORE_PRINCIPLES.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative bg-white rounded-2xl overflow-hidden border border-black/10 hover:border-[#FF393B] p-4 sm:p-5 transition-all duration-300 transform hover:-translate-y-1 shadow-xs hover:shadow-md flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-[#F7F7F7] border border-[#E2E2E2] group-hover:border-[#FF393B]/40 flex items-center justify-center text-[#FF393B] font-mono font-bold text-xs mb-3 transition-colors">
                  {item.step}
                </div>
                <h3 className="text-sm sm:text-base font-bold font-display text-[#171717] group-hover:text-[#FF393B] transition-colors mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-[#5F5F5F] leading-relaxed font-sans text-justify">
                  {item.desc}
                </p>
              </div>

              <div className="mt-3.5 pt-2.5 border-t border-[#F0F0F0] flex justify-between items-center text-[9px] font-mono text-[#8A8A8A]">
                <span className="text-[#FF393B] font-bold">PRINCIPLE {item.step}/05</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
