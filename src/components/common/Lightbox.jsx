import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ isOpen, onClose, images = [], currentIndex = 0, onIndexChange }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (images.length > 1) {
        if (e.key === 'ArrowLeft') {
          onIndexChange((currentIndex - 1 + images.length) % images.length);
        }
        if (e.key === 'ArrowRight') {
          onIndexChange((currentIndex + 1) % images.length);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onIndexChange]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  const handlePrev = (e) => {
    e.stopPropagation();
    onIndexChange((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    onIndexChange((currentIndex + 1) % images.length);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[95] bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close image viewer"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-[#171717] shadow-lg flex items-center justify-center transition-all z-20 cursor-pointer border border-black/10"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Prev / Next navigation for multi-image lightbox */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              aria-label="Previous image"
              className="absolute left-3 sm:left-6 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-[#171717] shadow-lg flex items-center justify-center transition-all z-20 cursor-pointer border border-black/10"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next image"
              className="absolute right-3 sm:right-6 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-[#171717] shadow-lg flex items-center justify-center transition-all z-20 cursor-pointer border border-black/10"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </>
        )}

        {/* Image Card Container: smaller size, clean framing, no text on image */}
        <motion.div
          key={currentIndex}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="max-w-xl sm:max-w-2xl md:max-w-3xl max-h-[70vh] rounded-2xl overflow-hidden bg-white p-3 sm:p-5 shadow-2xl border border-black/10 relative flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={typeof currentImage === 'string' ? currentImage : currentImage?.src || currentImage}
            alt="Technical CAD Drawing"
            className="w-auto h-auto max-h-[55vh] sm:max-h-[60vh] max-w-full object-contain rounded-lg"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
