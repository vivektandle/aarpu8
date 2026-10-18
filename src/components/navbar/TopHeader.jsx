import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
];

export function TopHeader({ onOpenQuoteModal, bgColor, className = '' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(true);
  const containerRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close mobile dropdown on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Determine if background is black/dark or white/light
  useEffect(() => {
    const evaluateBackground = () => {
      // 1. Explicit prop check
      if (bgColor === 'black' || bgColor === 'dark') {
        setIsDarkBg(true);
        return;
      }
      if (bgColor === 'white' || bgColor === 'light') {
        setIsDarkBg(false);
        return;
      }

      const el = containerRef.current;
      if (el) {
        // 2. Class-based check on container
        const classes = (el.className || '') + ' ' + className;
        if (
          classes.includes('bg-white') ||
          classes.includes('bg-[#fff') ||
          classes.includes('bg-[#FFF')
        ) {
          setIsDarkBg(false);
          return;
        }
        if (
          classes.includes('bg-black') ||
          classes.includes('bg-[#000') ||
          classes.includes('bg-[#111') ||
          classes.includes('bg-neutral-900') ||
          classes.includes('bg-slate-900')
        ) {
          setIsDarkBg(true);
          return;
        }

        // 3. Computed style check
        const computedBg = window.getComputedStyle(el).backgroundColor;
        if (computedBg && computedBg !== 'transparent' && !computedBg.startsWith('rgba(0, 0, 0, 0)')) {
          const match = computedBg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
          if (match) {
            const r = parseInt(match[1], 10);
            const g = parseInt(match[2], 10);
            const b = parseInt(match[3], 10);
            const a = match[4] !== undefined ? parseFloat(match[4]) : 1;
            if (a >= 0.25) {
              const brightness = (r * 299 + g * 587 + b * 114) / 1000;
              setIsDarkBg(brightness < 128);
              return;
            }
          }
        }
      }

      // 4. Transparent navbar fallback:
      // At top of page over dark hero slider -> isDarkBg is true (text white).
      // Scrolled down over light/white body content -> isDarkBg is false (text black).
      const scrollY = window.scrollY || window.pageYOffset || 0;
      setIsDarkBg(scrollY < 80);
    };

    evaluateBackground();
    window.addEventListener('scroll', evaluateBackground, { passive: true });
    window.addEventListener('resize', evaluateBackground, { passive: true });

    let observer;
    if (containerRef.current && window.MutationObserver) {
      observer = new MutationObserver(evaluateBackground);
      observer.observe(containerRef.current, { attributes: true, attributeFilter: ['class', 'style'] });
    }

    return () => {
      window.removeEventListener('scroll', evaluateBackground);
      window.removeEventListener('resize', evaluateBackground);
      if (observer) observer.disconnect();
    };
  }, [bgColor, className, location.pathname]);

  // Determine dynamic background class for container - No border color applied
  const containerBgClass = bgColor === 'white'
    ? 'bg-white/90 shadow-[0_8px_32px_rgba(0,0,0,0.08)]'
    : bgColor === 'black'
    ? 'bg-black/90 shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
    : 'bg-transparent shadow-[0_8px_32px_rgba(0,0,0,0.06)]';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full pt-1.5 sm:pt-2.5 px-3 sm:px-4 pointer-events-none">
      {/* Whole Header Container - Little backdrop blur, no border color, adaptive text color */}
      <div
        ref={containerRef}
        className={`flex items-center justify-between px-4 sm:px-6 md:px-8 py-0.5 sm:py-1 ${containerBgClass} ${className} backdrop-blur-sm rounded-full w-full max-w-7xl relative z-10 pointer-events-auto transition-colors duration-300 border-none`}
        style={{ backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
      >
        {/* Left: Aarpu Logo */}
        <div className="flex items-center">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center group py-0.5 shrink-0" aria-label="Aarpu Home">
              <img
                src="/aarpu-logo.png"
                alt="Aarpu Architectural Aluminium"
                className="h-[54px] sm:h-[66px] md:h-[76px] lg:h-[82px] w-auto object-contain block"
              />
            </Link>
          </motion.div>
        </div>

        {/* Middle: Desktop Navigation Links - High brightness and enhanced contrast */}
        <nav className="hidden lg:flex items-center space-x-4 lg:space-x-8 overflow-x-auto no-scrollbar scrollbar-none py-1 shrink min-w-0">
          {NAV_LINKS.map((item) => {
            const isActive =
              location.pathname === item.path ||
              (item.path !== '/' && location.pathname.startsWith(item.path));

            // Dynamic text color based on background without text shadows
            const textColorClass = isDarkBg
              ? isActive
                ? 'text-[#FF393B] font-bold'
                : 'text-white font-semibold hover:text-[#FF393B]'
              : isActive
                ? 'text-[#FF393B] font-bold'
                : 'text-neutral-950 font-bold hover:text-[#FF393B]';

            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="shrink-0"
              >
                <NavLink
                  to={item.path}
                  className={`text-[14.5px] tracking-wide transition-all font-semibold relative py-1 whitespace-nowrap block ${textColorClass}`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeTopNavIndicator"
                      className="absolute left-0 right-0 -bottom-1 h-0.5 bg-[#FF393B] shadow-[0_0_8px_rgba(255,57,59,0.8)] rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </NavLink>
              </motion.div>
            );
          })}
        </nav>

        {/* Right: Enquiry Button */}
        <div className="hidden lg:block shrink-0">
          <button
            type="button"
            onClick={onOpenQuoteModal}
            className="inline-flex items-center justify-center px-[21px] py-[8.5px] text-[12.25px] font-display font-bold uppercase tracking-wider text-white bg-[#FF393B] rounded-full cursor-pointer shadow-sm whitespace-nowrap hover:bg-[#e02e30] transition-colors"
          >
            <span>Enquiry</span>
          </button>
        </div>

        {/* Mobile & Tablet Menu Button */}
        <motion.button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className={`lg:hidden flex items-center justify-center p-2 rounded-full transition-colors shrink-0 ${
            isDarkBg
              ? 'text-white hover:bg-white/10'
              : 'text-neutral-950 hover:bg-black/10'
          }`}
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? (
            <X className={`h-6 w-6 ${isDarkBg ? 'text-white' : 'text-neutral-950'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isDarkBg ? 'text-white' : 'text-neutral-950'}`} />
          )}
        </motion.button>
      </div>

      {/* Mobile & Tablet View: Menu Dropdown Bar designed in the same design as laptop view */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Click-outside backdrop */}
            <motion.div
              key="topheader-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/35 backdrop-blur-[2px] z-40 pointer-events-auto lg:hidden"
              onClick={toggleMenu}
              aria-label="Close menu backdrop"
            />

            {/* Dropdown Bar: ONLY blurred white background, same design as laptop view, no border */}
            <motion.div
              key="topheader-dropdown-bar"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed top-[66px] sm:top-[78px] md:top-[88px] left-3 right-3 sm:left-6 sm:right-6 max-w-5xl mx-auto z-50 pointer-events-auto bg-white/95 text-neutral-950 backdrop-blur-md rounded-2xl sm:rounded-full px-4 sm:px-6 py-3 sm:py-3.5 border-none shadow-[0_16px_40px_rgba(0,0,0,0.16)] lg:hidden"
              style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">
                {/* Nav Links in same layout & bright styling on blurred white background */}
                <nav className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 md:gap-4 w-full sm:w-auto">
                  {NAV_LINKS.map((item) => {
                    const isActive =
                      location.pathname === item.path ||
                      (item.path !== '/' && location.pathname.startsWith(item.path));
                    return (
                      <NavLink
                        key={item.name}
                        to={item.path}
                        onClick={toggleMenu}
                        className={`text-[14px] sm:text-[14.5px] tracking-wide font-semibold px-3.5 py-1.5 rounded-full transition-all relative ${
                          isActive
                            ? 'text-[#FF393B] font-bold bg-[#FF393B]/10 filter brightness-110'
                            : 'text-neutral-900 font-semibold hover:text-[#FF393B] hover:bg-neutral-100/80'
                        }`}
                      >
                        {item.name}
                        {isActive && (
                          <span className="block mx-auto mt-0.5 h-0.5 w-4 bg-[#FF393B] shadow-[0_0_6px_rgba(255,57,59,0.8)] rounded-full" />
                        )}
                      </NavLink>
                    );
                  })}
                </nav>

                {/* Enquiry CTA Button matching laptop view */}
                <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-center pt-2 sm:pt-0 border-t sm:border-t-0 border-neutral-200">
                  <button
                    type="button"
                    onClick={() => {
                      toggleMenu();
                      onOpenQuoteModal?.();
                    }}
                    className="inline-flex items-center justify-center px-[22px] py-[8.5px] text-[12.25px] font-display font-bold uppercase tracking-wider text-white bg-[#FF393B] rounded-full cursor-pointer shadow-sm hover:bg-[#e02e30] transition-colors"
                  >
                    <span>Enquiry</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default TopHeader;
