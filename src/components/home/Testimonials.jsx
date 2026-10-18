import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { TESTIMONIALS_DATA } from '../../constants/companyData';

export default function Testimonials() {
  return (
    <section className="py-24 px-6 relative bg-[#08090a] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="CLIENT & ARCHITECT TESTIMONIALS"
          title="Endorsed by Visionary Architects"
          subtitle="Discover why leading global architectural studios choose Aarpu for their flagship luxury projects."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-amber-400/40 transition-colors relative group"
            >
              <Quote className="w-10 h-10 text-amber-400/30 mb-4 group-hover:text-amber-400/60 transition-colors" />

              <div className="space-y-4">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-gray-200 leading-relaxed font-sans italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-12 h-12 rounded-full object-cover border border-white/20"
                />
                <div>
                  <h4 className="text-sm font-bold text-white font-display">{item.author}</h4>
                  <p className="text-xs text-gray-400 font-mono">{item.role}, {item.company}</p>
                  <p className="text-[10px] text-amber-400/80 font-mono">{item.project}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
