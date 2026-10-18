import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function MagneticButton({
  children,
  onClick,
  className = '',
  href,
  variant = 'primary',
  ...props
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.25, y: middleY * 0.25 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all cursor-pointer rounded-full overflow-hidden text-xs md:text-sm tracking-widest uppercase px-8 py-3.5 group";
  
  const variants = {
    primary: "bg-[#1A1A1A] text-white hover:bg-black font-semibold shadow-md",
    secondary: "border border-black/15 text-[#1A1A1A] hover:bg-black hover:text-white bg-white/60 backdrop-blur-md",
    gold: "bg-[#1A1A1A] text-white hover:bg-black font-semibold shadow-md",
    outline: "border border-black/20 text-[#1A1A1A] hover:bg-black hover:text-white"
  };

  const { x, y } = position;

  const content = (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 350, damping: 20, mass: 0.2 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
}
