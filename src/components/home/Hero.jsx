import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

export const HERO_SLIDES = [
  {
    id: 1,
    image: '/home-slider1.jpeg',
    line1: 'Innovative Designs',
    line2: 'Modern Aesthetics',
    alt: 'Aarpu innovative minimal glass sliding systems and modern architectural aesthetics',
    position: 'object-center',
  },
  {
    id: 2,
    image: '/home-slider2.jpeg',
    line1: 'Architectural Purity',
    line2: 'Limitless Horizons',
    alt: 'Expansive minimal aluminium profiles creating seamless transitions to outdoor views',
    position: 'object-center',
  },
  {
    id: 3,
    image: '/home-slider3.jpeg',
    line1: 'Minimalist Movement',
    line2: 'Invisible Interlocks',
    alt: 'Uncompromising quality and flawless panoramic architectural aluminium installations',
    position: 'object-center',
  },
];

export const ABOUT_SLIDES = [
  {
    id: 1,
    image: '/images/Final_Images/image14.jpeg',
    titleWhite: 'About',
    titleRed: 'us',
    alt: 'About us - Aarpu architectural aluminium systems',
    position: 'object-center',
  },
];

export const PRODUCTS_SLIDES = [
  {
    id: 1,
    image: '/images/Final_Images/image10.jpeg',
    titleWhite: 'Our',
    titleRed: 'Products',
    alt: 'Our Products - Aarpu minimal architectural aluminium systems',
    position: 'object-center',
  },
];

export const PORTFOLIO_SLIDES = [
  {
    id: 1,
    image: '/images/Final_Images/image7.jpeg',
    titleWhite: 'Masterpieces in',
    titleRed: 'Aluminium',
    alt: 'Masterpieces in Aluminium - Aarpu luxury architectural projects',
    position: 'object-center',
  },
];

export const CONTACT_SLIDES = [
  {
    id: 1,
    image: '/images/Final_Images/image13.jpeg',
    titleWhite: 'Contact',
    titleRed: 'us',
    alt: 'Contact us - Aarpu minimal architectural aluminium systems',
    position: 'object-center',
  },
];

export default function Hero({ onOpenQuoteModal, slides = HERO_SLIDES, showArrows = true, isHome = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = useCallback(() => {
    if (slides.length <= 1) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    if (slides.length <= 1) return;
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Auto-advance every 3 seconds only if more than 1 slide
  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, [nextSlide, slides.length]);

  const currentSlide = slides[currentIndex] || slides[0];
  const line1 = currentSlide.line1 || currentSlide.titlePrefix;
  const line2 = currentSlide.line2 || currentSlide.titleSuffix;

  const sectionRef = useRef(null);

  const scrollToContent = () => {
    if (sectionRef.current) {
      const bottom = sectionRef.current.getBoundingClientRect().bottom + window.scrollY;
      window.scrollTo({
        top: bottom,
        behavior: 'smooth',
      });
    } else {
      window.scrollBy({
        top: window.innerHeight * 0.85,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section ref={sectionRef} className="w-full h-screen min-h-[580px] sm:min-h-[640px] relative overflow-hidden bg-neutral-900 border-b border-[#E2E2E2]">
      {/* Full-Screen Slider Container */}
      <div className="w-full h-full relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide.id || currentIndex}
            custom={direction}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Background Full Width Image or Video */}
            {currentSlide.video ? (
              <video
                src={currentSlide.video}
                playsInline
                autoPlay
                muted
                loop
                controlsList="nodownload"
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
                className={`w-full h-full object-cover ${currentSlide.position || 'object-center'}`}
              />
            ) : (
              <img
                src={currentSlide.image}
                alt={currentSlide.alt}
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
                className={`w-full h-full object-cover ${currentSlide.position || 'object-center'}`}
                loading={currentIndex === 0 ? 'eager' : 'lazy'}
                referrerPolicy="no-referrer"
              />
            )}

            {/* 3% overlay on all slider images and videos */}
            <div className="absolute inset-0 bg-black/[0.03] pointer-events-none" />

            {/* Headline Text:
                - On Home page (or slides without titleWhite): Bold, increased font size, spanning from left to right across the screen with text aligned left.
                - On other pages (About, Products, Portfolio, Contact): Original typography.
            */}
            {(isHome || slides === HERO_SLIDES || !currentSlide.titleWhite) ? (
              <div className="absolute top-[42%] sm:top-1/2 -translate-y-1/2 left-0 right-0 px-5 sm:px-10 md:px-14 lg:px-20 xl:px-24 2xl:px-28 z-10 pointer-events-none">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-left"
                >
                  <h1
                    style={{ fontWeight: 900 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[86px] 2xl:text-[100px] font-display font-black tracking-tight leading-[1.05] sm:leading-[1.02] drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)] filter brightness-125 contrast-105 text-left text-white"
                  >
                    <span style={{ fontWeight: 900 }} className="block text-white slide-text-white font-black whitespace-normal sm:whitespace-nowrap">{line1}</span>
                    <span style={{ fontWeight: 900 }} className="block text-white slide-text-white font-black whitespace-normal sm:whitespace-nowrap">{line2}</span>
                  </h1>
                </motion.div>
              </div>
            ) : (
              <div className="absolute top-[40%] sm:top-[40%] md:top-[42%] lg:top-1/2 -translate-y-1/2 left-0 right-0 px-4 sm:px-6 md:px-8 lg:px-0 lg:left-[40%] xl:left-[38%] lg:right-10 z-10">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center lg:text-left"
                >
                  <h1 className="text-[50px] sm:text-4xl md:text-5xl lg:text-[58px] xl:text-[68px] 2xl:text-[80px] font-display font-bold tracking-tight leading-[1.02] sm:leading-[1.1] drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)] filter brightness-125 contrast-105 text-center lg:text-left text-white">
                    <span className="block sm:inline text-white slide-text-white">{currentSlide.titleWhite}</span>{' '}
                    <span className="block sm:inline text-white slide-text-white">{currentSlide.titleRed}</span>
                  </h1>
                </motion.div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Previous / Next Navigation Arrows (only when multiple slides and showArrows is enabled) */}
        {showArrows && slides.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/30 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-xs transition-all duration-200 border border-white/20 hover:scale-105 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/30 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-xs transition-all duration-200 border border-white/20 hover:scale-105 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </>
        )}

        {/* Bottom Controls: Indicators + Scroll Down Toggle */}
        <div className="absolute bottom-2.5 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 sm:gap-2">
          {/* Slide Indicator Dots (when multiple slides) */}
          {slides.length > 1 && (
            <div className="flex items-center gap-2">
              {slides.map((slide, idx) => (
                <button
                  key={slide.id || idx}
                  type="button"
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full h-1.5 cursor-pointer ${
                    currentIndex === idx
                      ? 'w-6 bg-white shadow-sm'
                      : 'w-2 bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Scroll Down Toggle Button with "scroll down" Text */}
          <button
            type="button"
            onClick={scrollToContent}
            aria-label="Scroll down to content"
            className="group flex flex-col items-center justify-center text-white/85 hover:text-white transition-colors cursor-pointer py-0.5 px-3 focus:outline-none"
          >
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
              className="flex flex-col items-center gap-0.5"
            >
              <span className="inline-block text-[18px] sm:text-[20px] lowercase font-sans tracking-wide text-white/90 group-hover:text-[#FF393B] transition-colors drop-shadow-md select-none font-medium">
                scroll down
              </span>
              <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow-md group-hover:text-[#FF393B] transition-colors -mt-0.5" />
            </motion.div>
          </button>
        </div>
      </div>
    </section>
  );
}
