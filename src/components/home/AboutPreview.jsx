import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Wrench, FileSpreadsheet, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPreview() {
  const services = [
    {
      id: 'project-consulting',
      title: 'PROJECT CONSULTING',
      description: 'We give shape to your products by finding the best solution for your projects.',
      icon: Compass,
      tag: 'DESIGN & CONCEPT',
    },
    {
      id: 'technical-support',
      title: 'TECHNICAL SUPPORT',
      description: 'We assist you throughout the design, procurement and implementation phases to ensure that the most stringent technical standards and project specifications are fully met.',
      icon: Wrench,
      tag: 'PRECISION SPECIFICATIONS',
    },
    {
      id: 'offer-evaluation',
      title: 'OFFER EVALUATION',
      description: 'We assist in delivering the most competitive offers for your project, ensuring you select the ideal solution that fits your requirements and budget.',
      icon: FileSpreadsheet,
      tag: 'COST OPTIMIZATION',
    },
    {
      id: 'work-with-us',
      title: 'WORK WITH US',
      description: '“aarpu” is always eager to embrace new professional talent. If you are driven and share our commitment to excellence, feel free to explore our available positions or submit an open application to join our team.',
      icon: Users,
      tag: 'CAREERS & TALENT',
    },
  ];

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 relative bg-white border-t border-[#E2E2E2] text-[#171717] overflow-hidden">
      {/* Background Architectural Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF393B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light tracking-tight text-[#171717] leading-tight">
            What can we help you in<span className="question-mark-standard">?</span>
          </h2>
        </div>

        {/* Services Grid (4 Columns 1 Row Grid Format with Gaps) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl overflow-hidden border border-black/10 hover:border-[#FF393B] p-6 sm:p-7 transition-all duration-300 transform hover:-translate-y-1 shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-[#F7F7F7] border border-[#E2E2E2] group-hover:border-[#FF393B] group-hover:bg-[#FF393B] flex items-center justify-center transition-all duration-300 shadow-2xs">
                      <Icon className="w-5 h-5 text-[#FF393B] group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold font-display text-[#171717] group-hover:text-[#FF393B] transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-[#5F5F5F] font-sans leading-relaxed text-justify">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


