import React from 'react';
import { motion } from 'framer-motion';

export default function SectionTitle({
  eyebrow,
  number,
  title,
  subtitle,
  centered = false,
  className = ''
}) {
  return (
    <div className={`mb-10 md:mb-14 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {(eyebrow || number) && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`flex items-center gap-2.5 mb-3 ${centered ? 'justify-center' : 'justify-start'}`}
        >
          <span className="w-2.5 h-2.5 bg-[#FF393B] shrink-0" />
          {number && (
            <span className="font-mono text-xs font-bold text-[#FF393B] tracking-widest">
              {number}
            </span>
          )}
          {eyebrow && (
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#5F5F5F]">
              {eyebrow}
            </span>
          )}
        </motion.div>
      )}

      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-display font-light tracking-tight text-[#171717] mb-3 leading-[1.15]"
        >
          {title}
        </motion.h2>
      )}

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#5F5F5F] text-sm md:text-base leading-relaxed font-normal"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
