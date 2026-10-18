import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ProgressBar() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollable = documentHeight - windowHeight;

      if (scrollable > 0) {
        setScrollPercent((scrollTop / scrollable) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[5px] sm:h-[6px] bg-[#E2E2E2]/30 z-50 pointer-events-none">
      <motion.div
        className="h-full bg-[#FF393B] shadow-[0_1px_8px_rgba(255,57,59,0.5)]"
        style={{ width: `${scrollPercent}%` }}
      />
    </div>
  );
}
