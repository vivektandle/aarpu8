import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, Calendar } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { ARTICLES_DATA } from '../../constants/companyData';

export default function JournalPreview() {
  return (
    <section className="py-24 px-6 relative bg-[#050607] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="ARCHITECTURAL JOURNAL"
          title="Latest Insights & Innovations"
          subtitle="Read our latest publications on zero-energy buildings, magnetic glass door actuators and minimal frame aesthetics."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES_DATA.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-3xl overflow-hidden border border-white/10 group flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-amber-300 border border-amber-400/30">
                  {article.category}
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-4 text-[10px] font-mono text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-amber-400" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-400" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-display text-white group-hover:text-amber-300 transition-colors">
                  {article.title}
                </h3>

                <p className="text-xs text-gray-300 leading-relaxed font-sans line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="pt-3 border-t border-white/10 flex justify-between items-center text-xs font-mono font-bold text-amber-400">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
